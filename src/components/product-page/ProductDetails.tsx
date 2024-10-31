import React, { useState } from "react";
import {
  Star,
  Heart,
  Menu,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  LucideShare2,
} from "lucide-react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiMessage3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

const productImages: ProductImage[] = [
  {
    id: 1,
    src: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/fruits-and-vegetables-thumb.jpg",
    alt: "Whole and cut mango",
  },
  {
    id: 2,
    src: "https://www.bhg.com/thmb/Mwd_YEkDbVg_fPsUDcWr3eZk9W0=/5645x0/filters:no_upscale():strip_icc()/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg",
    alt: "Whole mango",
  },
  {
    id: 3,
    src: "https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg",
    alt: "Mango side view",
  },
  {
    id: 4,
    src: "https://images2.minutemediacdn.com/image/upload/c_crop,w_1097,h_617,x_0,y_0/c_fill,w_752,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/643188-gettyimages-153946385-ca1ccfaad9be44325afc434b305adc0d.jpg",
    alt: "Cut mango",
  },
];

export const ProductDetails: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Product Images */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <div className="relative">
            <span className="absolute top-2 left-2 bg-primary border-primary text-white px-2 py-1 text-xs font-bold rounded">
              New
            </span>
            <img
              src={productImages[currentImage].src}
              alt="Banganapalli Indian Mango"
              className="w-full h-[650px] rounded-md object-fill"
            />
            <button
              onClick={(): void =>
                setCurrentImage((prev: number): number =>
                  prev == 0 ? 0 : prev - 1
                )
              }
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md active:scale-95 active:opacity-90 hover:bg-primary text-color-primary hover:text-white"
            >
              <ChevronLeft className="size-8" />
            </button>
            <button
              onClick={(): void =>
                setCurrentImage((prev: number): number =>
                  prev == productImages.length - 1
                    ? productImages.length - 1
                    : prev + 1
                )
              }
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md active:scale-95 active:opacity-90 hover:bg-primary text-color-primary hover:text-white"
            >
              <ChevronRight className="size-8" />
            </button>
          </div>
          <div className="mt-4 flex space-x-2 overflow-x-auto">
            {productImages.map((image, index) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className={`w-20 h-20 rounded-md cursor-pointer ${
                  index === currentImage ? "border-2 border-primary" : ""
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="md:w-1/2 md:pl-8">
          <div className="flex justify-between">
            <div className="">
              <p className="text-sm text-gray-500 mb-1">Vegetables</p>
              <h1 className="text-3xl font-bold mb-2 text-color-primary">
                Banganapalli Indian Mango
              </h1>
              <p className="text-sm text-primary mb-2">
                In Stock, 4 Left Only | Item Number: Nort-360
              </p>

              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <Star className="w-5 h-5 text-gray-300 fill-current" />
                </div>
                <span className="ml-2 text-sm text-color-ternary">
                  4.25 Out of 5.00 | 179 Reviews
                </span>
              </div>
            </div>
            <div className="flex space-x-2 size-max">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <Heart className="w-6 h-6 text-gray-600" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <LucideShare2 className="w-6 h-6 text-gray-600" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          <div className=" mb-4">
            <span className="text-3xl font-bold text-primary">$30.98</span>
            <span className="ml-2 text-xl text-gray-500 line-through">
              $35.98
            </span>
            <span className="ml-2 text-lg text-primary border-primary">
              30% Off
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Excluding of shipping charges
          </p>

          <div className="mb-4 flex items-center gap-6">
            <label className="text-sm font-medium text-gray-700">SIZE</label>
            <p className="text-sm font-medium text-primary">1kg / $6.00</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">KEY INFORMATION</h3>
            <p className="text-sm text-gray-600">
              Guaranteed fresh for 5+ days, inc. delivery day
            </p>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Quantity:</label>
              <div className="flex justify-center items-center gap-3 bg-primary/80 rounded-full p-1">
                <button
                  className="py-1.5 px-1.5 text-primary bg-white rounded-full active:opacity-90 active:scale-105"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
                    e.stopPropagation();
                    setQuantity((prev: number): number =>
                      prev == 1 ? 1 : prev - 1
                    );
                  }}
                >
                  <Minus />
                </button>
                <span className="text-white font-semibold w-7 flex justify-center items-center">
                  {quantity}
                </span>
                <button
                  className="py-1.5 px-1.5 text-primary bg-white rounded-full active:opacity-90 active:scale-105"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
                    e.stopPropagation();
                    setQuantity((prev: number): number => prev + 1);
                  }}
                >
                  <Plus />
                </button>
              </div>
            </div>
            <button className="flex-1 text-lg font-semibold bg-color-primary text-white py-2 px-4 rounded-2xl">
              30TK / 1kg
            </button>
            <button className="flex-1 text-lg font-semibold flex justify-center items-center gap-2 bg-primary/80 text-white py-2 px-4 rounded-2xl hover:bg-primary transition duration-300">
              <MdOutlineShoppingBag /> ADD TO CART
            </button>
          </div>

          <h3 className="text-lg font-semibold mb-2">SOLD BY:</h3>
          <div className="bg-gray-100 p-6 rounded-md mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Link to="#" className="border rounded-full border-primary/50">
                  <img
                    src="https://img.icons8.com/?size=100&id=sW0a9CbRV4bi&format=png&color=000000"
                    className="rounded-full size-10"
                  />
                </Link>
                <div className="">
                  <p className="font-medium">Vanca Retail Shop</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Alabama, United States
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6">
                <button className="text-3xl font-semibold text-primary">
                  <RiMessage3Line />
                </button>
                <button className="text-lg font-medium text-blue-500">
                  Follow
                </button>
              </div>
            </div>
            <hr className="border-primary/20 my-5" />
            <div className="">
              <h3 className="text-base font-semibold mb-2">Seller Reviews:</h3>
              <div className="">
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <Star className="w-5 h-5 text-gray-300 fill-current" />
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  4.25 Out of 5.00 | 179 Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
