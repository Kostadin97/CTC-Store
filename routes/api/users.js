const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../../config/keys").secret;
const User = require("../../model/User");

router.post("/register", async (req, res) => {
  let { name, username, email, password, confirmPassword } = req.body;

  try {
    if (
      name === "" ||
      username === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return res.status(404).json({
        msg: "Please fill all the inputs.",
        success: false,
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        msg: "Password do not match.",
        success: false,
      });
    }

    await User.findOne({ username: username }).then((user) => {
      if (user) {
        return res.status(400).json({
          msg: "Username is already taken.",
          success: false,
        });
      }
    });

    await User.findOne({ email: email }).then((user) => {
      if (user) {
        return res.status(400).json({
          msg: "Email is already registered. Did you forgot your password?",
          success: false,
        });
      }
    });

    let newUser = new User({
      name,
      username,
      password,
      email,
      savedProducts: [],
    });
    await bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(() => {
            return res.status(201).json({
              success: true,
              msg: "User is now registered.",
            });
          })
          .catch((err) => console.log(err));
      });
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "Username is not found",
        success: false,
      });
    }

    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          _id: user._id,
          username: user.username,
          name: user.name,
          email: user.email,
        };

        jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
          res.status(200).json({
            success: true,
            user: user,
            token: `Bearer ${token}`,
            msg: "You are now logged in.",
          });
        });
      } else {
        return res.status(404).json({
          msg: "Incorrect password",
          success: false,
        });
      }
    });
  });
});

router.get("/profile", passport.authenticate("jwt", { session: false })),
  (req, res) => {
    return res.json({
      user: req.user,
    });
  };

module.exports = router;
