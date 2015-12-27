var passport = require("passport")
  , LocalStrategy = require("passport-local").Strategy
  , User = require("../../models/userModel");

passport.use(new LocalStrategy(function (userEmail, pasword, done) {
    User.findOne({email : userEmail})
        .exec(function (err, user) {
          if (err) {
            return done(null, false, {message: "Invalid Email"});
          }
          else if (user) {
            if (user.verifyPassword(pasword)) {
              return done(null, user);
            }else {
              return done(null, false, {message: "Invalid Password"});
            }
          }
          else {
            return done(null, false, {message: 'User not found'});
          }
        });
  }));

  //   else if (!user) {
  //     return done(null, false);
  //   } else if (user.verifyPassword(pasword)) {
  //     return done(null, user);
  //   }

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (_id, done) {
  User.findById(_id, function (err, user) {
    done(err, user);
  });
});
  //   return done(null, false);


// module.exports = passport;
