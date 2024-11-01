import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const details = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
voluptatem.`;

const ingredients = "Vitamins, Carbohydrates, water, Vitamins";

const instructions = [
  "Keep it in cool and dry place.",
  "Keep it in refrigerator to consume more then a week.",
  "Lorem Ipsum is simply dummy text of the printing",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
  "Nemo enim ipsam voluptatem quia voluptas sit",
];

export const AboutProduct: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AboutProductSkeleton />;
  }

  return (
    <Card className="mt-8 rounded-b-md rounded-t-none border-none shadow-sm overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-color-ternary mb-4">
              Details
            </h2>
            <p className="text-color-ternary text-sm leading-relaxed mb-6">
              {details}
            </p>
            <h3 className="text-lg font-semibold text-color-ternary mb-2">
              Ingredients
            </h3>
            <p className="text-color-ternary text-sm">{ingredients}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-color-ternary mb-4">
              Instructions
            </h2>
            <ol className="list-decimal list-inside text-color-ternary text-sm space-y-2">
              {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
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
