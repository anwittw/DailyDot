const argon2 = require("argon2");
const validateLogin = require("../utils/validateLogin");
const validateRequest = require("../utils/validateRequest");
const validateSignup = require("../utils/validateSignup");
const clearSession = require("../utils/clearSession");
const sendMail = require("../../mailer/mailer");
const activateUserTemplate = require("../../mailer/templates/activateUserTemplate");
const { v4: uuidv4 } = require("uuid");

const userResolver = {
  User: {
    activities: async (parent, __, { req, models: { Activity } }) => {
      const errors = validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        const activities = await Activity.find({ user: parent._id });
        return activities;
      }
    },
    dots: async (parent, __, { req, models: { Dot } }) => {
      const errors = validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        const dots = await Dot.find({ user: parent._id });
        return dots;
      }
    },
  },
  Query: {
    me: async (_, __, { req, models: { User } }) => {
      const errors = await validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        const user = await User.findById(req.session.userId);
        return { user };
      }
    },
    user: async (_, { _id }, { req, models: { User } }) => {
      const errors = validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        const user = await User.findById(req.session.userId);
        return { user };
      }
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
        const filledActivateUserTemplate = activateUserTemplate(
          user.token,
          user.email,
          user.username
        );
        console.log(filledActivateUserTemplate);
        await sendMail(filledActivateUserTemplate);
        return { user };
      }
    },
    login: async (_, { username, password }, { req, models: { User } }) => {
      const errors = await validateLogin(username, password);
      if (errors.length > 0) {
        return { errors };
      }
      const user = await User.findOne({ username });
      req.session.userId = user._id;
      return { user };
    },
    logout: async (_, __, { req, res }) => {
      const errors = validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        await clearSession(req, res);
        return { message: "You have been logged out!" };
      }
    },
    changeEmail: async (_, { _id, email }, { req, models: { User } }) => {
      const errors = validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        const user = await User.findById({ _id });
        user.email = email;
        await user.save();
        return { user };
      }
    },
    deleteUser: async (_, { _id }, { req, models: { User } }) => {
      const errors = validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        await User.remove({ _id });
        await clearSession(req, res);
        return { message: "You have been deleted!" };
      }
    },
    activateUser: async (_, { token }, { models: { User } }) => {
      const errors = [];
      const user = await User.findOne({ token });
      if (user) {
        user.isActive = true;
        await user.save();
        return { user };
      } else {
        errors.push({ field: "token", message: "Token not found" });
        return { errors };
      }
    },
    forgotPassword: async (_, { username, email }, { models: { User } }) => {
      const errors = [];
      const user = await User.findOne({ $or: [{ username }, { email }] });
      if (user) {
        user.isActive = false;
        user.token = uuidv4();
        await user.save();
        return { user };
      } else {
        if (username)
          errors.push({ field: "username", message: "User not found" });
        if (email) errors.push({ field: "email", message: "email not found" });
        return { errors };
      }
    },
  },
};

module.exports = userResolver;
