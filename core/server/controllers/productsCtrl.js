var produc = require("../models/productModel")

module.exports = {
  createProduct: function (req, res, next) {
    new produc (req.body).save(function (err, produc) {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(produc);
    })
  },

  getProduct: function (req, res, next) {
    produc.findById(req.params.id).then(function (err, produc) {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(produc);
    })
  }
  // deleteProduc: function (req, res, next) {
  //   // body...
  // }

};
