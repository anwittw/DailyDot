const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    dots: [Dot]
    activities: [Activity]
  }
  type Dot {
    _id: ID
    date: String
    _user: String
    _activity: String
  }
  type Activity {
    _id: ID
    title: String
    _user: String
  }
  type Query {
    users: [User]
    dots: [Dot]
    activities: [Activity]
  }
`;

module.exports = typeDefs;
