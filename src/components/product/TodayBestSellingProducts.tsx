import React from "react";
import { ProductCard } from "./ProductCard";

export const TodayBestSellingProducts: React.FC = () => {
  return (
    <section className="mt-10">
      <h3 className="text-2xl font-fjalla text-color-primary font-semibold">
        Todays Best Selling Products
      </h3>
      <div className="mt-8 flex items-center justify-start gap-6">
        <button className="px-6 py-2 rounded-full text-white bg-primary text-lg font-fjalla font-medium border">
          All
        </button>
        <button className="px-6 py-2 rounded-full bg-transparent text-primary text-lg font-fjalla font-medium border">
          Chicken
        </button>
        <button className="px-6 py-2 rounded-full bg-transparent text-primary text-lg font-fjalla font-medium border">
          Tomatoes
        </button>
        <button className="px-6 py-2 rounded-full bg-transparent text-primary text-lg font-fjalla font-medium border">
          Bananas
        </button>
        <button className="px-6 py-2 rounded-full bg-transparent text-primary text-lg font-fjalla font-medium border">
          Cat Fish
        </button>
        <button className="px-6 py-2 rounded-full bg-transparent text-primary text-lg font-fjalla font-medium border">
          Dragon Fruit
        </button>
      </div>
      <div className="flex flex-wrap gap-[38px] mt-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};
