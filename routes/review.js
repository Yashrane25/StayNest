const express = require("express");
const router = express.Router({ mergeParams: true }); //{mergeParams: true}To access params from parent router
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Revies = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

/* Create Review Route (Add new review to a listing) */
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

/* Delete Review Route (Delete a review from a listing) */
/* Only the author of the review can delete it (isReviewAuthor) */
/* isLoggedIn middleware to ensure only logged-in users can delete reviews */
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
