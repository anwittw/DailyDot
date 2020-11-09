const { Schema, model } = require("mongoose");
const Dot = require("./Dot");
const Activity = require("./Activity");
const { v4: uuidv4 } = require("uuid");

const userSchema = new Schema(
  {
    email: { type: String },
    password: { type: String },
    username: { type: String },
    isActive: { type: Boolean, default: false },
    token: { type: String, default: () => uuidv4() },
  },
  { timestamps: true }
);

userSchema.pre("remove", { query: true }, async function (next) {
  let user = this._conditions;
  await Dot.deleteMany({ user: user._id });
  await Activity.deleteMany({ user: user._id });
  return next();
});

const User = model("User", userSchema);

module.exports = User;
