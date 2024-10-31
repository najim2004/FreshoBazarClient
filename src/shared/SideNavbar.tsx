import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RiMessage3Line, RiUser3Line } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const SideNavbar: React.FC = () => {
  const navList: JSX.Element = (
    <>
      <li>
        <NavLink
          to={"/"}
          className="flex justify-center items-center text-xl lg:text-3xl p-1 lg:p-2 rounded-full hover:text-primary"
        >
          {/* home */}
          <TbSmartHome />
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/shop"}
          className="flex justify-center items-center text-xl lg:text-3xl p-1 lg:p-2 rounded-full hover:text-primary"
        >
          {/* shop */}
          <PiShoppingCartSimpleBold />
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/profile"}
          className="flex justify-center items-center text-xl lg:text-3xl p-1 lg:p-2 rounded-full hover:text-primary"
        >
          {/* profile */}
          <RiUser3Line />
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/chat"}
          className="flex justify-center items-center text-xl lg:text-3xl p-1 lg:p-2 rounded-full hover:text-primary"
        >
          {/* chat */}
          <RiMessage3Line />
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="fixed bottom-5 lg:top-0 left-0 lg:p-6 lg:h-full w-full lg:w-auto flex items-end lg:items-center justify-center">
      <div className="lg:w-16 lg:min-h-40 bg-white rounded-xl shadow-md lg:shadow-sm p-2.5">
        <ul className="navList w-full flex lg:flex-col items-center justify-center gap-5">
          {navList}
        </ul>
      </div>
    </nav>
  );
};
