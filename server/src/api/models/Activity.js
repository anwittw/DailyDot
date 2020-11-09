const { Schema, model } = require("mongoose");
const Dot = require("./Dot");

const activitySchema = new Schema(
  {
    title: { type: String },
    color: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

activitySchema.pre("remove", { query: true }, async function (next) {
  let activity = this._conditions;
  await Dot.deleteMany({ activity: activity._id });
  return next();
});

const Activity = model("Activity", activitySchema);

module.exports = Activity;
