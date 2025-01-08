import React from "react";
import { ProductCard } from "./ProductCard";
import { useQuery, gql } from "@apollo/client";

// types
interface Product {
  _id: string; // _id is used in the GraphQL response
  title: string; // Corresponding to the product title
  discountValue: number;
  thumbnail: { id: string; url: string }; // Image or thumbnail URL
  price: number;
  unitType: string;
  unitSize: number;
  categoryId: string; // Product category (e.g., "meat", "vegetables", etc.)
  categoryName: string; // Product category (e.g., "meat", "vegetables", etc.)
}

// Define the response structure from the `GET_PRODUCTS` query
interface GetProductsResponse {
  getProducts: {
    success: boolean;
    error: boolean;
    error_message: string | null;
    products?: Product[];
  };
}

const GET_PRODUCTS = gql`
  query {
    getProducts {
      success
      error
      error_message
      products {
        _id
        title
        discountValue
        thumbnail {
          id
          url
        }
        price
        unitType
        unitSize
        categoryId
        categoryName
      }
    }
  }
`;

export const TodayBestSellingProducts: React.FC = () => {
  const { data, loading, error } = useQuery<GetProductsResponse>(GET_PRODUCTS);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
        {data?.getProducts?.products?.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            discount={product.discountValue}
            unitType={product.unitType}
            unitSize={product.unitSize}
            category={product.categoryName}
            image={product.thumbnail.url}
          />
        ))}
      </div>
    </section>
  );
};
