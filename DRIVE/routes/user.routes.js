const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const userModel = require("../models/user.models");

router.get("/register", (req, res) => {
  res.render("register");
});

// register route
router.post(
  "/register",
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 5 }),
  body("username").trim().not().isEmpty(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      email,
      username,
      password: hashedPassword,
    });

    res.json(newUser);
  }
);

router.get("/login", async (req, res) => {
  res.render("login");
});


//login route
router.post(
  "/login",
  body("username").trim().not().isEmpty(),
  body("password").trim().isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "invalid credentials",
      });
    }
    const { username, password } = req.body;

    const user = await userModel.findOne({ username: username });

    if (!user) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "username or password is incorrect" });
    }

    // JWT generation should be here
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        username: user.username,
      },
      process.env.JWT_SECRET
    );
    res.json({ token });
  }
);

module.exports = router;
