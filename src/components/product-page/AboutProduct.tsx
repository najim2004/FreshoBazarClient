import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
interface AboutProductProps {
  description?: string;
  loading?: boolean;
}

export const AboutProduct: React.FC<AboutProductProps> = ({
  description,
  loading,
}) => {
  if (loading) {
    return <AboutProductSkeleton />;
  }

  return (
    <Card className="mt-8 rounded-b-md rounded-t-none border-none shadow-sm overflow-hidden">
      <CardContent className="p-0">
        <div className="space-y-6 p-8">
          <h2 className="text-xl font-semibold text-color-ternary mb-4">
            Description
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html:
                (description || ""?.length > 0
                  ? description
                  : "<div className='flex justify-center'>Nothing</div>") || "",
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const AboutProductSkeleton: React.FC = () => {
  return (
    <Card className="mt-8 rounded-b-md rounded-t-none border-none shadow-sm overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          <div className="md:col-span-2">
            <Skeleton className="h-8 w-1/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />
            <Skeleton className="h-6 w-1/4 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <Skeleton className="h-8 w-1/2 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
