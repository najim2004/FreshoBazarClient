import { Button } from "@/components/ui/button";
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingDown, TrendingUp } from "lucide-react";

export const Overview: React.FC = () => {
  const metrics = [
    {
      label: "Total Customer",
      value: "307.48K",
      change: "+30%",
      trend: [40, 50, 45, 55, 60, 65, 70, 75],
    },
    {
      label: "Total Revenue",
      value: "$30.58K",
      change: "-15%",
      trend: [70, 65, 60, 55, 50, 45, 40, 35],
    },
    {
      label: "Total Deals",
      value: "2.48K",
      change: "+23%",
      trend: [35, 45, 40, 50, 45, 55, 50, 60],
    },
    {
      label: "Total Canceled",
      value: "2.48K",
      change: "+23%",
      trend: [35, 45, 40, 50, 45, 55, 50, 60],
    },
  ];

  const topCountries = [
    { name: "Australia", flag: "🇦🇺", sales: "7.15K", trend: "up" },
    { name: "Belgium", flag: "🇧🇪", sales: "4.15K", trend: "down" },
    { name: "Canada", flag: "🇨🇦", sales: "6.45K", trend: "up" },
    { name: "Costa Rica", flag: "🇨🇷", sales: "3.85K", trend: "down" },
    { name: "Austria", flag: "🇦🇹", sales: "6.98K", trend: "up" },
  ];

  const topCustomers = [
    {
      name: "Robert Lewis",
      purchases: "20",
      amount: "$4.19K",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Tom Barrett",
      purchases: "18",
      amount: "$3.56K",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Jensen Doyle",
      purchases: "15",
      amount: "$3.12K",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Donald Carter",
      purchases: "12",
      amount: "$2.14K",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  const recentOrders = [
    {
      product: "Nike Air Force 1",
      category: "Shoes",
      price: "$110.96",
      status: "In Stock",
    },
    {
      product: "Men's Dri-FIT 7",
      category: "Sports",
      price: "$38.97",
      status: "In Stock",
    },
    {
      product: "Jordan Dri-FIT Sport",
      category: "Sports",
      price: "$35.60",
      status: "Out of Stock",
    },
  ];

  return (
    <div className="bg-white p-3 rounded-lg flex-grow">
      {/* Metrics */}
      <div className="grid gap-7 md:grid-cols-4">
        {metrics.map((metric, i) => (
          <Card key={i} className="p-6 border-none shadow-none bg-green-50/50">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <h2 className="text-3xl font-bold">{metric.value}</h2>
                <p
                  className={`text-sm ${
                    metric.change.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {metric.change} This month
                </p>
              </div>
              <div className="h-16 w-24 flex justify-center items-center">
                {metric.change.startsWith("+") ? (
                  <TrendingUp className="size-10 text-green-500" />
                ) : (
                  <TrendingDown className="size-10 text-red-500" />
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* Top Countries */}
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Top Countries by Sells</h3>
              <p className="text-sm text-muted-foreground">
                34.48K Since last week
              </p>
            </div>
            <div className="mt-4 space-y-4">
              {topCountries.map((country, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{country.flag}</span>
                    <span>{country.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{country.sales}</span>
                    <span
                      className={
                        country.trend === "up"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {country.trend === "up" ? "↑" : "↓"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Top Customers */}
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Top Customers</h3>
              <Button variant="link" size="sm">
                See all
              </Button>
            </div>
            <div className="mt-4 space-y-4">
              {topCustomers.map((customer, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={customer.avatar} />
                      <AvatarFallback>{customer.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {customer.purchases} Purchases
                      </p>
                    </div>
                  </div>
                  <span className="font-medium">{customer.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card className="mt-6">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Recent Orders</h3>
            <Button variant="link" size="sm">
              See all
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order, i) => (
                <TableRow key={i}>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.category}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order?.status === "In Stock"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};
