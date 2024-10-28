import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const HomePageBanners: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [divWidth, setDivWidth] = useState<number>();

  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setDivWidth(rect?.width / (600 + 32) < 1 ? 1 : rect?.width / (600 + 32));
    }
  }, []);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: {
      perView: divWidth,
      spacing: 32,
    },
    drag: true,
    rubberband: false,
  });

  return (
    <div
      ref={divRef}
      className="max-w-[calc(100vw-160px)] overflow-x-hidden w-full"
    >
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide h-[300px] min-w-[650px] bg-gray-50 rounded-2xl"></div>
        <div className="keen-slider__slide h-[300px] min-w-[650px] bg-gray-50 rounded-2xl"></div>
        <div className="keen-slider__slide h-[300px] min-w-[650px] bg-gray-50 rounded-2xl"></div>
        <div className="keen-slider__slide h-[300px] min-w-[650px] bg-gray-50 rounded-2xl"></div>
        <div className="keen-slider__slide h-[300px] min-w-[650px] bg-gray-50 rounded-2xl"></div>
      </div>
    </div>
  );
};
