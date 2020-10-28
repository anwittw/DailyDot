const { gql } = require("apollo-server-express");

const activityTypes = gql`
  type Activity {
    _id: ID
    title: String
    _user: String
    user: User
  }
  extend type Query {
    activities: [Activity]
  }
`;

module.exports = activityTypes;
