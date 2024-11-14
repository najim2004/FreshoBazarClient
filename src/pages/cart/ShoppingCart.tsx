import React, { useState } from "react";
import { ShoppingCart as CartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CartItem } from "@/components/cart/CartItem";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";

interface CartItemData {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}

const initialCartItems: CartItemData[] = [
  {
    id: 1,
    name: "Banganapalli Indian Mango",
    price: 250000,
    size: "30TK/2Kg",
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2020/08/fruits-and-vegetables-thumb.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Alphonso Mango",
    price: 180000,
    size: "30TK/2Kg",
    image:
      "https://www.bhg.com/thmb/Mwd_YEkDbVg_fPsUDcWr3eZk9W0=/5645x0/filters:no_upscale():strip_icc()/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Kesar Mango",
    price: 399000,
    size: "30TK/2Kg",
    image: "https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg",
    quantity: 1,
  },
];

export const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemData[]>(initialCartItems);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const cartItems = useSelector((state: RootState) => state?.myCart.cart);

  const toggleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  const toggleSelectItem = (id: number) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const removeSelectedItems = () => {
    setCartItems((items) =>
      items.filter((item) => !selectedItems.includes(item.id))
    );
    setSelectedItems([]);
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    setSelectedItems((prevSelected) =>
      prevSelected.filter((itemId) => itemId !== id)
    );
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      setCartItems((items) =>
        items.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      <div className="flex-grow">
        <Card className="shadow-none rounded-sm">
          <CardHeader className="border-b border-color-secondary/20">
            <CardTitle className="text-2xl font-bold flex items-center gap-2 text-color-primary">
              <CartIcon className="w-6 h-6" />
              My Cart
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="select-all"
                  checked={selectedItems.length === cartItems.length}
                  onCheckedChange={toggleSelectAll}
                />
                <label
                  htmlFor="select-all"
                  className="text-sm font-medium leading-none text-color-ternary peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Select All
                </label>
              </div>
              <Button
                variant="destructive"
                onClick={removeSelectedItems}
                disabled={selectedItems.length === 0}
              >
                Remove Selected
              </Button>
            </div>

            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                isSelected={selectedItems.includes(item.id)}
                onSelect={toggleSelectItem}
                onRemove={removeItem}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="w-full lg:w-80">
        <Card className="rounded-sm shadow-none">
          <CardHeader className="border-b border-color-secondary/30">
            <CardTitle className="text-color-primary">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-base text-color-ternary">Subtotal</span>
                <span className="text-base font-medium text-color-primary">
                  TK {(subtotal / 1000).toFixed(3)}
                </span>
              </div>
              <Separator className="bg-color-secondary/30" />
              <div className="space-y-2">
                <label
                  htmlFor="promo-code"
                  className="text-sm font-medium text-color-ternary"
                >
                  Promotional Code
                </label>
                <div className="flex space-x-2">
                  <Input
                    id="promo-code"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="focus:border-primary/50 focus-visible:ring-0"
                  />
                  <Button
                    variant="secondary"
                    className="bg-color-secondary text-white hover:bg-color-secondary/90"
                  >
                    Apply
                  </Button>
                </div>
              </div>
              <Separator className="bg-color-secondary/30" />
              <div className="flex justify-between font-semibold">
                <span className="text-color-primary">Total</span>
                <span className="text-color-primary">
                  TK {(subtotal / 1000).toFixed(3)}
                </span>
              </div>
            </div>
            <Button
              className="w-full mt-6 bg-primary hover:bg-primary/90"
              size="lg"
            >
              Proceed to Checkout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
