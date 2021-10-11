import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://54.172.208.5:4000",
  cache: new InMemoryCache(),
});

export default client;
