"use client";

import DynamicButton from "@/components/button/button-dynamic";
import ResponsiveLogo from "@/components/Logo";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsQuestionCircleFill } from "react-icons/bs";
import { FaBuilding, FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const links = [
  {
    name: "Home",
    href: "/",
    description: "Return back to the main page to find the way.",
    icon: FaHome,
  },
  {
    name: "View Our Services",
    href: "/services",
    description:
      "Get a comprehensive look at the full range of services we provide.",
    icon: FaBuilding,
  },
  {
    name: "Get In Touch",
    href: "/get_in_touch/lets_work_together",
    description:
      "Contact us directly with questions, feedback, or project ideas.",
    icon: RiContactsFill,
  },
  {
    name: "FAQs",
    href: "/get_in_touch/frequently_asked_questions",
    description: "Read our latest news and articles.",
    icon: BsQuestionCircleFill,
  },
];

export default function Example() {
  const router = useRouter();
  return (
    <div>
      <main className="mx-auto pt-10 pb-16 sm:pb-24 w-11/12 max-w-7xl">
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
            <DynamicButton onClick={() => router.push("/")}>
              Back Home
            </DynamicButton>
          </div>
        </div>
      </main>
    </div>
  );
}
