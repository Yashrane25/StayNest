// Loading environment variables from .env file in non-production environments.
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

/* Importing required modules: Express for server, Mongoose for DB, Listing model, Path for file       handling, Method-Override for supporting PUT/DELETE in forms, and EJS-Mate for layouts/partials in templates. */
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const Revies = require("./models/review.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

/* Importing route handlers */
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const PORT = process.env.PORT || 8080;

/* MongoDB Atlas Connection */
const MONGO_URL = process.env.ATLAS_DB_URI;

main()
  .then(() => {
    console.log("Connected to DB.");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs"); //Tells Express we are using EJS for templating.
app.set("views", path.join(__dirname, "views")); //Tells Express to look inside the views folder to find templates.
app.use(express.urlencoded({ extended: true })); //(middleware) To parse form data in POST requests.
app.use(express.json()); //(middleware) To parse JSON data in requests.
app.use(methodOverride("_method")); //This tells Express whenever a request has a query string or hidden field called _method, look at its value and treat the request as that method.
app.engine("ejs", ejsMate); //Tells Express to use ejsMate as the engine for rendering EJS templates.
app.use(express.static(path.join(__dirname, "/public"))); //To serve static files like CSS, JS, images from the public directory.

/* MongoDB Session Store Configuration */
const store = MongoStore.create({
  mongoUrl: MONGO_URL,
  cryptoAdapter: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600, // time period in seconds
});

store.on("error", () => {
  console.log(" MONGO SESSION STORE ERROR", err);
});

/* Session Configuration */
const sessionOptions = {
  store: store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, //1 week
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
};

/* Using session middleware */
app.use(session(sessionOptions)); //To use sessions in the app.
app.use(flash()); //To use flash messages in the app.

app.use(passport.initialize()); //To initialize passport for authentication.
app.use(passport.session()); //To use passport sessions.
passport.use(new LocalStrategy(User.authenticate())); //Using local strategy for username and password authentication.
passport.serializeUser(User.serializeUser()); //To serialize user for session.
passport.deserializeUser(User.deserializeUser()); //To deserialize user from session.

/* Middleware to set local variables for flash messages */
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

/* Using the listings router for all routes starting with /listings */
app.use("/listings", listingRouter);
/* Using the reviews router for all routes starting with /listings/:id/reviews */
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter); //Using user routes

/* 404 Error Handling Middleware */
app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

/* Error Handling Middleware (ExpressError.js)*/
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

/* Create Server */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
