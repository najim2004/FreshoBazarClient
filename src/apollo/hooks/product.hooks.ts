import { useQuery } from "@apollo/client";
import { GET_PRODUCT, GET_PRODUCTS } from "../queries/product.queries";
import {
  GetProductResponse,
  GetProductsInput,
  GetProductsResponse,
} from "../types/product.types";

// Create the hook
export const useGetProduct = (id: string) => {
  const { data, loading, error, refetch } = useQuery<{
    getProduct: GetProductResponse;
  }>(GET_PRODUCT, {
    skip: !id,
    variables: { id },
  });
  if (data?.getProduct.success) {
    return {
      product: data?.getProduct.product,
      loading,
      error,
      refetch,
    };
  }
  return {
    product: undefined,
    loading,
    error: data?.getProduct.error || error,
    refetch,
  };
};

export const useGetProducts = (input: GetProductsInput) => {
  const { data, loading, error, refetch } = useQuery<{
    getProducts: GetProductsResponse;
  }>(GET_PRODUCTS, {
    variables: { input },
  });
  if (data?.getProducts?.success) {
    return {
      products: data?.getProducts.products,
      loading,
      error,
      refetch,
    };
  }
  return {
    products: undefined,
    loading,
    error: data?.getProducts.error || error,
    refetch,
  };
};
