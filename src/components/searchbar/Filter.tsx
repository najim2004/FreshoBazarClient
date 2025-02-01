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
import { AllParamsState } from "./SearchBar";
import { useParams } from "react-router-dom";

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
  allParams: AllParamsState;
  onApplyFilter: () => void;
  setAllParams: React.Dispatch<React.SetStateAction<AllParamsState>>;
}

export const Filter: React.FC<FilterProps> = ({
  subcategories,
  allParams,
  setAllParams,
  onApplyFilter,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { slug, sub_slug } = useParams();
  const handleFilterChange = (
    filterType: keyof Omit<AllParamsState, "priceRange">,
    id: string,
    allowMultiple: boolean = true,
    checked: boolean
  ) => {
    setAllParams((prev: AllParamsState) => {
      const currentValues = prev[filterType] as string[];
      let newValues: string[];

      if (!checked) {
        newValues = currentValues.filter((item) => item !== id);
      } else if (allowMultiple) {
        newValues = [...currentValues, id];
      } else {
        newValues = [id];
      }

      return {
        ...prev,
        [filterType]: newValues,
      };
    });
  };

  const handlePriceRangeChange = (value: number[]) => {
    setAllParams((prev: AllParamsState) => ({
      ...prev,
      priceRange: value,
    }));
  };

  const handleApplyFilters = () => {
    setIsOpen(false);
    onApplyFilter();
  };
  React.useEffect(()=>{
    if(sub_slug!==slug+"-all"||!sub_slug){
      setAllParams({...allParams,subcategories:[]});
    }
  },[slug,sub_slug, setAllParams, allParams])

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
          {(sub_slug == slug + "-all"||!sub_slug) && (
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
                        checked={allParams.subcategories.includes(
                          category.slug
                        )}
                        onCheckedChange={(checked) =>
                          handleFilterChange(
                            "subcategories",
                            category.slug,
                            true,
                            !!checked
                          )
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
          )}

          {/* Reusable filter groups */}
          <FilterCheckboxGroup
            title="Dietary Options"
            options={dietaryOptions}
            filterType="dietaryOptions"
            allowMultiple={false}
            allParams={allParams}
            handleFilterChange={handleFilterChange}
          />
          <FilterCheckboxGroup
            title="Unit-Size"
            options={unitSizes}
            filterType="unitSize"
            allowMultiple={false}
            allParams={allParams}
            handleFilterChange={handleFilterChange}
          />
          <FilterCheckboxGroup
            title="Date"
            options={date}
            filterType="date"
            allowMultiple={false}
            allParams={allParams}
            handleFilterChange={handleFilterChange}
          />
          <FilterCheckboxGroup
            title="Price"
            options={price}
            filterType="price"
            allowMultiple={false}
            allParams={allParams}
            handleFilterChange={handleFilterChange}
          />
          <FilterCheckboxGroup
            title="Other Options"
            options={otherOptions}
            filterType="otherOptions"
            allowMultiple={true}
            allParams={allParams}
            handleFilterChange={handleFilterChange}
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
              value={allParams.priceRange}
              onValueChange={handlePriceRangeChange}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>${allParams.priceRange[0]}</span>
              <span>${allParams.priceRange[1]}</span>
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

const FilterCheckboxGroup = ({
  title,
  options,
  filterType,
  allowMultiple = false,
  allParams,
  handleFilterChange,
}: {
  title: string;
  options: FilterOption[];
  filterType: keyof Omit<AllParamsState, "priceRange">;
  allowMultiple?: boolean;
  allParams: AllParamsState;
  handleFilterChange: (
    filterType: keyof Omit<AllParamsState, "priceRange">,
    id: string,
    allowMultiple: boolean,
    checked: boolean
  ) => void;
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
            checked={(allParams[filterType] as string[]).includes(option.id)}
            onCheckedChange={(checked) =>
              handleFilterChange(
                filterType,
                option.id,
                allowMultiple,
                !!checked
              )
            }
          />
          <Label htmlFor={option.id}>{option.label}</Label>
        </div>
      ))}
    </div>
  </div>
);
