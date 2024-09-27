"use client";
import Sticky from "react-sticky-el";
import {
	BookmarkCheckIcon,
	CheckIcon,
	ChevronLeft,
	ChevronRight,
	ExternalLinkIcon,
	EyeIcon,
	EyeOffIcon,
	Github,
	HeartHandshake,
	HeartPulseIcon,
	HomeIcon,
	PaintBucket,
	PersonStanding,
	RabbitIcon,
	ShieldAlertIcon,
	ShieldCheck,
	SidebarCloseIcon,
	SidebarIcon,
	SidebarOpenIcon,
	SpaceIcon,
	SplitSquareHorizontal,
	SplitSquareVertical,
	SplitSquareVerticalIcon,
	TableIcon,
	XIcon,
} from "lucide-react";
import {
	Cross1Icon,
	EyeClosedIcon,
	HeartFilledIcon,
	Link1Icon,
	LockClosedIcon,
	QuestionMarkCircledIcon,
	QuestionMarkIcon,
	ReloadIcon,
	SpaceBetweenHorizontallyIcon,
	UpdateIcon,
} from "@radix-ui/react-icons";
import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { COLORS } from "./create-theme";
import { Slider } from "./ui/slider";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";
import React, { useState } from "react";
import { ny } from "@/lib/utils";
import ThemeCard from "./theme-card";
import { getAllThemes, ZenTheme } from "@/lib/themes";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
import Logo from "./logo";
import CachedImage from "./CachedImage";
import { transform } from "next/dist/build/swc";

function Checkmark() {
	return (
		<CheckIcon className="h-7 w-7 flex-none rounded-full bg-green-500 p-1 text-black dark:bg-green-400" />
	);
}

function Cross() {
	return (
		<XIcon className="h-7 w-7 rounded-full bg-red-500 p-1 text-black dark:bg-red-400" />
	);
}

function Question() {
	return (
		<QuestionMarkIcon className="h-7 w-7 rounded-full bg-yellow-500 p-1 text-black dark:bg-yellow-400" />
	);
}

