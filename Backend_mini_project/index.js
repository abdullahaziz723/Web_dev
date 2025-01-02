//setting up the route

//setting up the ejs for ejs pages
//install ejs from npm
//setting up ejs for view engine

//setting up  the public static pages
// __dirname shows the current directory path  


//dynamic routing

const express = require('express');
const app = express();
const path =require('path');


// Use middleware with parentheses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//path.join here joins the path of the dirname and public as it is more safe to use in programs

// Set the view engine
app.set('view engine', 'ejs');

// Route to render index.ejs
app.get("/", function (req, res) {
    res.render('index');
});

// Start the server
app.listen(5000, function () {
    console.log("Server is running on http://localhost:5000");
});
