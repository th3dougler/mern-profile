const isEmail = require("validator").isEmail;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    validate: [isEmail, "invalid email"],
  },
});

module.exports = mongoose.model("User", userSchema);
