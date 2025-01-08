import { AboutProduct } from "@/components/product-page/AboutProduct";
import { ProductDetails } from "@/components/product-page/ProductDetails";
import { TabsComponent } from "@/components/product-page/TabsComponent";
import { ProductReviews } from "@/components/product-page/ProductReviews";
import React, { useState } from "react";
import { ShippingReturns } from "@/components/product-page/ShippingReturns";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { useParams } from "react-router-dom";

type Tab = "about" | "ratings" | "shipping";

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "About the Product" },
  { id: "ratings", label: "Ratings & Reviews" },
  { id: "shipping", label: "Shipping & Returns" },
];

export const ProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("about");
  const { id } = useParams();
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <ProductDetails id={id || ""} />
      <TabsComponent
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      {activeTab === "about" && <AboutProduct />}
      {activeTab === "ratings" && <ProductReviews />}
      {activeTab === "shipping" && <ShippingReturns />}
      <RelatedProducts />
    </div>
  );
};
