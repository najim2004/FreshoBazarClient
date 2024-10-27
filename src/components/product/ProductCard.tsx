import React from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, MapPin } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  unit: string;
  description: string;
  imageUrl: string;
  farmerName: string;
  farmLocation: string;
  isOrganic: boolean;
  isSustainable: boolean;
  className: string;
}

export const ProductCard = ({
  name = "Deliciously Ella",
  price = 20,
  unit = "500g",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.!",
  imageUrl = "https://www.haxnicks.co.uk/cdn/shop/articles/tomatoes.jpg?v=1623952431&width=1903",
  farmerName = "Najim",
  farmLocation = "cumilla",
  isOrganic = true,
  isSustainable = true,
  className,
}: ProductCardProps) => {
  const navigator = useNavigate();

  // Updated to handle div clicks
  const onViewDetails = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation(); // Prevent click from bubbling to parent
    navigator(`/product/details`); // Navigate to details page
  };

  // Updated to handle button clicks
  const onAddToCart = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation(); // Prevent click from bubbling to parent
    // Logic to add the item to the cart can go here
    console.log("Item added to cart!");
  };

  return (
    <div
      onClick={onViewDetails}
      className={`max-w-sm rounded-lg overflow-hidden shadow-lg bg-beige-100 transition-transform duration-300 md:hover:scale-105 bg-white ${className}`}
    >
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 flex space-x-2">
          {isOrganic && (
            <span className="bg-primary/80 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
              <Leaf className="w-3 h-3 mr-1" />
              Organic
            </span>
          )}
          {isSustainable && (
            <span className="bg-brown-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              Sustainable
            </span>
          )}
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-color-primary">{name}</div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-600">per {unit}</span>
        </div>
        <button
          onClick={onAddToCart}
          className="w-full bg-primary/80 hover:bg-primary text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
      <div className="px-6 py-4 bg-beige-200 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://img.icons8.com/?size=100&id=sW0a9CbRV4bi&format=png&color=000000"
            alt={farmerName}
            className="rounded-full mr-2 size-10"
          />
          <span className="text-sm font-semibold text-color-primary">
            {farmerName}
          </span>
        </div>
        <div className="flex items-center text-brown-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-xs">{farmLocation}</span>
        </div>
      </div>
    </div>
  );
};
