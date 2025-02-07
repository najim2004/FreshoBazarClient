import React from "react";
import { Trash2, Minus, Plus, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  size?: string;
  thumbnail?: string;
  quantity: number;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
  onRemove?: (id: string) => void;
  onUpdateQuantity?: (id: string, quantity: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  size,
  thumbnail,
  quantity,
  isSelected,
}) => {
  const [nowQuantity, setNowQuantity] = React.useState(quantity);
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setNowQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setNowQuantity(quantity + 1);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Math.max(1, parseInt(e.target.value) || 1);
    setNowQuantity(newQuantity);
  };

  const handleRemoveItem = () => {
    console.log(id);
  };

  return (
    <div className="mb-4">
      <Card className="border-color-secondary/30 shadow-none rounded-md">
        <CardContent className="p-2.5">
          <div className="flex items-center space-x-4">
            <Checkbox id={`item-${id}`} checked={isSelected} />
            <div className="flex-shrink-0 border rounded-md">
              <img
                src={thumbnail}
                alt={name}
                className="w-20 h-20 rounded-md object-contain"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium text-color-primary line-clamp-1">
                {name}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm text-primary font-medium">{size}</span>
                <span className="text-base text-color-ternary font-semibold">
                  TK {price.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center w-max border rounded-md mt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-0 h-9 w-9 hover:bg-gray-100 transition-colors"
                  onClick={handleDecreaseQuantity}
                  disabled={nowQuantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <input
                  type="number"
                  value={nowQuantity}
                  onChange={handleQuantityChange}
                  className="w-12 border-none focus-visible:ring-0 text-center border-x p-0 h-9 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-0 h-9 w-9 hover:bg-gray-100 transition-colors"
                  onClick={handleIncreaseQuantity}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleRemoveItem}
                className="border-color-secondary hover:border-none text-color-primary hover:bg-red-400 hover:text-white"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <Link to={`/product/${id}`}>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-color-secondary hover:border-none text-color-primary hover:bg-primary/70 hover:text-white"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
