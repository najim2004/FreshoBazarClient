import { gql } from "@apollo/client";

export const PRODUCT_FIELDS = gql`
  fragment ProductFields on Product {
    _id
    title
    discountValue
    thumbnail {
      id
      url
    }
    price
    unitType
    unitSize
    categoryName
    isFavorite
    updatedAt
  }
`;
