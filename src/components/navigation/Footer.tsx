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

export default function Footer() {
  return (
    <footer className="mt-6 md:mt-12 lg:mt-16 xl:mt-24 border-t">
      <div className="mx-auto px-6 lg:px-8 py-6 md:py-12 lg:py-20 max-w-7xl">
        <div className="xl:gap-8 xl:grid xl:grid-cols-3">
          <Image
            alt="Company name"
            src="/images/logo.png"
            className="object-cover object-center aspect-auto"
            width={300}
            height={300}
          />
          <div className="gap-8 grid grid-cols-2 xl:col-span-2 mt-16 xl:mt-0">
            <div className="md:gap-8 md:grid md:grid-cols-2">
              <div>
                <h4>
                  Solutions
                </h4>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.solutions.map( ( item ) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 underline-offset-4 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ) )}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h4>
                  Support
                </h4>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.support.map( ( item ) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 underline-offset-4 hover:underline"
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
                <h4>
                  Company
                </h4>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.company.map( ( item ) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 underline-offset-4 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ) )}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h4>Legal</h4>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.legal.map( ( item ) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 underline-offset-4 hover:underline"
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
