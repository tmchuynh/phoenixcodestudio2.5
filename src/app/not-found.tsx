import ResponsiveLogo from "@/components/Logo";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  BookmarkSquareIcon,
  BookOpenIcon,
  QueueListIcon,
  RssIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const links = [
  {
    name: "Documentation",
    href: "#",
    description: "Learn how to integrate our tools with your app.",
    icon: BookOpenIcon,
  },
  {
    name: "API Reference",
    href: "#",
    description: "A complete API reference for our libraries.",
    icon: QueueListIcon,
  },
  {
    name: "Guides",
    href: "#",
    description: "Installation guides that cover popular setups.",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Blog",
    href: "#",
    description: "Read our latest news and articles.",
    icon: RssIcon,
  },
];

export default function Example() {
  return (
    <div>
      <main className="mx-auto px-6 lg:px-8 pt-10 pb-16 sm:pb-24 w-full max-w-7xl">
        <div className="flex justify-center items-center">
          <ResponsiveLogo />
        </div>

        <div className="mx-auto mt-10 md:mt-16 max-w-2xl text-center">
          <h5>404</h5>
          <h1>This page does not exist</h1>
          <h4>Sorry, we couldn’t find the page you’re looking for.</h4>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 max-w-lg flow-root">
          <h2 className="sr-only">Popular pages</h2>
          <ul
            role="list"
            className="-mt-6 border-gray-900/5 border-b divide-y divide-gray-900/5"
          >
            {links.map((link, linkIdx) => (
              <Link href={link.href} key={linkIdx}>
                <li className="group relative flex items-center gap-x-6 hover:bg-tertiary/10 p-6 rounded-2xl">
                  <div className="flex flex-none justify-center items-center bg-muted shadow-xs rounded-lg ring-1 ring-gray-900/10 size-10">
                    <link.icon aria-hidden="true" className="size-6" />
                  </div>
                  <div className="flex-auto">
                    <h3 className="underline-offset-4 group-hover:underline decoration-1">
                      {link.name}
                    </h3>
                    <p>{link.description}</p>
                  </div>
                  <div className="flex-none self-center">
                    <ChevronRightIcon aria-hidden="true" className="size-5" />
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center mt-10">
            <a href="#" className="font-semibold text-sm/6">
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
