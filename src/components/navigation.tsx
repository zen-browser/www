import * as React from "react";

import { ny } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { MobileNav } from "./mobile-nav";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { releaseNotes } from "@/lib/release-notes";

export const components: {
	title: string;
	href: string;
	description: string;
	isTargetBlank?: boolean;
	rel?: "noopener noreferrer";
}[] = [
	{
		title: "Privacy Policy",
		href: "/privacy-policy",
		description:
			"Read our privacy policy to learn more about how we handle your data.",
		isTargetBlank: true,
	},
	{
		title: "Discord",
		href: "https://discord.gg/zen-browser",
		description:
			"Join our Discord server to chat with the community and get support.",
		isTargetBlank: true,
		rel: "noopener noreferrer",
	},
	{
		title: "Source Code",
		href: "https://github.com/zen-browser",
		description:
			"View the source code on GitHub and contribute to the project.",
		isTargetBlank: true,
		rel: "noopener noreferrer",
	},
	{
		title: "Branding Assets",
		href: "/branding-assets",
		description: "Download our branding assets to use in your projects.",
	},
	{
		title: "About",
		href: "/about",
		description:
			"Learn more about the Zen Browser project and the team behind it.",
	},
	{
		title: "Documentation",
		href: "https://docs.zen-browser.app/",
		description: "Read the documentation to learn more about Zen Browser.",
		isTargetBlank: true,
	},
];

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
const ListItem2 = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					data-umami-event={title}
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
ListItem.displayName = "ListItem2";

export function Navigation() {
	const latestRelease = releaseNotes[0];
	return (
		<div className="border-grey fixed left-0 top-0 z-40 flex w-full items-center justify-center border-b bg-background p-2">
			<MobileNav />
			<NavigationMenu>
				<NavigationMenuList className="hidden w-full py-3 sm:flex items-center justify-between gap-32">
					<div>
						<NavigationMenuItem className="cursor-pointer flex items-center">
							<NavigationMenuLink href="/">
								<Logo withText />
							</NavigationMenuLink>
						</NavigationMenuItem>
					</div>
					<div className="flex">
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
									<ListItem href="/themes" title="Zen Mods">
										Customize your browser with a variety of Mods!
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
								<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
									<ListItem2
										title="Patreon"
										href="https://patreon.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
										target="_blank"
										rel="noopener noreferrer"
									>
										Support us on Patreon and get exclusive rewards and keep the
										project alive.
									</ListItem2>
									<ListItem2
										title="Ko-Fi"
										href="https://ko-fi.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
										target="_blank"
										rel="noopener noreferrer"
									>
										Ko-fi is a way to support us with a one-time donation and help
										us keep the project alive.
									</ListItem2>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>{"Useful Links"}</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
									{components.map(
										({ description, href, title, isTargetBlank, rel }) => (
											<ListItem
												key={title}
												title={title}
												href={href}
												target={isTargetBlank ? "_blank" : "_self"}
												rel={rel}
											>
												{description}
											</ListItem>
										),
									)}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<ModeToggle />
					</div>
					<div>
						<NavigationMenuLink href={`/release-notes/${latestRelease.version}`} className="text-[10px] bg-surface py-1 px-2 font-semibold rounded h-fit w-fit flex items-center hover:bg-accent hover:text-accent-foreground transition-colors">
							v{latestRelease.version}
						</NavigationMenuLink>
					</div>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
