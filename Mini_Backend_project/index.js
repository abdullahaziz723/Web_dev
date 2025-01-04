const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');

// Setting up EJS
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Route
app.get("/", function (req, res) {
    fs.readdir(`./files`,function(err,files){
          
            res.render("index",{files:files}); 
    })
  // Ensure views/index.ejs exists
});

app.post("/create", function (req, res) {
fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
    res.redirect("/");

})

});

// Starting the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:30000");
});
