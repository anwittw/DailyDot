const { gql } = require("apollo-server-express");

const userTypes = gql`
  type User {
    _id: ID
    username: String
    email: String
    dots: [Dot]
    activities: [Activity]
  }
  type FieldError {
    field: String
    message: String
  }
  type UserResponse {
    user: User
    errors: [FieldError]
  }
  extend type Query {
    user(_id: ID!): User!
    me: User
    users: [User]
  }
  extend type Mutation {
    signup(username: String!, password: String!, email: String!): UserResponse
    login(username: String!, password: String!): UserResponse
  }
`;

module.exports = userTypes;
