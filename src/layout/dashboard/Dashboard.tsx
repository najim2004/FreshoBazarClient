import { SideMenu } from "@/components/dashboard/SideMenu";
import { DashboardNavbar } from "@/shared/DashboardNavbar";
import React from "react";
import { Outlet } from "react-router-dom";

export const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen w-full p-8 gap-6">
      <SideMenu />
      <div className="flex-grow flex flex-col gap-6">
        <DashboardNavbar />
        <div className="flex-grow overflow-auto rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
