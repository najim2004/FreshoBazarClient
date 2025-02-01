import { ProductCard } from "@/components/product/ProductCard";
import { AllParamsState } from "@/components/searchbar/SearchBar";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

interface Filters {
  category: string;
  dietaryOption: string;
  unitSize: string;
  price: string;
  date: string;
  otherOptions: string[];
}

export const Shop: React.FC = () => {
  const [allParams, setAllParams] = useState<AllParamsState>({
    search: "",
    subcategories: [],
    dietaryOptions: [],
    unitSize: [],
    date: [],
    price: [],
    otherOptions: [],
    priceRange: [0, 100000],
  });
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const newFilters: AllParamsState = {
      search: searchParams.get("search") || "",
      subcategories: searchParams.get("categories")?.split(",") || [],
      dietaryOptions: searchParams.get("dietaryOptions")?.split(",") || [],
      unitSize: searchParams.get("unitSize")?.split(",") || [],
      date: searchParams.get("date")?.split(",") || [],
      price: searchParams.get("price")?.split(",") || [],
      otherOptions: searchParams.get("otherOptions")?.split(",") || [],
      priceRange: searchParams.get("priceRange")?.split(",").map(Number) || [
        0, 100,
      ],
    };

    setAllParams(newFilters);
  }, [searchParams]);
  console.log(allParams);

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
