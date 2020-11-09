import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        _id
        username
        email
      }
      errors {
        field
        message
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation signup($username: String!, $password: String!, $email: String!) {
    signup(username: $username, password: $password, email: $email) {
      user {
        _id
      }
      errors {
        field
        message
      }
    }
  }
`;

export const CHANGE_EMAIL = gql`
  mutation changeEmail($_id: String!, $email: String!) {
    changeEmail(_id: $_id, email: $email) {
      user {
        email
      }
      errors {
        field
        message
      }
    }
  }
`;

const queries = {};

export default queries;
