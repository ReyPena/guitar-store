var express = require("express")
  , cors = require("cors")
  , bodyParser = require("body-parser")
  , mongoose = require("mongoose")
  , passporConfig = require("./service/passport")
  , mongoUri = "mongodb://localhost:27017/guitar-store"
  , app = express()
  , passport = require("passport")
  , expressSession = require("express-session")
  , port = 8080;

// this are the controllers that are require
var userCtrl = require("./controllers/userCtrl")
  , productsCtrl = require("./controllers/productsCtrl")
  , authCtrl = require("./controllers/authCtrl");

app.use(bodyParser.json());
app.use(cors());
mongoose.connect(mongoUri);
app.use(express.static("./public"));
app.use(expressSession({secret: "nySecret"}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connection.once("open", function () {
  console.log("connected" + mongoUri);
});

// user actions
app.post("/api/user", userCtrl.createUser);
app.get("/api/user", userCtrl.getUser);

// producs actions
app.post("/api/producs", authCtrl.requireSudoRole,  productsCtrl.createProduct);
app.get("/api/producs", authCtrl.requireSudoRole, productsCtrl.getProduct);

// auth endpoints
// this is the local auth
app.post("/auth/local", passport.authenticate("local"), authCtrl.loginSuccessRouter);
app.get("/auth/login/currentUser", authCtrl.currentUser);
app.get("/auth/logout", authCtrl.logout);
// this is for facebook auth



app.listen(port, function () {
  console.log("listen " + port);
});

// cd ~` `mkdir data` `mongod --dbpath=/home/rey/data this is my command
