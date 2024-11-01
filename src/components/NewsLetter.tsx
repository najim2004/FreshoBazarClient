import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export const NewsLetter: React.FC = () => {
  return (
    <Card className="min-w-full bg-white border-none shadow-none rounded-sm">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Subscribe to Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Signup with your email address to receive deals & offers
            </p>
          </div>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Enter Email address"
              className="bg-gray-100"
            />
            <Button className="w-full bg-primary text-white hover:bg-zinc-800">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
