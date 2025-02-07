import { gql } from "@apollo/client";
export const GET_FAVORITE_PRODUCTS = gql`
  query getFavorites {
    getFavorites {
      _id
      user_id
      products {
        product_id
        addedAt
      }
    }
  }
`;
