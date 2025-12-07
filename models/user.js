const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

/* Defining User Schema */
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

/* Plugin to handle username and password */
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);

//passport will automatically add username and passward fields to the schema.
 