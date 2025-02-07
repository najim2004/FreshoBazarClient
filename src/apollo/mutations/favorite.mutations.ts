import { gql } from "@apollo/client";

export const TOGGLE_FAVORITE = gql`
  mutation ToggleFavorite($product_id: ID!) {
    toggleFavorite(product_id: $product_id) {
      success
      error
      product_id
      request
      message
    }
  }
`;
