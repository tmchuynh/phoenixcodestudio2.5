"use client";

import { webDevTeam } from "@/lib/constants/web-dev-team.tsx";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function TabSections() {
  // Initialize state with the default tab index (Interview tab in this case).
  const [activeTab, setActiveTab] = useState(2);

  return (
    <div className="py-10 2xl:py-16">
      <div className="pb-5 sm:pb-0 border-b">
        <h2>The People Behind You</h2>
        <div className="mt-6 md:mt-10">
          {/* Mobile view with a select dropdown */}
          <div className="relative md:hidden">
            <select
              value={webDevTeam[activeTab].name}
              onChange={(e) => {
                const newIndex = webDevTeam.findIndex(
                  (tab) => tab.name === e.target.value
                );
                setActiveTab(newIndex);
              }}
              aria-label="Select a tab"
              className="py-2 pr-8 pl-3 rounded-md w-full text-base appearance-none outline-1 -outline-offset-1"
            >
              {webDevTeam.map((tab) => (
                <option key={tab.name} value={tab.name}>
                  {tab.name}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="top-1/2 right-2 absolute w-5 h-5 transform -translate-y-1/2 pointer-events-none"
            />
          </div>

          {/* Desktop view with tab buttons */}
          <div className="md:block hidden">
            <nav className="flex space-x-8 -mb-px">
              {webDevTeam.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(index)}
                  aria-current={activeTab === index ? "page" : undefined}
                  className={cn(
                    activeTab === index
                      ? "border-secondary text-secondary"
                      : "border-transparent text-tertiary hover:text-primary",
                    "border-b-2 px-1 pb-4 text-sm font-medium whitespace-nowrap lg:text-lg"
                  )}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <div>{webDevTeam[activeTab].content}</div>
      </div>
    </div>
  );
}
