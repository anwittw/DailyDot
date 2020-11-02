const User = require("../models/User");

const validateLogin = async (username, password) => {
  let result = [];
  const userNameFound = !!(await User.find({ username })).length;
  const passwordIsValid = await argon2.verify(user.password, password);
  if (!userNameFound) {
    result.push({ field: "username", message: "User not found" });
  }
  if (!passwordIsValid) {
    result.push({ field: "password", message: "password not correct" });
  }
};

module.exports = validateLogin;
