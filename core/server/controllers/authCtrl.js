module.exports = {
  logout: function (req, res) {
    req.logout();
    res.send();
  },
  loginSuccessRouter: function (req, res) {
    if(req.user.sudo){
      console.log("you are sudo");
      res.redirect("/#/home");
    } else {
      res.redirect("/#/home");
    }
  },
  currentUser: function  (req, res) {
    if(req.isAuthicated()){
      res.json(req.user);
    } else {
      res.send(null);
    }
  },
  requireSudoRole: function (req, res, next) {
    if (req.isAuthicated() && req.user.sudo) {
      next();
    } else {
      res.status(401).json("Not an Admin")
    }
  }
};
