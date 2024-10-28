import React from "react";
import { BiExpandHorizontal } from "react-icons/bi";
import { ProductCard } from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import required modules
import { FreeMode } from "swiper/modules";

export const BestSellingProducts: React.FC = () => {
  return (
    <section className="mt-10 max-w-[calc(100vw-160px)] w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-fjalla text-color-primary font-semibold">
          Best Selling Products
        </h3>
        <span className="text-color-ternary text-3xl">
          <BiExpandHorizontal />
        </span>
      </div>
      <div className="mt-5">
        <Swiper
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile screens
            640: { slidesPerView: 2 }, // Small screens
            768: { slidesPerView: 2 }, // Medium screens (tablets)
            1024: { slidesPerView: 3 }, // Large screens (laptops)
            1280: { slidesPerView: 4 }, // Extra large screens (desktops)
            1536: { slidesPerView: 5 }, // 2X extra large screens
            1920: { slidesPerView: 5 }, // 3X extra large screens
            2560: { slidesPerView: 6 }, // 4X extra large screens
          }}
        >
          {[...Array(8)].map((_, index) => (
            <SwiperSlide className="my-4" key={index}>
              <ProductCard className="hover:scale-100" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
