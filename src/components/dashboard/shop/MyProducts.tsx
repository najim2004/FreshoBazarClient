import { ProductCard } from "@/components/product/ProductCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import React from "react";
import { ProductUploadModal } from "./ProductUploadModal";

export const MyProducts: React.FC = () => {
  return (
    <div>
      <div className="h-14 bg-white mt-8 flex items-center justify-center w-max gap-6 mx-auto p-2 rounded-2xl px-6">
        <Avatar className="size-10">
          <AvatarImage src="/" alt={"Najim"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ProductUploadModal />
        <Button variant="ghost" className="px-10 bg-primary text-white h-10">
          <PlusCircle />
          Add a offer banner
        </Button>
      </div>
      <div className="grid xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7  gap-4 md:gap-6 mt-8">
        {[...Array(8)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};
