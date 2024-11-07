import * as React from "react";
import { IoFilter } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface FilterOption {
  id: string;
  label: string;
}

const categories: FilterOption[] = [
  { id: "fruits", label: "Fruits" },
  { id: "vegetables", label: "Vegetables" },
  { id: "dairy", label: "Dairy" },
  { id: "bakery", label: "Bakery" },
  { id: "meat", label: "Meat" },
];

const dietaryOptions: FilterOption[] = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "gluten-free", label: "Gluten-free" },
  { id: "organic", label: "Organic" },
];

export const Filter: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    []
  );
  const [selectedDietaryOptions, setSelectedDietaryOptions] = React.useState<
    string[]
  >([]);
  const [priceRange, setPriceRange] = React.useState([0, 100]);

  const handleCategoryChange = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleDietaryOptionChange = (id: string) => {
    setSelectedDietaryOptions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value);
  };

  const handleApplyFilters = () => {
    console.log("Applied Filters:", {
      categories: selectedCategories,
      dietaryOptions: selectedDietaryOptions,
      priceRange,
    });
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-max justify-between h-full rounded-none rounded-r-md border-l-0"
        >
          <IoFilter className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px]">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Categories</h4>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => handleCategoryChange(category.id)}
                  />
                  <Label htmlFor={category.id}>{category.label}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dietary Options</h4>
            <div className="grid grid-cols-2 gap-2">
              {dietaryOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={selectedDietaryOptions.includes(option.id)}
                    onCheckedChange={() => handleDietaryOptionChange(option.id)}
                  />
                  <Label htmlFor={option.id}>{option.label}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Price Range</h4>
            <Slider
              min={0}
              max={100}
              step={1}
              value={priceRange}
              onValueChange={handlePriceRangeChange}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          <Button onClick={handleApplyFilters}>Apply Filters</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
