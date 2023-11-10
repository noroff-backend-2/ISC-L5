var express = require('express');
var router = express.Router();
var db = require("../models");
var OrderService = require('../services/OrderService');
var orderService = new OrderService(db);
var { checkIfAuthorized } = require("./authMiddlewares");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

//Endpoint to display all orders
router.get('/', async function (req, res, next) {
  const userId = req.user.id;
  const orders = await orderService.getAllOrders(userId); 
  res.render('orders', { user: req.user, orders: orders });
});

//Endpoint to display a Order's Details
router.get('/:id', checkIfAuthorized, jsonParser, async function (req, res, next) {
  const orderId = req.params.id;
	const order = await orderService.getOrderDetails(orderId);
	res.render('orderDetails', { user: req.user, order: order });
});

module.exports = router;