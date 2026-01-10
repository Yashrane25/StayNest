const Listing = require("./models/listing"); // for isOwner middleware.
const Review = require("./models/review"); // for isReviewAuthor middleware.
const ExpressError = require("./utils/ExpressError.js"); // for validateListing middleware.
const { listingSchema, reviewSchema } = require("./schema.js"); // for validation middlewares.
const multer = require("multer"); // for file upload handling.

//Middleware to check if user is logged in.
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to perform this action.");
    return res.redirect("/login");
  }
  next();
};

//Middleware to save redirect URL for logged-in users.
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

//Middleware to check if the current user is the owner of the listing.
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner._id.equals(res.locals.currentUser._id)) {
    req.flash("error", "Only the owner can perform this action.");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

//Middleware for validating listing data using Joi schema.
module.exports.validateListing = (req, res, next) => {
  //Ensure req.body.listing exists
  req.body.listing = req.body.listing || {};

  //Inject images from multer into req.body.listing if uploaded
  if (req.files && req.files.length > 0) {
    req.body.listing.images = req.body.listing.images || [];
  } else if (!req.body.listing.images) {
    //If no images uploaded and none exist, default to empty array
    req.body.listing.images = [];
  }

  // Validate with Joi, allow unknown keys (like deleteImages)
  const { error } = listingSchema.validate(req.body, { allowUnknown: true });
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Middleware for validating review data using Joi schema.
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Middleware to check if the current user is the author of the listing.
module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currentUser._id)) {
    req.flash("error", "Only author can delete reviews.");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

// Multer middleware for handling file uploads with size limit.
module.exports.multerErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
    req.flash("error", "Image is too large! Max size is 10 MB.");
    // If editing, redirect to edit page
    if (req.params.id) {
      return res.redirect(`/listings/${req.params.id}/edit`);
    }

    // If creating new listing
    return res.redirect("/listings/new");
  }
  next(err);
};
