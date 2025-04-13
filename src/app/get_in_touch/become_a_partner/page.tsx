import {
  BugAntIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className="bg-white px-6 lg:px-8 py-24 sm:py-32 isolate">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="font-semibold text-4xl text-balance text-gray-900 sm:text-5xl tracking-tight">
          Contact sales
        </h2>
        <p className="mt-2 text-gray-600 text-lg/8">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <div className="space-y-16 mx-auto mt-20 max-w-lg">
        <div className="flex gap-x-6">
          <div className="flex justify-center items-center bg-indigo-600 rounded-lg size-10 shrink-0">
            <ChatBubbleLeftRightIcon
              aria-hidden="true"
              className="text-white size-6"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base/7 text-gray-900">
              Sales support
            </h3>
            <p className="mt-2 text-base/7 text-gray-600">
              Ut cursus est ut amet. Lobortis eget egestas leo vitae eget
              porttitor risus blandit. Nunc a in lorem vel iaculis porttitor.
            </p>
            <p className="mt-4 font-semibold text-sm/6">
              <a href="#" className="text-indigo-600">
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex justify-center items-center bg-indigo-600 rounded-lg size-10 shrink-0">
            <BugAntIcon aria-hidden="true" className="text-white size-6" />
          </div>
          <div>
            <h3 className="font-semibold text-base/7 text-gray-900">
              Bug reports
            </h3>
            <p className="mt-2 text-base/7 text-gray-600">
              Expedita qui non ut quia ipsum voluptatum ipsam pariatur. Culpa
              vitae ipsum minus eius vero quo quibusdam.
            </p>
            <p className="mt-4 font-semibold text-sm/6">
              <a href="#" className="text-indigo-600">
                Report a bug <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex justify-center items-center bg-indigo-600 rounded-lg size-10 shrink-0">
            <ComputerDesktopIcon
              aria-hidden="true"
              className="text-white size-6"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base/7 text-gray-900">
              Technical support
            </h3>
            <p className="mt-2 text-base/7 text-gray-600">
              Sint aut modi porro consequatur architecto commodi qui
              consequatur. Dignissimos adipisci minima.
            </p>
            <p className="mt-4 font-semibold text-sm/6">
              <a href="#" className="text-indigo-600">
                Join our Discord <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
