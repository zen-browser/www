"use client"
 
import * as React from "react"
import Link from "next/link"
 
import { ny } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "./logo";
import Socials from "./socials";
import { MobileNav } from "./mobile-nav";
import { HeartIcon } from "lucide-react"
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

export const jsonData = {
  mainLinks: [
    { title: "Download", href: "/download", description: "Start using Zen Browser today with just a few clicks." },
    { title: "Themes Store", href: "/themes", description: "Customize your browser with a variety of themes!" },
    { title: "Release Notes", href: "/release-notes", description: "Stay up to date with the latest changes." }
  ],
  donationLinks: [
    { title: "Patreon", href: "https://patreon.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink", description: "Support us on Patreon and get exclusive rewards and keep the project alive." },
    { title: "Ko-fi", href: "https://ko-fi.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink", description: "Ko-fi is a way to support us with a one-time donation and help us keep the project alive." }
  ],
  usefulLinks: [
    { title: "Privacy Policy", href: "/privacy-policy", description: "Learn how we handle your data. Don't worry, we don't collect anything!" },
    { title: "Branding Assets", href: "/branding-assets", description: "Download Zen Browser branding assets for your website or project." },
    { title: "Documentation", href: "https://docs.zen-browser.app/", description: "Learn how to use Zen Browser and build your own themes." }
  ]
}

export function Navigation() {

  const t = useTranslations('navigation');

  return (
    <div className="bg-background z-40 top-0 left-0 w-full flex fixed border-b border-grey p-2 items-center justify-center">
      <MobileNav />
      <NavigationMenu>
        <NavigationMenuList className="w-ful space-x-8 hidden py-3 sm:flex">
          <NavigationMenuItem className="cursor-pointer">
            <NavigationMenuLink href="/">
              <Logo withText />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t('getting-started')}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Logo />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Zen Browser
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Firefox based browser with a focus on privacy and
                        customization.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {jsonData.mainLinks.map((link) => (
                  <ListItem key={link.title} href={link.href} title={link.title}>
                    {link.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <HeartFilledIcon className="text-red-500" />
              <span className="ml-2">{t('donate')}</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {jsonData.donationLinks.map((link) => (
                  <ListItem key={link.title} href={link.href} title={link.title}>
                    {link.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t('resources')}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {jsonData.usefulLinks.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
            <Socials />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={ny(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"