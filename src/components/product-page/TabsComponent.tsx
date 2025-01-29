import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type TabId = "about" | "ratings" | "shipping";

interface TabsComponentProps {
  activeTab: TabId;
  setActiveTab: (tabId: TabId) => void;
  tabs: { id: TabId; label: string }[];
  loading:boolean;
}

export const TabsComponent: React.FC<TabsComponentProps> = ({
  activeTab,
  setActiveTab,
  tabs,
  loading,
}) => {

  if (loading) {
    return <TabsSkeleton />;
  }

  return (
    <nav className="mx-auto shadow-md px-4 bg-white mt-8 h-16 rounded-t-md overflow-x-auto whitespace-nowrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 font-medium h-[calc(100%-2px)] border-b-4 outline-none transition-colors duration-200 ${
            activeTab === tab.id
              ? "text-primary border-primary"
              : "text-muted-foreground hover:text-foreground border-transparent"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

const TabsSkeleton: React.FC = () => {
  return (
    <div className="mx-auto shadow-md px-4 bg-white mt-8 h-16 rounded-t-md overflow-x-auto whitespace-nowrap">
      <div className="flex space-x-4 h-full items-center">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  );
};
