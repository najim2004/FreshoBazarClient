import { NewsLetter } from "@/components/NewsLetter";
import React from "react";

export const RightNavbar: React.FC = () => {
  return (
    <div className="min-w-[250px] hidden xl:block">
      <NewsLetter />
    </div>
  );
};
