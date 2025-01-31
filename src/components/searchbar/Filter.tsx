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
import { Subcategory } from "@/redux/slices/categoriesSlice";

// Define interfaces for better type safety
interface FilterOption {
  id: string;
  label: string;
}

// Move filter options outside component to prevent rerenders
const dietaryOptions: FilterOption[] = [
  { id: "organic", label: "Organic" },
  { id: "none-organic", label: "None-Organic" },
];

const unitSizes: FilterOption[] = [
  { id: "smallest-first", label: "Smallest First" },
  { id: "bigger-first", label: "Bigger First" },
];

const price: FilterOption[] = [
  { id: "lowest-price", label: "Lowest Price" },
  { id: "highest-price", label: "Highest Price" },
];

const date: FilterOption[] = [
  { id: "newest", label: "Newest" },
  { id: "oldest", label: "Oldest" },
];

const otherOptions: FilterOption[] = [
  { id: "in-stock", label: "In Stock" },
  { id: "discount", label: "Discount" },
  { id: "popular", label: "Popular" },
  { id: "top-rated", label: "Top Rated" },
  { id: "nearby", label: "Nearby" },
];

interface FilterProps {
  subcategories: Subcategory[];
  onFilterApply?: (filters: FilterState) => void;
}

// Define a comprehensive filter state interface
interface FilterState {
  categories: string[];
  dietaryOptions: string[];
  unitSize: string[];
  date: string[];
  price: string[];
  otherOptions: string[];
  priceRange: number[];
}

export const Filter: React.FC<FilterProps> = ({
  subcategories,
  onFilterApply,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Unified filter state
  const [filters, setFilters] = React.useState<FilterState>({
    categories: [],
    dietaryOptions: [],
    unitSize: [],
    date: [],
    price: [],
    otherOptions: [],
    priceRange: [0, 100],
  });

  // Generic handler for checkbox filters
  const handleFilterChange = (
    filterType: keyof Omit<FilterState, "priceRange">,
    id: string,
    allowMultiple: boolean = true
  ) => {
    setFilters((prev) => {
      const currentValues = prev[filterType] as string[];
      let newValues: string[];

      if (allowMultiple) {
        newValues = currentValues.includes(id)
          ? currentValues.filter((item) => item !== id)
          : [...currentValues, id];
      } else {
        newValues = currentValues.includes(id) ? [] : [id];
      }

      return {
        ...prev,
        [filterType]: newValues,
      };
    });
  };

  const handlePriceRangeChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: value,
    }));
  };

  const handleApplyFilters = () => {
    onFilterApply?.(filters);
    setIsOpen(false);
  };

  // Reusable checkbox group component
  const FilterCheckboxGroup = ({
    title,
    options,
    filterType,
    allowMultiple = false,
  }: {
    title: string;
    options: FilterOption[];
    filterType: keyof Omit<FilterState, "priceRange">;
    allowMultiple?: boolean;
  }) => (
    <div className="space-y-2">
      <h4 className="font-medium leading-none text-color-primary">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <div
            key={option.id}
            className="flex items-center space-x-2 text-color-ternary"
          >
            <Checkbox
              id={option.id}
              checked={(filters[filterType] as string[]).includes(option.id)}
              onCheckedChange={() =>
                handleFilterChange(filterType, option.id, allowMultiple)
              }
            />
            <Label htmlFor={option.id}>{option.label}</Label>
          </div>
        ))}
      </div>
    </div>
  );

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
        <div className="grid gap-6">
          {/* Categories */}
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-color-primary">
              Sub-Categories
            </h4>
            {subcategories.length > 0 ? (
              <div className="grid grid-cols-2 gap-2">
                {subcategories.map((category) => (
                  <div
                    key={category.slug}
                    className="flex items-center space-x-2 text-color-ternary"
                  >
                    <Checkbox
                      checked={filters.categories.includes(category.slug)}
                      onCheckedChange={() =>
                        handleFilterChange("categories", category.slug)
                      }
                    />
                    <Label htmlFor={category.slug}>{category.name}</Label>
                  </div>
                ))}
              </div>
            ) : (
              <p>No subcategories found</p>
            )}
          </div>

          {/* Reusable filter groups */}
          <FilterCheckboxGroup
            title="Dietary Options"
            options={dietaryOptions}
            filterType="dietaryOptions"
            allowMultiple={false}
          />
          <FilterCheckboxGroup
            title="Unit-Size"
            options={unitSizes}
            filterType="unitSize"
            allowMultiple={false}
          />
          <FilterCheckboxGroup
            title="Date"
            options={date}
            filterType="date"
            allowMultiple={false}
          />
          <FilterCheckboxGroup
            title="Price"
            options={price}
            filterType="price"
            allowMultiple={false}
          />
          <FilterCheckboxGroup
            title="Other Options"
            options={otherOptions}
            filterType="otherOptions"
            allowMultiple={true}
          />

          {/* Price Range Slider */}
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-color-primary">
              Price Range
            </h4>
            <Slider
              min={0}
              max={100}
              step={1}
              value={filters.priceRange}
              onValueChange={handlePriceRangeChange}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>

          <Button
            onClick={handleApplyFilters}
            className="bg-primary hover:bg-primary/90"
          >
            Apply Filters
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
