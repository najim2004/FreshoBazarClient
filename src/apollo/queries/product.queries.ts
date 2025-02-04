import { gql } from "@apollo/client";
import { PRODUCT_FIELDS } from "../fragments/product.fragments";

// Query to get a single product by ID
export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      success
      error
      error_message
      product {
        _id
        isAvailable
        title
        slug
        description
        images {
          id
          url
        }
        thumbnail {
          id
          url
        }
        categoryId
        categoryName
        subCategories
        unitType
        unitSize
        stockSize
        price
        isDiscountable
        discountValue
        averageRating
        totalReviews
      }
    }
  }
`;

// Query to get all products
export const GET_PRODUCTS = gql`
  ${PRODUCT_FIELDS}
  query GetProduct($input: GetProducts) {
    getProducts(input: $input) {
      success
      error
      error_message
      products {
        ...ProductFields
      }
      pagination {
        currentPage
        hasNextPage
        hasPrevPage
        totalPages
        totalItems
      }
    }
  }
`;

export const GET_FEATURED_PRODUCTS = gql`
  ${PRODUCT_FIELDS}
  query GetFeaturedProducts {
    getFeaturedProducts {
      success
      error
      error_message
      products {
        ...ProductFields
      }
    }
  }
`;

// Mutation to create a new product
export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProduct!) {
    createProduct(input: $input) {
      success
      error
      errorMessage
      product {
        _id
        isDelete
        isAvailable
        title
        slug
        description
        images {
          id
          url
        }
        thumbnail {
          id
          url
        }
        categoryId
        categoryName
        subCategories
        unitType
        unitSize
        stockSize
        price
        currency
        isDiscountable
        discountValue
        averageRating
        ratingsCount
        tags
        location {
          subDistrict
          district
        }
        createdAt
        updatedAt
      }
    }
  }
`;

// Mutation to delete a product
export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      success
      error
      error_message
    }
  }
`;
