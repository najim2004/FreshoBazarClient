import React from "react";
import { ProductCard } from "./ProductCard";

export const RelatedProducts: React.FC = () => {
  return (
    <section className="mt-8">
      <h3 className="text-2xl text-color-primary font-semibold">
        Related Products
      </h3>
      <div className="display-grid mt-5">
        {[...Array(8)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </section>
  );
};
