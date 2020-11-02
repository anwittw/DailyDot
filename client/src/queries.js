import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      _id
      username
      email
    }
  }
`;

export const SIGNUP = gql`
  mutation signup($username: String!, $password: String!, $email: String!) {
    signup(username: $username, password: $password, email: $email) {
      _id
      username
      email
    }
  }
`;

const queries = {};

export default queries;
