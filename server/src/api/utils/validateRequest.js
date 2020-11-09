const validateRequest = (req) => {
  let result = [];
  if (!req.session.userId) {
    result.push({ field: "no field", message: "you need to be authenticated" });
  }
  return result;
};

module.exports = validateRequest;
