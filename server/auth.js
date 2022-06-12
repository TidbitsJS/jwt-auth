const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // check if expired
    if (decoded.exp < Date.now() / 1000) {
      return res.status(401).json({
        message: "Token has expired",
      });
    }

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = verifyToken;
