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
import { Cart, setCart } from "@/redux/slices/cartSlice";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// Define ProductCardProps interface to ensure proper typing for props passed to the component.
interface ProductCardProps {
  id: string | undefined;
  title?: string;
  price?: number;
  discount?: number;
  image?: string;
  unitType?: string;
  unitSize?: number;
  category?: string;
  updatedAt?: string;
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
  userId?: string;
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

// Define the structure of the response after adding the product on the cart.
interface CartResponse {
  addItemToCart: {
    success?: boolean;
    message?: string | null;
    cart?: Cart;
  };
}

// Define the structure of the request variables when toggling favorite.
interface CartVariables {
  userId?: string;
  item: {
    productId?: string;
    quantity?: number;
    options?: JSON;
  };
}

// GraphQL mutation to toggle favorite product.
const TOGGLE_FAVORITE = gql`
  mutation ToggleFavorite($userId: ID!, $productId: ID!) {
    toggleFavorite(userId: $userId, productId: $productId) {
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

// GraphQL mutation to add item to the cart
const ADD_TO_CART = gql`
  mutation AddToCart($userId: ID!, $item: CartItemInput!) {
    addItemToCart(userId: $userId, item: $item) {
      success
      message
      cart {
        _id
        userId
        items {
          productId
          name
          price
          quantity
          thumbnail
          totalPrice
        }
        status
        totalPrice
        totalQuantity
        createdAt
        updatedAt
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
  updatedAt,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState<number>(1); // Track quantity for this product.
  const [isFavorite, setIsFavorite] = useState<boolean>(false); // Track if the product is in the favorites.

  const navigate: NavigateFunction = useNavigate(); // Hook to navigate to product detail page.

  // Redux state to track favorite products and dispatch function to update them.
  const favoriteProducts = useSelector(
    (state: RootState) => state?.favoriteProducts?.favoriteProducts
  );
  const dispatch = useDispatch();
  const { toast } = useToast();
  const location = useLocation();
  const isDashboard = location?.pathname?.includes("/dashboard");

  // GraphQL mutation to toggle favorite for this product.
  const [toggleFavorite, { data, loading }] = useMutation<
    ToggleFavoriteResponse,
    ToggleFavoriteVariables
  >(TOGGLE_FAVORITE);

  const [addItemToCart, { data: cartResponse, loading: isCartLoading }] =
    useMutation<CartResponse, CartVariables>(ADD_TO_CART);

  // Effect hook to handle response after toggling favorite status.
  useEffect(() => {
    if (data?.toggleFavorite) {
      const { success, error, favorites } = data.toggleFavorite;
      if (success && !error && favorites) {
        // Dispatch the updated favorite products to Redux store.
        dispatch(setFavoriteProducts(favorites));
      }
    }
  }, [data?.toggleFavorite, dispatch]);

  // Effect hook to handle response after adding cart.
  useEffect(() => {
    if (cartResponse?.addItemToCart) {
      const { success, message, cart } = cartResponse.addItemToCart;
      if (success && cart) {
        // Dispatch the updated favorite products to Redux store.
        dispatch(setCart(cart));
        toast({
          title: "Success",
          description: "Item added to cart successfully!",
          duration: 3000,
        });
      } else {
        toast({
          title: "Error",
          description: message ?? "Failed to add item to cart!",
          duration: 3000,
          variant: "destructive",
        });
      }
    }
  }, [cartResponse?.addItemToCart, dispatch, toast]);

  // Effect hook to check if this product is already in the user's favorites list.
  useEffect(() => {
    const isExist = favoriteProducts?.data?.products?.find(
      (product) => product.productId === id
    );
    setIsFavorite(!!isExist); // Update favorite status based on product existence.
  }, [favoriteProducts?.data?.products, id]);
  // console.log(favoriteProducts);

  // Function to handle the click on the favorite button.
  const onFavoriteClick = (id: string | undefined): void => {
    if (!loading && id) {
      // Trigger GraphQL mutation to toggle favorite.
      toggleFavorite({
        variables: { userId: "672cbfba5011c05833acf37e", productId: id },
      });
    }
  };

  // Function to decrease the product quantity.
  const decreaseQuantity = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Function to increase the product quantity.
  const increaseQuantity = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setQuantity(quantity + 1);
  };

  // Function to handle click on the cart button (optional: can trigger add-to-cart functionality).
  const onClickCart = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (!isCartLoading && id) {
      // Trigger GraphQL mutation to toggle favorite.
      addItemToCart({
        variables: {
          userId: "672cbfba5011c05833acf37e",
          item: { productId: id, quantity },
        },
      });
    }
  };

  return (
    <Card
      onClick={(e: React.MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
        // Navigate to the product detail page when the card is clicked.
        navigate(`/product/${id}`);
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
                // Toggle favorite status when the button is clicked.
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
          <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
          <div className="flex items-center justify-between mt-2">
            <div className="text-primary font-bold">
              ${price.toFixed(2)}/{unitSize} {unitType}
            </div>
            <p className="text-gray-500 text-sm mt-1">
              {updatedAt ? new Date(updatedAt).toLocaleDateString() : ""}
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
