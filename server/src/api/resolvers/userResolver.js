const argon2 = require("argon2");
const validateSignup = require("../utils/validateSignup");

const userResolver = {
  Query: {
    me: async (_, __, { req, models: { User } }) => {
      if (!req.session.userId) {
        return null;
      }
      const user = await User.findById(req.session.userId);
      return user;
    },
    user: async (_, { id }, { models: { User } }) => {
      if (!req.session.userId) {
        return null;
      }
      const user = await User.findById({ _id: id });
      return user;
    },
    users: async (_, __, { req, models: { User } }) => {
      if (!req.session.userId) {
        return null;
      }
      const users = await User.find({});
      return users;
    },
  },
  Mutation: {
    signup: async (_, { username, password, email }, { models: { User } }) => {
      const errors = await validateSignup(username, email, password);
      if (errors.length > 0) {
        return { errors };
      } else {
        const hashedPassword = await argon2.hash(password);
        const user = await User.create({
          username,
          email,
          password: hashedPassword,
        });
        return { user };
      }
    },
    login: async (_, { username, password }, { req, models: { User } }) => {
      const user = await User.findOne({ username });
      const valid = await argon2.verify(user.password, password);
      if (valid) {
        req.session.userId = user._id;
        console.log(req.session);
      }
      return user;
    },
  },
};

module.exports = userResolver;
