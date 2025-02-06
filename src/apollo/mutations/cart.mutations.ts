// mutations.ts
import { gql } from "@apollo/client";
import { CART_FRAGMENT } from "../fragments/cart.fragments";

export const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: CartItemInput!) {
    addItemToCart(item: $item) {
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

export const UPDATE_CART_ITEM = gql`
  mutation UpdateCartItem($item: UpdateCartItemInput!) {
    updateCartItem(item: $item) {
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

export const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($product_id: ID!) {
    removeItemFromCart(product_id: $product_id) {
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

export const CLEAR_CART = gql`
  mutation ClearCart {
    clearCart {
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
