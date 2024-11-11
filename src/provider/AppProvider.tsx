import { Cart, setCart } from "@/redux/slices/cartSlice";
import { setCategories } from "@/redux/slices/categoriesSlice";
import { setFavoriteProducts } from "@/redux/slices/favoriteProductSlice";
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

interface getCategoriesResponse {
  getAllCategories: {
    success: boolean;
    message: string;
    categories?: Array<{
      _id: string;
      name: string;
      slug: string;
      subcategories: Array<{ slug: string; name: string }>;
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

interface getCartResponse {
  getCart: {
    success: boolean;
    message: string;
    cart?: Cart;
  };
}

const GET_CART = gql`
  query GetCart($userId: ID!) {
    getCart(userId: $userId) {
      success
      message
      cart {
        _id
        userId
        items {
          productId
          name
          price
          quantity
          thumbnail
          totalPrice
        }
        status
        totalPrice
        totalQuantity
        createdAt
        updatedAt
      }
    }
  }
`;

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  const Id = "672cbfba5011c05833acf37e"; // Example static userId (replace with dynamic logic)

  const { data: categoriesResponse } =
    useQuery<getCategoriesResponse>(GET_ALL_CATEGORIES);
  const { data } = useQuery<GetFavoriteProductsResponse>(
    GET_FAVORITE_PRODUCTS,
    {
      variables: { userId: Id },
    }
  );
  const { data: cartResponse } = useQuery<getCartResponse>(GET_CART, {
    variables: { userId: Id },
  });
  console.log(cartResponse);

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
    if (categoriesResponse?.getAllCategories) {
      const { success, message, categories } =
        categoriesResponse.getAllCategories;
      if (success && categories) {
        dispatch(setCategories(categories));
      } else {
        console.error("Error fetching categories:", message);
      }
    }
  }, [data, dispatch, categoriesResponse?.getAllCategories]);
  useEffect(() => {
    if (cartResponse?.getCart) {
      const { success, message, cart } = cartResponse.getCart;
      if (success && cart) {
        dispatch(setCart(cart));
      } else {
        console.error("Error fetching cart:", message);
      }
    }
  }, [cartResponse?.getCart, dispatch]);

  return <>{children}</>;
};
