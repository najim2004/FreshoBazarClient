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

export const HomePageBanners: React.FC = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {/* 1st */}
        <CarouselItem>
          <div className="w-full flex items-center justify-between bg-green-50 h-[50vh] px-10">
            <div className="h-full flex flex-col justify-center items-center text-center flex-1">
              <h2 className="text-4xl font-black text-primary leading-[50px]">
                Fresh Vegetables, Directly from Farmers!
              </h2>
              <p className="font-medium text-color-primary mt-3 mb-8">
                A Variety of Vegetables for Your Choice
              </p>
              <Button className="w-max bg-primary h-11 text-xl font-semibold rounded-xl hover:bg-primary/80">
                Shop Now <ArrowRight />
              </Button>
            </div>
            <img src={organicVegetables} alt="" className="h-[70%] " />
          </div>
        </CarouselItem>

        {/* 2nd */}
        <CarouselItem>
          <div className="w-full flex items-center justify-between bg-orange-50 h-[50vh] px-10">
            <div className="h-full flex flex-col justify-center items-center text-center flex-1">
              <h2 className="text-4xl font-black text-primary leading-[50px]">
                Premium Quality Meat & Poultry, Fresh to Your Door!
              </h2>
              <p className="font-medium text-color-primary mt-3 mb-8">
                Carefully sourced, expertly prepared for the finest taste.
              </p>
              <Button className="w-max bg-primary h-11 text-xl font-semibold rounded-xl hover:bg-primary/80">
                Shop Now <ArrowRight />
              </Button>
            </div>
            <img src={meats} alt="" className="h-[70%] max-w-[50%] flex-1" />
          </div>
        </CarouselItem>

        {/* 3rd */}
        <CarouselItem>
          <div className="w-full flex items-center justify-between bg-yellow-50 h-[50vh] px-10">
            <div className="h-full flex flex-col justify-center items-center text-center flex-1">
              <h2 className="text-4xl font-black text-primary leading-[50px]">
                Premium Quality Meat & Poultry, Fresh to Your Door!
              </h2>
              <p className="font-medium text-color-primary mt-3 mb-8">
                Carefully sourced, expertly prepared for the finest taste.
              </p>
              <Button className="w-max bg-primary h-11 text-xl font-semibold rounded-xl hover:bg-primary/80">
                Shop Now <ArrowRight />
              </Button>
            </div>
            <img src={legumes} alt="" className="h-[70%] max-w-[50%] flex-1" />
          </div>
        </CarouselItem>

        {/* 4th */}
        <CarouselItem>
          <div className="w-full flex items-center justify-between bg-amber-50 h-[50vh] px-10">
            <div className="h-full flex flex-col justify-center items-center text-center flex-1">
              <h2 className="text-4xl font-black text-primary leading-[50px]">
                Premium Quality Meat & Poultry, Fresh to Your Door!
              </h2>

              <p className="font-medium text-color-primary mt-3 mb-8">
                Carefully sourced, expertly prepared for the finest taste.
              </p>

              <Button className="w-max bg-primary h-11 text-xl font-semibold rounded-xl hover:bg-primary/80">
                Shop Now <ArrowRight />
              </Button>
            </div>

            <img src={spices} alt="" className="h-[70%] max-w-[50%] flex-1" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-2 bg-primary/80 text-white hover:bg-primary border-none hover:text-white" />
      <CarouselNext className="right-2 bg-primary/80 text-white hover:bg-primary border-none hover:text-white" />
    </Carousel>
  );
};
