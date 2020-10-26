const { Schema, model } = require("mongoose");

const dotSchema = new Schema(
  {
    title: { type: String /*required: true */ },
    date: {},
    _user: { type: Schema.Types.ObjectId, ref: "User" },
    _activity: { type: Schema.Types.ObjectId, ref: "Activity" },
  },
  { timestamps: true }
);

const Dot = model("Dot", dotSchema);

module.exports = Dot;
