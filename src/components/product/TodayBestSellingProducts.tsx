import React from "react";
import { ProductCard, ProductCardSkeleton } from "./ProductCard";
import { useGetProducts } from "@/apollo/hooks/product.hooks";

export const TodayBestSellingProducts: React.FC = () => {
  const { products, loading, error } = useGetProducts({});

  if (error) return <p>Error: Failed to get products</p>;

  return (
    <section className="mt-10">
      <h3 className="text-2xl text-color-primary font-semibold">
        Today's Best Selling Products
      </h3>
      <div className="mt-8 flex items-center justify-start gap-4 lg:gap-6 w-full overflow-x-auto text-nowrap pb-2">
        {/* Category Buttons */}
        <button className="px-3.5 lg:px-6 py-1 lg:py-1.5 rounded-full text-white bg-primary text-base lg:text-lg font-medium border">
          All
        </button>
        <button className="px-3.5 lg:px-6 py-1 lg:py-1.5 rounded-full bg-transparent text-primary text-base lg:text-lg font-medium bg-white hover:bg-primary hover:text-white">
          Chicken
        </button>
        <button className="px-3.5 lg:px-6 py-1 lg:py-1.5 rounded-full bg-transparent text-primary text-base lg:text-lg font-medium bg-white hover:bg-primary hover:text-white">
          Tomatoes
        </button>
        <button className="px-3.5 lg:px-6 py-1 lg:py-1.5 rounded-full bg-transparent text-primary text-base lg:text-lg font-medium bg-white hover:bg-primary hover:text-white">
          Bananas
        </button>
        <button className="px-3.5 lg:px-6 py-1 lg:py-1.5 rounded-full bg-transparent text-primary text-base lg:text-lg font-medium bg-white hover:bg-primary hover:text-white">
          Cat Fish
        </button>
        <button className="px-3.5 lg:px-6 py-1 lg:py-1.5 rounded-full bg-transparent text-primary text-base lg:text-lg font-medium bg-white hover:bg-primary hover:text-white">
          Dragon Fruit
        </button>
      </div>
      <div className="display-grid mt-10">
        {/* Render Products */}
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            discount={product.discountValue}
            unitType={product.unitType}
            unitSize={product.unitSize}
            category={product.categoryName}
            image={product?.thumbnail?.url}
            updatedAt={product?.updatedAt}
          />
        ))}
        {loading &&
          (products ? products?.length <= 0 : true) &&
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => (
            <ProductCardSkeleton />
          ))}
      </div>
    </section>
  );
};
