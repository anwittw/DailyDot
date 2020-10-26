const User = require("./models/User");
const Dot = require("./models/Dot");
const Activity = require("./models/Activity");

const resolvers = {
  Query: {
    users: () => User.find({}),
    dots: () => Dot.find({}),
    activities: () => Activity.find({}),
  },
};

module.exports = resolvers;
