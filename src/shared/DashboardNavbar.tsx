import { useState } from "react";
import { ChevronDown, Search, Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";

export const DashboardNavbar: React.FC = () => {
  const [currentUser] = useState({
    name: "Zac Hudson",
    avatar: "/placeholder.svg?height=32&width=32",
  });
  return (
    <header className="flex h-16 items-center justify-between border-b px-6 bg-white rounded-lg">
      <div>
        <h1 className="text-2xl font-semibold">Welcome Back, Zac!</h1>
        <p className="text-sm text-muted-fore   ground">
          Here's what happening with your store today
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="gap-2">
          <Avatar>
            <AvatarImage src={currentUser.avatar} />
            <AvatarFallback>ZH</AvatarFallback>
          </Avatar>
          {currentUser.name}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};
