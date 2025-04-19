import Image from "next/image";

export default function CannotFind() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[max(50%,36rem)_1fr] grid-rows-[1fr_auto_1fr] min-h-screen">
        <main className="lg:col-span-2 lg:col-start-1 lg:row-start-2 mx-auto py-12 md:py-20 w-11/12 max-w-7xl">
          <div className="max-w-lg">
            <p className="font-semibold text-base/8 text-indigo-600">404</p>
            <h1 className="mt-4 font-semibold text-5xl text-gray-900 text-pretty sm:text-6xl tracking-tight">
              Page not found
            </h1>
            <p className="mt-6 font-medium text-gray-500 text-lg text-pretty sm:text-xl/8">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10">
              <a href="#" className="font-semibold text-indigo-600 text-sm/7">
                <span aria-hidden="true">&larr;</span> Back to home
              </a>
            </div>
          </div>
        </main>
        <footer className="lg:col-span-2 lg:col-start-1 lg:row-start-3 self-end">
          <div className="bg-gray-50 py-10 border-gray-100 border-t">
            <nav className="flex items-center gap-x-4 mx-auto w-11/12 max-w-7xl text-sm/7">
              <a href="#">Contact support</a>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="size-0.5 fill-gray-300"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <a href="#">Status</a>
            </nav>
          </div>
        </footer>
        <div className="lg:block lg:relative hidden lg:col-start-2 lg:row-start-1 lg:row-end-4">
          <Image
            alt=""
            src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
            className="absolute inset-0 size-full object-cover"
            width={1825}
            height={1825}
          />
        </div>
      </div>
    </>
  );
}
