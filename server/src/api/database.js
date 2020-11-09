const mongoose = require("mongoose");
const { __dbUri__ } = require("../constants");

mongoose
  .connect(__dbUri__, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((data) => console.log("connected to Mongo!"))
  .catch((err) => console.log("cannot connect"));

module.exports = mongoose;
