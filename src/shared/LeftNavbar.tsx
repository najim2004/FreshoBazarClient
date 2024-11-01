import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface Subcategory {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
  subcategories?: Subcategory[];
}

const categories: Category[] = [
  {
    id: 0,
    name: "All",
    subcategories: [],
  },
  {
    id: 1,
    name: "Fresh Fruits",
    subcategories: [
      { id: 101, name: "Citrus Fruits" },
      { id: 102, name: "Berries" },
      { id: 103, name: "Stone Fruits" },
      { id: 104, name: "Tropical Fruits" },
      { id: 105, name: "Melons" },
    ],
  },
  {
    id: 2,
    name: "Farm Vegetables",
    subcategories: [
      { id: 201, name: "Leafy Greens" },
      { id: 202, name: "Root Vegetables" },
      { id: 203, name: "Cruciferous Vegetables" },
      { id: 204, name: "Allium Vegetables" },
      { id: 205, name: "Gourds" },
    ],
  },
  {
    id: 3,
    name: "Grains & Cereals",
    subcategories: [
      { id: 301, name: "Rice" },
      { id: 302, name: "Wheat" },
      { id: 303, name: "Barley" },
      { id: 304, name: "Oats" },
      { id: 305, name: "Corn" },
    ],
  },
  {
    id: 4,
    name: "Pulses & Legumes",
    subcategories: [
      { id: 401, name: "Lentils" },
      { id: 402, name: "Chickpeas" },
      { id: 403, name: "Peas" },
      { id: 404, name: "Beans" },
      { id: 405, name: "Soybeans" },
    ],
  },
  {
    id: 5,
    name: "Dairy & Milk Products",
    subcategories: [
      { id: 501, name: "Milk" },
      { id: 502, name: "Cheese" },
      { id: 503, name: "Butter & Ghee" },
      { id: 504, name: "Yogurt" },
      { id: 505, name: "Cream" },
    ],
  },
  {
    id: 6,
    name: "Meat & Poultry",
    subcategories: [
      { id: 601, name: "Chicken" },
      { id: 602, name: "Beef" },
      { id: 603, name: "Mutton" },
      { id: 604, name: "Fish & Seafood" },
      { id: 605, name: "Eggs" },
    ],
  },
  {
    id: 7,
    name: "Herbs & Spices",
    subcategories: [
      { id: 701, name: "Fresh Herbs" },
      { id: 702, name: "Dried Herbs" },
      { id: 703, name: "Whole Spices" },
      { id: 704, name: "Ground Spices" },
      { id: 705, name: "Spice Mixes" },
    ],
  },
  {
    id: 8,
    name: "Organic Produce",
    subcategories: [
      { id: 801, name: "Organic Fruits" },
      { id: 802, name: "Organic Vegetables" },
      { id: 803, name: "Organic Grains" },
      { id: 804, name: "Organic Spices" },
    ],
  },
  {
    id: 9,
    name: "Nuts, Seeds & Oils",
    subcategories: [
      { id: 901, name: "Cooking Oils" },
      { id: 902, name: "Nuts" },
      { id: 903, name: "Seeds" },
      { id: 904, name: "Nut Butters" },
    ],
  },
  {
    id: 10,
    name: "Processed & Packaged Foods",
    subcategories: [
      { id: 1001, name: "Jams & Preserves" },
      { id: 1002, name: "Sauces & Pastes" },
      { id: 1003, name: "Canned Foods" },
      { id: 1004, name: "Pickles & Chutneys" },
    ],
  },
  {
    id: 11,
    name: "Beverages & Juices",
    subcategories: [
      { id: 1101, name: "Fresh Juices" },
      { id: 1102, name: "Herbal Teas" },
      { id: 1103, name: "Dairy-Based Drinks" },
      { id: 1104, name: "Soft Drinks" },
    ],
  },
  {
    id: 12,
    name: "Flowers & Plants",
    subcategories: [
      { id: 1201, name: "Fresh Flowers" },
      { id: 1202, name: "Medicinal Plants" },
      { id: 1203, name: "Indoor Plants" },
      { id: 1204, name: "Seeds for Gardening" },
    ],
  },
  {
    id: 13,
    name: "Farm Tools & Supplies",
    subcategories: [
      { id: 1301, name: "Fertilizers" },
      { id: 1302, name: "Seeds" },
      { id: 1303, name: "Gardening Tools" },
      { id: 1304, name: "Irrigation Equipment" },
    ],
  },
];

export const LeftNavbar: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const toggleCategory = (categoryId: number) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategoryClick = (category: Category) => {
    if (category.subcategories && category.subcategories.length > 0) {
      toggleCategory(category.id);
    } else {
      navigateToCategory(category);
    }
  };

  const navigateToCategory = (category: Category) => {
    // Implement your navigation logic here
    console.log(`Navigating to category: ${category.name}`);
  };

  const navigateToSubcategory = (
    category: Category,
    subcategory: Subcategory
  ) => {
    // Implement your navigation logic here
    console.log(
      `Navigating to subcategory: ${category.name} > ${subcategory.name}`
    );
  };

  return (
    <div className="min-w-[250px]">
      <div className="p-4 pr-0 w-full">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Categories</h2>
        {categories.map((category) => (
          <div key={category.id} className="mb-2">
            <Button
              variant="ghost"
              className="w-full px-0 justify-between text-left font-medium text-gray-700 hover:text-primary transition-colors duration-200"
              onClick={() => handleCategoryClick(category)}
            >
              <span>{category.name}</span>
              {category.subcategories &&
                category.subcategories.length > 0 &&
                (expandedCategories.includes(category.id) ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                ))}
            </Button>
            {expandedCategories.includes(category.id) &&
              category.subcategories && (
                <div className="ml-4 mt-1 space-y-1 flex flex-col">
                  {category.subcategories.map((subcategory) => (
                    <Button
                      key={subcategory.id}
                      variant="ghost"
                      className="w-max justify-start pl-4 font-normal text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                      onClick={() =>
                        navigateToSubcategory(category, subcategory)
                      }
                    >
                      {subcategory.name}
                    </Button>
                  ))}
                </div>
              )}
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </div>
  );
};
