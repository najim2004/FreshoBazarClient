import { Truck, CreditCard, DollarSign, Percent, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 mt-10">
      {/* Top banner */}
      <div className="bg-primary text-white py-6">
        <div className="lg:max-w-[calc(100%-548px)] mx-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center">
                <Truck className="w-8 h-8 mr-3" />
                <div>
                  <h3 className="font-bold">Free Delivery</h3>
                  <p className="text-sm">
                    Get free delivery for order spent $100 or over.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <CreditCard className="w-8 h-8 mr-3" />
                <div>
                  <h3 className="font-bold">Safe Payment</h3>
                  <p className="text-sm">
                    Payment system is very much safe and secure.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <DollarSign className="w-8 h-8 mr-3" />
                <div>
                  <h3 className="font-bold">Money Back</h3>
                  <p className="text-sm">
                    Very easy to make your money back option.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Percent className="w-8 h-8 mr-3" />
                <div>
                  <h3 className="font-bold">Best Prices and Offers</h3>
                  <p className="text-sm">
                    Cashback offers to top it off. Get best pricess & offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-[calc(100%-548px)] mx-auto">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2">
                <Link to={"/"} className="flex items-center space-x-2 text-2xl">
                  <Leaf className="h-8 w-8 text-[#4a7c59]" />
                  <span className="text-color-primary font-semibold">
                    FreshoBazar
                  </span>
                </Link>
              </div>
              <p className="text-sm mb-4">
                Discover a world of exceptional tastes curated just for you.
                From farm-fresh produce to gourmet delicacies, our handpicked
                selection of premium ingredients elevates every meal.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Get to know us</h3>
              <ul className="space-y-2">
                {["About", "Blog", "Our Value", "Contact", "help centre"].map(
                  (item) => (
                    <li key={item}>
                      <Link to="#" className="hover:text-emerald-600">
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">For Consumers</h3>
              <ul className="space-y-2">
                {[
                  "Payments",
                  "Shipping",
                  "Product Returns",
                  "FAQ",
                  "Shop Checkout",
                ].map((item) => (
                  <li key={item}>
                    <Link to="#" className="hover:text-emerald-600">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Best Selling Product</h3>
              <ul className="space-y-2">
                {[
                  "Butter",
                  "Milk Drinks",
                  "Breakfast Cereal",
                  "Curd & Yogurt",
                  "Condensed Milk",
                  "Fruit & Juices",
                ].map((item) => (
                  <li key={item}>
                    <Link to="#" className="hover:text-emerald-600">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link to="#" className="text-sm hover:text-emerald-600">
                Terms of Service
              </Link>
              <Link to="#" className="text-sm hover:text-emerald-600">
                Privacy & Policy
              </Link>
            </div>
            <div className="text-sm mb-4 md:mb-0">
              &copy;2024 Krishok Bolchi ALL RIGHTS REVERSED
            </div>
            <div className="flex space-x-4">
              {["Amazon Pay", "Mastercard", "PayPal", "Visa"].map((item) => (
                <img
                  key={item}
                  src={`/placeholder.svg?height=30&width=50&text=${item}`}
                  alt={item}
                  className="w-[50px] h-[30px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
