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
  useGetUser();

  // Execute GraphQL queries
  const { data: categoriesData, error: categoriesError } =
    useQuery<GetCategoriesResponse>(GET_ALL_CATEGORIES);

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
  }, [categoriesError]);

  return <>{children}</>;
};
