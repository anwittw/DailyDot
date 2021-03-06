import { Router, Link } from "@reach/router";
import { ApolloProvider } from "@apollo/client";
import Home from "../pages/Home";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import UserContextProvider from "../context/UserContext";

const client = new ApolloClient({
  credentials: "include",
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <Router>
          <Home path="/" />
        </Router>
      </UserContextProvider>
    </ApolloProvider>
  );
}

export default App;
