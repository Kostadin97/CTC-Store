const express = require("express");
const router = express.Router();
const Product = require("../../model/Product");
const jwt = require("jsonwebtoken");
const User = require("../../model/User");

router.get("/myproducts", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "yoursecret");
  const userId = decoded._id;
  Product.find({ creator: userId })
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => console.log(err));
});

router.get("/favourites", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "yoursecret");
  const userId = decoded._id;

  User.findById(userId)
    .then((user) => {
      res.status(200).json(user.savedProducts);
    })
    .catch((err) => console.log(err));
});

router.get("/", (req, res) => {
  Product.find({})
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Product.findById(id).then((product) => {
    return res.status(200).json(product);
  });
});

router.put("/save/:id", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "yoursecret");
  const userId = decoded._id;

  const productId = req.params.id;
  User.findById(userId)
    .then((user) => {
      if (!user.savedProducts.includes(productId)) {
        user.savedProducts.push(productId);
        user.save();
      } else {
        return res.status(400).json({
          success: false,
          msg: "You have already saved that product.",
        });
      }
    })
    .then(() => {
      return res
        .status(200)
        .json({ success: true, msg: "Product Saved Successfully." });
    })
    .catch((err) => {
      return res.status(500).json({
        msg: `Product with id: ${productId} was NOT saved successfully.`,
      });
    });
});

router.post("/upload", (req, res) => {
  const { imageFile } = req.body;
});

router.post("/create", (req, res) => {
  const { title, description, imageUrl, price, category } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "yoursecret");
  const userId = decoded._id;

  if (
    title === "" ||
    description === "" ||
    imageUrl === "" ||
    price === "" ||
    category === ""
  ) {
    return res.status(404).json({
      msg: "Please fill all the inputs.",
      success: false,
    });
  }

  const newProduct = new Product({
    title,
    description,
    imageUrl,
    price,
    category,
    creator: userId,
  });

  newProduct.save().then(() => {
    return res.status(201).json({
      success: true,
      msg: "Post Created Successfully.",
    });
  });
});

router.put("/edit/:id", (req, res) => {
  const { title, description, imageUrl, price, category } = req.body;
  const id = req.params.id;

  if (
    title === "" ||
    description === "" ||
    imageUrl === "" ||
    price === "" ||
    category === ""
  ) {
    return res.status(404).json({
      msg: "Please fill all the inputs.",
    });
  }
  Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          msg: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      } else
        return res.json({
          success: true,
          msg: "Post was updated successfully.",
        });
    })
    .catch((err) => {
      return res.status(500).json({
        msg: `Error updating post with id: ${id}`,
      });
    });
});

router.delete("/delete/:id", (req, res) => {
  // const token = req.headers.authorization.split(" ")[1];
  // const userId = jwt.verify(token, "yoursecret")._id;
  const userId = "606b058b21ceb810e57bffd4";

  const id = req.params.id;

  Product.findByIdAndRemove(id)
    .then(() => {
      User.findById(userId).then((user) => {
        let productsArray = user.savedProducts;
        let currentProductIndex = productsArray.indexOf(
          "60717e383edf7f0852db8da6"
        );
        productsArray.splice(currentProductIndex, 1);
        user.save();
      });
    })
    .then(() => {
      return res.status(200).json({ msg: "Product was deleted successfully." });
    })
    .catch((err) => {
      return res.status(500).json({
        msg: `Error deleting product with id: ${id}`,
      });
    });
});

module.exports = router;
