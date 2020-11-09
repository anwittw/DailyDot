const activitySchema = require("./activitySchema");
const dotSchema = require("./dotSchema");
const userSchema = require("./userSchema");
const { gql } = require("apollo-server-express");

const linkSchema = gql`
  type FieldError {
    field: String
    message: String
  }
  type MessageResponse {
    message: String
    error: String
  }
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

module.exports = [linkSchema, userSchema, dotSchema, activitySchema];
