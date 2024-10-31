import React from "react";

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
  return (
    <section className="mt-10 w-screen lg:max-w-[calc(100vw-160px)] overflow-x-hidden lg:w-full text-center">
      <h3 className="text-2xl text-color-primary font-semibold text-start">
        Categories
      </h3>

      <div
        className={`mt-5 flex flex-wrap gap-7 overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="shadow-md mb-1 w-[80px] h-[80px] lg:h-[170px] lg:w-[170px] rounded-2xl bg-gradient-to-b from-white to-teal-200 flex flex-col gap-0.5 lg:gap-2 justify-center items-center overflow-hidden">
          <img
            src="https://img.icons8.com/?size=100&id=9gYPgyVfWWyJ&format=png&color=000000"
            alt="All"
            className="size-10 lg:size-auto"
          />
          <h3 className="text-xs lg:text-xl font-semibold text-color-primary">
            All
          </h3>
        </div>
        <div className="shadow-md mb-1 w-[80px] h-[80px] lg:h-[170px] lg:w-[170px] rounded-2xl bg-gradient-to-b from-white to-yellow-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=3UgNmew1vzqe&format=png&color=000000"
            alt="Crops"
            className="size-10 lg:size-auto"
          />
          <h3 className="text-xs lg:text-xl font-semibold text-color-primary">
            Crops
          </h3>
        </div>
        <div className="shadow-md mb-1 w-[80px] h-[80px] lg:h-[170px] lg:w-[170px] rounded-2xl bg-gradient-to-b from-white to-green-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=60gXFEh9q6ak&format=png&color=000000"
            alt="Vegetables"
            className="size-10 lg:size-auto"
          />
          <h3 className="text-xs lg:text-xl font-semibold text-color-primary">
            Vegetables
          </h3>
        </div>
        <div className="shadow-md mb-1 w-[80px] h-[80px] lg:h-[170px] lg:w-[170px] rounded-2xl bg-gradient-to-b from-white to-blue-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=A4urS7jrPT6w&format=png&color=000000"
            alt="Fruits"
            className="size-10 lg:size-auto"
          />
          <h3 className="text-xs lg:text-xl font-semibold text-color-primary">
            Fruits
          </h3>
        </div>
        <div className="shadow-md mb-1 w-[80px] h-[80px] lg:h-[170px] lg:w-[170px] rounded-2xl bg-gradient-to-b from-white to-orange-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=fIDFTrIN5mpQ&format=png&color=000000"
            alt="Dairy Products"
            className="size-10 lg:size-auto"
          />
          <h3 className="text-xs lg:text-xl font-semibold text-color-primary">
            Dairy Products
          </h3>
        </div>
        <div className="shadow-md mb-1 w-[80px] h-[80px] lg:h-[170px] lg:w-[170px] rounded-2xl bg-gradient-to-b from-white to-gray-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=7TtbUssWWE1h&format=png&color=000000"
            alt="Meat & Poultry"
            className="size-10 lg:size-auto"
          />
          <h3 className="text-xs lg:text-xl font-semibold text-color-primary">
            Meat & Poultry
          </h3>
        </div>
        <div className="shadow-md mb-1 w-[80px] h-[80px] lg:h-[170px] lg:w-[170px] rounded-2xl bg-gradient-to-b from-white to-sky-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=LQtPlm6R3VRd&format=png&color=000000"
            alt="Fish"
            className="size-10 lg:size-auto"
          />
          <h3 className="text-xs lg:text-xl font-semibold text-color-primary">
            Fish
          </h3>
        </div>
        <div className="shadow-md mb-1 w-[80px] h-[80px] lg:h-[170px] lg:w-[170px] rounded-2xl bg-gradient-to-b from-white to-lime-200 flex flex-col gap-2 justify-center items-center">
          <img
            src="https://img.icons8.com/?size=100&id=G9DaXalUAhGP&format=png&color=000000"
            alt="Grains & Pulses"
            className="size-10 lg:size-auto"
          />
          <h3 className="text-xs lg:text-xl font-semibold text-color-primary">
            Grains & Pulses
          </h3>
        </div>
      </div>
    </section>
  );
};
