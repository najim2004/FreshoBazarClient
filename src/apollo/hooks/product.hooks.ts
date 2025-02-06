import { useQuery, DocumentNode } from "@apollo/client";
import {
  GET_FEATURED_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS,
} from "../queries/product.queries";
import {
  GetProductResponse,
  GetProductsInput,
  GetProductsResponse,
} from "../types/product.types";

/**
 * Generic reusable hook for fetching product-related data
 */
export const useFetchProducts = <T>({
  query,
  key,
  variables,
  skip = false,
}: {
  query: DocumentNode;
  key: string;
  variables?: Record<string, any>;
  skip?: boolean;
}) => {
  const { data, loading, error, refetch } = useQuery<{ [key: string]: T }>(
    query,
    {
      variables,
      fetchPolicy: "cache-and-network",
      skip,
    }
  );

  return {
    data: data?.[key] || undefined,
    loading,
    error,
    refetch,
  };
};

/**
 * Hook to fetch a single product by ID
 */
export const useGetProduct = (id: string) => {
  const { data, loading, error, refetch } =
    useFetchProducts<GetProductResponse>({
      query: GET_PRODUCT,
      key: "getProduct",
      variables: { id },
      skip: !id,
    });

  return {
    product: data?.success ? data.product : undefined,
    loading,
    error: data?.error || error,
    refetch,
  };
};

/**
 * Hook to fetch a list of products with optional filters
 */
export const useGetProducts = (input: GetProductsInput = {}) => {
  const { data, loading, error, refetch } =
    useFetchProducts<GetProductsResponse>({
      query: GET_PRODUCTS,
      key: "getProducts",
      variables: { input },
    });

  return {
    products: data?.success ? data.products : [],
    loading,
    error: data?.error || error,
    refetch,
  };
};

/**
 * Hook to fetch featured products
 */
export const useGetFeaturedProducts = () => {
  const { data, loading, error, refetch } =
    useFetchProducts<GetProductsResponse>({
      query: GET_FEATURED_PRODUCTS,
      key: "getFeaturedProducts",
    });

  return {
    products: data?.success ? data.products : [],
    loading,
    error: data?.error || error,
    refetch,
  };
};
