const { gql } = require("apollo-server-express");

const userTypes = gql`
  type User {
    _id: ID
    username: String
    email: String
    dots: [Dot]
    activities: [Activity]
  }
  extend type Query {
    user(_id: ID!): User!
    me: User
    users: [User]
    login(username: String!, password: String!): User
  }
  extend type Mutation {
    signup(username: String!, password: String!, email: String!): User!
  }
`;

module.exports = userTypes;
