// src/apollo/client.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Set up the HTTP Link to your GraphQL server's endpoint
const httpLink = new HttpLink({
  uri: "http://localhost:5000/graphql", // Change to your actual GraphQL server URI
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(), // Apollo's in-memory caching system
});

export default client;
