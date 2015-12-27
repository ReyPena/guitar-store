var mongoose = require("mongoose")
  , bcrypt = require("bcryptjs");

var User = new mongoose.Schema({
  email: {type: String},
  pasword:{type: String},
  name: {
    firstName: {type: String},
    lastName: {type: String}
  },
  phoneNum: {type: Number},
  age: {type: Number},
  createdOn: {type: Date},
  permissions: {
    isSudo: {type: Boolean, required: true, default: false},
    isModerator: {type: Boolean, required: true, default: false}
  }
});

User.pre("save", function(next){
  var user = this;

  if(!user.isModified("pasword")){
    return next();
  }

  var salt = bcrypt.genSaltSync(11);
  var hash = bcrypt.hashSync(user.pasword, salt);
  user.pasword = hash;
  return next(null, user);
});

User.methods.verifyPassword = function (reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.pasword);
};

module.exports = mongoose.model("User", User);
