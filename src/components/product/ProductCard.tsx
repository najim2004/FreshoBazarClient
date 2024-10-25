import React from "react";
import { HiPlus } from "react-icons/hi";
import productImg from "../../assets/product1.webp";

export const ProductCard: React.FC = () => {
  return (
    <div className="h-[320px] !w-[260px] !max-w-[260px] shadow-md bg-white rounded-2xl p-6 flex flex-col mb-1">
      <div className="w-full flex-grow rounded-xl overflow-hidden p-2">
        <img
          src={productImg}
          className="h-full w-full object-contain object-center"
          alt=""
        />
      </div>
      <h3 className="text-xl font-semibold text-color-primary mb-1 mt-3 line-clamp-1">
        Deliciously Ella
      </h3>
      <div className="flex justify-between items-center">
        <div className="">
          <p className="text-xl font-semibold text-color-secondary mb-2">
            500g
          </p>
          <h3 className="text-2xl font-bold text-color-primary font-fjalla">
            20.72 TK
          </h3>
        </div>
        <button className="p-3 text-2xl font-black rounded-full flex justify-center items-center text-white bg-primary">
          <HiPlus />
        </button>
      </div>
    </div>
  );
};
