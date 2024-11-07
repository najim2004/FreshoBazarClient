import { Categories } from "@/components/categories/Categories";
import React from "react";
import { useLocation } from "react-router-dom";

export const LeftNavbar: React.FC = () => {
  const location = useLocation();
  const isCartRoute: boolean = location.pathname.includes("/chat");
  if (isCartRoute) return null;
  return (
    <div className="min-w-[250px] hidden lg:block">
      <div className="p-4 pr-0 w-full">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Categories</h2>
        <Categories />
      </div>
    </div>
  );
};
