import { Heart, Minus, MoreVertical, Plus, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteProducts } from "@/redux/slices/favoriteProductSlice";
import { RootState } from "@/redux/rootReducer";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAddItemToCart } from "@/apollo/hooks/cart.hooks";

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

// Define the structure of the response after toggling the favorite product.
interface ToggleFavoriteResponse {
  toggleFavorite: {
    success?: boolean;
    error?: boolean;
    error_message?: string | null;
    favorites?: Favorites;
  };
}

// Define the structure of the request variables when toggling favorite.
interface ToggleFavoriteVariables {
  productId?: string;
}

// Define the structure of favorites object
interface Favorites {
  _id: string;
  userId: string;
  products?: Array<{ productId: string; addedAt?: Date }>;
  createdAt?: Date;
  updatedAt?: Date;
}

// GraphQL mutation to toggle favorite product.
const TOGGLE_FAVORITE = gql`
  mutation ToggleFavorite($productId: ID!) {
    toggleFavorite(productId: $productId) {
      success
      error
      error_message
      favorites {
        _id
        userId
        products {
          productId
          addedAt
        }
        updatedAt
        createdAt
      }
    }
  }
`;

export const ProductCard = ({
  id = "",
  title = "Farm fresh organic meat 1 kg",
  price = 11.0,
  discount = 25,
  image = "https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-fresh-meat-png-image_14026360.png",
  unitType = "kg",
  unitSize = 1,
  category = "Meat",
  isFavorite = false,
  updatedAt,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [, setIsFavorite] = useState(false);

  const navigate: NavigateFunction = useNavigate();

  const favoriteProducts = useSelector(
    (state: RootState) => state?.favoriteProducts?.favoriteProducts
  );
  const dispatch = useDispatch();
  const { toast } = useToast();
  const location = useLocation();
  const isDashboard = location?.pathname?.includes("/dashboard");

  const [toggleFavorite, { data, loading }] = useMutation<
    ToggleFavoriteResponse,
    ToggleFavoriteVariables
  >(TOGGLE_FAVORITE);

  const { addCartItem, loading: isCartLoading } = useAddItemToCart();


  useEffect(() => {
    if (data?.toggleFavorite) {
      const { success, error, favorites } = data.toggleFavorite;
      if (success && !error && favorites) {
        
        dispatch(setFavoriteProducts(favorites));
      }
    }
  }, [data?.toggleFavorite, dispatch]);

  
  useEffect(() => {
    const isExist = favoriteProducts?.data?.products?.find(
      (product) => product.productId === id
    );
    setIsFavorite(!!isExist); 
  }, [favoriteProducts?.data?.products, id]);

  const onFavoriteClick = (id: string | undefined): void => {
    if (!loading && id) {
      toggleFavorite({
        variables: { productId: id },
      });
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
                  isFavorite ? "fill-red-500 stroke-red-500" : "stroke-gray-600"
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
