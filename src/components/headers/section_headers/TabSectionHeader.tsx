"use client";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

// Define each tab with a name and its associated content.
const tabs = [
  { name: "Applied", content: <p>Content for the Applied stage.</p> },
  { name: "Phone Screening", content: <p>Content for the Phone Screening stage.</p> },
  { name: "Interview", content: <p>Content for the Interview stage.</p> },
  { name: "Offer", content: <p>Content for the Offer stage.</p> },
  { name: "Hired", content: <p>Content for the Hired stage.</p> },
];

export default function TabSectionHeader() {
  // Initialize state with the default tab index (Interview tab in this case).
  const [activeTab, setActiveTab] = useState( 2 );

  return (
    <div>
      <div className="pb-5 sm:pb-0 border-b">
        <h2>Candidates</h2>
        <div className="mt-3 sm:mt-4">
          {/* Mobile view with a select dropdown */}
          <div className="relative sm:hidden">
            <select
              value={tabs[activeTab].name}
              onChange={( e ) => {
                const newIndex = tabs.findIndex( tab => tab.name === e.target.value );
                setActiveTab( newIndex );
              }}
              aria-label="Select a tab"
              className="py-2 pr-8 pl-3 rounded-md w-full text-base appearance-none outline-1 -outline-offset-1"
            >
              {tabs.map( ( tab ) => (
                <option key={tab.name} value={tab.name} >
                  {tab.name}
                </option>
              ) )}
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="top-1/2 right-2 absolute w-5 h-5 transform -translate-y-1/2 pointer-events-none"
            />
          </div>

          {/* Desktop view with tab buttons */}
          <div className="sm:block hidden">
            <nav className="flex space-x-8 -mb-px">
              {tabs.map( ( tab, index ) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab( index )}
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
              ) )}
            </nav>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <div>{tabs[activeTab].content}</div>
      </div>
    </div>
  );
}
