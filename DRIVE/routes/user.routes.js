const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcrypt");

const userModel=require('../models/user.models');

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 5 }),
  body("username").trim().not().isEmpty(),
  
 async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser =  await userModel.create({
        email,
        username,
        password: hashedPassword
        
    })

    res.json(newUser);
  }
);

module.exports = router;
