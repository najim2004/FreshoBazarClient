import { ProductCard } from "@/components/product/ProductCard";
import React from "react";

export const Shop: React.FC = () => {
  return (
    <div>
      <div className="display-grid mt-10">
        {[...Array(15)].map((_, index) => (
          <ProductCard key={index} className="" />
        ))}
      </div>
    </div>
  );
};
