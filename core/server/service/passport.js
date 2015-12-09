var passport = require("passport")
  , localStrategy = require("passport-local").Strategy
// facebookStrategy = require("passport-facebook"),
// twitterStrategy = require("passport-twitter"),
// googleStrategy = require("passport-google"),
  , user = require("../models/userModel");

// passport stuff
passport.serializeUser(function (user, done) {
  done(null, user)
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// this is the local stratrgy
passport.use(new localStrategy(function (username, password, done) {
  user.findOne({username: username}).exec(function (err, login) {
    if (err) {
      return done(null, false, {message: "Invalid Email"});
    } else {
      if(login) {
        if(login.password === password){
          delete login.password;
          return done(null, login);
        } else {
          return done(null, false, {message: "Invalid Password"});
        }
      } else {
        return done(null, false, {message: 'User not found'})
      }
    }
  })
}));
