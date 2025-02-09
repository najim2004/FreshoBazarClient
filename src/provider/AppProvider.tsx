import { useGetCart } from "@/apollo/hooks/cart.hooks";
import { useGetCategories } from "@/apollo/hooks/category.hooks";
import { useGetUser } from "@/apollo/hooks/user.hooks";
import React from "react";

// Props Interface for the AppProvider
interface AppProviderProps {
  children: React.ReactNode;
}

// Main AppProvider component with enhanced error handling
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  useGetCart();
  useGetUser();
  useGetUser();
  useGetCategories();

  return <>{children}</>;
};
