const Joi = require("joi");
const { distinct } = require("./models/review");

/* Joi Schema for validating listing data */
module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),

    image: Joi.object({
      url: Joi.string().allow("", null),
      filename: Joi.string().allow("", null),
    }),

    price: Joi.number().required().min(0),
    phoneNumber: Joi.number().required(),
    ownerName: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    address: Joi.string().required(),

    propertyType: Joi.string().required(),
    bedrooms: Joi.number().required().min(0),
    bathrooms: Joi.number().min(0).default(1),
    area: Joi.number().min(0),

    amenities: Joi.string().allow("", null),

    furnished: Joi.string()
      .valid("Fully", "Semi", "Unfurnished")
      .default("Unfurnished"),

    isAvailable: Joi.boolean().truthy("on").default(true),

    nearbyPlaces: Joi.object({
      name: Joi.string().allow("", null),
      distance: Joi.string().allow("", null),
      description: Joi.string().allow("", null),
    }),

    nearbyEssentials: Joi.object({
      airport: Joi.object({
        name: Joi.string().required(),
        distance: Joi.string().required(),
      }),
      railwayStation: Joi.object({
        name: Joi.string().required(),
        distance: Joi.string().required(),
      }),
      busStand: Joi.object({
        name: Joi.string().required(),
        distance: Joi.string().required(),
      }),
      cityCenter: Joi.object({
        name: Joi.string().required(),
        distance: Joi.string().required(),
      }),
      hospital: Joi.object({
        name: Joi.string().required(),
        distance: Joi.string().required(),
      }),
    }).required(),
  }).required(),
});

/* Joi Schema for validating review data */
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
