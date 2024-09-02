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
import { HeartFilledIcon } from "@radix-ui/react-icons"
import { useTranslations } from "next-intl";
 
export const components: { titleKey: string; href: string; descriptionKey: string }[] = [
  {
    titleKey: "nav-components-privacy-policy",
    href: "/privacy-policy",
    descriptionKey: "nav-components-privacy-policy-text",
  },
  {
    titleKey: "nav-components-discord",
    href: "https://discord.com/servers/mauro-s-little-sweatshop-1088172780480114748",
    descriptionKey: "nav-components-discord-text"
  },
  {
    titleKey: "nav-components-source-code",
    href: "https://github.com/zen-browser",
    descriptionKey: "nav-components-source-code-text"
  },
  {
    titleKey: "nav-components-branding-assets",
    href: "/branding-assets",
    descriptionKey: "nav-components-branding-assets-text"
  },
  {
    titleKey: "nav-components-documentation",
    href: "https://docs.zen-browser.app/",
    descriptionKey: "nav-components-documentation-text"
  }
]
 
export function Navigation() {

  const t = useTranslations('navigation');

  const translatedComponents = components.map(component => ({
    title: t(component.titleKey),
    href: component.href,
    description: t(component.descriptionKey),
  }));

  console.log(translatedComponents);

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
            <NavigationMenuTrigger>{t('nav-getting-started')}</NavigationMenuTrigger>
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
                        {t('nav-gs-zen-heading')}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {t('nav-gs-zen-text')}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/download" title={t('nav-gs-download-li')}>
                  {t('nav-gs-download-li-text')}
                </ListItem>
                <ListItem href="/themes" title={t('nav-gs-themes-li')}>
                  {t('nav-gs-themes-li-text')}
                </ListItem>
                <ListItem href="/release-notes" title={t('nav-gs-release-li')}>
                  {t('nav-gs-release-text')}
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <HeartFilledIcon className="text-red-500" />
              <span className="ml-2">{t('nav-donate')}</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <ListItem
                  title={t('nav-donate-patreon-li')}
                  href="https://patreon.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
                >
                  {t('nav-donate-patreon-li-text')}
                </ListItem>
                <ListItem
                  title={t('nav-donate-ko-fi-li')}
                  href="https://ko-fi.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
                >
                  {t('nav-donate-ko-fi-li-text')}
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t('nav-useful-links')}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {translatedComponents.map((component) => (
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