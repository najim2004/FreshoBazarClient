import React from "react";
import { Outlet } from "react-router-dom";
import { TopNavbar } from "./shared/TopNavbar";
import { SideNavbar } from "./shared/SideNavbar";
import { Footer } from "./shared/Footer";

export const App: React.FC = () => {
  return (
    <div className="bg-gray-100 lg:p-6 min-h-screen">
      <TopNavbar />
      <div className="flex gap-8 mt-[88px]">
        <div className="lg:min-w-16 w-full lg:w-auto fixed lg:relative bottom-0 left-0 z-50">
          <SideNavbar />
        </div>
        <div className="flex-grow flex-1">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};
