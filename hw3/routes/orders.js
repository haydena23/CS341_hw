var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

class order{
  constructor(topping, quantity) {
    this.topping = topping;
    this.quantity = quantity;
  }
}

const Data = new Array(new order("Plain",5), new order("Cherry",5), new order("Chocolate",5));

router.get('/', function(req, res, next) {
  res.json(Data);
});

router.post('/', function(req, res, next) {
  res.json(Data);
});

module.exports = router;
