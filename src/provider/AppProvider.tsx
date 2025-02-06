import { useGetCart } from "@/apollo/hooks/cart.hooks";
import { useGetUser } from "@/apollo/hooks/user.hooks";
import { setCategories } from "@/redux/slices/categoriesSlice";
import { setFavoriteProducts } from "@/redux/slices/favoriteProductSlice";
import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Props Interface for the AppProvider
interface AppProviderProps {
  children: React.ReactNode;
}

// Interfaces for API responses and data types
interface Favorites {
  _id: string;
  userId: string;
  products?: Array<{
    productId: string;
    addedAt?: Date;
  }>;
  createdAt?: Date;
  updatedAt?: Date;
}

interface GetFavoriteProductsResponse {
  getFavorites: {
    success?: boolean;
    error?: boolean;
    error_message?: string | null;
    favorites?: Favorites;
  };
}

interface GetCategoriesResponse {
  getAllCategories: {
    success: boolean;
    message: string;
    categories?: Array<{
      _id: string;
      name: string;
      slug: string;
      subcategories?: Array<{ slug: string; name: string }>;
    }>;
  };
}

// GraphQL queries
const GET_FAVORITE_PRODUCTS = gql`
  query getFavorites {
    getFavorites {
      success
      error
      error_message
      favorites {
        _id
        userId
        products {
          productId
          addedAt
        }
      }
    }
  }
`;

const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    getAllCategories {
      success
      message
      categories {
        _id
        name
        slug
        subcategories {
          slug
          name
        }
      }
    }
  }
`;

// Main AppProvider component with enhanced error handling
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  useGetCart();
  useGetUser();

  // Execute GraphQL queries
  const { data: categoriesData, error: categoriesError } =
    useQuery<GetCategoriesResponse>(GET_ALL_CATEGORIES);
  const { data: favoriteProductsData, error: favoriteProductsError } =
    useQuery<GetFavoriteProductsResponse>(GET_FAVORITE_PRODUCTS);
  // console.log(favoriteProductsData)
  // console.log(categoriesData)

  useEffect(() => {
    try {
      if (favoriteProductsData?.getFavorites?.success) {
        const { favorites } = favoriteProductsData.getFavorites;
        if (favorites) {
          dispatch(setFavoriteProducts(favorites));
        }
      } else if (favoriteProductsData?.getFavorites?.error) {
        console.error(
          "Error fetching favorite products:",
          favoriteProductsData?.getFavorites.error_message
        );
      }
    } catch (error) {
      console.error(
        "An unexpected error occurred while fetching favorite products:",
        error
      );
    }
  }, [favoriteProductsData, dispatch]);

  useEffect(() => {
    try {
      if (categoriesData?.getAllCategories?.success) {
        const { categories } = categoriesData.getAllCategories;
        if (categories) {
          dispatch(setCategories(categories));
        }
      } else if (categoriesData?.getAllCategories) {
        console.error(
          "Error fetching categories:",
          categoriesData?.getAllCategories.message
        );
      }
    } catch (error) {
      console.error(
        "An unexpected error occurred while fetching categories:",
        error
      );
    }
  }, [categoriesData, dispatch]);

  // Log any query errors from Apollo Client
  useEffect(() => {
    if (categoriesError) {
      console.error(
        "GraphQL error while fetching categories:",
        categoriesError
      );
    }
    if (favoriteProductsError) {
      console.error(
        "GraphQL error while fetching favorite products:",
        favoriteProductsError
      );
    }
    // if (cartError) {
    //   console.error("GraphQL error while fetching cart data:", cartError);
    // }
  }, [categoriesError, favoriteProductsError]);

  return <>{children}</>;
};
