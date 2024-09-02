"use client";

import * as React from "react";
import Link from "next/link";

import { ny } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { MobileNav } from "./mobile-nav";
import { HeartIcon } from "lucide-react";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

export const components: {
	title: string;
	href: string;
	description: string;
}[] = [
	{
		title: "Privacy Policy",
		href: "/privacy-policy",
		description:
			"Learn how we handle your data. Don't worry, we don't collect anything!",
	},
	{
		title: "Discord",
		href: "https://discord.com/servers/mauro-s-little-sweatshop-1088172780480114748",
		description: "Join our Discord server to chat with the community.",
	},
	{
		title: "Source Code",
		href: "https://github.com/zen-browser",
		description: "Check out our source code on GitHub and leave a star!",
	},
	{
		title: "Branding Assets",
		href: "/branding-assets",
		description:
			"Download Zen Browser branding assets for your website or project.",
	},
	{
		title: "Documentation",
		href: "https://docs.zen-browser.app/",
		description: "Learn how to use Zen Browser and build your own themes.",
	},
];

export function Navigation() {
	const t = useTranslations("navigation");

	return (
		<div className="border-grey fixed left-0 top-0 flex w-full items-center justify-center border-b bg-background p-2">
			<MobileNav />
			<NavigationMenu>
				<NavigationMenuList className="hidden w-full py-3 sm:flex">
					<NavigationMenuItem className="mr-20 cursor-pointer">
						<NavigationMenuLink href="/">
							<Logo withText />
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							{t("getting-started")}
						</NavigationMenuTrigger>
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
							<span className="ml-2">{t("donate")}</span>
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
								<ListItem
									title="Patreon"
									href="https://patreon.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
								>
									Support us on Patreon and get exclusive rewards and keep the
									project alive.
								</ListItem>
								<ListItem
									title="Ko-fi"
									href="https://ko-fi.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
								>
									Ko-fi is a way to support us with a one-time donation and help
									us keep the project alive.
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>{t("useful-links")}</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
	);
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
						className,
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
	);
});
ListItem.displayName = "ListItem";
