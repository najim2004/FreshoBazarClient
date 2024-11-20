import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ShopInfo: React.FC = () => {
  return (
    <div className="bg-white max-h-max rounded-lg overflow-hidden">
      <div className="relative bg-amber-400 p-6 h-[300px] pb-24">
        <div className="absolute -bottom-16 left-6">
          <Card className="h-32 w-32 p-4 shadow-lg">
            <img
              src="/placeholder.svg?height=80&width=80"
              alt="Nature Food Logo"
              className="h-full w-full object-contain"
            />
          </Card>
        </div>
      </div>

      <div className="p-6 pt-20">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Noodles Co.</h1>
            <p className="text-sm text-gray-500">
              3891 Ranchview Dr. Richardson, California 62639
            </p>
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">Actions</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              <ExternalLink className="mr-2 h-4 w-4" />
              View In
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-medium text-gray-500">Total sales</h2>
              <p className="text-3xl font-bold text-emerald-500">238</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-500">Revenue</h2>
              <p className="text-3xl font-bold text-emerald-500">$2380</p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-medium text-gray-900">Contacts</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Manager: Jerome Bell</p>
              <p>info@example.com</p>
              <p>(229) 555-0109, (808) 555-0111</p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-medium text-gray-900">Address</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Country: California</p>
              <p>Address: Ranchview Dr. Richardson</p>
              <p>Postal code: 62639</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
