// src/apollo/client.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Define the GraphQL server URI
const GRAPHQL_URI = `${import.meta.env.VITE_API_URL}/graphql`; // Use environment variable for flexibility

// Set up the HTTP Link to connect with the GraphQL server's endpoint
const httpLink = new HttpLink({
  uri: GRAPHQL_URI, // URI of your GraphQL server
});

// Initialize Apollo Client with necessary configurations
const client = new ApolloClient({
  link: httpLink, // Link to the GraphQL server
  cache: new InMemoryCache(), // Apollo Client's in-memory cache for efficient data fetching
});

export default client;
