import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

// Dummy data for cart items
const initialCartItems = [
  {
    id: 1,
    name: "Soft Hoodie",
    price: 250000,
    size: "S",
    image: "/placeholder.svg?height=80&width=80&text=Hoodie",
  },
  {
    id: 2,
    name: "Leather Bag",
    price: 180000,
    size: "S",
    image: "/placeholder.svg?height=80&width=80&text=Bag",
  },
  {
    id: 3,
    name: "Sunglass",
    price: 399000,
    size: "S",
    image: "/placeholder.svg?height=80&width=80&text=Sunglass",
  },
];

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [promoCode, setPromoCode] = useState("");

  const toggleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const removeSelectedItems = () => {
    setCartItems(cartItems.filter((item) => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="px-4 py-8">
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>&gt;</li>
          <li>Cart</li>
        </ol>
      </nav>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-black rounded border-gray-300"
                checked={selectedItems.length === cartItems.length}
                onChange={toggleSelectAll}
              />
              <span className="ml-2 text-sm text-gray-700">Select All</span>
            </label>
            <button
              onClick={removeSelectedItems}
              className="text-red-500 text-sm hover:text-red-700"
              disabled={selectedItems.length === 0}
            >
              Remove
            </button>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-t py-4">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-black rounded border-gray-300"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleSelectItem(item.id)}
              />
              <div className="ml-4 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded size-[80px]"
                />
              </div>
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Rp {item.price.toLocaleString()}
                </p>
                <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="ml-4">
                <Trash2 className="h-5 w-5 text-gray-400 hover:text-gray-700" />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full md:w-80">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Summary</h2>
            <div className="flex justify-between mb-4">
              <span className="text-base text-gray-700">Subtotal</span>
              <span className="text-base font-medium text-gray-900">
                € {(subtotal / 1000).toFixed(3)}
              </span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="promo-code"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Do you have a promotional code?
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="promo-code"
                  className="flex-grow rounded-l-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  placeholder="Enter code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition-colors">
                  Apply
                </button>
              </div>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
