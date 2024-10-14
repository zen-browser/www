import {
	BookmarkCheckIcon,
	CheckIcon,
	ExternalLinkIcon,
	EyeIcon,
	HeartHandshake,
	PaintBucket,
	SidebarCloseIcon,
	SidebarIcon,
	SplitSquareHorizontal,
} from "lucide-react";
import {
	Link1Icon,
	LockClosedIcon,
	QuestionMarkIcon,
	UpdateIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";

import React from "react";

import CachedImage from "./CachedImage";
import { FAQ } from "@/components/faq/faq";
import BrowserComplexityExample from "./browser-slider";

function Checkmark() {
	return (
		<CheckIcon className="h-7 w-7 flex-none rounded-full bg-green-500 p-1 text-black dark:bg-green-400" />
	);
}

function Question() {
	return (
		<QuestionMarkIcon className="h-7 w-7 rounded-full bg-yellow-500 p-1 text-black dark:bg-yellow-400" />
	);
}

export default function Features() {
	return (
		<section className="w-full flex-col" id="features">
			<BrowserComplexityExample />
			<div className="mx-auto mt-16 flex w-full flex-col bg-surface shadow md:w-5/6 md:rounded-md lg:w-3/4 lg:flex-row">
				<div className="flex-1 p-5 lg:p-12">
					<div className="flex flex-col justify-center p-12">
						<h3 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
							Customizeable, down to the last pixel{" "}
							<PaintBucket className="inline h-10 w-10"></PaintBucket>
						</h3>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
							With Zen Mods, you can customize your browsing experience
							to reflect your unique style and preferences. Choose from a wide
							array of Mods, colors, and layouts to make Zen truly your own,
							transforming your browser into a personalized digital space.
						</p>
						<div className="relative">
							<Link href="/mods" prefetch={false}>
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
							<a
								href="https://github.com/zen-browser"
								rel="noopener noreferrer"
								target="_blank"
							>
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
			<FAQ />
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
						<a
							href="https://patreon.com/zen_browser"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Button data-umami-event="patreon-feature" variant="ghost">
								Patreon <ExternalLinkIcon className="ml-4 h-4 w-4 opacity-50" />
							</Button>
						</a>
						<a
							href="https://ko-fi.com/zen_browser"
							rel="noopener noreferrer"
							target="_blank"
						>
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
