import React from "react";
import { Container } from "@/components/Container";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

import { SearchBar } from "@/components/SearchBar";
import { Leaf, Bell } from "lucide-react";
import { MenuDrawer } from "@/components/MenuDrawer";
import { AvatarMenu } from "@/components/AvatarMenu";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-white shadow fixed top-0 left-0 w-full z-50">
        <Container className="h-12 md:h-16 flex items-center justify-between px-4 my-1 md:my-0">
          <MenuDrawer />
          <Link
            to={"/"}
            className="flex items-center justify-center lg:justify-normal space-x-2 text-2xl"
          >
            <Leaf className="h-8 w-8 text-[#4a7c59]" />
            <span className="text-color-primary font-semibold hidden xs:inline">
              Amader Krishok
            </span>
          </Link>
          <div className="hidden lg:block w-1/2">
            <SearchBar />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button variant="outline" className="px-3 py-1">
                <Link to="/cart">
                  <Bell className="text-color-primary" />
                </Link>
              </Button>
              <span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                10
              </span>
            </div>
            <div className="relative">
              <Button variant="outline" className="px-3 py-1">
                <Link to="/cart">
                  <FaShoppingCart className="text-color-primary" />
                </Link>
              </Button>
              <span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                10
              </span>
            </div>
            <AvatarMenu
              userName="@shadcn"
              avatarUrl="https://github.com/shadcn.png"
            />
          </div>
        </Container>
        <div className="lg:hidden bg-white border-t p-2">
          <SearchBar />
        </div>
      </div>
      <div className="h-10 lg:hidden"></div>
    </>
  );
};
