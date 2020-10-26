const { Schema, model } = require("mongoose");

const activitySchema = new Schema(
  {
    title: { type: String /*required: true */ },
    color: { type: String /*required: true */ },
    _user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Activity = model("Activity", activitySchema);

module.exports = Activity;
