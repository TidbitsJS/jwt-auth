const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();

const auth = require("./auth");

const Users = [
  {
    id: "user-1",
    name: "John",
    email: "john@gmail.com",
    password: "@john",
  },
  {
    id: "user-2",
    name: "Joe",
    email: "joe@gmail.com",
    password: "@joe",
  },
];

function generateToken(token) {
  return jwt.sign(token, process.env.JWT_SECRET, { expiresIn: "30d" });
}

const router = express.Router();

router.post("/register", (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
      throw new Error("Email, password and name are required");
    }

    const checkUser = Users.find((user) => user.email === email);
    if (checkUser) {
      throw new Error("User already exists");
    }

    const encryptedPassword = crypto
      .createHmac("sha256", password)
      .digest("hex");

    const newUser = {
      id: `user-${Users.length + 1}`,
      name,
      email,
      password: encryptedPassword,
    };

    // create user token
    const token = generateToken(newUser);

    newUser.token = token;

    Users.push(newUser);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const user = Users.find((user) => user.email === email);

    if (!user) {
      throw new Error("User does not exist");
    }

    // decrypt password and compare with the one in the database
    const decruptedPassword = crypto
      .createHmac("sha256", password)
      .digest("hex");

    if (user.password !== decruptedPassword) {
      throw new Error("Password is incorrect");
    }

    const token = generateToken(user);
    user.token = token;

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/user/:userId", auth, (req, res) => {
  try {
    const { userId } = req.params;
    const user = Users.find((user) => user.id === userId);
    if (!user) {
      throw new Error("User not found");
    }

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/users", auth, (req, res) => {
  try {
    const users = Users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    });

    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
