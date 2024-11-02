import React, { useState } from "react";
import { Categories } from "@/components/categories/Categories";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { Button } from "./ui/button";

export const MenuDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandCategories, setExpandCategories] = useState<boolean>(false);

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex h-full flex-col">
            <SheetHeader className="flex-none">
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate through our categories and options
              </SheetDescription>
            </SheetHeader>

            <ScrollArea className="flex-grow mt-4 pr-4">
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  className="w-full px-0 justify-between text-left font-medium text-color-ternary transition-colors duration-200 hover:bg-transparent"
                  onClick={(): void =>
                    setExpandCategories((prev: boolean): boolean => !prev)
                  }
                >
                  <span>Categories</span>
                  {expandCategories ? (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
                <div className="ml-4">{expandCategories && <Categories />}</div>
              </div>
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
