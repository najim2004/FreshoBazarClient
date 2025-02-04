import React from "react";
import { BiExpandHorizontal } from "react-icons/bi";
import { ProductCard } from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import required modules
import { FreeMode, Autoplay } from "swiper/modules"; // Add Autoplay
import { useGetFeaturedProducts } from "@/apollo/hooks/product.hooks";

export const FeaturedProducts: React.FC = () => {
  const { products } = useGetFeaturedProducts();
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl text-color-primary font-semibold">
          Featured Products
        </h3>
        <span className="text-color-ternary text-3xl">
          <BiExpandHorizontal />
        </span>
      </div>
      <div className="mt-5">
        <Swiper
          spaceBetween={24}
          freeMode={true}
          modules={[FreeMode, Autoplay]} // Add Autoplay to modules
          className="mySwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Pause on hover
          }}
          speed={800}
          effect="slide"
          cssMode={false}
          breakpoints={{
            359: { slidesPerView: 1 },
            360: { slidesPerView: 2 },
            480: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1536: { slidesPerView: 4 },
          }}
        >
          {products?.map((product) => (
            <SwiperSlide className="mb-1" key={product?._id}>
              <ProductCard
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

