import { gql } from "@apollo/client";

export const CART_ITEM_FRAGMENT = gql`
  fragment CartItemFragment on CartItem {
    product_id
    name
    quantity
    price
    discount_value
    thumbnail
  }
`;

export const CART_FRAGMENT = gql`
  fragment CartFragment on Cart {
    _id
    user_id
    total_quantity
    total_price
    status
    createdAt
    updatedAt
    items {
      ...CartItemFragment
    }
  }
  ${CART_ITEM_FRAGMENT}
`;
