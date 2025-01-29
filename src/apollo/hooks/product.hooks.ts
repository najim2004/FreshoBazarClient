import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../queries/product.queries";
import { GetProductResponse } from "../types/product.types";

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
        error: data?.getProduct.error||error,
        refetch,
    };
};
