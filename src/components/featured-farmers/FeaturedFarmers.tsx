import React from "react";
import { BiExpandHorizontal } from "react-icons/bi";

export const FeaturedFarmers: React.FC = () => {
  return (
    <section className="mt-8">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-fjalla text-color-primary font-semibold">
          Featured Farmers
        </h3>
        <span className="text-color-ternary text-3xl">
          <BiExpandHorizontal />
        </span>
      </div>
    </section>
  );
};
