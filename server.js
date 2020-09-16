const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const users = require("./routes/api/users");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

const dbKeys = "mongodb://localhost/login";

mongoose
  .connect(dbKeys, { useNewUrlParser: true })
  .then(() => console.log("mongodb connected successfully"))
  .catch((err) => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
//app.use(app.router);
//users.initialize(app);

const port = 5000;
app.listen(port, () => console.log("server is up and running"));
