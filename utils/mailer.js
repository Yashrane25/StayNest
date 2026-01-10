const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, //your Gmail
    pass: process.env.EMAIL_PASS, //App password
  },
});

module.exports.sendResetEmail = async (to, resetURL) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "StayNest Password Reset",
    html: `
      <p>You requested a password reset.</p>
      <p>Click this link to reset your password (valid for 10 minutes):</p>
      <a href="${resetURL}">${resetURL}</a>
    `,
  };

  await transporter.sendMail(mailOptions);
};
