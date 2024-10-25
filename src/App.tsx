import React from "react";
import { Outlet } from "react-router-dom";
import { TopNavbar } from "./shared/TopNavbar";
import { SideNavbar } from "./shared/SideNavbar";

export const App: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <TopNavbar />
      <div className="flex gap-8 min-h-screen mt-[88px]">
        <div className="min-w-16">
          <SideNavbar />
        </div>
        <div className="flex-grow flex-1 lg:max-w-[clc(100vw-136px)] overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
