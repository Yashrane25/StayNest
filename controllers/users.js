const User = require("../models/user");
const { sendResetEmail } = require("../utils/mailer");
const crypto = require("crypto");

/* Controller to render signup form */
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

/* Controller to handle user signup */
module.exports.signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;

    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to StayNest!");
      res.redirect("/listings");
    });
  } catch (e) {
    //UserExistsError is an error class provided by the passport-local-mongoose library for handling duplicate usernames.
    if (e.name === "UserExistsError") {
      req.flash("error", "Username already taken");
      return res.redirect("/signup");
    }

    //Duplicate email (MongoDB)
    if (e.code === 11000 && e.keyPattern.email) {
      req.flash("error", "An account already exists with this email");
      return res.redirect("/signup");
    }

    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

/* Controller to render login form */
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

/* Note: The login logic is handled directly in the route using passport.authenticate */
module.exports.login = async (req, res) => {
  req.flash("success", "Welcome back to StayNest!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  if (redirectUrl.includes("/reviews")) {
    redirectUrl = redirectUrl.split("/reviews")[0];
  }
  res.redirect(redirectUrl);
};

/* Controller to handle user logout */
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are logged out.");
    res.redirect("/listings");
  });
};

/* Controller to handle forgot password */
module.exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    req.flash("error", "No account found with that email");
    return res.redirect("/forgot-password");
  }

  const resetToken = crypto.randomBytes(32).toString("hex");
  user.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  user.resetPasswordExpires = Date.now() + 10 * 60 * 1000;

  await user.save();

  const resetURL = `http://localhost:8080/reset-password/${resetToken}`;

  //Send the reset link via email
  try {
    await sendResetEmail(user.email, resetURL);
    req.flash("success", "Password reset link sent to your email");
  } catch (err) {
    console.error("Email sending error:", err);
    req.flash("error", "Failed to send email. Check server logs.");
  }

  //log the reset URL to the console for testing purposes
  console.log("Password Reset Link:", resetURL);

  res.redirect("/login");
};

/* Controller to handle reset password */
module.exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    req.flash("error", "Passwords do not match");
    return res.redirect("back");
  }

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    req.flash("error", "Token is invalid or expired");
    return res.redirect("/forgot-password");
  }

  //passport-local-mongoose method
  await user.setPassword(password);

  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  await user.save();

  req.flash("success", "Password reset successful. You can now login.");
  res.redirect("/login");
};
