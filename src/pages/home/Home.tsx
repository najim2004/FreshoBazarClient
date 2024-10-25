import { HomePageBanners } from "@/components/banners/HomePageBanners";
import { BestSellingProducts } from "@/components/product/BestSellingProducts";
import { Categories } from "@/components/categories/Categories";
import React from "react";
import { TodayBestSellingProducts } from "@/components/product/TodayBestSellingProducts";
// import { FeaturedFarmers } from "@/components/featured-farmers/FeaturedFarmers";

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      <HomePageBanners />
      <Categories />
      <BestSellingProducts />
      {/* <FeaturedFarmers /> */}
      <TodayBestSellingProducts />
    </div>
  );
};
