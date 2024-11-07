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

const featuredProducts: string[] = ["Fresh Tomatoes", "Mango", "Hilsa Fish"];

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.length > 0) {
        const filteredSuggestions = products.filter((product) =>
          product.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSuggestions(filteredSuggestions.slice(0, 5));
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 500); // Reduced debounce delay

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

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

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="relative flex items-center w-full h-10">
      <Select value={filterCategory} onValueChange={setFilterCategory}>
        <SelectTrigger className="w-min h-full rounded-none rounded-l-md border-r-0 outline-none focus:ring-0 shadow-none">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="vegetables">Vegetables</SelectItem>
            <SelectItem value="fish">Fish</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex-grow h-full relative">
        <Input
          id="searchInput" // Set ID for direct focusing
          type="text"
          placeholder="Search for products... ( CTRL+K )"
          className="h-full border text-sm px-4 pr-10 py-1 w-full focus-visible:ring-0 shadow-none rounded-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        />
        <Button
          variant="outline"
          className="px-3 py-1 absolute right-0 top-0 h-full border-none bg-transparent shadow-none hover:bg-transparent group"
          aria-label="Search"
        >
          <FaSearch className="text-color-primary group-active:scale-95 group-hover:text-primary" />
        </Button>
      </div>
      <Filter />
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
