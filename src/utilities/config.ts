// apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const BASE_URL = 'https://api.example.com/graphql'; // Replace with your GraphQL endpoint

const client = new ApolloClient({
  link: new HttpLink({ uri: BASE_URL }),
  cache: new InMemoryCache(),
});

export default client;
