import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { Separator } from "@/components/ui/separator";

interface Subcategory {
  id: number;
  slug: string;
  name: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  subcategories?: Subcategory[];
}

const categories: Category[] = [
  {
    id: 0,
    name: "All",
    slug: "all",
    subcategories: [],
  },
  {
    id: 1,
    name: "Fresh Fruits",
    slug: "fresh-fruits",
    subcategories: [
      { id: 100, name: "All", slug: "fresh-fruits-all" },
      { id: 101, name: "Citrus Fruits", slug: "citrus-fruits" },
      { id: 102, name: "Berries", slug: "berries" },
      { id: 103, name: "Stone Fruits", slug: "stone-fruits" },
      { id: 104, name: "Tropical Fruits", slug: "tropical-fruits" },
      { id: 105, name: "Melons", slug: "melons" },
    ],
  },
  {
    id: 2,
    name: "Farm Vegetables",
    slug: "farm-vegetables",
    subcategories: [
      { id: 200, name: "All", slug: "farm-vegetables-all" },
      { id: 201, name: "Leafy Greens", slug: "leafy-greens" },
      { id: 202, name: "Root Vegetables", slug: "root-vegetables" },
      {
        id: 203,
        name: "Cruciferous Vegetables",
        slug: "cruciferous-vegetables",
      },
      { id: 204, name: "Allium Vegetables", slug: "allium-vegetables" },
      { id: 205, name: "Gourds", slug: "gourds" },
    ],
  },
  {
    id: 3,
    name: "Grains & Cereals",
    slug: "grains-cereals",
    subcategories: [
      { id: 300, name: "All", slug: "grains-cereals-all" },
      { id: 301, name: "Rice", slug: "rice" },
      { id: 302, name: "Wheat", slug: "wheat" },
      { id: 303, name: "Barley", slug: "barley" },
      { id: 304, name: "Oats", slug: "oats" },
      { id: 305, name: "Corn", slug: "corn" },
    ],
  },
  {
    id: 4,
    name: "Pulses & Legumes",
    slug: "pulses-legumes",
    subcategories: [
      { id: 400, name: "All", slug: "pulses-legumes-all" },
      { id: 401, name: "Lentils", slug: "lentils" },
      { id: 402, name: "Chickpeas", slug: "chickpeas" },
      { id: 403, name: "Peas", slug: "peas" },
      { id: 404, name: "Beans", slug: "beans" },
      { id: 405, name: "Soybeans", slug: "soybeans" },
    ],
  },
  {
    id: 5,
    name: "Dairy & Milk Products",
    slug: "dairy-milk-products",
    subcategories: [
      { id: 500, name: "All", slug: "dairy-milk-products-all" },
      { id: 501, name: "Milk", slug: "milk" },
      { id: 502, name: "Cheese", slug: "cheese" },
      { id: 503, name: "Butter & Ghee", slug: "butter-ghee" },
      { id: 504, name: "Yogurt", slug: "yogurt" },
      { id: 505, name: "Cream", slug: "cream" },
    ],
  },
  {
    id: 6,
    name: "Meat & Poultry",
    slug: "meat-poultry",
    subcategories: [
      { id: 600, name: "All", slug: "meat-poultry-all" },
      { id: 601, name: "Chicken", slug: "chicken" },
      { id: 602, name: "Beef", slug: "beef" },
      { id: 603, name: "Mutton", slug: "mutton" },
      { id: 604, name: "Fish & Seafood", slug: "fish-seafood" },
      { id: 605, name: "Eggs", slug: "eggs" },
    ],
  },
  {
    id: 7,
    name: "Herbs & Spices",
    slug: "herbs-spices",
    subcategories: [
      { id: 700, name: "All", slug: "herbs-spices-all" },
      { id: 701, name: "Fresh Herbs", slug: "fresh-herbs" },
      { id: 702, name: "Dried Herbs", slug: "dried-herbs" },
      { id: 703, name: "Whole Spices", slug: "whole-spices" },
      { id: 704, name: "Ground Spices", slug: "ground-spices" },
      { id: 705, name: "Spice Mixes", slug: "spice-mixes" },
    ],
  },
  {
    id: 8,
    name: "Organic Produce",
    slug: "organic-produce",
    subcategories: [
      { id: 800, name: "All", slug: "organic-produce-all" },
      { id: 801, name: "Organic Fruits", slug: "organic-fruits" },
      { id: 802, name: "Organic Vegetables", slug: "organic-vegetables" },
      { id: 803, name: "Organic Grains", slug: "organic-grains" },
      { id: 804, name: "Organic Spices", slug: "organic-spices" },
    ],
  },
  {
    id: 9,
    name: "Nuts, Seeds & Oils",
    slug: "nuts-seeds-oils",
    subcategories: [
      { id: 900, name: "All", slug: "nuts-seeds-oils-all" },
      { id: 901, name: "Cooking Oils", slug: "cooking-oils" },
      { id: 902, name: "Nuts", slug: "nuts" },
      { id: 903, name: "Seeds", slug: "seeds" },
      { id: 904, name: "Nut Butters", slug: "nut-butters" },
    ],
  },
  {
    id: 10,
    name: "Processed & Packaged Foods",
    slug: "processed-packaged-foods",
    subcategories: [
      { id: 1000, name: "All", slug: "processed-packaged-foods-all" },
      { id: 1001, name: "Jams & Preserves", slug: "jams-preserves" },
      { id: 1002, name: "Sauces & Pastes", slug: "sauces-pastes" },
      { id: 1003, name: "Canned Foods", slug: "canned-foods" },
      { id: 1004, name: "Pickles & Chutneys", slug: "pickles-chutneys" },
    ],
  },
  {
    id: 11,
    name: "Beverages & Juices",
    slug: "beverages-juices",
    subcategories: [
      { id: 1100, name: "All", slug: "beverages-juices-all" },
      { id: 1101, name: "Fresh Juices", slug: "fresh-juices" },
      { id: 1102, name: "Herbal Teas", slug: "herbal-teas" },
      { id: 1103, name: "Dairy-Based Drinks", slug: "dairy-based-drinks" },
      { id: 1104, name: "Soft Drinks", slug: "soft-drinks" },
    ],
  },
  {
    id: 12,
    name: "Flowers & Plants",
    slug: "flowers-plants",
    subcategories: [
      { id: 1200, name: "All", slug: "flowers-plants-all" },
      { id: 1201, name: "Fresh Flowers", slug: "fresh-flowers" },
      { id: 1202, name: "Medicinal Plants", slug: "medicinal-plants" },
      { id: 1203, name: "Indoor Plants", slug: "indoor-plants" },
      { id: 1204, name: "Seeds for Gardening", slug: "seeds-gardening" },
    ],
  },
  {
    id: 13,
    name: "Farm Tools & Supplies",
    slug: "farm-tools-supplies",
    subcategories: [
      { id: 1300, name: "All", slug: "farm-tools-supplies-all" },
      { id: 1301, name: "Fertilizers & Manure", slug: "fertilizers-manure" },
      { id: 1302, name: "Pesticides", slug: "pesticides" },
      { id: 1303, name: "Gardening Tools", slug: "gardening-tools" },
      { id: 1304, name: "Seeds & Saplings", slug: "seeds-saplings" },
    ],
  },
];

export const Categories: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const navigator = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

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
    navigator(`/shop/category/${category?.slug}`);
    console.log("category");
  };

  return (
    <>
      {categories.map((category) => (
        <div key={category.id} className="mb-2 categories">
          <Button
            variant="ghost"
            className={`w-full px-0 justify-between text-left font-medium hover:text-primary ${
              pathName.includes("/" + category.slug)
                ? "text-primary"
                : "text-color-ternary"
            } transition-colors duration-200`}
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
                  <NavLink
                    className="w-max justify-start pl-4 font-normal text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                    key={subcategory.id}
                    to={`/shop/category/${category?.slug}/${subcategory?.slug}`}
                  >
                    <span className="block">{subcategory.name}</span>
                  </NavLink>
                ))}
              </div>
            )}
        </div>
      ))}
    </>
  );
};
