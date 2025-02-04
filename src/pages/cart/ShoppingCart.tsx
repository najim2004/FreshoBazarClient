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

export const ShoppingCart: React.FC = () => {
  const [promoCode, setPromoCode] = useState("");
  const myCart = useSelector((state: RootState) => state?.myCart.cart);
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
                <Checkbox id="select-all" />
                <label
                  htmlFor="select-all"
                  className="text-sm font-medium leading-none text-color-ternary peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Select All
                </label>
              </div>
              <Button variant="destructive">Remove Selected</Button>
            </div>

            {myCart?.items?.map((item) => (
              <CartItem
                key={item.productId}
                id={item.productId}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                thumbnail={item.thumbnail}
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
                  {/* TK {(subtotal / 1000).toFixed(3)} */}
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
                  {/* TK {(subtotal / 1000).toFixed(3)} */}
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
