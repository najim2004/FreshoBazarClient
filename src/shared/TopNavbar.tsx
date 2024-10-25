import { IoIosSearch } from "react-icons/io";
import { RiShoppingBag3Fill } from "react-icons/ri";

import React from "react";

export const TopNavbar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-0 h-16 flex items-center gap-8 w-full px-6 z-50  text-color-primary">
      <button className="size-14 rounded-full bg-white shadow-sm"></button>

      <div className="flex-grow h-16 rounded-3xl bg-white shadow-sm py-2.5 px-4 flex items-center justify-between">
        <div className="">
          <h3 className="text-lg font-bold">Krishok Bolchi</h3>
        </div>

        <div className="flex justify-center items-center max-w-[500px] w-full h-full bg-gray-100 rounded-xl overflow-hidden">
          <input
            type="text"
            className="bg-transparent border-none outline-none flex-grow h-full pl-5"
          />
          <button className="active:scale-90 hover:font-black text-primary h-full px-3 text-2xl font-semibold">
            <IoIosSearch />
          </button>
        </div>
        <button className="bg-gray-100 text-primary flex gap-1 text-xl font-fjalla font-semibold items-center justify-center h-full px-3 rounded-xl">
          <RiShoppingBag3Fill className="text-2xl mb-1" />
          02
        </button>
      </div>
    </nav>
  );
};
