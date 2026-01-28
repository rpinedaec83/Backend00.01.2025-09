const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["USER", "MODERATOR", "ADMIN"],
    default: "USER"
  }
});

module.exports = mongoose.model("User", UserSchema);
