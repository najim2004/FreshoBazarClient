import React from "react";
import { Button } from "../ui/button";
import {
  HelpCircle,
  Home,
  Leaf,
  LineChart,
  MessageSquare,
  Package,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

export const SideMenu: React.FC = () => {
  return (
    <aside className="w-64 border-r bg-card bg-white rounded-lg">
      <div className="flex h-16 items-center gap-2 border-b px-4">
        <Link
          to={"/"}
          className="flex items-center justify-center lg:justify-normal space-x-2 text-2xl"
        >
          <Leaf className="h-8 w-8 text-[#4a7c59]" />
          <span className="text-color-primary font-semibold hidden xs:inline">
            Amader Krishok
          </span>
        </Link>
      </div>
      <nav className="space-y-1 p-4">
        <Button variant="default" className="w-full justify-start gap-2">
          <Home className="h-4 w-4" /> Home
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <LineChart className="h-4 w-4" /> Analytics
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Package className="h-4 w-4" /> Shop
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <MessageSquare className="h-4 w-4" /> Chat
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" /> Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <HelpCircle className="h-4 w-4" /> Help
        </Button>
      </nav>
    </aside>
  );
};
