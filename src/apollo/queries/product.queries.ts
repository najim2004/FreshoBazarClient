import { gql } from '@apollo/client';

// Query to get a single product by ID
export const GET_PRODUCT = gql`
    query GetProduct($id: ID!) {
        getProduct(id: $id) {
            success
            error
            errorMessage
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
                ratingsCount
                
            }
        }
    }
`;

// Query to get all products
export const GET_PRODUCTS = gql`
    query GetProducts {
        getProducts {
            success
            error
            error_message
            products {
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