import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { Filter } from "./Filter";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { Subcategory } from "@/redux/slices/categoriesSlice";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
const products: string[] = [
  "Fresh Tomatoes",
  "Organic Spinach",
  "Farm-fresh Eggs",
  "Hilsa Fish",
  "Red Lentils",
  "Basmati Rice",
  "Mango",
  "Jackfruit",
  "Mustard Oil",
  "Pumpkin",
];

export interface AllParamsState {
  search: string;
  subcategories: string[];
  dietaryOptions: string[];
  unitSize: string[];
  date: string[];
  price: string[];
  otherOptions: string[];
  priceRange: number[];
}

export const SearchBar: React.FC = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterSubCategory, setFilterSubCategory] = useState<Subcategory[]>([]);
  const categories = useSelector((state: RootState) => state?.categories);
  const [allParams, setAllParams] = useState<AllParamsState>({
    search: "",
    subcategories: [],
    dietaryOptions: [],
    unitSize: [],
    date: [],
    price: [],
    otherOptions: [],
    priceRange: [0, 10000],
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { slug } = useParams();
  const pathName = location.pathname;

  useEffect(() => {
    const foundedCategory = categories?.find(
      (category) => category.slug === filterCategory
    );
    if (foundedCategory) {
      setFilterSubCategory(foundedCategory?.subcategories || []);
    }
  }, [categories, filterCategory]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (allParams.search.length > 0) {
        const filteredSuggestions = products.filter((product) =>
          product.toLowerCase().includes(allParams.search.toLowerCase())
        );
        setSuggestions(filteredSuggestions.slice(0, 5));
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 500); // Reduced debounce delay

    return () => clearTimeout(delayDebounceFn);
  }, [allParams]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        document.getElementById("searchInput")?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (categories?.find((category) => category.slug === slug)) {
      setFilterCategory((prev) => slug || prev);
    }
  }, [slug, categories]);

  const handleSuggestionClick = (suggestion: string) => {
    setAllParams((prev: AllParamsState) => ({
      ...prev,
      search: suggestion,
    }));
    setShowSuggestions(false);
  };

  const updateFiltersInURL = (allParams: AllParamsState) => {
    const params = new URLSearchParams(searchParams);

    Object.keys(allParams).forEach((key) => {
      const value = allParams[key as keyof AllParamsState];
      if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(","));
      } else if (typeof value === "string" && value.trim() !== "") {
        params.set(key, value);
      } else if (
        Array.isArray(value) &&
        value.every((v) => typeof v === "number")
      ) {
        params.set(key, value.join(","));
      } else {
        params.delete(key);
      }
    });
    return params.toString();
  };

  const onSearchClick = () => {
    const updatedParams = updateFiltersInURL(allParams);
    navigate(
      `/shop/category/${filterCategory}${
        filterSubCategory.length > 0 ? "/" + filterCategory + "-all?" : "?"
      }${updatedParams}`
    );
    setShowSuggestions(false);
  };
  const onApplyFilter = () => {
    // /shop/category
    if (pathName.includes("/shop/category")) {
      const updatedParams = updateFiltersInURL(
        slug == slug + "-all" ? allParams : { ...allParams, search: "" }
      );
      navigate(`?${updatedParams}`);
    }
  };

  return (
    <div className="relative flex items-center w-full h-10 ">
      <Select value={filterCategory} onValueChange={setFilterCategory}>
        <SelectTrigger className="w-min h-full rounded-none rounded-l-md border-r-0 outline-none focus:ring-0 shadow-none">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            {
              categories?.map((category) => (
                <SelectItem key={category._id} value={category.slug}>
                  {category.name}
                </SelectItem>
              )) || [] // Handle empty categories array gracefully
            }
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex-grow h-full relative">
        <Input
          id="searchInput" // Set ID for direct focusing
          type="text"
          placeholder="Search for products... ( CTRL+K )"
          className="h-full border text-sm px-4 pr-10 py-1 w-full focus-visible:ring-0 shadow-none rounded-none"
          value={allParams.search}
          onChange={(e) =>
            setAllParams((prev: AllParamsState) => ({
              ...prev,
              search: e.target.value,
            }))
          }
          onKeyUp={(e) => {
            if (e.key === "Enter") onSearchClick();
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        />
        <Button
          onClick={onSearchClick}
          variant="outline"
          className="px-3 py-1 absolute right-0 top-0 h-full border-none bg-transparent shadow-none hover:bg-transparent group"
          aria-label="Search"
        >
          <FaSearch className="text-color-primary group-active:scale-95 group-hover:text-primary" />
        </Button>
      </div>
      <Filter
        subcategories={filterSubCategory || []}
        allParams={allParams}
        setAllParams={setAllParams}
        onApplyFilter={onApplyFilter}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute top-10 z-10 w-full bg-white border rounded-b-md shadow-lg mt-1">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion} // Unique key using suggestion
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onMouseDown={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
