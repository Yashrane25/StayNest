const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userControllers = require("../controllers/users");
const user = require("../models/user");

/* Combined route for signup form rendering and signup logic */
/* Route to render signup form */
/* Route to handle signup logic */
router
  .route("/signup")
  .get(userControllers.renderSignupForm)
  .post(wrapAsync(userControllers.signup));

/* Combined route for login form rendering and login logic */
/* Route to render login form */
/* Route to handle login logic 
  -> saveRedirectUrl middleware to redirect users to their intended page after login
  -> passport.authenticate middleware to handle authentication
  -> Custom callback to manage redirection after login
*/
router
  .route("/login")
  .get(userControllers.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userControllers.login
  );

/* Route to handle logout logic */
router.get("/logout", userControllers.logout);

/* Route to render forgot password form */
router.get("/forgot-password", (req, res) => {
  res.render("users/forgot.ejs");
});

/* Route to handle forgot password logic */
router.post("/forgot-password", wrapAsync(userControllers.forgotPassword));

/* Route to render reset password form */
router.get("/reset-password/:token", (req, res) => {
  res.render("users/reset.ejs", { token: req.params.token });
});

/* Route to handle reset password logic */
router.post("/reset-password/:token", wrapAsync(userControllers.resetPassword));

module.exports = router;
