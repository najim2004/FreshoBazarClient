import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { TiStarOutline } from "react-icons/ti";

export const ProductInfo: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="px-6">
      <h3 className="text-3xl font-bold text-color-primary mb-5">
        Deliciously Ella
      </h3>
      <div className="flex items-center gap-6">
        <h3 className="text-3xl font-bold text-primary">20.72 TK</h3>
        <p className="text-2xl font-semibold text-color-secondary">500g</p>
      </div>
      <hr className="mt-4 mb-3 border-gray-300" />
      <p className="text-xl font-semibold text-color-primary">Quantity:</p>
      <div className="mt-4">
        <div className="bg-white flex items-center gap-6 p-1 rounded-full w-max text-color-primary">
          <button
            onClick={() => setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))}
            className="size-10 flex items-center justify-center bg-gray-100 text-2xl rounded-full active:bg-primary/60 active:text-white"
          >
            <MinusIcon />
          </button>
          <span className="text-2xl font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="size-10 flex items-center justify-center bg-gray-100 text-2xl rounded-full active:bg-primary/60 active:text-white"
          >
            <PlusIcon />
          </button>
        </div>
      </div>
      <div className="my-6 flex items-center gap-6">
        <p className="flex items-center justify-center gap-1 text-lg font-semibold w-max text-color-primary">
          <TiStarOutline className="text-yellow-500" />
          4.0
        </p>
        <p className="text-lg text-color-primary font-semibold">Available</p>
      </div>
      <p className="text-lg text-color-primary font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et
        deleniti eligendi nemo corporis voluptatum dignissimos facilis,
        temporibus, tempora eius unde illo, officiis ipsam alias quia dicta
        earum necessitatibus voluptatibus?
      </p>
      <table className="my-6 text-xl font-semibold text-color-primary w-full">
        <tbody>
          <tr>
            <td>Total Weight/Piece</td>
            <td>:</td>
            <td>500g</td>
          </tr>
          <tr>
            <td>Total Amount</td>
            <td>:</td>
            <td>20.72 TK</td>
          </tr>
        </tbody>
      </table>

      <hr className="mt-4 mb-3 border-gray-300" />
      <div className="flex justify-start items-center gap-6 mt-8">
        <button className="max-w-[250px] w-full rounded-full py-3 text-white text-2xl font-semibold bg-color-primary">
          Checkout
        </button>
        <button className="max-w-[250px] w-full rounded-full py-3 text-white text-2xl font-semibold bg-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
