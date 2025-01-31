import React, { useState } from "react";
import {
  Star,
  Heart,
  Menu,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Share2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Image } from "@/apollo/types/product.types";

interface ProductDetailsProps {
  title: string;
  images: Image[] | null;
  categoryName: string;
  unitType: string;
  unitSize: number;
  stockSize: number;
  price: number;
  isDiscountable: boolean;
  discountValue: number;
  averageRating: number;
  ratingsCount: number;
  id: string;
  loading: boolean;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  images,
  categoryName,
  unitType,
  unitSize,
  price,
  stockSize,
  isDiscountable,
  discountValue,
  averageRating,
  ratingsCount,
  loading,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [currentImage, setCurrentImage] = useState(0);
  if (loading) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <Card className="overflow-hidden rounded-md border-none w-full">
      <CardContent className="p-6 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Product Images */}
          <div className="lg:w-1/2">
            <div className="relative">
              <Badge className="absolute top-2 left-2 z-10 bg-primary">
                New
              </Badge>
              <img
                src={images ? images[currentImage]?.url : ""}
                alt={title}
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-md object-cover"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                onClick={() =>
                  setCurrentImage((prev) => (prev === 0 ? 0 : prev - 1))
                }
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => {
                  if (images) {
                    setCurrentImage((prev) =>
                      prev === images.length - 1 ? images.length - 1 : prev + 1
                    );
                  }
                }}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
            <div className="p-4 flex space-x-2 overflow-x-auto">
              {images?.map((image, index) => (
                <img
                  key={image?.id}
                  src={image?.url}
                  alt=""
                  className={`w-20 h-20 rounded-md cursor-pointer ${
                    index === currentImage ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className="lg:w-1/2">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-color-ternary mb-1">
                  {categoryName}
                </p>
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                <p className="text-sm text-primary mb-2">
                  In Stock, {stockSize} Left Only
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 fill-orange-400 text-orange-400"
                      />
                    ))}
                    <Star className="w-5 h-5 text-orange-400" />
                  </div>
                  <span className="ml-2 text-sm text-color-ternary">
                    {averageRating} Out of 5.00 | {ratingsCount} Reviews
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to favorites</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share product</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </div>
            </div>

            <div className="mb-4">
              {isDiscountable ? (
                <>
                  <span className="text-3xl font-bold text-primary">
                    {price - (price * discountValue) / 100}TK
                  </span>
                  <span className="ml-2 text-xl text-color-ternary line-through">
                    {price}TK
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-primary">
                  {price}TK
                </span>
              )}

              {isDiscountable && (
                <Badge variant="outline" className="ml-2">
                  {discountValue}% Off
                </Badge>
              )}
            </div>

            <p className="text-sm text-color-ternary mb-4">
              Excluding of shipping charges
            </p>

            <div className="mb-4 flex items-center gap-6">
              <span className="text-sm font-medium">SIZE</span>
              <span className="text-sm font-medium text-primary">
                {unitSize}
                {unitType} / {price}TK
              </span>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-1">KEY INFORMATION</h3>
              <p className="text-sm text-color-ternary">
                Guaranteed fresh for 5+ days, inc. delivery day
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="mx-2 w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
              </div>
              <Button className="w-full sm:w-auto bg-color-primary hover:bg-color-primary text-white">
                {price*quantity}TK / {quantity}{unitType}
              </Button>
              <Button
                className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-white"
                variant="default"
              >
                Add to Cart
              </Button>
            </div>

            <h3 className="text-lg font-semibold mb-2">SOLD BY:</h3>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Vanca Retail Shop"
                      />
                      <AvatarFallback>VR</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Vanca Retail Shop</p>
                      <p className="text-sm text-color-ternary">
                        Alabama, United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon">
                      <MessageCircle className="h-4 w-4" />
                      <span className="sr-only">Message seller</span>
                    </Button>
                    <Button variant="outline">Follow</Button>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <h3 className="text-base font-semibold mb-2">
                    Seller Reviews:
                  </h3>
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-orange-400 text-orange-400"
                        />
                      ))}
                      <Star className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="ml-2 text-sm text-color-ternary">
                      4.25 Out of 5.00 | 179 Reviews
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductDetailsSkeleton: React.FC = () => (
  // Main card container to hold the skeleton loading component
  <Card className="overflow-hidden rounded-md border-none">
    {/* Content area for padding and layout control */}
    <CardContent className="p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Skeleton for the left side of the product details - typically the product image and thumbnails */}
        <div className="lg:w-1/2">
          {/* Large image skeleton placeholder */}
          <Skeleton className="h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-md" />
          <div className="mt-4 flex space-x-2">
            {/* Four smaller thumbnail skeletons below the main image */}
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="w-20 h-20 rounded-md" />
            ))}
          </div>
        </div>

        {/* Skeleton placeholders for the right side details */}
        <div className="lg:w-1/2">
          {/* Placeholder for the product category or breadcrumb */}
          <Skeleton className="h-6 w-1/3 mb-1" />
          {/* Placeholder for the product title */}
          <Skeleton className="h-8 w-3/4 mb-2" />
          {/* Placeholder for a possible subheading or rating */}
          <Skeleton className="h-5 w-1/2 mb-2" />
          {/* Placeholder for the product price */}
          <Skeleton className="h-6 w-1/4 mb-4" />

          {/* Placeholder for the add-to-cart button */}
          <Skeleton className="h-10 w-1/2 mb-4" />
          {/* Placeholder for availability or stock status */}
          <Skeleton className="h-6 w-1/3 mb-4" />

          {/* Placeholder for product description */}
          <Skeleton className="h-6 w-full mb-4" />

          {/* Skeleton placeholders for specifications or additional info */}
          <div className="flex items-center gap-6 mb-4">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
          </div>

          {/* Additional skeletons for long text sections like reviews or details */}
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-full mb-4" />

          {/* Skeleton for button and input area for quantity controls */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-full sm:w-32" />
            <Skeleton className="h-10 w-full sm:w-32" />
          </div>

          {/* Placeholder for the seller information title */}
          <Skeleton className="h-6 w-1/3 mb-2" />
          {/* Container for the seller information section */}
          <div className="p-6 border rounded-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              {/* Placeholder for seller avatar and name */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div>
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-4 w-16 mt-1" />
                </div>
              </div>
              {/* Skeleton for the "Message Seller" button */}
              <Skeleton className="h-8 w-32" />
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ProductDetailsSkeleton;
