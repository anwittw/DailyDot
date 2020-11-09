const { Schema, model } = require("mongoose");

const dotSchema = new Schema(
  {
    date: { type: Date },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    activity: { type: Schema.Types.ObjectId, ref: "Activity" },
  },
  { timestamps: true }
);

const Dot = model("Dot", dotSchema);

module.exports = Dot;
