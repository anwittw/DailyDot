import React from "react";
import { useQuery, gql } from "@apollo/client";

const LOGIN = gql`
  query login {
    login(username: "a", password: "a") {
      _id
    }
  }
`;

const ME = gql`
  query GetMe {
    me {
      username
      _id
    }
  }
`;

function Me(props) {
  const { loading, error, data } = useQuery(ME);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  return (
    <div>
      <h1>Hello {data.me && data.me.username}</h1>
    </div>
  );
}

export default Me;
