const Listing = require("../models/listing");

/* Index Controller (Get all listings) */
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
};

/* New Controller (Show form to create new listing) */
/* isLoggedIn middleware to ensure only logged-in users can access this route */
module.exports.renderNewForm = (req, res) => {
  res.render("./listings/new.ejs");
};

/* Show Controller (Get a single listing by ID) */
/* Populate reviews and owner details (nested population for reviews) */
/* Calculate average rating from reviews and numbers of reviews. */
module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing Not Found");
    return res.redirect("/listings");
  }
  console.log(listing);

  // Calculate average rating
  let totalRating = 0;

  // Initialize rating counts
  const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  listing.reviews.forEach((review) => {
    totalRating += review.rating;
    ratingCounts[review.rating] += 1;
  });

  const avgRating =
    listing.reviews.length > 0
      ? (totalRating / listing.reviews.length).toFixed(1)
      : 0;
  res.render("./listings/show.ejs", { listing, avgRating });
};

/* Create Controller (Add new listing to DB) */
module.exports.createListing = async (req, res, next) => {
  // Convert checkbox value manually
  req.body.listing.isAvailable = req.body.listing.isAvailable === "on";
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id; //Set the owner to the currently logged-in user.
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "Successfully created a new listing!");
  res.redirect("/listings");
};

/* Edit Controller (Show form to edit a listing) */
module.exports.renderEditeForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing Not Found");
    return res.redirect("/listings");
  }
  let currentImageUrl = listing.image.url;
  currentImageUrl = currentImageUrl.replace(
    "/upload",
    "/upload/h_100,w_150,c_fill"
  );
  res.render("./listings/edit.ejs", {
    currentImageUrl,
    listing,
  });
};

/* Update Controller (Update a listing in DB) */
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing successfully updated!");
  res.redirect(`/listings/${id}`);
};

/* Delete Controller (Delete a listing from DB) */
module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing successfully deleted!");
  res.redirect(`/listings/${id}`);
};

/* Search Controller (Search listings based on query) */
module.exports.searchListings = async (req, res) => {
  const { location } = req.query;

  if (!location || location.trim() === "") {
    //Redirect to all listings if search is empty
    req.flash("error", "Please enter a location to search.");
    return res.redirect("/listings");
  }

  //Case-insensitive search
  const listings = await Listing.find({
    location: { $regex: location, $options: "i" },
  });

  res.render("listings/searchResults", { listings, location });
};

/* Search Suggestions Controller (Provide search suggestions based on user input) */
module.exports.searchSuggestions = async (req, res) => {
  const { q } = req.query; // q = query typed by user
  if (!q || q.trim() === "") return res.json([]);

  //Find matching listings (title or location)
  const listings = await Listing.find({
    $or: [
      { title: { $regex: q, $options: "i" } },
      { location: { $regex: q, $options: "i" } },
    ],
  }).limit(5); //limit suggestions

  //Send only necessary info
  const suggestions = listings.map((l) => ({
    title: l.title,
    location: l.location,
    id: l._id,
  }));

  res.json(suggestions);
};
