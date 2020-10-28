const { gql } = require("apollo-server-express");

const dotTypes = gql`
  type Dot {
    _id: ID
    date: String
    _user: String
    _activity: String
    user: User
  }

  extend type Query {
    dot(_id: ID!): Dot!
    dots: [Dot]
  }
`;

module.exports = dotTypes;
