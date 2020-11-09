const { gql } = require("apollo-server-express");

const dotTypes = gql`
  type Dot {
    _id: ID
    date: String
    activity: Activity
    user: User
  }
  type DotResponse {
    dot: Dot
    errors: [FieldError]
  }

  extend type Query {
    dot(_id: ID!): DotResponse
  }
  extend type Mutation {
    createDot(date: String!, user: String!, activity: String!): DotResponse
    deleteDot(_id: ID!): MessageResponse
  }
`;

module.exports = dotTypes;
