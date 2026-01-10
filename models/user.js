const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

/* Defining User Schema */
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

/* Plugin to handle username and password */
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);

//passport will automatically add username and passward fields to the schema.
