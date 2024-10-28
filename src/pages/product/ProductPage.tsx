import { ProductDetails } from "@/components/product-page/ProductDetails";
import { TabsComponent } from "@/components/product-page/TabsComponent";
import React, { useState } from "react";

type Tab = "about" | "ratings" | "shipping" | "questions";

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "About the Product" },
  { id: "ratings", label: "Ratings & Reviews" },
  { id: "shipping", label: "Shipping & Returns" },
  { id: "questions", label: "Questions & Answers" },
];

export const ProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("about");
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <ProductDetails />
      <TabsComponent
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
    </div>
  );
};
