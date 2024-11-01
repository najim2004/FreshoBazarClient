import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface ProductCardProps {
  title?: string;
  price?: number;
  discount?: number;
  image?: string;
  unit?: string;
}

export const ProductCard = ({
  title = "Farm fresh organic meat 1 kg",
  price = 11.0,
  discount = 25,
  image = "https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-fresh-meat-png-image_14026360.png",
  unit = "kg",
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();
  const decreaseQuantity = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setQuantity(quantity + 1);
  };
  const onClickCart = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
  };
  return (
    <Card
      onClick={(e: React.MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
        navigate("/product/123");
      }}
      className="w-full max-w-sm rounded-sm border-none"
    >
      <CardContent className="p-4">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
          {discount > 0 && (
            <div className="absolute top-2 left-2">
              <div className="bg-primary text-white px-2 py-1 rounded-sm text-xs font-semibold">
                -{discount}%
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white transition-colors"
            onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "fill-red-500 stroke-red-500" : "stroke-gray-600"
              }`}
            />
          </Button>
        </div>

        <div className="mt-4">
          <div className="text-gray-500 text-sm uppercase">MEAT</div>
          <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
          <div className="mt-2 text-primary font-bold">
            ${price.toFixed(2)}/{unit}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 justify-between">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="p-0 h-9 w-9 hover:bg-gray-100 transition-colors"
              onClick={decreaseQuantity}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <Input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-12 border-none focus-visible:ring-0 text-center border-x p-0 h-9 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <Button
              variant="ghost"
              size="icon"
              className="p-0 h-9 w-9 hover:bg-gray-100 transition-colors"
              onClick={increaseQuantity}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <Button
            onClick={onClickCart}
            size="icon"
            className="p-2 bg-primary hover:bg-primary/80 transition-colors rounded-full text-white h-10 w-10"
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
