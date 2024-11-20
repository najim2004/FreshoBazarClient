import { MyProducts } from "@/components/dashboard/shop/MyProducts";
import { ShopInfo } from "@/components/dashboard/shop/ShopInfo";
import React from "react";

export const MyShop: React.FC = () => {
  return (
    <div className="flex-grow">
      <ShopInfo />
      <MyProducts />
    </div>
  );
};
