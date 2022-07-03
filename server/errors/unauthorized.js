const { statusCode } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

class UnauthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = statusCode.FORBIDDEN;
  }
}

module.exports = UnauthorizedError;
