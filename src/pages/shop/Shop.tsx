import { useGetProducts } from "@/apollo/hooks/product.hooks";
import {
  DateForSort,
  DietaryOptions,
  PriceForSort,
  Product,
  UnitSizeForSort,
} from "@/apollo/types/product.types";
import { ProductCard } from "@/components/product/ProductCard";
import { AllParamsState } from "@/components/searchbar/SearchBar";
import { RootState } from "@/redux/rootReducer";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

export const Shop: React.FC = () => {
  const [allParams, setAllParams] = React.useState<AllParamsState>({
    search: "",
    subcategories: [],
    dietaryOptions: [],
    unitSize: [],
    date: [],
    price: [],
    otherOptions: [],
    priceRange: [0, 100000],
  });
  const [searchParams] = useSearchParams();
  const { slug, sub_slug } = useParams();
  const categories = useSelector((state: RootState) => state?.categories);
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const newFilters: AllParamsState = {
      search: searchParams.get("search") || "",
      subcategories: searchParams.get("categories")?.split(",") || [],
      dietaryOptions: searchParams.get("dietaryOptions")?.split(",") || [],
      unitSize: searchParams.get("unitSize")?.split(",") || [],
      date: searchParams.get("date")?.split(",") || [],
      price: searchParams.get("price")?.split(",") || [],
      otherOptions: searchParams.get("otherOptions")?.split(",") || [],
      priceRange: searchParams.get("priceRange")?.split(",").map(Number) || [],
    };

    setAllParams(newFilters);
  }, [searchParams]);

  const { products: productsResponse, refetch } = useGetProducts({
    categoryId:
      slug !== "all"
        ? categories.find((category) => category.slug === slug)?._id
        : "",
    subcategories: sub_slug ? [sub_slug.toString()] : [],
    search: allParams.search,
    dietaryOptions:
      allParams.dietaryOptions[0] === "organic"
        ? DietaryOptions.organic
        : allParams.dietaryOptions[0] === "none-organic"
        ? DietaryOptions.none_organic
        : undefined,
    priceRange: allParams?.priceRange || [],
    price:
      allParams.price[0] === "lowest-price"
        ? PriceForSort.lowest_price
        : allParams.price[0] === "highest-price"
        ? PriceForSort.highest_price
        : undefined,
    unitSize:
      allParams.unitSize[0] === "bigger-first"
        ? UnitSizeForSort.bigger_first
        : allParams.unitSize[0] === "smallest-first"
        ? UnitSizeForSort.smallest_first
        : undefined,
    date:
      allParams.date[0] === "oldest"
        ? DateForSort.oldest
        : allParams.date[0] === "newest"
        ? DateForSort.newest
        : undefined,
    page: 1,
    otherOptions: allParams.otherOptions,
  });

  React.useEffect(() => {
    if (productsResponse) {
      setProducts(productsResponse);
    }
  }, [productsResponse]);

  useEffect(() => {
    refetch();
  }, [allParams, refetch, slug, sub_slug]);

  return (
    <div className="w-full flex-grow">
      <div className="w-full flex flex-col items-center justify-center bg-green-50 h-[35vh] px-10">
        <h2 className="text-4xl font-black text-primary leading-[50px]">
          Fresh Vegetables, Directly from Farmers!
        </h2>
        <p className="font-medium text-color-primary mt-3 mb-8">
          A Variety of Vegetables for Your Choice
        </p>
      </div>
      <div className="display-grid mt-10">
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
            isFavorite={product?.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};
