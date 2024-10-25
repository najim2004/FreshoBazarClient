import React, { useEffect, useRef, useState } from "react";
import { BiExpandHorizontal } from "react-icons/bi";
import { ProductCard } from "./ProductCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const BestSellingProducts: React.FC = () => {
  const bestSellingDivRef = useRef<HTMLDivElement>(null);
  const [divWidth, setDivWidth] = useState<number>();

  useEffect(() => {
    if (bestSellingDivRef.current) {
      const rect = bestSellingDivRef.current.getBoundingClientRect();
      setDivWidth(rect?.width / (260 + 32) < 1 ? 1 : rect?.width / (260 + 32));
      console.log(rect?.width);
    }
  }, []);

  const [bestSellingSliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: {
      perView: divWidth,
      spacing: 38,
    },
    drag: true,
    rubberband: false,
  });

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-fjalla text-color-primary font-semibold">
          Best Selling Products
        </h3>
        <span className="text-color-ternary text-3xl">
          <BiExpandHorizontal />
        </span>
      </div>
      <div ref={bestSellingDivRef} className="mt-5">
        <div ref={bestSellingSliderRef} className="keen-slider">
          <div className="keen-slider__slide ">
            <ProductCard />
          </div>
          <div className="keen-slider__slide ">
            <ProductCard />
          </div>
          <div className="keen-slider__slide ">
            <ProductCard />
          </div>
          <div className="keen-slider__slide ">
            <ProductCard />
          </div>
          <div className="keen-slider__slide ">
            <ProductCard />
          </div>
          <div className="keen-slider__slide ">
            <ProductCard />
          </div>
          <div className="keen-slider__slide ">
            <ProductCard />
          </div>
          <div className="keen-slider__slide ">
            <ProductCard />
          </div>
          <div className="keen-slider__slide ">
            <ProductCard />
          </div>
          <div className="keen-slider__slide ">
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};
