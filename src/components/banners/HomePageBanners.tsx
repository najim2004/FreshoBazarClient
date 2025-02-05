import React from "react";
import organicVegetables from "../../assets/vegetables.png";
import legumes from "../../assets/legumes.png";
import meats from "../../assets/meats.png";
import spices from "../../assets/spices.png";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { transparentBg } from "@/assets/amader-krishok-assets";

export const HomePageBanners: React.FC = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full ease-in-out transition-all"
    >
      <CarouselContent>
        {/* 1st */}
        <CarouselItem>
          <div className="relative w-full grid grid-cols-2 items-center justify-between bg-green-50  h-[260px] xl:min-h-[50vh] px-3 md:px-10">
            <div
              className="absolute inset-0 opacity-[0.03] z-0"
              style={{
                background: `url(${transparentBg}) lightgray 50% / cover no-repeat`,
              }}
            ></div>
            <div className="h-full flex flex-col justify-center items-center text-center flex-1">
              <h2 className="text-lg xl:text-4xl font-black text-primary xl:leading-[50px]">
                Fresh Vegetables, Directly from Farmers!
              </h2>
              <p className="text-xs md:text-sm font-medium text-color-primary mt-3 mb-3 xl:mb-8">
                A Variety of Vegetables for Your Choice
              </p>
              <Button variant="default" className="w-max bg-primary h-8 xl:h-11 text-sm xl:text-xl font-semibold rounded-lg hover:bg-primary/80">
                Shop Now <ArrowRight />
              </Button>
            </div>
            <img src={organicVegetables} alt="" className="w-full" />
          </div>
        </CarouselItem>

        {/* 2nd */}
        <CarouselItem>
          <div className="relative w-full flex items-center justify-between bg-orange-50 h-[260px] xl:min-h-[50vh] px-3 md:px-10">
            <div
              className="absolute inset-0 opacity-[0.03] z-0"
              style={{
                background: `url(${transparentBg}) lightgray 50% / cover no-repeat`,
              }}
            ></div>
            <div className="h-full flex flex-col justify-center items-center text-center flex-1">
              <h2 className="text-lg xl:text-4xl font-black text-primary xl:leading-[50px]">
                Premium Quality Meat & Poultry, Fresh to Your Door!
              </h2>
              <p className="text-xs md:text-sm font-medium text-color-primary mt-3 mb-3 xl:mb-8">
                Carefully sourced, expertly prepared for the finest taste.
              </p>
              <Button variant="default" className="w-max bg-primary h-8 xl:h-11 text-sm xl:text-xl font-semibold rounded-lg hover:bg-primary/80">
                Shop Now <ArrowRight />
              </Button>
            </div>
            <img src={meats} alt="" className="w-[150px] xl:h-[70%] max-w-[50%] flex-1" />
          </div>
        </CarouselItem>

        {/* 3rd */}
        <CarouselItem>
          <div className="relative w-full flex items-center justify-between bg-yellow-50 h-[260px] xl:min-h-[50vh] px-3 md:px-10">
            <div
              className="absolute inset-0 opacity-[0.03] z-0"
              style={{
                background: `url(${transparentBg}) lightgray 50% / cover no-repeat`,
              }}
            ></div>
            <div className="h-full flex flex-col justify-center items-center text-center flex-1">
              <h2 className="text-lg xl:text-4xl font-black text-primary xl:leading-[50px]">
                Premium Quality Meat & Poultry, Fresh to Your Door!
              </h2>
              <p className="text-xs md:text-sm font-medium text-color-primary mt-3 mb-3 xl:mb-8">
                Carefully sourced, expertly prepared for the finest taste.
              </p>
              <Button variant="default" className="w-max bg-primary h-8 xl:h-11 text-sm xl:text-xl font-semibold rounded-lg hover:bg-primary/80">
                Shop Now <ArrowRight />
              </Button>
            </div>
            <img src={legumes} alt="" className="w-[150px] xl:h-[70%] max-w-[50%] flex-1" />
          </div>
        </CarouselItem>

        {/* 4th */}
        <CarouselItem>
          <div className="relative w-full flex items-center justify-between bg-amber-50 h-[260px] xl:min-h-[50vh] px-3 md:px-10">
            <div
              className="absolute inset-0 opacity-[0.03] z-0"
              style={{
                background: `url(${transparentBg}) lightgray 50% / cover no-repeat`,
              }}
            ></div>
            <div className="h-full flex flex-col justify-center items-center text-center flex-1">
              <h2 className="text-lg xl:text-4xl font-black text-primary xl:leading-[50px]">
                Premium Quality Meat & Poultry, Fresh to Your Door!
              </h2>

              <p className="text-xs md:text-sm font-medium text-color-primary mt-3 mb-3 xl:mb-8">
                Carefully sourced, expertly prepared for the finest taste.
              </p>

              <Button variant="default" className="w-max bg-primary h-8 xl:h-11 text-sm xl:text-xl font-semibold rounded-lg hover:bg-primary/80">
                Shop Now <ArrowRight />
              </Button>
            </div>

            <img src={spices} alt="" className="w-[150px] xl:h-[70%] max-w-[50%] flex-1" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-2 bg-primary/80 text-white hover:bg-primary border-none hover:text-white" />
      <CarouselNext className="right-2 bg-primary/80 text-white hover:bg-primary border-none hover:text-white" />
    </Carousel>
  );
};
