const bodyParser = require("body-parser");
let express = require("express");
let app = express();
//const msg = "Hello World";
require("dotenv").config();
// Task 1.
//console.log(msg);
// Task 2.
/*app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});*/
// Task 3.
// app.use("/public", express.static(__dirname + "/public"));
// Task 4.
/*app.get("/json", function (req, res) {
  res.json({ message: "Hello json" });
});*/
//Task 5.
/*app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});*/
// Task 6.
/*app.use(function (req, res, next) {
  const message = `${req.method} ${req.path} - ${req.ip}`;
  console.log(message);
  //res.json({ message: message });
  next();
});*/
// Task 7.
/*app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.send({ time: req.time });
  },
);*/
// Task 8.
/*app.get("/:word/echo", (req, res) => {
  let word = req.params.word;
  res.send({ echo: word });
});*/
// Task 9.
/*app.get("/name", function (req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`,
  });
});*/

//Task 10.
/*app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());*/

//Task 11.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/name", function (req, res) {
  let name = req.body.first + " " + req.body.last;
  res.json({ name: name });
});
module.exports = app;
