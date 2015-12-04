var mongoose = require("mongoose"),
  bcrypt = require("bcryptjs");

var schema = new mongoose.Schema({
  local: {
    _id: {type:mongoose.Schema.Types.ObjectId},
    name: {
      fristName: {type: String, require: true},
      lastName: {type: String, require:true}
    },
    username:{type: String, require:true},
    email:{type: String, require:true},
    age:{type: Number},
    sudo:{type: Boolean, default: false}
  },
  google: {},
  facebook: {},
  twiter: {}
});

schema.methods.verifyPassword = function (reqBodyPassword) {
  var user = this.local;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model("User", schema);
