const dotResolver = require("./dotResolver");
const userResolver = require("./userResolver");
const activityResolver = require("./activityResolver");

const resolvers = [userResolver, dotResolver, activityResolver];

module.exports = resolvers;
