import { ny } from "@/lib/utils";
import Marquee from "./ui/marquee";
import { ExternalLinkIcon } from "lucide-react";

const firstRow = [
	{
		username: "@zfcsoftware",
		body: "An excellent browser. Chrome and firefox are so...",
		url: "https://x.com/zfcsoftware/status/1848077438120865863",
	},
	{
		username: "@DanielJoeba",
		body: "Try Zen Browser, you won't be disappointed",
		url: "https://x.com/DanielJoeba/status/1847751519677944189",
	},
	{
		username: "@WiissttaaLive",
		body: "It's crazy how good @zen_browser is! 😵",
		url: "https://x.com/WiissttaaLive/status/1848552152827933145",
	},
	{
		username: "@yildirimsertbas",
		body: "The best Firefox-based browser I've ever used. Keep improving it.",
		url: "https://x.com/yildirimsertbas/status/1846614652102545438",
	},
	{
		username: "@RedyfXbl",
		body: "I've been using zen for about a month now, it's SO GOOD.",
		url: "https://x.com/RedyfXbl/status/1845152612171059433",
	},
	{
		username: "@pillzzu",
		body: "Cherry on top are the insane customization options...",
		url: "https://x.com/pillzzu/status/1847312014755942650",
	},
];

const secondRow = [
	{
		username: "@jonah@neat.computer",
		body: "They are actually building the browser I want to exist.",
		url: "https://fosstodon.org/@jonah@neat.computer/113298508764568459",
	},
	{
		username: "@Flaky@furry.engineer",
		body: "Zen has never failed to impress me every update",
		url: "https://fosstodon.org/@Flaky@furry.engineer/113350790004617529",
	},
	{
		username: "@alvan@500.social",
		body: "...more than a month probably. It has definitely gotten better.",
		url: "https://fosstodon.org/@alvan@500.social/113225351120568209",
	},
	{
		username: "The Register",
		body: "Zen Browser is a no-Google zone that offers tiling nirvana",
		url: "https://www.theregister.com/2024/09/02/zen_firefox_fork_alpha/",
	},
	{
		username: "TechHut",
		body: "Zen browser is making me DITCH Microsoft Edge",
		url: "https://techhut.tv/zen-browser-better-firefox/",
	},
];

function ReviewCard({
	username,
	body,
	url,
}: {
	username: string;
	body: string;
	url?: string;
}) {
	return (
		<a
			className="relative w-64 cursor-pointer overflow-hidden rounded-lg bg-surface p-4 shadow"
			href={url}
			target="_blank"
		>
			<div className="flex flex-row items-center gap-2">
				<div className="flex w-full justify-between">
					<p className="text-xs font-medium dark:text-white/90">{username}</p>
					<ExternalLinkIcon className="h-4 w-4 text-gray-500 dark:text-white/40" />
				</div>
			</div>
			<blockquote className="mt-2 text-sm text-muted-foreground">
				{body}
			</blockquote>
		</a>
	);
}

function HeaderMarquee() {
	return (
		<div
			className="absolute relative mb-52 flex size-full w-full flex-col items-center justify-center overflow-hidden"
			style={{
				transform: "translateY(-10%)",
			}}
		>
			<Marquee pauseOnHover className="w-full [--duration:20s]">
				{firstRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<Marquee pauseOnHover className="w-full [--duration:20s]" reverse>
				{secondRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
		</div>
	);
}

export default HeaderMarquee;
