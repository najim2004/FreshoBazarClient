// hooks.ts
import { useMutation, useQuery } from "@apollo/client";
import { GET_CART } from "../queries/cart.queries";
import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_CART_ITEM,
} from "../mutations/cart.mutations";
import { CartInput, CartPayload } from "../types/cart.types";
import { useDispatch } from "react-redux";
import { setCart, setError, setLoading } from "@/redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const isTokenAvailable: string | null = localStorage?.getItem("token");

export const useGetCart = () => {
  const { data, error } = useQuery<{ getCart: CartPayload }>(GET_CART, {
    skip: !isTokenAvailable,
    fetchPolicy: "cache-and-network",
  });
  const dispatcher = useDispatch();
  try {
    dispatcher(setLoading(true));
    if (data?.getCart?.success && data?.getCart?.cart)
      dispatcher(setCart(data?.getCart?.cart));
    else if (!data?.getCart.success && data?.getCart.error) {
      const { code, details } = data.getCart.error;
      dispatcher(setError(`${code}:${details}`));
    }
  } catch (e: any) {
    dispatcher(setError(e?.message || error?.message));
    console.log(error);
  } finally {
    dispatcher(setLoading(false));
  }
};

export const useAddItemToCart = () => {
  const [addItemToCartMutation, { loading, error }] = useMutation<
    { addItemToCart: CartPayload },
    { item: CartInput }
  >(ADD_ITEM_TO_CART);
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const addCartItem = async (item: CartInput): Promise<CartPayload | null> => {
    try {
      dispatcher(setLoading(true));
      if (!isTokenAvailable) {
        navigate("/login");
        return { success: false, message: "Please login first", cart: null };
      }
      const { data } = await addItemToCartMutation({
        variables: { item },
      });
      if (data?.addItemToCart.success && data.addItemToCart.cart) {
        dispatcher(setCart(data.addItemToCart.cart));
      } else if (data?.addItemToCart.error) {
        dispatcher(
          setError(
            data.addItemToCart.message ||
              `${data.addItemToCart.error.code}: ${data.addItemToCart.error.details}`
          )
        );
      }
      return data?.addItemToCart || null;
    } catch (err: unknown | any) {
      console.error("Error adding item to cart:", err);
      dispatcher(setError(err?.message || "something went wrong"));
      return null;
    } finally {
      dispatcher(setLoading(false));
    }
  };

  return { addCartItem, loading, error };
};

export function useUpdateCartItem() {
  const [updateCartItemMutation, { loading, error }] = useMutation<{
    updateCartItem: CartPayload;
  }>(UPDATE_CART_ITEM);

  const updateItem = async (item: CartInput) => {
    try {
      await updateCartItemMutation({
        variables: { item },
      });
    } catch (err) {
      console.error("Error updating cart item:", err);
    }
  };

  return { updateItem, loading, error };
}

export function useRemoveItemFromCart() {
  const [removeItemFromCartMutation, { loading, error }] = useMutation<{
    updateCartItem: CartPayload;
  }>(REMOVE_ITEM_FROM_CART);

  const removeItem = async (product_id: string) => {
    try {
      await removeItemFromCartMutation({
        variables: { product_id },
      });
    } catch (err) {
      console.error("Error removing item from cart:", err);
    }
  };

  return { removeItem, loading, error };
}

export function useClearCart() {
  const [clearCartMutation, { loading, error }] = useMutation<{
    clearCart: CartPayload;
  }>(CLEAR_CART);

  const clear = async () => {
    try {
      await clearCartMutation();
    } catch (err) {
      console.error("Error clearing cart:", err);
    }
  };

  return { clear, loading, error };
}
