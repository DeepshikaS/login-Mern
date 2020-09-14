const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

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

const port = 5000;
app.listen(port, () => console.log("server is up and running"));
