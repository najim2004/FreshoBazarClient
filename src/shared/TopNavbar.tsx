import { IoIosSearch } from "react-icons/io";
import { RiShoppingBag3Fill } from "react-icons/ri";

import React from "react";
import { Link } from "react-router-dom";

export const TopNavbar: React.FC = () => {
  return (
    <nav className="fixed top-0 lg:top-6 left-0 lg:h-16 flex items-center gap-4 lg:gap-8 w-full lg:px-6 z-50  text-color-primary">
      <Link
        to={"/"}
        className="hidden size-16 rounded-full bg-white shadow-sm shadow-primary/40 lg:flex items-center justify-center overflow-hidden"
      >
        <img
          className="mt-4"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAElElEQVR4nO1aXYgcRRBuna65O6MBH6PGJzEi0QejD6JPKqIg+qDng3+HAXerZrP+JIiPiz8IskZYbro2i5IDjUIORXxRHwTx71FEjYRoBIkSIQZNotxp8G6lZnrv5u5ytzv7M7OzzgcNy8x2V/XXVTVd1a1UGmgULgDGKjD+CowngHGvPFP/B7iNwlWa8RtgakabNnQYpkvXqFEGME4B4192wt/BdOk6va9wvWY8FBIh73BKjRxmpsbBUC2y2q+r6p5NHb/PMtx68epgtVeZ/HLDz9azEOmrsgyITGjdZujTNYRl3iVmejTpLLuEG43yhuaBqdDtWGDokYhLDP9XAiIKD6bhXC+EDg4zK0120G2oXMJdsbEZ7AoNnUtACgolSfj6aBRAM+5PyuTbugTjftFJJQVgfCXtSa9phl5OkoCTAfP14k0qZYgO1h1OJCYUDP0mQh2m21TKEB2SJ4Bxb7omH+YPwPhF5Fk1MQJUowDic2ExIxV/D/IHIcIWVKqqUtHJEZCjPULzXE510x4ncYA112EZJ3FATgDlFgC5C1AeA9SQxJLEAXkMwL+DlXtt50Vds1grb7Y7v1Mqa9CMP4nyvdT2gXG7zfe/VlmDNvR2oLyhJ7oew/eesgS8obIGMPSQJeBbNTvpxB5gdtJpnSg5jHeqzKFWHtOMP9sVLMXtrhkfD/vSj5nN9KBevN8GsX8c37s1VpHD0FkwtOgw3qKyDDDkt0jQ9eKuDd1BzF5WXiYfFjleVJlHpXL+EgmhOxwKgxtuV753oTT5rQ3tXnmKjM+qUYLLNKkZj3Va9VEjiVp5DBgf0IYOakNHg8NTQ/PyWzO+tRQzRpEA6LCyM8IEUEcTGx0CZicdYNohO8HWrjAOAdJH+soYXW2k0oLre/eBoQ/B0Jlz1PM/atdf/nOOMvgZGdNlvFcNDZgudhjvAsaXwNDHwLhTHmvGI5FP3g+acQYMPepOl67sdGj5r/SRvtrQ9xGrOGxlPAmMn4hs0UF0UUnBMXS7DWgL0VXShg7Ie2B82K72nPa9m3uVpw15siMUeS7j3cEzxndXWdYCGPp84Ed12tDuiFnO21V4wfG9O6LH09rQq/Z/v2tDN3QlrKnO00zPBJM3tChELL2rlcdEJhh63uowZ3Va7CX73BB6X+FGK+RfIUKU2PD+gKH3IkTFu+pWK29eDpy40DaZChOvp60lLHZN+kZoTUgzVlQnCEk4EHGRN8cNbW3XzfW9eyQDtJP/U4JqjLzjOavjO6rfgOBmNzUnpkuXxOknCZC9LifWcFYzzUK9+OCY710R3BCv7tkEhq6VwCaVn0gA/dJl3BZH1kS9eKmVc1z1G9DDBmW8UbhcqjqrA+c6J7/Hwfce6/bbP7CNFPRj4EZhi/izfNO1oV8gKJziH5rxKyEo+KT1eNdnuAlIADkBnFtAM3cBzmNAMzvBpc/IYwDnMaCZxwDOY0Cz37FF5UHQhDW+iVr5MjWkkHR7YBcqdKsMZej9YSQhnDx+YGsPB/suwGXcJiWuWJeaU2l4cmALNG5oa1DQYDyd/kTXTPy0rHzcyf8HX8iXA/k0/W0AAAAASUVORK5CYII="
        />
      </Link>

      <div className="flex-grow h-12 lg:h-16 lg:rounded-xl bg-white shadow-sm py-1.5 lg:py-2.5 px-1 lg:px-4 flex items-center justify-between gap-x-4 shadow-primary/30">
        <div className="flex items-center min-w-min">
          <img
            className="lg:hidden size-8"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAElElEQVR4nO1aXYgcRRBuna65O6MBH6PGJzEi0QejD6JPKqIg+qDng3+HAXerZrP+JIiPiz8IskZYbro2i5IDjUIORXxRHwTx71FEjYRoBIkSIQZNotxp8G6lZnrv5u5ytzv7M7OzzgcNy8x2V/XXVTVd1a1UGmgULgDGKjD+CowngHGvPFP/B7iNwlWa8RtgakabNnQYpkvXqFEGME4B4192wt/BdOk6va9wvWY8FBIh73BKjRxmpsbBUC2y2q+r6p5NHb/PMtx68epgtVeZ/HLDz9azEOmrsgyITGjdZujTNYRl3iVmejTpLLuEG43yhuaBqdDtWGDokYhLDP9XAiIKD6bhXC+EDg4zK0120G2oXMJdsbEZ7AoNnUtACgolSfj6aBRAM+5PyuTbugTjftFJJQVgfCXtSa9phl5OkoCTAfP14k0qZYgO1h1OJCYUDP0mQh2m21TKEB2SJ4Bxb7omH+YPwPhF5Fk1MQJUowDic2ExIxV/D/IHIcIWVKqqUtHJEZCjPULzXE510x4ncYA112EZJ3FATgDlFgC5C1AeA9SQxJLEAXkMwL+DlXtt50Vds1grb7Y7v1Mqa9CMP4nyvdT2gXG7zfe/VlmDNvR2oLyhJ7oew/eesgS8obIGMPSQJeBbNTvpxB5gdtJpnSg5jHeqzKFWHtOMP9sVLMXtrhkfD/vSj5nN9KBevN8GsX8c37s1VpHD0FkwtOgw3qKyDDDkt0jQ9eKuDd1BzF5WXiYfFjleVJlHpXL+EgmhOxwKgxtuV753oTT5rQ3tXnmKjM+qUYLLNKkZj3Va9VEjiVp5DBgf0IYOakNHg8NTQ/PyWzO+tRQzRpEA6LCyM8IEUEcTGx0CZicdYNohO8HWrjAOAdJH+soYXW2k0oLre/eBoQ/B0Jlz1PM/atdf/nOOMvgZGdNlvFcNDZgudhjvAsaXwNDHwLhTHmvGI5FP3g+acQYMPepOl67sdGj5r/SRvtrQ9xGrOGxlPAmMn4hs0UF0UUnBMXS7DWgL0VXShg7Ie2B82K72nPa9m3uVpw15siMUeS7j3cEzxndXWdYCGPp84Ed12tDuiFnO21V4wfG9O6LH09rQq/Z/v2tDN3QlrKnO00zPBJM3tChELL2rlcdEJhh63uowZ3Va7CX73BB6X+FGK+RfIUKU2PD+gKH3IkTFu+pWK29eDpy40DaZChOvp60lLHZN+kZoTUgzVlQnCEk4EHGRN8cNbW3XzfW9eyQDtJP/U4JqjLzjOavjO6rfgOBmNzUnpkuXxOknCZC9LifWcFYzzUK9+OCY710R3BCv7tkEhq6VwCaVn0gA/dJl3BZH1kS9eKmVc1z1G9DDBmW8UbhcqjqrA+c6J7/Hwfce6/bbP7CNFPRj4EZhi/izfNO1oV8gKJziH5rxKyEo+KT1eNdnuAlIADkBnFtAM3cBzmNAMzvBpc/IYwDnMaCZxwDOY0Cz37FF5UHQhDW+iVr5MjWkkHR7YBcqdKsMZej9YSQhnDx+YGsPB/suwGXcJiWuWJeaU2l4cmALNG5oa1DQYDyd/kTXTPy0rHzcyf8HX8iXA/k0/W0AAAAASUVORK5CYII="
          />
          <h3 className="text-xs leading-3 lg:leading-normal lg:text-lg font-bold text-primary">
            Krishok Bolchi
          </h3>
        </div>

        <div className="flex justify-center items-center max-w-[500px] w-full h-full bg-gray-100 rounded-xl overflow-hidden">
          <input
            type="text"
            className="bg-transparent border-none outline-none flex-grow w-full h-full pl-2 lg:pl-5"
            placeholder="Search"
          />
          <button className="active:scale-90 hover:font-black text-primary h-full px-1.5 lg:px-3 text-2xl font-semibold">
            <IoIosSearch />
          </button>
        </div>
        <Link
          to={"/cart"}
          className="bg-gray-100 text-primary flex gap-1 text-base lg:text-xl font-semibold items-center justify-center h-full px-3 rounded-xl"
        >
          <RiShoppingBag3Fill className="text-base lg:text-2xl mb-1" />
          02
        </Link>
      </div>
    </nav>
  );
};
