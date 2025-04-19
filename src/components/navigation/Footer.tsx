import {
  about,
  aboutFeaturedLinks,
  contact,
  contactFeaturedLinks,
  serviceCategories,
  serviceFeaturedLinks,
} from "@/lib/constants/navigation";
import ResponsiveLogo from "../Logo";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto py-6 md:py-12 lg:py-20 w-11/12 max-w-7xl">
        <div className="grid grid-cols-3">
          <div className="md:flex justify-center items-center hidden w-full h-1/2 lg:h-full cols-span-3">
            <ResponsiveLogo
              className="lg:flex justify-center w-full"
              imgClassName=" mx-0 w-full h-auto lg:w-auto object-cover"
            />
          </div>
          <div className="gap-6 xl:gap-8 grid md:grid-cols-2 xl:grid-cols-3 col-span-2">
            <div>
              <h5 className="text-lg">About Us</h5>
              <ul role="list" className="space-y-4 mt-6">
                {aboutFeaturedLinks.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="text-sm/6 underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
                {about.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="text-sm/6 underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-lg">Services</h5>
              <ul role="list" className="space-y-4 mt-6">
                {serviceCategories.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="text-sm/6 underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
                {serviceFeaturedLinks.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="text-sm/6 underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-lg">Contact Us</h5>
              <ul role="list" className="space-y-4 mt-6">
                {contactFeaturedLinks.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="text-sm/6 underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
                {contact.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="text-sm/6 underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
