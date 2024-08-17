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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Logo from "./logo"
import { ModeToggle } from "./mode-toggle"
import { MobileNav } from "./mobile-nav"
import { HeartIcon } from "lucide-react"
 
export const components: { title: string; href: string; description: string }[] = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    description: "Learn how we handle your data. Don't worry, we don't collect anything!",
  },
  {
    title: "Discord",
    href: "https://discord.gg/nnShMQzR4b",
    description: "Join our Discord server to chat with the community."
  },
  {
    title: "Source Code",
    href: "https://github.com/zen-browser",
    description: "Check out our source code on GitHub and leave a star!"
  },
]
 
export function Navigation() {
  return (
    <div className="bg-background z-40 top-0 left-0 w-full flex fixed border-b border-grey p-2 items-center justify-center">
      <MobileNav />
      <NavigationMenu>
        <NavigationMenuList className="w-full hidden py-3 sm:flex">
          <NavigationMenuItem className="cursor-pointer mr-20">
            <NavigationMenuLink href="/">
              <Logo withText />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
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
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/download" title="Download">
                  Start using Zen Browser today with just a few clicks.
                </ListItem>
                <ListItem href="/themes" title="Themes Marketplace">
                  Customize your browser with a variety of themes!
                </ListItem>
                <ListItem href="/release-notes" title="Release Notes">
                  Stay up to date with the latest changes.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link target="_blank" href="https://patreon.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" legacyBehavior passHref className="opacity-70 cursor-not-allowed">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <HeartIcon size={16} />
                <span className="ml-2">Donate</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Useful Links</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <ModeToggle />
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