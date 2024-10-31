import { Truck, CreditCard, DollarSign, Percent } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 mt-10">
      {/* Top banner */}
      <div className="bg-primary text-white py-6">
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

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAElElEQVR4nO1aXYgcRRBuna65O6MBH6PGJzEi0QejD6JPKqIg+qDng3+HAXerZrP+JIiPiz8IskZYbro2i5IDjUIORXxRHwTx71FEjYRoBIkSIQZNotxp8G6lZnrv5u5ytzv7M7OzzgcNy8x2V/XXVTVd1a1UGmgULgDGKjD+CowngHGvPFP/B7iNwlWa8RtgakabNnQYpkvXqFEGME4B4192wt/BdOk6va9wvWY8FBIh73BKjRxmpsbBUC2y2q+r6p5NHb/PMtx68epgtVeZ/HLDz9azEOmrsgyITGjdZujTNYRl3iVmejTpLLuEG43yhuaBqdDtWGDokYhLDP9XAiIKD6bhXC+EDg4zK0120G2oXMJdsbEZ7AoNnUtACgolSfj6aBRAM+5PyuTbugTjftFJJQVgfCXtSa9phl5OkoCTAfP14k0qZYgO1h1OJCYUDP0mQh2m21TKEB2SJ4Bxb7omH+YPwPhF5Fk1MQJUowDic2ExIxV/D/IHIcIWVKqqUtHJEZCjPULzXE510x4ncYA112EZJ3FATgDlFgC5C1AeA9SQxJLEAXkMwL+DlXtt50Vds1grb7Y7v1Mqa9CMP4nyvdT2gXG7zfe/VlmDNvR2oLyhJ7oew/eesgS8obIGMPSQJeBbNTvpxB5gdtJpnSg5jHeqzKFWHtOMP9sVLMXtrhkfD/vSj5nN9KBevN8GsX8c37s1VpHD0FkwtOgw3qKyDDDkt0jQ9eKuDd1BzF5WXiYfFjleVJlHpXL+EgmhOxwKgxtuV753oTT5rQ3tXnmKjM+qUYLLNKkZj3Va9VEjiVp5DBgf0IYOakNHg8NTQ/PyWzO+tRQzRpEA6LCyM8IEUEcTGx0CZicdYNohO8HWrjAOAdJH+soYXW2k0oLre/eBoQ/B0Jlz1PM/atdf/nOOMvgZGdNlvFcNDZgudhjvAsaXwNDHwLhTHmvGI5FP3g+acQYMPepOl67sdGj5r/SRvtrQ9xGrOGxlPAmMn4hs0UF0UUnBMXS7DWgL0VXShg7Ie2B82K72nPa9m3uVpw15siMUeS7j3cEzxndXWdYCGPp84Ed12tDuiFnO21V4wfG9O6LH09rQq/Z/v2tDN3QlrKnO00zPBJM3tChELL2rlcdEJhh63uowZ3Va7CX73BB6X+FGK+RfIUKU2PD+gKH3IkTFu+pWK29eDpy40DaZChOvp60lLHZN+kZoTUgzVlQnCEk4EHGRN8cNbW3XzfW9eyQDtJP/U4JqjLzjOavjO6rfgOBmNzUnpkuXxOknCZC9LifWcFYzzUK9+OCY710R3BCv7tkEhq6VwCaVn0gA/dJl3BZH1kS9eKmVc1z1G9DDBmW8UbhcqjqrA+c6J7/Hwfce6/bbP7CNFPRj4EZhi/izfNO1oV8gKJziH5rxKyEo+KT1eNdnuAlIADkBnFtAM3cBzmNAMzvBpc/IYwDnMaCZxwDOY0Cz37FF5UHQhDW+iVr5MjWkkHR7YBcqdKsMZej9YSQhnDx+YGsPB/suwGXcJiWuWJeaU2l4cmALNG5oa1DQYDyd/kTXTPy0rHzcyf8HX8iXA/k0/W0AAAAASUVORK5CYII="
                alt="Krishok Bolchi"
                className="mb-4 h-[50px]"
              />
              <h1 className="text-xl font-bold text-primary">Krishok Bolchi</h1>
            </div>
            <p className="text-sm mb-4">
              Discover a world of exceptional tastes curated just for you. From
              farm-fresh produce to gourmet delicacies, our handpicked selection
              of premium ingredients elevates every meal.
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
    </footer>
  );
};
