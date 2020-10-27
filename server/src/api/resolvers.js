const resolvers = {
  Query: {
    user: async (_, { id }, { models: { User } }) => {
      const user = await User.findById({ _id: id });
      return user;
    },
    users: async (_, __, { models: { User } }) => {
      const users = await User.find({});
      return users;
    },
    dots: async (_, __, { models: { Dot } }) => {
      const dots = await Dot.find({});
      return dots;
    },
    activities: async (_, __, { models: { Activity } }) => {
      const activities = await Activity.find({});
      return activities;
    },
  },
};

module.exports = resolvers;
