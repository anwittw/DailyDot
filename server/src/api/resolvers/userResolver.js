const argon2 = require("argon2");

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
    login: async (_, { username, password }, { req, models: { User } }) => {
      const user = await User.findOne({ username });
      const valid = await argon2.verify(user.password, password);
      if (valid) {
        req.session.userId = user._id;
      }
      return {
        user,
      };
    },
  },
  Mutation: {
    signup: async (_, { username, password, email }, { models: { User } }) => {
      const hashedPassword = await argon2.hash(password);
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      });
      return user;
    },
  },
};

module.exports = userResolver;
