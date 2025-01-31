import { ProductCard } from "@/components/product/ProductCard";
import React, { useEffect, useState } from "react";
import { useLocation,  } from "react-router-dom";

interface Filters {
  category: string;
  dietaryOption: string;
  unitSize: string;
  price: string;
  date: string;
  otherOptions: string[];
}

export const Shop: React.FC = () => {
  const location = useLocation();
  const [filters, setFilters] = useState<Filters>({
    category: "",
    dietaryOption: "",
    unitSize: "",
    price: "",
    date: "",
    otherOptions: [],
  });

  // Function to extract query params from URL
  const getQueryParams = React.useCallback(() => {
    const urlParams = new URLSearchParams(location.search);
    return {
     category: urlParams.get("category") || "",
     dietaryOption: urlParams.get("dietaryOption") || "",
     unitSize: urlParams.get("unitSize") || "",
     price: urlParams.get("price") || "",
     date: urlParams.get("date") || "",
     otherOptions: (urlParams.getAll("otherOptions") || []).map(
      (option) => option
     ),
    };
  }, [location.search]);

  useEffect(() => {
    // Update filters based on query params in URL
    const queryParams = getQueryParams();
    setFilters(queryParams);
  }, [getQueryParams]);

  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center bg-green-50 h-[35vh] px-10">
        <h2 className="text-4xl font-black text-primary leading-[50px]">
          Fresh Vegetables, Directly from Farmers!
        </h2>
        <p className="font-medium text-color-primary mt-3 mb-8">
          A Variety of Vegetables for Your Choice
        </p>
      </div>
      <div className="display-grid mt-10">
        {[...Array(20)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};
