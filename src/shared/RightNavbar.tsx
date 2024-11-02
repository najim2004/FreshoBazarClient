import { NewsLetter } from "@/components/NewsLetter";
import React from "react";
import { useLocation } from "react-router-dom";

export const RightNavbar: React.FC = () => {
  const location = useLocation();
  const isCartRoute: boolean = location.pathname.includes("/cart");
  if (isCartRoute) return null;
  return (
    <div className={`min-w-[250px] max-w-[250px] hidden xl:block`}>
      <NewsLetter />
    </div>
  );
};
