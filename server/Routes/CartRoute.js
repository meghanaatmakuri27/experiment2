const express = require("express");
const router = express.Router();
const productModel = require("../Models/CartModel");

router.get("/", async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (err) {
    console.log("error" + err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.post("/add", async (req, res) => {
  const product = new productModel({
    id: req.body.id,
    image: req.body.image,
    name: req.body.name,
    price: req.body.price,
  });
  try {
    const products = await product.save();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
