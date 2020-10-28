const activitySchema = require("./activitySchema");
const dotSchema = require("./dotSchema");
const userSchema = require("./userSchema");
const { gql } = require("apollo-server-express");

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

module.exports = [linkSchema, userSchema, dotSchema, activitySchema];
