const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5000;

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const userRoutes = require("./routes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
