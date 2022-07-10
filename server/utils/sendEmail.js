const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: '"Fred Foo 👻" <tidbitsjs@gmail.com>',
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;
