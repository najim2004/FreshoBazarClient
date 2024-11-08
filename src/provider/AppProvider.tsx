import { setFavoriteProducts } from "@/redux/slices/favoriteProduct.slice";
import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

interface AppProviderProps {
  children: React.ReactNode;
}

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
  getFavoritesByUserId: {
    success?: boolean;
    error?: boolean;
    error_message?: string | null;
    favorites?: Favorites;
  };
}

const GET_FAVORITE_PRODUCTS = gql`
  query GetFavoritesByUserId($userId: ID!) {
    getFavoritesByUserId(userId: $userId) {
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

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  const Id = "672cbfba5011c05833acf37e"; // Example static userId (replace with dynamic logic)

  const { data, loading, error } = useQuery<GetFavoriteProductsResponse>(
    GET_FAVORITE_PRODUCTS,
    {
      variables: { userId: Id },
    }
  );

  // Check if the data is being returned correctly
  // console.log(data);

  useEffect(() => {
    if (data?.getFavoritesByUserId) {
      const { success, error, error_message, favorites } =
        data.getFavoritesByUserId;

      if (success && !error && favorites) {
        dispatch(setFavoriteProducts(favorites));
      } else {
        console.error("Error fetching favorite products:", error_message);
      }
    }
  }, [data, dispatch]);

  return <>{children}</>;
};
