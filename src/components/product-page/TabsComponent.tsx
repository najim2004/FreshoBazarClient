import React from "react";

type tapId = "about" | "ratings" | "shipping";

interface TabsComponentProps {
  activeTab: string;
  setActiveTab: (tabId: tapId) => void;
  tabs: { id: tapId; label: string }[];
}

export const TabsComponent: React.FC<TabsComponentProps> = ({
  activeTab,
  setActiveTab,
  tabs,
}) => {
  return (
    <nav className="mx-auto shadow-md px-4 bg-white mt-8 h-16 rounded-t-md">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 font-medium h-[calc(100%-2px)] border-b-4 outline-none ${
            activeTab === tab.id
              ? "text-color-primary border-primary"
              : "text-color-secondary hover:text-color-ternary border-none"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};
