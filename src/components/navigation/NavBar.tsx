"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  about,
  aboutFeaturedLinks,
  contact,
  contactFeaturedLinks,
  serviceCategories,
  serviceFeaturedLinks,
  web_development,
  webDevelopmentFeaturedLinks,
} from "@/lib/constants/navigation";
import useSmallScreen from "@/lib/screens/useSmallScreen";
import { Menu } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";
import { ThemeToggle } from "../button/ThemeToggle";
import DockNavigation from "./DockNavigation";

export function NavBar() {
  const isSmallScreen = useSmallScreen();

  return (
    <>
      {isSmallScreen ? (
        <DockNavigation />
      ) : (
        <div className="bg-primary py-5 w-full">
          <div className="flex justify-around items-center mx-auto w-11/12 text-primary-foreground">
            <Image
              src="/images/logo_white.png"
              alt="IAC intials logo"
              className="object-cover"
              priority
              width={100}
              height={100}
            />

            <NavigationMenu className="flex justify-end max-w-full font-[KaushanScript] text-white">
              <NavigationMenuList>
                <NavigationMenuItem className="mt-2 p-4">
                  <NavigationMenuLink
                    href="/"
                    className="text-lg 2xl:text-2xl xl:text-xl"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="gap-3 grid lg:grid-cols-2 lg:grid-rows-5 p-4 md:w-[35em] lg:w-[45em] xl:w-[50em]">
                      {serviceCategories.map((link, index) => (
                        <ListItem
                          href={link.href}
                          title={`${link.title}`}
                          key={index}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                      {serviceFeaturedLinks.map((link, index) => (
                        <li
                          className="col-span-2 lg:col-span-1 lg:row-span-3 m-0"
                          key={index}
                        >
                          {NavigationImageItem({ link })}
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About PCS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="gap-3 grid lg:grid-cols-4 lg:grid-rows-3 p-4 md:w-[35em] lg:w-[45em] xl:w-[60em]">
                      {aboutFeaturedLinks.map((link, index) => (
                        <li
                          className="col-span-4 xl:col-span-4 row-span-2 xl:row-span-2 m-0"
                          key={index}
                        >
                          {NavigationImageItem({ link })}
                        </li>
                      ))}
                      {about.map((link, index) => (
                        <ListItem
                          href={link.href}
                          title={`${link.title}`}
                          key={index}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="lg:block hidden">
                  <NavigationMenuTrigger>
                    What's Your Story?
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="gap-3 grid xl:grid-cols-4 xl:grid-rows-2 p-4 md:w-[35em] lg:w-[45em] xl:w-[60em]">
                      {webDevelopmentFeaturedLinks.map((link, index) => (
                        <li className="col-span-2 row-span-2 m-0" key={index}>
                          {NavigationImageItem({ link })}
                        </li>
                      ))}
                      {web_development.map((program, index) => (
                        <ListItem
                          key={index}
                          title={program.title}
                          href={program.href}
                        >
                          {program.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="gap-3 grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 p-4 md:w-[35em] lg:w-[40em]">
                      {contactFeaturedLinks.map((link, index) => (
                        <li
                          className="col-span-1 lg:col-span-3 row-span-3 lg:row-span-2 m-0"
                          key={index}
                        >
                          {NavigationImageItem({ link })}
                        </li>
                      ))}
                      {contact.map((link, index) => (
                        <ListItem
                          href={link.href}
                          title={`${link.title}`}
                          key={index}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <ThemeToggle />
            </NavigationMenu>
          </div>
        </div>
      )}
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="mx-0">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex flex-col h-full select-none rounded-md p-4 no-underline outline-none transition-colors group hover:bg-tertiary hover:text-tertiary-foreground focus-visible:ring-ring/50 focus-visible:outline-none focus-visible:ring-[3px] data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="font-[QuickSand] font-medium text-lg leading-none">
            {title}
          </div>
          <p className="font-[MavenPro] font-normal text-xs group-hover:text-background leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function NavigationImageItem(link: { link: Menu }) {
  return (
    <NavigationMenuLink
      className="relative flex flex-col justify-end bg-cover bg-center focus:shadow-md p-6 rounded-md w-full h-full font-[PlayfairDisplay] no-underline select-none outline-none"
      href={`${link.link.href}`}
      style={{
        backgroundImage: `url(${link.link.imageUrl})`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-background/50 rounded-md"></div>
      <div className="relative mt-12 -mb-5 font-[QuickSand] font-medium text-foreground text-lg uppercase">
        {link.link.title}
      </div>
      <p className="relative font-[GreatVibes] text-foreground text-lg lg:text-xl tracking-wider">
        {link.link.description}
      </p>
    </NavigationMenuLink>
  );
}
