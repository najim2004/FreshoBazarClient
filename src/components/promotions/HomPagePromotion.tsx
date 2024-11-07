import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  deliveryManImg,
  fruitsImg,
  transparentBg,
} from "@/assets/amader-krishok-assets";

export const HomePagePromotion = () => {
  return (
    <div className="mt-10 grid md:grid-cols-2 gap-4 w-full">
      {/* Free Delivery Banner */}
      <Card className="relative overflow-hidden border-none h-[300px] bg-red-50 rounded-sm flex items-center">
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            background: `url(${transparentBg}) lightgray 50% / cover no-repeat`,
          }}
        ></div>
        <CardContent className="px-12 py-8 z-50 ">
          <Badge className=" bg-amber-100 mb-4 border-none min-w-[86px] w-max py-2 rounded-sm shadow-none text-color-secondary">
            FREE DELIVERY
          </Badge>
          <div className="max-w-[250px] h-full">
            <h3 className="text-2xl font-semibold mb-4 text-color-primary">
              Free delivery over $50
            </h3>
            <p className="text-sm text-color-ternary mb-4">
              Shop $50 product and get free delivery anytime
            </p>
            <Button className="bg-primary/80 hover:bg-primary mt-[43px] rounded-none text-lg p-6">
              Shop Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
        <div className="absolute h-full top-0 -right-4 z-10">
          <img
            src={deliveryManImg}
            alt="Delivery person with box"
            className="h-full object-cover w-[200px] object-center"
          />
        </div>
      </Card>

      {/* Organic Food Banner */}
      <Card className="relative overflow-hidden border-none h-[300px] bg-green-100 rounded-sm flex items-center">
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            background: `url(${transparentBg}) lightgray 50% / cover no-repeat`,
          }}
        ></div>
        <CardContent className="px-12 py-8 z-50 ">
          <Badge className=" bg-primary/80 mb-4 border-none min-w-[86px] w-max py-2 rounded-sm shadow-none text-white">
            60% off
          </Badge>
          <div className="max-w-[250px] h-full">
            <h3 className="text-2xl font-semibold mb-4 text-color-primary">
              Organic Food
            </h3>
            <p className="text-sm text-color-ternary mb-4">
              Save up to 60% off on your first order
            </p>
            <Button className="bg-primary/80 hover:bg-primary mt-[43px] rounded-none text-lg p-6">
              Shop Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
        <img
          src={fruitsImg}
          alt="Delivery person with box"
          className="h-[90%] object-cover object-center absolute bottom-0 right-0 z-10"
        />
      </Card>
    </div>
  );
};
