var mongoose = require("mongoose");
  // bcrypt = require("bcryptjs");

var schema = new mongoose.Schema({
  email:{type: String, required:false},
  password: {type:String, required:false},
  name: {
    firstName: {type: String, required: false},
    lastName: {type: String, required:false}
  },
  username:{type: String, required:false},
  age:{type: Number},
  sudo:{type: Boolean, default: false}
  // google: {},
  // facebook: {},
  // twiter: {}
});

// schema.methods.verifyPassword = function (reqBodyPassword) {
//   var user = this.local;
//   return bcrypt.compareSync(reqBodyPassword, user.password);
// };

module.exports = mongoose.model("User", schema);
