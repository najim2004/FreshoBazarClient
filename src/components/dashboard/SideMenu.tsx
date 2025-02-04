import React from "react";
import {
  HelpCircle,
  Leaf,
  LineChart,
  MessageSquare,
  Package,
  Settings,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { IoMdListBox } from "react-icons/io";

export const SideMenu: React.FC = () => {
  return (
    <aside className="min-w-64 border-r bg-card bg-white rounded-lg">
      <div className="flex h-16 items-center gap-2 border-b px-4">
        <Link
          to={"/"}
          className="flex items-center justify-center lg:justify-normal space-x-2 text-2xl"
        >
          <Leaf className="h-8 w-8 text-[#4a7c59]" />
          <span className="text-color-primary font-semibold hidden xs:inline">
            FreshoBazar
          </span>
        </Link>
      </div>
      <nav className="space-y-1 p-4 dashboard-nav">
        <NavLink
          to="/dashboard"
          end
          className="w-full flex justify-start gap-2 px-4 items-center py-1.5 rounded-md"
        >
          <IoMdListBox className="h-4 w-4" /> Overview
        </NavLink>
        <NavLink
          to="/dashboard/analytics"
          className="w-full flex justify-start gap-2 px-4 items-center py-1.5 hover:bg-gray-100 rounded-md"
        >
          <LineChart className="h-4 w-4" /> Analytics
        </NavLink>
        <NavLink
          to="/dashboard/shop"
          className="w-full flex justify-start gap-2 px-4 items-center py-1.5 hover:bg-gray-100 rounded-md"
        >
          <Package className="h-4 w-4" /> Shop
        </NavLink>
        <NavLink
          to="/dashboard/chat"
          className="w-full flex justify-start gap-2 px-4 items-center py-1.5 hover:bg-gray-100 rounded-md"
        >
          <MessageSquare className="h-4 w-4" /> Chat
        </NavLink>
        <NavLink
          to="/dashboard/settings"
          className="w-full flex justify-start gap-2 px-4 items-center py-1.5 hover:bg-gray-100 rounded-md"
        >
          <Settings className="h-4 w-4" /> Settings
        </NavLink>
        <NavLink
          to="/dashboard/help"
          className="w-full flex justify-start gap-2 px-4 items-center py-1.5 hover:bg-gray-100 rounded-md"
        >
          <HelpCircle className="h-4 w-4" /> Help
        </NavLink>
      </nav>
    </aside>
  );
};
