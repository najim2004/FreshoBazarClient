import { useMutation, useQuery } from "@apollo/client";
import { GET_FAVORITE_PRODUCTS } from "../queries/favorite.queries";
import { Favorites, ToggleFavoritePayload } from "../types/favorite.types";
import { useDispatch } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  resetFavoriteProducts,
  setError,
  setFavoriteLoading,
  setFavoriteProducts,
} from "@/redux/slices/favoriteProductSlice";
import { TOGGLE_FAVORITE } from "../mutations/favorite.mutations";

export const useGetFavorites = () => {
  const { data, error } = useQuery<{ getFavorites: Favorites }>(
    GET_FAVORITE_PRODUCTS,
    {
      skip: !localStorage.getItem("token"),
    }
  );
  const dispatcher = useDispatch();
  try {
    dispatcher(setFavoriteLoading(true));
    if (data?.getFavorites?._id || data?.getFavorites?.products) {
      dispatcher(setFavoriteProducts(data?.getFavorites?.products || []));
    } else {
      dispatcher(setError("Failed to load cart data please retry!"));
    }
  } catch (e: any) {
    console.log("Error from useGetFavorites hook:", e);
    dispatcher(resetFavoriteProducts());
    dispatcher(
      setError(e.message || error?.message || "Something went wrong!")
    );
  } finally {
    dispatcher(setFavoriteLoading(false));
  }
};

export const useToggleFavorite = () => {
  const [func, { error, loading }] = useMutation<
    {
      toggleFavorite: ToggleFavoritePayload;
    },
    {
      product_id: string;
    }
  >(TOGGLE_FAVORITE);
  const dispatcher = useDispatch();
  const toggleFavorite = async (
    product_id: string
  ): Promise<{ success: boolean; message: string } | null> => {
    try {
      dispatcher(setFavoriteLoading(true));
      if (!localStorage.getItem("token")) return null;
      const { data } = await func({
        variables: { product_id },
      });
      if (data?.toggleFavorite.success) {
        if (data.toggleFavorite.request == "add") {
          dispatcher(
            addFavorite(data?.toggleFavorite?.product_id || product_id)
          );
        } else {
          dispatcher(
            removeFavorite(data?.toggleFavorite?.product_id || product_id)
          );
        }

        return {
          success: true,
          message:
            data?.toggleFavorite?.message ||
            (data?.toggleFavorite?.request === "add"
              ? "Successfully added"
              : "Successfully Remove"),
        };
      } else {
        if (data?.toggleFavorite.error)
          return {
            success: false,
            message:
              data.toggleFavorite.message ||
              data.toggleFavorite.request == "add"
                ? "Failed added"
                : "Failed Remove",
          };
        else return null;
      }
    } catch (e: any) {
      console.log("Error from useToggleFavorite hook:", e);
      return {
        success: false,
        message: e.message || error?.message || "Something went wrong",
      };
    } finally {
      dispatcher(setFavoriteLoading(false));
    }
  };
  return {
    toggleFavorite,
    loading,
  };
};
