const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5000;

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

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
