const User = require("../models/User");
const { __passwordRequirements__ } = require("../../constants");

function checkPassword(password) {
  return __passwordRequirements__.test(password);
}

const validateSignup = async (username, email, password) => {
  let result = [];
  const usernameIsTaken = !!(await User.find({ username })).length;
  const emailIsTaken = !!(await User.find({ email })).length;
  const passwordIsValid = checkPassword(password);

  if (usernameIsTaken) {
    result.push({ field: "username", message: "Username not available." });
  }
  if (emailIsTaken) {
    result.push({
      field: "email",
      message: "E-Mail is taken, please try to sign in.",
    });
  }
  if (!passwordIsValid) {
    result.push({ field: "password", message: "Password is not valid" });
  }
  return result;
};

module.exports = validateSignup;
