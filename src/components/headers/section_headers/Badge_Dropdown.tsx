import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="pb-5 border-gray-200 border-b">
      <div className="sm:flex sm:justify-between sm:items-baseline">
        <div className="sm:flex-1 sm:w-0">
          <h1
            id="message-heading"
            className="font-semibold text-base text-gray-900"
          >
            Full-Stack Developer
          </h1>
          <p className="mt-1 text-gray-500 text-sm truncate">
            Checkout and Payments Team
          </p>
        </div>

        <div className="flex justify-between sm:justify-start items-center mt-4 sm:mt-0 sm:ml-6 sm:shrink-0">
          <span className="inline-flex items-center bg-green-50 px-2 py-1 rounded-full ring-1 ring-green-600/20 ring-inset font-medium text-green-700 text-xs">
            Open
          </span>
          <Menu as="div" className="inline-block relative ml-3 text-left">
            <div>
              <MenuButton className="flex items-center focus:outline-hidden bg-white -my-2 p-2 rounded-full focus:ring-2 focus:ring-indigo-500 text-gray-400 hover:text-gray-600">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="right-0 z-10 absolute focus:outline-hidden bg-white data-closed:opacity-0 shadow-lg mt-2 rounded-md ring-1 ring-black/5 w-56 data-closed:transform origin-top-right transition data-enter:duration-100 data-leave:duration-75 data-closed:scale-95 data-enter:ease-out data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="flex justify-between data-focus:outline-hidden data-focus:bg-gray-100 px-4 py-2 text-gray-700 text-sm data-focus:text-gray-900"
                  >
                    <span>Edit</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="flex justify-between data-focus:outline-hidden data-focus:bg-gray-100 px-4 py-2 text-gray-700 text-sm data-focus:text-gray-900"
                  >
                    <span>Duplicate</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <button
                    type="button"
                    className="flex justify-between data-focus:outline-hidden data-focus:bg-gray-100 px-4 py-2 w-full text-gray-700 text-sm data-focus:text-gray-900"
                  >
                    <span>Archive</span>
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
}
