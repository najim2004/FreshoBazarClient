import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart2,
  ChevronDown,
  HelpCircle,
  Home,
  LogOut,
  PieChart,
  Search,
  Settings,
  ShoppingBag,
  User,
  Users,
} from "lucide-react";

const chartData = [
  { month: "Jan", earnings: 80 },
  { month: "Feb", earnings: 90 },
  { month: "Mar", earnings: 85 },
  { month: "Apr", earnings: 100 },
  { month: "May", earnings: 120 },
  { month: "Jun", earnings: 150 },
  { month: "Jul", earnings: 140 },
  { month: "Aug", earnings: 130 },
  { month: "Sep", earnings: 120 },
  { month: "Oct", earnings: 110 },
  { month: "Nov", earnings: 105 },
  { month: "Dec", earnings: 115 },
];

export const Dashboard = () => {
  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <div className="w-64 border-r p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-8 rounded-lg bg-primary" />
          <span className="font-semibold">Xenith</span>
        </div>
        <nav className="space-y-2">
          <Button variant="default" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <BarChart2 className="mr-2 h-4 w-4" />
            Analytics
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <PieChart className="mr-2 h-4 w-4" />
            Explore
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Shop
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            Chat
          </Button>
        </nav>
        <div className="mt-8">
          <h3 className="text-sm font-medium mb-2">Tools</h3>
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <HelpCircle className="mr-2 h-4 w-4" />
              Help
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Manage user
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="border-b p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Welcome Back, Zac!</h1>
              <p className="text-muted-foreground">
                Here's what happening with your store today
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <HelpCircle className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>ZH</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Customer
                </CardTitle>
                <span className="text-green-500">+30%</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">307.48K</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <span className="text-red-500">-15%</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$30.58K</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Deals
                </CardTitle>
                <span className="text-green-500">+23%</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.48K</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis
                      dataKey="month"
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Bar
                      dataKey="earnings"
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top selling products</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>S/NO. 01</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Total sales</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>DJ</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell>Denim Jacket</TableCell>
                    <TableCell>Men's Tops</TableCell>
                    <TableCell className="text-green-500">In Stock</TableCell>
                    <TableCell>1.43k</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>NS</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell>Nike Air Max 97</TableCell>
                    <TableCell>Men's Shoes</TableCell>
                    <TableCell className="text-red-500">Out of Stock</TableCell>
                    <TableCell>2.68k</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 border-l p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Top Countries by Sells</h3>
            <span className="text-sm text-muted-foreground">
              Since last week
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>AU</AvatarFallback>
                </Avatar>
                <span>Australia</span>
              </div>
              <div className="flex items-center gap-2">
                <span>7.15K</span>
                <span className="text-green-500">↑</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>BE</AvatarFallback>
                </Avatar>
                <span>Belgium</span>
              </div>
              <div className="flex items-center gap-2">
                <span>4.15K</span>
                <span className="text-red-500">↓</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Top Customers</h3>
            <Button variant="link" size="sm">
              See all
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>RL</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Robert Lewis</div>
                  <div className="text-sm text-muted-foreground">
                    20 Purchases
                  </div>
                </div>
              </div>
              <div className="font-medium">$4.19K</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Tom Barrett</div>
                  <div className="text-sm text-muted-foreground">
                    15 Purchases
                  </div>
                </div>
              </div>
              <div className="font-medium">$3.56K</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Recent Orders</h3>
            <Button variant="link" size="sm">
              See all
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>NF</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Nike Air Force 1</div>
                  <div className="text-sm text-muted-foreground">Shoes</div>
                </div>
              </div>
              <div className="font-medium">$110.96</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>DF</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Men's Dri-FIT 7</div>
                  <div className="text-sm text-muted-foreground">Sports</div>
                </div>
              </div>
              <div className="font-medium">$38.97</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
