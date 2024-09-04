
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
import { HeartFilledIcon } from "@radix-ui/react-icons"
 
export const components: { title: string; href: string; description: string }[] = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    description: "Read our privacy policy to learn more about how we handle your data."
  },
  {
    title: "Discord",
    href: "https://discord.com/servers/mauro-s-little-sweatshop-1088172780480114748",
    description: "Join our Discord server to chat with the community and get support."
  },
  {
    title: "Source Code",
    href: "https://github.com/zen-browser",
    description: "View the source code on GitHub and contribute to the project."
  },
  {
    title: "Branding Assets",
    href: "/branding-assets",
    description: "Download our branding assets to use in your projects."
  },
  {
    title: "About",
    href: "/about",
    description: "Learn more about the Zen Browser project and the team behind it."
  },
  {
    title: "Documentation",
    href: "https://docs.zen-browser.app/",
    description: "Read the documentation to learn more about Zen Browser."
  }
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
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
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
                <ListItem href="/download" title="Download">
                Start using Zen Browser today with just a few clicks.
                </ListItem>
                <ListItem href="/themes" title="Themes Store">
                Customize your browser with a variety of themes!
                </ListItem>
                <ListItem href="/release-notes" title="Release Notes">
                Stay up to date with the latest changes.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <HeartFilledIcon className="text-red-500" />
              <span className="ml-2">Donate</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <ListItem
                  title="Patreon"
                  href="https://patreon.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
                >
                  Support us on Patreon and get exclusive rewards and keep the project alive.
                </ListItem>
                <ListItem
                  title="Ko-Fi"
                  href="https://ko-fi.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
                >
                  Ko-fi is a way to support us with a one-time donation and help us keep the project alive.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{"Useful Links"}</NavigationMenuTrigger>
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