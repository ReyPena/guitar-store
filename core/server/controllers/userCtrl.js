var user = require("../models/userModel")

module.exports = {
  createUser: function (req, res, next) {
    console.log("here created", req.body);
    user.create(req.body, function (err, User) {
      if(err){
        return res.status(500).send(err);
      }
      res.send(User);
    });
  },
  getUser: function (req, res, next) {
    user.findById(req.params.id).then(function (err, user) {
      if(err){
        return res.status(500).send(err);
      }
      res.send(user);
    })
  }
  // deleteUser: function (req, res, next) {
  //   // body...
  // }

};
