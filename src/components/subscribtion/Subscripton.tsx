import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { subscriptionImg, transparentBg } from "@/assets/amader-krishok-assets";

export const Subscription: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });

    setEmail("");
    setIsLoading(false);
  };

  return (
    <div className="relative mt-10 w-full rounded-sm overflow-hidden bg-green-100">
      <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          background: `url(${transparentBg}) lightgray 50% / cover no-repeat`,
        }}
      ></div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-color-primary mb-4">
            Don't miss our daily amazing deals.
          </h2>
          <p className="text-color-ternary mb-8">
            Save up to 60% off on your first order
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex "
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white h-12 border-none rounded-none focus-visible:ring-0"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-primary/80 hover:bg-primary h-12 rounded-none"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
        <div className="relative hidden lg:block">
          <img
            src={subscriptionImg}
            alt="Fresh groceries spilling from a paper bag"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
