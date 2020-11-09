const User = require("../models/User");
const argon2 = require("argon2");

const validateLogin = async (username, password) => {
  let result = [];
  const user = await User.findOne({ username });
  const userNameFound = !!user;
  if (user) {
    const passwordIsValid = await argon2.verify(user.password, password);
    if (!passwordIsValid) {
      result.push({ field: "password", message: "password not correct" });
    }
    const isActive = user.isActive;
    if (!isActive) {
      result.push({ field: "no field", message: "user is not active" });
    }
  }
  if (!userNameFound) {
    result.push({ field: "username", message: "User not found" });
  }
  return result;
};

module.exports = validateLogin;
