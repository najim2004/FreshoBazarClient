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
    <section className="mt-10 max-w-[calc(100vw-160px)] overflow-x-hidden w-full">
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
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gradient-to-b from-white to-teal-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=9gYPgyVfWWyJ&format=png&color=000000"
            alt="All"
          />
          <h3 className="text-xl font-semibold text-color-primary">All</h3>
        </div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gradient-to-b from-white to-yellow-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=3UgNmew1vzqe&format=png&color=000000"
            alt="Crops"
          />
          <h3 className="text-xl font-semibold text-color-primary">Crops</h3>
        </div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gradient-to-b from-white to-green-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=60gXFEh9q6ak&format=png&color=000000"
            alt="Vegetables"
          />
          <h3 className="text-xl font-semibold text-color-primary">
            Vegetables
          </h3>
        </div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gradient-to-b from-white to-blue-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=A4urS7jrPT6w&format=png&color=000000"
            alt="Fruits"
          />
          <h3 className="text-xl font-semibold text-color-primary">Fruits</h3>
        </div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gradient-to-b from-white to-orange-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=fIDFTrIN5mpQ&format=png&color=000000"
            alt="Dairy Products"
          />
          <h3 className="text-xl font-semibold text-color-primary">
            Dairy Products
          </h3>
        </div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gradient-to-b from-white to-gray-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=7TtbUssWWE1h&format=png&color=000000"
            alt="Meat & Poultry"
          />
          <h3 className="text-xl font-semibold text-color-primary">
            Meat & Poultry
          </h3>
        </div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gradient-to-b from-white to-sky-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=LQtPlm6R3VRd&format=png&color=000000"
            alt="Fish"
          />
          <h3 className="text-xl font-semibold text-color-primary">Fish</h3>
        </div>
        <div className="shadow-md mb-1 min-h-[170px] min-w-[170px] rounded-2xl bg-gradient-to-b from-white to-lime-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=G9DaXalUAhGP&format=png&color=000000"
            alt="Grains & Pulses"
          />
          <h3 className="text-xl font-semibold text-color-primary">
            Grains & Pulses
          </h3>
        </div>
      </div>
    </section>
  );
};
