const { createJWT, isTokenVaild, attachCookiesToResponse } = require("./jwt");
const createTokenUser = require("./createTokenUser");
const createHash = require("./createHash");
const checkPermissions = require("./checkPermissions");
const sendVerificationEmail = require("./sendVerificationEmail");
const sendResetPasswordEmail = require("./sendResetPasswordEmail");

module.exports = {
  createJWT,
  isTokenVaild,
  attachCookiesToResponse,
  createTokenUser,
  createHash,
  checkPermissions,
  sendVerificationEmail,
  sendResetPasswordEmail,
};
