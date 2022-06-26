const crypto = require("crypto");

const hashString = (string) =>
  crypto.createHash("sha256").update(string).digest("hex");

module.exports = hashString;
