import { ProductCard } from "@/components/product/ProductCard";
import React from "react";

export const Shop: React.FC = () => {
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
