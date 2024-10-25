import React, { useState } from "react";
import { IoChevronUp } from "react-icons/io5";

/*
Crops: Dhan, gom, bhutta, etc.
Vegetables: Begun, aloo, potol, lau, etc.
Fruits: Kola, aam, lichu, kathal, etc.
Dairy Products: Dudh, doi, ghee, etc.
Meat & Poultry: Mangsho, murgi, dim, etc.
Fish: Rui, katla, ilish, etc.
Grains & Pulses: Dal, chola, masur, etc.
*/

export const Categories: React.FC = () => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-fjalla text-color-primary font-semibold">
          Categories
        </h3>
        <button
          className={`flex gap-2 items-center text-xl font-semibold  ${
            expand ? "text-primary" : "text-color-ternary"
          }`}
          onClick={() => setExpand(!expand)}
        >
          {expand ? "Collapse" : "View All"}{" "}
          <IoChevronUp
            className={`${
              expand ? "rotate-180" : ""
            } transition-all duration-500`}
          />
        </button>
      </div>
      <div
        className={`mt-5 flex flex-wrap gap-7 overflow-hidden transition-all duration-500 ease-in-out`}
        style={{
          maxHeight: expand ? "1000px" : "174px", // Adjust '1000px' to fit your content
        }}
      >
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gray-50"></div>
      </div>
    </section>
  );
};