export default function Features() {
	const [feature, setFeature] = useState("");
	return (
		<section className="w-full flex-col" id="features">
			<div className="mx-auto mt-16 flex w-full flex-col bg-surface shadow md:w-5/6 md:rounded-md lg:w-3/4 lg:flex-row">
				<div className="flex-1 p-5 lg:p-12">
					<div className="flex flex-col justify-center p-12">
						<h3 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
							Your Browser, your way{" "}
							<PaintBucket className="inline h-10 w-10"></PaintBucket>
						</h3>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
							With Zen's Theme Store, you can customize your browsing experience
							to reflect your unique style and preferences. Choose from a wide
							array of Mods, colors, and layouts to make Zen truly your own,
							transforming your browser into a personalized digital space.
						</p>
						<div className="relative">
							<Link href="/themes" prefetch={false}>
								<Button className="mt-8">Browse Themes</Button>
							</Link>
						</div>
					</div>
					<hr />
					<div className="flex flex-col justify-center p-12">
						<h3 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
							Always up to date{" "}
							<UpdateIcon className="inline h-10 w-10"></UpdateIcon>
						</h3>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
							Zen Browser is built on top of Firefox, ensuring it always stays
							up to date with the latest features, security patches, and
							performance improvements.
						</p>
						<div className="relative">
							<Link href="/download" prefetch={false}>
								<Button className="mt-8">Download Now</Button>
							</Link>
						</div>
					</div>
				</div>

				<div className="mx-2 h-[1px] border-t lg:h-[unset] lg:w-[1px] lg:border-l lg:border-t-0"></div>
				<div className="flex-1 p-5 lg:p-12">
					<div className="flex flex-col justify-center p-12">
						<h3 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
							Community driven and Open Source{" "}
							<Link1Icon className="inline h-10 w-10"></Link1Icon>
						</h3>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
							Zen thrives on the contributions of its vibrant community. As an
							open-source project, Zen encourages collaboration and innovation,
							allowing users and developers alike to shape the future of the
							browser.
						</p>
						<div className="relative">
							<a href="https://github.com/zen-browser" target="_blank">
								<Button className="mt-8">GitHub</Button>
							</a>
						</div>
						<div className="mt-14 w-full">
							<div className="flex items-center">
								<Checkmark />
								<p className="ml-2 text-gray-600 dark:text-gray-300">
									Firefox Based
								</p>
							</div>
							<div className="mt-5 flex items-center">
								<Checkmark />
								<p className="ml-2 text-gray-600 dark:text-gray-300">
									Fully Open source
								</p>
							</div>
							<div className="mt-5 flex items-center">
								<Checkmark />
								<p className="ml-2 text-gray-600 dark:text-gray-300">
									Automated Releases to ensure security
								</p>
							</div>
							<div className="mt-5 flex items-center">
								<Checkmark />
								<p className="ml-2 text-gray-600 dark:text-gray-300">
									Community driven
								</p>
							</div>
							<div className="mt-5 flex items-center">
								<Checkmark />
								<p className="ml-2 text-gray-600 dark:text-gray-300">
									Constantly improving
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mx-auto mt-36 flex w-full flex-col bg-surface shadow md:w-5/6 md:rounded-md lg:w-3/4 lg:flex-row">
				<div className="flex flex-col justify-center p-16 lg:w-1/2">
					<h1 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
						Built for simplicity <EyeIcon className="inline h-8 w-8"></EyeIcon>
					</h1>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
						Zen Browser is designed to be simple and easy to use. It's built
						with the user in mind, so you can focus on what matters most.
					</p>
					<div className="mt-8 w-full">
						<div className="flex items-center">
							<Checkmark />
							<p className="ml-2 text-gray-600 dark:text-gray-300">
								Completely Customizable
							</p>
						</div>
						<div className="mt-4 flex items-center">
							<Checkmark />
							<p className="ml-2 text-gray-600 dark:text-gray-300">
								Vertical Tabs
							</p>
						</div>
						<div className="mt-4 flex items-center">
							<Checkmark />
							<p className="ml-2 text-gray-600 dark:text-gray-300">
								Thoughtful Design
							</p>
						</div>
					</div>
				</div>
				<CachedImage
					width={1350}
					height={900}
					src="www/public/browser-1.png"
					alt="Zen Browser"
					className="rounded-md object-cover object-right lg:w-1/2"
				/>
			</div>
			<div className="mx-auto mt-36 flex w-full flex-col bg-surface shadow md:w-5/6 md:rounded-md lg:w-3/4 lg:flex-row">
				<CachedImage
					width={1350}
					height={900}
					src="www/public/browser-2.png"
					alt="Zen Browser"
					className="rounded-md object-cover object-left lg:w-1/2"
				/>
				<div className="flex flex-col justify-center p-16 lg:w-1/2">
					<h1 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
						Split Views{" "}
						<SplitSquareHorizontal className="inline h-8 w-8"></SplitSquareHorizontal>
					</h1>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
						Zen Browser allows you to split your view into multiple panes, so
						you can work on multiple things at once. It's perfect for
						multitasking.
					</p>
					<div className="relative">
						<Link href="/download" prefetch={false}>
							<Button className="mt-8">Download Now</Button>
						</Link>
					</div>
				</div>
			</div>
			<div className="mx-auto mt-36 flex w-full flex-col bg-surface p-5 shadow md:w-5/6 md:rounded-md lg:w-3/4 lg:flex-row lg:p-12">
				<div className="flex flex-col justify-center p-16 lg:w-1/2">
					<h3 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
						Better tab management{" "}
						<BookmarkCheckIcon className="inline h-8 w-8"></BookmarkCheckIcon>
					</h3>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
						Better tab management helps you stay organized and focused, reducing
						clutter and enhancing productivity
					</p>
					<div className="mt-8 w-full">
						<div className="flex items-center">
							<Checkmark />
							<p className="ml-2 text-gray-600 dark:text-gray-300">
								Workspaces
							</p>
						</div>
						<div className="mt-4 flex items-center">
							<Checkmark />
							<p className="ml-2 text-gray-600 dark:text-gray-300">
								Fast profile switcher
							</p>
						</div>
						<div className="mt-4 flex items-center">
							<Checkmark />
							<p className="ml-2 text-gray-600 dark:text-gray-300">
								Container Tabs
							</p>
						</div>
						<div className="mt-4 flex items-center">
							<Question />
							<p className="ml-2 text-gray-600 dark:text-gray-300">
								Tab Groups (Coming Soon)
							</p>
						</div>
					</div>
				</div>
				<div className="mx-2 h-[1px] border-t lg:h-[unset] lg:w-[1px] lg:border-l lg:border-t-0"></div>
				<div className="flex flex-col p-16 lg:w-1/2">
					<h3 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
						Security and Privacy is{" "}
						<span className="font-bold text-purple-500">important</span> to us{" "}
						<LockClosedIcon className="inline h-8 w-8"></LockClosedIcon>
					</h3>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
						Zen is based on Firefox, ensuring that your browsing experience
						prioritizes security and privacy. With advanced tracking protection
						and minimal data collection, Zen keeps your online activity safe and
						secure, giving you peace of mind as you explore the web.
					</p>
					<div className="relative">
						<a href="https://docs.zen-browser.app/security" target="_blank">
							<Button className="mt-8" variant="ghost">
								Security in Zen{" "}
								<ExternalLinkIcon className="ml-4 h-4 w-4 opacity-50" />
							</Button>
						</a>
						<Link href="/privacy-policy" prefetch={false} target="_blank">
							<Button className="mt-8" variant="ghost">
								Your Privacy{" "}
								<ExternalLinkIcon className="ml-4 h-4 w-4 opacity-50" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<div className="mx-auto mt-36 flex w-full flex-col bg-surface shadow md:w-5/6 md:rounded-md lg:w-3/4 lg:flex-row">
				<div className="flex flex-col justify-center p-16 lg:w-1/2">
					<h1 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
						Sidebar <SidebarIcon className="ml-1 inline h-8 w-8"></SidebarIcon>
					</h1>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
						Zen Browser has a built-in sidebar that lets you quickly access your
						favorite websites, bookmarks, and more. It's the perfect way to stay
						organized.
					</p>
					<div className="mt-8 w-full">
						<div className="flex items-center">
							<Checkmark />
							<p className="ml-2 text-gray-600 dark:text-gray-300">
								Quick Access
							</p>
						</div>
						<div className="mt-4 flex items-center">
							<Checkmark />
							<p className="ml-2 text-gray-600 dark:text-gray-300">
								Customizable
							</p>
						</div>
						<div className="mt-4 flex items-center">
							<Checkmark />
							<p className="ml-2 text-gray-600 dark:text-gray-300">
								Easy to Use
							</p>
						</div>
					</div>
				</div>
				<CachedImage
					width={1350}
					height={900}
					src="www/public/browser-3.png"
					alt="Zen Browser"
					className="rounded-md object-cover object-left lg:w-1/2"
				/>
			</div>
			<div className="mx-auto mt-36 flex w-full flex-col bg-surface shadow md:w-5/6 md:rounded-md lg:w-3/4 lg:flex-row">
				<CachedImage
					width={1350}
					height={900}
					src="www/public/browser-4.jpg"
					alt="Zen Browser"
					className="rounded-md object-cover object-left lg:w-1/2"
				/>
				<div className="flex flex-col justify-center p-16 lg:w-1/2">
					<h1 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
						Introducing Compact Mode{" "}
						<SidebarCloseIcon className="inline h-8 w-8"></SidebarCloseIcon>
					</h1>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
						Zen Browser's compact mode gives you more screen real estate by
						hiding the title bar and tabs. It's perfect for when you need to
						focus on your work.
					</p>
					<div className="relative">
						<Link href="/download" prefetch={false}>
							<Button className="mt-8">What are you waiting for?</Button>
						</Link>
					</div>
				</div>
			</div>

			<div className="mx-auto mt-36 flex w-full flex-col bg-surface shadow md:w-5/6 md:rounded-md lg:w-3/4 lg:flex-row">
				<div className="relative flex w-full flex-col justify-center p-5 lg:w-1/2 lg:p-12">
					<h1 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
						Frequently Asked Questions{" "}
						<QuestionMarkCircledIcon className="inline h-8 w-8"></QuestionMarkCircledIcon>
					</h1>
					<Accordion
						type="single"
						value={feature}
						onValueChange={(value) =>
							setFeature(value === feature ? "" : value)
						}
						className="mt-8"
					>
						<AccordionItem value="item-1">
							<AccordionTrigger>Is it Firefox based?</AccordionTrigger>
							<AccordionContent>
								Yes, Zen Browser is focused on being always at the latest
								version of Firefox, ensuring that you have the latest security
								updates and features.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>Does it track me?</AccordionTrigger>
							<AccordionContent>
								<strong>No!</strong> Zen Browser is built with privacy in mind.
								We don't track you, we don't collect your data, and we don't
								sell your data to third parties.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>How secure is Zen Browser?</AccordionTrigger>
							<AccordionContent>
								Zen Browser is built on top of Firefox, which is known for its
								security features. We also have additional security features
								like HTTPS only built into Zen Browser to help keep you safe
								online.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>

				<div className="relative h-auto overflow-hidden rounded-md lg:w-1/2">
					{feature === "" && (
						<div className="absolute flex h-full w-full items-center justify-center">
							<div className="flex w-full flex-col items-center justify-center space-y-6">
								<div className="flex h-fit w-full max-w-sm animate-fade-in items-center justify-center rounded-full border-2 border-white bg-surface p-4 shadow">
									<Logo className="h-10 w-10" />
									<span className="mx-4 text-4xl">+</span>
									<svg
										className="relative h-10 w-10 dark:fill-white"
										xmlns="http://www.w3.org/2000/svg"
										fillOpacity="context-fill-opacity"
									>
										<path
											style={{ transform: "scale(2) translate(5%, 5%)" }}
											d="M10.39 0C8.948.788 7.987 2.025 7.767 3.66c-1.017.162-1.768.781-1.768.781s.72-.44 1.736-.511a4.04 4.04 0 0 1 3.789 2.034s-.758-.62-1.928-.468c1.315.68 1.872 2.002 1.701 3.369-.17 1.367-1.183 2.435-2.354 2.723-1.171.287-2.333.099-3.229-.61-.896-.708-1.251-1.533-1.305-2.254.213-.533.541-.812 1.1-1.092.558-.279 1.422-.283 1.572-.283s.8-.507.95-.894c-.726-.363-1.292-.65-1.696-.934-.404-.283-.492-.534-1.012-.898-.307-1.006-.021-1.955-.021-1.955s-1.043.437-1.93 1.49c0 0-.342-.338-.28-2.006-.427.155-1.366 1.004-1.947 1.92a7.277 7.277 0 0 0-.798 1.723A8.296 8.296 0 0 0-.003 8a8 8 0 0 0 16 0c0-2.256-.93-4.252-2.188-5.002 0 0 .542.932.813 2.43-.4-1.04-1.235-2.166-1.877-2.844-.643-.678-2.068-1.88-2.357-2.584z"
										/>
									</svg>
								</div>
								<div className="flex h-fit w-full max-w-sm animate-fade-in items-center justify-center rounded-full border-2 border-white bg-surface p-4 shadow">
									<LockClosedIcon className="h-10 w-10" />
									<span className="mx-4 text-4xl">+</span>
									<EyeClosedIcon className="h-10 w-10" />
								</div>
								<div className="flex h-fit w-full max-w-sm animate-fade-in items-center justify-center rounded-full border-2 border-white bg-surface p-4 shadow">
									<ShieldCheck className="h-10 w-10" />
									<span className="mx-4 text-4xl">+</span>
									<ShieldAlertIcon className="h-10 w-10" />
								</div>
							</div>
						</div>
					)}

					<CachedImage
						width={1350}
						height={900}
						src="www/public/feature-item-1.png"
						alt="Zen Browser"
						className="robject-right ounded-md h-full w-full object-cover"
					/>
					{feature === "item-1" && (
						<div className="absolute left-0 top-0 grid h-full w-full grid-rows-3">
							<div></div>
							<div className="tems-center m-auto flex h-fit w-fit animate-fade-in rounded-full border-2 border-white bg-surface p-4 shadow">
								<Logo className="h-10 w-10" />{" "}
								<span className="mx-4 text-4xl">+</span>{" "}
								<svg
									className="relative h-10 w-10 dark:fill-white"
									xmlns="http://www.w3.org/2000/svg"
									fillOpacity="context-fill-opacity"
								>
									<path
										style={{ transform: "scale(2) translate(5%, 5%)" }}
										d="M10.39 0C8.948.788 7.987 2.025 7.767 3.66c-1.017.162-1.768.781-1.768.781s.72-.44 1.736-.511a4.04 4.04 0 0 1 3.789 2.034s-.758-.62-1.928-.468c1.315.68 1.872 2.002 1.701 3.369-.17 1.367-1.183 2.435-2.354 2.723-1.171.287-2.333.099-3.229-.61-.896-.708-1.251-1.533-1.305-2.254.213-.533.541-.812 1.1-1.092.558-.279 1.422-.283 1.572-.283s.8-.507.95-.894c-.726-.363-1.292-.65-1.696-.934-.404-.283-.492-.534-1.012-.898-.307-1.006-.021-1.955-.021-1.955s-1.043.437-1.93 1.49c0 0-.342-.338-.28-2.006-.427.155-1.366 1.004-1.947 1.92a7.277 7.277 0 0 0-.798 1.723A8.296 8.296 0 0 0-.003 8a8 8 0 0 0 16 0c0-2.256-.93-4.252-2.188-5.002 0 0 .542.932.813 2.43-.4-1.04-1.235-2.166-1.877-2.844-.643-.678-2.068-1.88-2.357-2.584z"
									/>
								</svg>
							</div>
							<a
								href="https://github.com/zen-browser/desktop?tab=readme-ov-file#compatibility"
								target="_blank"
								className="tems-center m-auto flex h-fit w-fit animate-fade-in items-center rounded-full border-2 border-white bg-surface p-4 opacity-0 shadow [--animation-delay:300ms]"
							>
								See what version of Firefox Zen uses{" "}
								<ExternalLinkIcon className="ml-4 h-4 w-4 opacity-50" />
							</a>
						</div>
					)}

					{feature === "item-2" && (
						<div className="absolute left-0 top-0 grid h-full w-full grid-rows-3">
							<div></div>
							<div className="tems-center m-auto flex h-fit w-fit animate-fade-in rounded-full border-2 border-white bg-surface p-4 shadow">
								<LockClosedIcon className="h-10 w-10" />{" "}
								<span className="mx-4 text-4xl">+</span>{" "}
								<EyeClosedIcon className="h-10 w-10" />
							</div>
							<a
								href="/privacy-policy"
								target="_blank"
								className="tems-center m-auto flex h-fit w-fit animate-fade-in items-center rounded-full border-2 border-white bg-surface p-4 opacity-0 shadow [--animation-delay:300ms]"
							>
								Learn about Zen's privacy policy{" "}
								<ExternalLinkIcon className="ml-4 h-4 w-4 opacity-50" />
							</a>
						</div>
					)}

					{feature === "item-3" && (
						<div className="absolute left-0 top-0 grid h-full w-full grid-rows-3">
							<div></div>
							<div className="tems-center m-auto flex h-fit w-fit animate-fade-in rounded-full border-2 border-white bg-surface p-4 shadow">
								<ShieldCheck className="h-10 w-10" />{" "}
								<span className="mx-4 text-4xl">+</span>{" "}
								<ShieldAlertIcon className="h-10 w-10" />
							</div>
							<a
								href="https://docs.zen-browser.app/security"
								target="_blank"
								className="tems-center m-auto flex h-fit w-fit animate-fade-in items-center rounded-full border-2 border-white bg-surface p-4 opacity-0 shadow [--animation-delay:300ms]"
							>
								See how Zen keeps you safe{" "}
								<ExternalLinkIcon className="ml-4 h-4 w-4 opacity-50" />
							</a>
						</div>
					)}
				</div>
			</div>

			<div className="mx-auto mt-36 flex w-full flex-col bg-surface p-5 shadow md:w-5/6 md:rounded-md lg:w-3/4 lg:flex-row lg:p-12">
				<div className="flex flex-col justify-center p-16 lg:w-1/2">
					<h3 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
						Convinced?
					</h3>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
						Download Zen Browser now and experience the future of browsing.
					</p>
					<div className="relative">
						<Link href="/download" prefetch={false}>
							<Button className="mt-8">Download Now</Button>
						</Link>
					</div>
				</div>
				<div className="mx-2 h-[1px] border-t lg:h-[unset] lg:w-[1px] lg:border-l lg:border-t-0"></div>
				<div className="flex flex-col justify-center p-16 lg:w-1/2">
					<h3 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
						Even more convinced?{" "}
						<HeartHandshake className="inline h-10 w-10 text-red-500" />
					</h3>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
						Help support the development of Zen Browser by donating to our
						cause.
					</p>
					<div className="relative mt-8 flex">
						<a href="https://patreon.com/zen_browser" target="_blank">
							<Button data-umami-event="patreon-feature" variant="ghost">
								Patreon <ExternalLinkIcon className="ml-4 h-4 w-4 opacity-50" />
							</Button>
						</a>
						<a href="https://ko-fi.com/zen_browser" target="_blank">
							<Button
								data-umami-event="ko-fi-feature"
								className="ml-8"
								variant="ghost"
							>
								Ko-fi <ExternalLinkIcon className="ml-4 h-4 w-4 opacity-50" />
							</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
