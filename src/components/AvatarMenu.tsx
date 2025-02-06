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
import { DashboardIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/redux/slices/user.slice";

interface AvatarMenuProps {
  userName: string;
  avatarUrl: string;
}

export const AvatarMenu: React.FC<AvatarMenuProps> = ({
  userName,
  avatarUrl,
}) => {
  const dispatcher=useDispatch()
  const onLogout=()=>{
    dispatcher(logoutUser())
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="border">
          <AvatarImage src={avatarUrl} alt={userName} />
          <AvatarFallback>
            {userName[0] + userName[userName?.length - 1]}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48 p-2 bg-white rounded-md shadow-lg mt-3">
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
        <DropdownMenuItem
          onClick={onLogout}
          className="flex items-center space-x-2"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
