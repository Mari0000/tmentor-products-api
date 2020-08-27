const express = require("express");
const Product = require("../models/product");
const productController = require("../controllers/product");
const router = new express.Router();

router.route("/products/search").get(productController.search);

module.exports = router;