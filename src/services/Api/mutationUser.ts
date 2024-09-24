// mutations.js
import { gql } from '@apollo/client';

// Add Item Mutation
export const ADD_ITEM = gql`
  mutation AddItem($name: String!, $description: String!) {
    addItem(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

// Update Item Mutation
export const UPDATE_ITEM = gql`
  mutation UpdateItem($id: ID!, $name: String!, $description: String!) {
    updateItem(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

// Delete Item Mutation
export const DELETE_ITEM = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;
