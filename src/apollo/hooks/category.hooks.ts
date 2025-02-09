import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../queries/category.queries";
import { GetCategoriesPayload } from "../types/category.types";
import { useDispatch } from "react-redux";
import {
  setCategories,
  setError,
  setLoading,
} from "@/redux/slices/categories.slice";
import { useEffect } from "react";

export const useGetCategories = () => {
  const dispatch = useDispatch();

  const { data, error, loading } = useQuery<{
    getAllCategories: GetCategoriesPayload;
  }>(GET_ALL_CATEGORIES, {
    onCompleted: (data) => {
      if (data.getAllCategories.success) {
        dispatch(setCategories(data?.getAllCategories?.categories || []));
      } else {
        dispatch(setError(data.getAllCategories.message));
      }
    },
  });

  // Update loading state in redux
  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading, dispatch]);

  return { categories: data?.getAllCategories || [], error, loading };
};
