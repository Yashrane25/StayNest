const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

/* MongoDB Connection */
const MONGO_URL = "mongodb://127.0.0.1:27017/stayNest";

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

/* Initialize Database */
const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68fbcc70d689bb139f2953bb",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was Initialized");
};

initDB();
