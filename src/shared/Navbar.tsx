import React, { useState, useEffect } from "react";
import { Container } from "@/components/Container";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Leaf } from "lucide-react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

// Sample product data (replace with your actual data or API call)
const products = [
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

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredSuggestions = products.filter((product) =>
        product.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 5)); // Limit to 5 suggestions
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  return (
    <div className="bg-white shadow h-20 py-2 fixed top-0 left-0 w-full z-50">
      <Container className="h-full flex items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <Link to={"/"} className="flex items-center space-x-2 text-2xl">
          <Leaf className="h-8 w-8 text-[#4a7c59]" />
          <span className="text-color-primary font-semibold">
            Amader Krishok
          </span>
        </Link>

        {/* Search Section */}
        <div className="relative flex items-center w-1/2 h-full">
          <Select onValueChange={(v) => console.log(v)}>
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
          <div className="w-full h-full">
            <Input
              type="text"
              placeholder="Search for products..."
              className="h-full border border-gray-300 text-sm px-4 pr-10 py-1 w-full focus-visible:ring-0 shadow-none rounded-none rounded-r-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            />
            <Button
              variant="outline"
              className="px-3 py-1 absolute right-0 top-0 h-full border-none bg-transparent shadow-none hover:bg-transparent group"
            >
              <FaSearch className="text-color-primary group-active:scale-95 group-hover:text-primary" />
            </Button>
          </div>
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute top-12 z-10 w-full bg-white border border-gray-300 rounded-b-md shadow-lg mt-1">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onMouseDown={() => setSearchTerm(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Cart Button with Counter */}
          <div className="relative">
            <Button variant="outline" className="px-3 py-1">
              <FaShoppingCart className="text-color-primary" />
            </Button>
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              10
            </span>
          </div>

          {/* User Icon */}
          <Button variant="outline" className="px-3 py-1">
            <FaUser className="text-color-primary" />
          </Button>

          {/* Avatar */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </Container>
    </div>
  );
}
