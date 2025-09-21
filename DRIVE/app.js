const express = require("express");
const userRouter = require("./routes/user.routes");

const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
const connectToDB = require("./config/db");
connectToDB();

const app = express();
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/index.routes");

app.use(cookieParser());
app.use(express.json());

app.set("view engine", "ejs");

app.use("/user", userRouter);
app.use('/', indexRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
