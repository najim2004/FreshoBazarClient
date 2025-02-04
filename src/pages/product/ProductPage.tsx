import { AboutProduct } from "@/components/product-page/AboutProduct";
import { ProductDetails } from "@/components/product-page/ProductDetails";
import { TabsComponent } from "@/components/product-page/TabsComponent";
import { ProductReviews } from "@/components/product-page/ProductReviews";
import React, { useState } from "react";
import { ShippingReturns } from "@/components/product-page/ShippingReturns";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { useParams } from "react-router-dom";
import { useGetProduct } from "@/apollo/hooks/product.hooks";

type Tab = "about" | "ratings" | "shipping";

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "About the Product" },
  { id: "ratings", label: "Ratings & Reviews" },
  { id: "shipping", label: "Shipping & Returns" },
];

export const ProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("about");
  const { id } = useParams();
  const {product, loading}=useGetProduct(id||"");
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <ProductDetails
        title={product?.title || ""}
        images={product?.images || null}
        categoryName={product?.categoryName || ""}
        unitType={product?.unitType || ""}
        unitSize={product?.unitSize || 0}
        stockSize={product?.stockSize || 0}
        price={product?.price || 0}
        isDiscountable={product?.isDiscountable || false}
        discountValue={product?.discountValue || 0}
        averageRating={product?.averageRating || 0}
        totalReviews={product?.totalReviews || 0}
        id={id || ""}
        loading={loading}
      />
      <TabsComponent
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        loading={loading}
      />
      {activeTab === "about" && (
        <AboutProduct description={product?.description} loading={loading} />
      )}
      {activeTab === "ratings" && <ProductReviews />}
      {activeTab === "shipping" && <ShippingReturns />}
      <RelatedProducts />
    </div>
  );
};
