import { ChevronDownIcon } from "@heroicons/react/16/solid";

const tabs = [
  { name: "Applied", href: "#", current: false },
  { name: "Phone Screening", href: "#", current: false },
  { name: "Interview", href: "#", current: true },
  { name: "Offer", href: "#", current: false },
  { name: "Hired", href: "#", current: false },
];

export default function Example() {
  return (
    <div className="pb-5 sm:pb-0 border-gray-200 border-b">
      <h3 className="font-semibold text-base text-gray-900">Candidates</h3>
      <div className="mt-3 sm:mt-4">
        <div className="sm:hidden grid grid-cols-1">
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            defaultValue={tabs.find( ( tab ) => tab.current )?.name || tabs[0].name}
            aria-label="Select a tab"
            className="col-start-1 row-start-1 bg-white py-2 pr-8 pl-3 rounded-md w-full text-base text-gray-900 appearance-none outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          >
            {tabs.map( ( tab ) => (
              <option key={tab.name}>{tab.name}</option>
            ) )}
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="justify-self-end col-start-1 row-start-1 mr-2 pointer-events-none size-5 self-center fill-gray-500"
          />
        </div>
        <div className="sm:block hidden">
          <nav className="flex space-x-8 -mb-px">
            {tabs.map( ( tab ) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? "page" : undefined}
                className={classNames(
                  tab.current
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "border-b-2 px-1 pb-4 text-sm font-medium whitespace-nowrap"
                )}
              >
                {tab.name}
              </a>
            ) )}
          </nav>
        </div>
      </div>
    </div>
  );
}
