import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming Skeleton component is available

export const CartItemSkeleton: React.FC = () => {
  return (
    <div className="mb-4">
      <Card className="border-color-secondary/30 shadow-none rounded-md">
        <CardContent className="p-2.5">
          <div className="flex items-center space-x-4">
            {/* Checkbox Skeleton */}
            <Skeleton className="w-5 h-5 rounded" />

            {/* Image Skeleton */}
            <Skeleton className="w-20 h-20 rounded-md" />

            {/* Details Section */}
            <div className="flex-grow space-y-2">
              {/* Title Skeleton */}
              <Skeleton className="h-4 w-1/2" />

              {/* Badge and Price Skeleton */}
              <div className="flex items-center space-x-2 mt-1">
                <Skeleton className="h-4 w-10 rounded-md" />
                <Skeleton className="h-4 w-12" />
              </div>

              {/* Quantity Controls Skeleton */}
              <div className="flex items-center w-max border rounded-md mt-2">
                <Skeleton className="w-9 h-9" />
                <Skeleton className="w-12 h-9 border-x" />
                <Skeleton className="w-9 h-9" />
              </div>
            </div>

            {/* Action Buttons Skeleton */}
            <div className="flex flex-col space-y-2">
              <Skeleton className="w-9 h-9" />
              <Skeleton className="w-9 h-9" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
