import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Dashboard } from "../layout/dashboard/Dashboard";
import { DashboardIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

interface AvatarMenuProps {
  userName: string;
  avatarUrl: string;
}

export const AvatarMenu: React.FC<AvatarMenuProps> = ({
  userName,
  avatarUrl,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={userName} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48 p-2 bg-white rounded-md shadow-lg">
        <DropdownMenuLabel className="text-gray-700">
          {userName}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link to="/dashboard" className="flex items-center space-x-2">
            <DashboardIcon />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center space-x-2">
          <FaUser />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center space-x-2">
          <FaCog />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center space-x-2">
          <FaSignOutAlt />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
