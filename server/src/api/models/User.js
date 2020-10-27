const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String },
    password: { type: String },
    username: { type: String },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
