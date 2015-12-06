var express = require("express")
  , cors = require("cors")
  , bodyParser = require("body-parser")
  , mongoose = require("mongoose")
  , passport = require("./service/passport")
  , mongoUri = "mongodb://localhost:27017/guitar-store"
  , app = express()
  , port = 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("../client/public"));

mongoose.connect(mongoUri);
mongoose.connection.once("open", function () {
  console.log("connected" + mongoUri);
});


app.listen(port, function () {
  console.log("listen " + port);
});
