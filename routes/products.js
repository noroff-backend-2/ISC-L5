var express = require('express');
var router = express.Router();
var db = require("../models");
var ProductService = require('../services/ProductService');
var productService = new ProductService(db);
var { checkCanOrder, isAdmin } = require("./authMiddlewares");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

//Endpoint to display all products
router.get('/', async function (req, res, next) {
  const products = await productService.getAllProducts(); 
  res.render('products', { user: req.user, products: products });
});

//Endpoint to display a Product's Details
router.get('/:id', async function (req, res, next) {
  const productId = req.params.id;
  console.log("***productId parameter: " + productId); 
	const productDetails = await productService.getProductDetails(productId);
	res.render('productDetails', { productDetails: productDetails });
});

module.exports = router;