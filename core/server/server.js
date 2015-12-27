var express = require("express")
  , cors = require("cors")
  , bodyParser = require("body-parser")
  , mongoose = require("mongoose")
  , passport = require("passport")
  , mongoUri = "mongodb://localhost:27017/guitar-store"
  , app = express()
  , expressSession = require("express-session")
  , port = 8080;

// this are the strategies that are require
var passportConfig = require("./service/passport")
  , localAuthCtrl = require("./controllers/localAuthCtrl")
  , userCtrl = require("./controllers/userCtrl");
//   , productsCtrl = require("./controllers/productsCtrl")

app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(cors());
app.use(expressSession({secret: "mySecret", saveUninitialized: true, resave: true}));

app.use(passport.initialize());
app.use(passport.session());

//////////////////////
// user endpoints : //
//////////////////////

app.post("/api/user", userCtrl.createUser);
app.get("/api/user" , userCtrl.getUser);
app.delete("/api/user", userCtrl.deleteUser);


////////////////////////////
// Local auth endpoints : //
////////////////////////////

app.post("/auth/local", localAuthCtrl);
app.post("/auth/", localAuthCtrl);
app.get("/auth/logout", localAuthCtrl.logout);
// app.post("/auth/local", passport.authenticate("local", {
//   successRedirect: "/api/me"
//   // , failureRedirect: "/api/404"
// }));
// this one will create a user
// app.post("/auth/user", authCtrl.userCreate);

mongoose.connect(mongoUri);
mongoose.connection.once("open", function () {
  console.log("connected" + mongoUri);
});

app.listen(port, function () {
  console.log("listen " + port);
});

// cd ~` `mkdir data` `mongod --dbpath=/home/rey/data this is my command
