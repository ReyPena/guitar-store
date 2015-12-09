var mongoose = require("mongoose")

var products = new mongoose.Schema({
  productName: {type: String, require: true},
  price: {type: Number},
  description: {type: String}
});

module.exports = mongoose.model("Products", products)
