const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {
  isLoggedIn,
  isOwner,
  validateListing,
  multerErrorHandler,
} = require("../middleware.js");
const listingsController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage, limits: { fileSize: 10485760 } }); // Image Uplode limit 10MB.

/* Combined Route for Index and Create */
//This route handles both GET requests to fetch all listings and POST requests to create a new listing
/* Index Route (Get all listings) */
/*-> Create Route (Add new listing to DB)
  -> isLoggedIn middleware to ensure only logged-in users can create a listing
  -> validateListing middleware to validate incoming data
  -> wrapAsync to handle async errors
*/
router
  .route("/")
  .get(wrapAsync(listingsController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    multerErrorHandler,
    validateListing,
    wrapAsync(listingsController.createListing)
  );

/* Search Route (Search listings by location) */
router.get("/search", wrapAsync(listingsController.searchListings));

// API route to get search suggestions
router.get("/suggest", wrapAsync(listingsController.searchSuggestions));

/* New Route (Show form to create new listing) */
router.get("/new", isLoggedIn, listingsController.renderNewForm);

/* Show Route (Get a specific listing by ID) */
/*Update Route (Update a listing in DB)
  Authorization check to ensure only the owner can update the listing */
/*Delete Route (Delete a listing from DB) 
  Authorization check to ensure only the owner can delete the listing*/
router
  .route("/:id")
  .get(wrapAsync(listingsController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    multerErrorHandler,
    validateListing,
    wrapAsync(listingsController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingsController.destroyListing));

/* Edit Route (Show form to edit a listing) */ /* isLoggedIn middleware to ensure only logged-in users can access this route */
/* isOwner middleware to ensure only the owner can edit the listing */
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingsController.renderEditeForm)
);

module.exports = router;
