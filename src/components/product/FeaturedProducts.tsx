import React from "react";
import { BiExpandHorizontal } from "react-icons/bi";
import { ProductCard } from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import required modules
import { FreeMode } from "swiper/modules";

export const FeaturedProducts: React.FC = () => {
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
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            359: { slidesPerView: 1 }, // Mobile screens
            360: { slidesPerView: 2 }, // Mobile screens
            480: { slidesPerView: 2 }, // extra small screens
            640: { slidesPerView: 3 }, // Small screens
            1536: { slidesPerView: 4 }, // 2X extra large screens
          }}
        >
          {[...Array(8)].map((_, index) => (
            <SwiperSlide className="mb-1" key={index}>
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
