const { gql } = require("apollo-server-express");

const userTypes = gql`
  type User {
    _id: ID
    username: String
    email: String
    dots: [Dot]
    activities: [Activity]
    isActive: Boolean
    token: String
  }
  type UserResponse {
    user: User
    errors: [FieldError]
  }
  extend type Query {
    user(_id: ID!): UserResponse
    me: UserResponse
  }
  extend type Mutation {
    signup(username: String!, password: String!, email: String!): UserResponse
    login(username: String!, password: String!): UserResponse
    logout: MessageResponse
    activateUser(token: String!): UserResponse
    deleteUser(_id: String!): UserResponse
    changeEmail(_id: String!, email: String!): UserResponse
    forgotPassword(username: String, email: String): UserResponse
  }
`;

module.exports = userTypes;
