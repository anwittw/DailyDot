const { gql } = require("apollo-server-express");

const activityTypes = gql`
  type Activity {
    _id: ID
    title: String
    color: String
    user: User
    dots: [Dot]
  }
  type ActivityResponse {
    activity: Activity
    errors: [FieldError]
  }
  extend type Query {
    activity(_id: ID!): ActivityResponse
  }
  extend type Mutation {
    createActivity(
      title: String!
      color: String!
      user: String!
    ): ActivityResponse
    editActivity(_id: ID!, title: String, color: String): ActivityResponse
    deleteActivity(_id: ID!): MessageResponse
  }
`;

module.exports = activityTypes;
