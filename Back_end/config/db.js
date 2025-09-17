const mongoose = require("mongoose");


 const connection =mongoose.connect("mongodb://0.0.0.0/Back_end").then(() => {
  console.log("connected to db");
});

module.exports = connection;