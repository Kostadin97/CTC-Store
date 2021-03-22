const express = require("express");
const router = express.Router();
const Product = require("../../model/Product");
const jwt = require("jsonwebtoken");
const User = require("../../model/User");

router.get("/", (req, res) => {
  Product.find({}).then((products) => {
    res.status(200).json(products);
  });
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
    return res.status(400).json({
      msg: "Please fill all the inputs.",
    });
  }

  const newProduct = new Product({
    title,
    description,
    imageUrl,
    price,
    category,
  });

  User.findById(userId).then((data) => {
    data.myProducts.push(newProduct);
    data.save().then(() => {
      console.log(data.myProducts);
      return res.status(201).json({
        success: true,
        msg: "Product Created Successfully.",
      });
    });
  });
});

module.exports = router;
