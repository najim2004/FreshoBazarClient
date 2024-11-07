import { FeaturedProducts } from "@/components/product/FeaturedProducts";
import React from "react";
import { TodayBestSellingProducts } from "@/components/product/TodayBestSellingProducts";
import OrganicBanner from "@/components/banners/OrganicBanner";
import { HomePageBanners } from "@/components/banners/HomePageBanners";
import { Subscription } from "@/components/subscribtion/Subscripton";
import { HomePagePromotion } from "@/components/promotions/HomPagePromotion";
// import { FeaturedFarmers } from "@/components/featured-farmers/FeaturedFarmers";

export const Home: React.FC = () => {
  return (
    <div className="flex-grow max-w-full lg:max-w-[calc(100%-274px)] xl:max-w-[calc(100%-548px)]">
      <HomePageBanners />
      <FeaturedProducts />
      <HomePagePromotion />
      {/* <OrganicBanner /> */}
      {/* <FeaturedFarmers /> */}
      <TodayBestSellingProducts />
      <Subscription />
    </div>
  );
};
