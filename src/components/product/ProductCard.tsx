import { Heart, Minus, MoreVertical, Plus, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAddItemToCart } from "@/apollo/hooks/cart.hooks";
import { useToggleFavorite } from "@/apollo/hooks/favorite.hooks";
import { Skeleton } from "../ui/skeleton";

// Define ProductCardProps interface to ensure proper typing for props passed to the component.
interface ProductCardProps {
  id?: string | undefined;
  title?: string;
  price?: number;
  discount?: number;
  image?: string;
  unitType?: string;
  unitSize?: number;
  category?: string;
  isFavorite?: boolean;
  updatedAt?: Date;
}

export const ProductCard = ({
  id = "",
  title = "Farm fresh organic meat 1 kg",
  price = 11.0,
  discount = 25,
  image = "https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-fresh-meat-png-image_14026360.png",
  unitType = "kg",
  unitSize = 1,
  category = "Meat",
  updatedAt,
}: ProductCardProps) => {
  const { addCartItem, loading: isCartLoading } = useAddItemToCart();
  const { toggleFavorite, loading: isFavoriteLoading } = useToggleFavorite();
  const [quantity, setQuantity] = useState<number>(1);
  const [favorite, setFavorite] = useState(false);

  const navigate: NavigateFunction = useNavigate();

  const { products } = useSelector(
    (state: RootState) => state?.favoriteProducts
  );
  const { toast } = useToast();
  const location = useLocation();

  const isDashboard = location?.pathname?.includes("/dashboard");

  useEffect(() => {
    const findTheProduct = products.find((p) => p.product_id == id);
    if (findTheProduct) setFavorite(true);
    else setFavorite(false);
  }, [products, id]);

  const onFavoriteClick = async (id: string | undefined): Promise<void> => {
    if (!isFavoriteLoading && id) {
      const res = await toggleFavorite(id);
      if (res?.success) {
        toast({
          title: "Success",
          description: res?.message || "Operation successful!",
          duration: 3000,
        });
      } else {
        toast({
          title: "Error",
          description: res?.message || "Failed to add item to favorite list!",
          duration: 3000,
          variant: "destructive",
        });
      }
    }
  };

  const decreaseQuantity = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setQuantity(quantity + 1);
  };

  const onClickCart = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.stopPropagation();
    if (!isCartLoading && id) {
      const cartResponse = await addCartItem({ product_id: id, quantity });

      if (cartResponse?.success) {
        toast({
          title: "Success",
          description: "Item added to cart successfully!",
          duration: 3000,
        });
      } else {
        toast({
          title: "Error",
          description: cartResponse?.message || "Failed to add item to cart!",
          duration: 3000,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Card
      onClick={(e: React.MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
        navigate(`/product/${id}`);
      }}
      className="w-full max-w-sm rounded-sm border-none"
    >
      <CardContent className="p-4">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-contain rounded-lg"
          />
          {discount > 0 && (
            <div className="absolute top-2 left-2">
              <div className="bg-primary text-white px-2 py-1 rounded-sm text-xs font-semibold">
                -{discount}%
              </div>
            </div>
          )}
          {isDashboard ? (
            <div className="absolute top-2 right-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white transition-colors"
              onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
                e.stopPropagation();
                onFavoriteClick(id);
              }}
            >
              <Heart
                className={`w-5 h-5 ${
                  favorite ? "fill-red-500 stroke-red-500" : "stroke-gray-600"
                }`}
              />
            </Button>
          )}
        </div>

        <div className="mt-4">
          <div className="text-gray-500 text-sm uppercase">{category}</div>
          <h3 className="font-semibold text-gray-800 text-lg line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center justify-between mt-2">
            <div className="text-primary font-bold">
              ${price.toFixed(2)}/{unitSize} {unitType}
            </div>
            <p className="text-gray-500 text-sm mt-1">
              {updatedAt
                ? new Date(updatedAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                  })
                : ""}
            </p>
          </div>
        </div>
        {!isDashboard && (
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement>): void =>
              e.stopPropagation()
            }
            className="mt-4 flex items-center gap-2 justify-between"
          >
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
        )}
      </CardContent>
    </Card>
  );
};

export function ProductCardSkeleton() {
  return (
    <div className="w-full max-w-sm rounded-sm border-none">
      <div className="p-4">
        {/* Image Section Skeleton */}
        <div className="relative">
          <Skeleton className="w-full h-48 rounded-lg" />

          {/* Discount Badge Skeleton */}
          <Skeleton className="absolute top-2 left-2 h-6 w-12 rounded-sm" />

          {/* Action Button Skeleton */}
          <Skeleton className="absolute top-2 right-2 h-8 w-8 rounded-full" />
        </div>

        {/* Product Details Skeleton */}
        <div className="mt-4 space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-6 w-3/4" />
          <div className="flex justify-between items-center">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        </div>

        {/* Quantity Controls Skeleton */}
        <div className="mt-4 flex items-center gap-2 justify-between">
          <div className="flex items-center border rounded-md">
            <Skeleton className="h-9 w-9 rounded-l-md" />
            <Skeleton className="h-9 w-12 border-x" />
            <Skeleton className="h-9 w-9 rounded-r-md" />
          </div>
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}
