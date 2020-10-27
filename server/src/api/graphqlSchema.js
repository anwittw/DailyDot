const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    dots: [Dot]
    activities: [Activity]
  }
  type Dot {
    _id: ID
    date: String
    _user: String
    _activity: String
    user: User
  }
  type Activity {
    _id: ID
    title: String
    _user: String
    user: User
  }
  type Query {
    user(_id: ID!): User!
    me: User
    users: [User]
    login(username: String!, password: String!): User
    dot(_id: ID!): Dot!
    dots: [Dot]
    activities: [Activity]
  }
  type Mutation {
    signup(username: String!, password: String!, email: String!): User!
  }
`;

module.exports = typeDefs;
