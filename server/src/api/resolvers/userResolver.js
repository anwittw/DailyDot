const userResolver = {
  Query: {
    user: async (_, { id }, { models: { User } }) => {
      const user = await User.findById({ _id: id });
      return user;
    },
    users: async (_, __, { models: { User } }) => {
      const users = await User.find({});
      return users;
    },
  },
};

module.exports = userResolver;
