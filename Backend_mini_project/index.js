//setting up the route

//setting up the ejs for ejs pages
//install ejs from npm
//setting up ejs for view engine

//setting up  the public static pages
// __dirname shows the current directory path  


//dynamic routing
//sabse phle browser par jao url  likjiye apni psnd ka and  enter dabao ab us url ka  route  ko create karo and res bhejo khuch bhi 


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
app.get("/profile/:username",function(req,res){
    res.send(`welcome ${req.params.username}`);

})

app.get("/profile/name/:age",function(req,res){
    res.send(`The age is ${req.params.age} `)
})

// Start the server
app.listen(5000, function () {
    console.log("Server is running on http://localhost:5000");
});
