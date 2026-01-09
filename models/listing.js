const mongoose = require("mongoose");
const review = require("./review.js");
const { ref, required, number } = require("joi");
const Schema = mongoose.Schema;

/* Listing Schema */
const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: {
    url: String,
    filename: String,
  },
  price: { type: Number, required: true },
  phoneNumber: { type: Number, required: true },
  deposit: {
    type: Number,
    default: 0,
    required: true,
  },
  ownerName: { type: String, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
  address: { type: String, required: true },
  propertyType: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, default: 1 },
  area: { type: Number },

  amenities: { type: String },

  furnished: {
    type: String,
    enum: ["Fully", "Semi", "Unfurnished"],
    default: "Unfurnished",
  },
  isAvailable: { type: Boolean, default: true },

  nearbyPlaces: {
    name: {
      type: String,
    },
    distance: {
      type: Number,
    },
    description: {
      type: String,
    },
  },

  nearbyEssentials: {
    airport: {
      name: { type: String, required: true },
      distance: { type: Number, required: true },
    },
    railwayStation: {
      name: { type: String, required: true },
      distance: { type: Number, required: true },
    },
    busStand: {
      name: { type: String, required: true },
      distance: { type: Number, required: true },
    },
    groceryStore: {
      name: { type: String, required: true },
      distance: { type: Number, required: true },
    },
    hospital: {
      name: { type: String, required: true },
      distance: { type: Number, required: true },
    },
  },

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await review.deleteMany({ reviews: { $in: listing.reviews } });
  }
});

/* Export Listing Model */
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
