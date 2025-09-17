const express = require("express");
const morgan = require("morgan");
const app = express();

//database connection
const dbconnection = require("./config/db");
//user model
const userModel = require("./models/user");

app.use(morgan("dev"));
//middle ware used to extract data in json format and urlencoded format

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//to serve static files like css,images
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log("New Request Made:");

  return next();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register",async (req, res) => {
  const { username, email, password } = req.body;

  const newUser= await userModel.create({
    username: username,
    email: email,
    password: password,
  });

    res.send(newUser);
});
app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("Form Data Received");
});

app.listen(5000);
