var User = require("../models/userModel");

module.exports = {
  loginSuccessRouter: function (req, res) {
    if(req.user.permissions.isSudo){
      console.log("you are sudo");
      res.redirect("/auth/login/currentUser");
    } else if(req.user.permissions.isModerator){
      console.log("you are sudo");
      res.redirect("/auth/login/currentUser");
    }else {
      res.redirect("/auth/login/currentUser");
    }
  },
  currentUser: function  (req, res) {
    if(req.isAuthicated()){
      res.json(req.user);
    } else {
      res.send(null);
    }
  },

  logout: function (req, res) {
    req.logout();
    res.send();
  },

  // this are the permissions
  isSudo: function (req, res, next) {
    if (req.isAuthicated() && req.user.permissions.isSudo) {
      next();
    } else {
      res.status(401).json("Not an Admin");
    }
  },
  isModerator: function (req, res, next) {
    if(req.isAuthicated() && req.user.permissions.isModerator){
      next();
    } else {
      res.status(401).json("Not an Moderator");
    }
  }
};
