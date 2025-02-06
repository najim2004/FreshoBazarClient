// queries.ts
import { gql } from "@apollo/client";
import { CART_FRAGMENT } from "../fragments/cart.fragments";

export const GET_CART = gql`
  query GetCart {
    getCart {
      success
      message
      cart {
        ...CartFragment
      }
      error {
        code
        details
      }
    }
  }
  ${CART_FRAGMENT}
`;
