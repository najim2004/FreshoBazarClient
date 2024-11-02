import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ProductCardSkeleton: React.FC = () => {
  return (
    <Card className="w-full max-w-sm rounded-sm border-none">
      <CardContent className="p-4">
        <div className="relative">
          <Skeleton className="w-full h-48 rounded-lg" />
          <div className="absolute top-2 left-2">
            <Skeleton className="w-10 h-6 rounded-sm" />
          </div>
          <div className="absolute top-2 right-2">
            <Skeleton className="w-8 h-8 rounded-full" />
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-5 w-24" />
        </div>

        <div className="mt-4 flex items-center gap-2 justify-between">
          <Skeleton className="h-9 w-32 rounded-md" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
};
