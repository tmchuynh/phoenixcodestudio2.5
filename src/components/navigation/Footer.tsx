import Image from "next/image";

const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Automation", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Submit ticket", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
};

export default function Example() {
  return (
    <footer className="bg-white">
      <div className="mx-auto px-6 lg:px-8 py-16 sm:py-24 lg:py-32 max-w-7xl">
        <div className="xl:gap-8 xl:grid xl:grid-cols-3">
          <Image
            alt="Company name"
            src="/images/logo_white.png"
            className="h-9"
            width={36}
            height={36}
          />
          <div className="gap-8 grid grid-cols-2 xl:col-span-2 mt-16 xl:mt-0">
            <div className="md:gap-8 md:grid md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm/6">
                  Solutions
                </h3>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.solutions.map( ( item ) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-600 text-sm/6 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ) )}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold text-gray-900 text-sm/6">
                  Support
                </h3>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.support.map( ( item ) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-600 text-sm/6 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ) )}
                </ul>
              </div>
            </div>
            <div className="md:gap-8 md:grid md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm/6">
                  Company
                </h3>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.company.map( ( item ) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-600 text-sm/6 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ) )}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold text-gray-900 text-sm/6">Legal</h3>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.legal.map( ( item ) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-600 text-sm/6 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ) )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
