const Listing = require("../models/listing");
const Revies = require("../models/review");

/* Create Review Controller (Add new review to a listing) */
module.exports.createReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Revies(req.body.review);
  newReview.author = req.user._id;
  console.log(newReview);
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  req.flash("success", "Review added successfully!");
  res.redirect(`/listings/${listing._id}`);
};

/* Delete Review Controller (Delete a review from a listing) */
module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Revies.findByIdAndDelete(reviewId);
  res.redirect(`/listings/${id}`);
};
