var user = require("../models/userModel");

module.exports = {
  createUser: function (req, res, next) {
    console.log("here created", req.body);
    new User( req.body ).save(function( err, user ) {
			if (err) {
				res.status(500).send( err );
			} else {
				res.send( user );
			}
		});
  },
  getUser: function (req, res, next) {
    user.findById(req.params.id).then(function (err, user) {
      if(err){
        return res.status(500).send(err);
      }
      res.send(user);
    });
  },
  deleteUser: function( req, res ) {
		User.findByIdAndRemove( req.query.id, function( err, user ) {
			if (err) {
				return res.status(500).send( err );
			} else {
				res.send(user);
			}
		});
	}
};
