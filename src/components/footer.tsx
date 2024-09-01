import Link from "next/link";
import { DiscordIcon, MastodonIcon, RedditIcon } from "./Icons";

export default function Footer() {
	return (
		<div className="border-grey align-center mt-10 flex w-full flex-col items-center justify-center gap-2 border-t px-10 py-10 font-medium md:px-0">
			Zen Browser © {new Date().getFullYear()} - Made with ❤️ by the Zen team.
			<a
				href={"https://github.com/zen-browser"}
				target="_blank"
				className="mt-5 font-bold md:ml-2 md:mt-0"
			>
				Source Code
			</a>
			<div className="mt-1.5 flex items-center justify-center gap-4">
				{links.map(({ link, icon }, i) => (
					<Link href={link} key={i}>
						{icon}
					</Link>
				))}
			</div>
		</div>
	);
}

const links = [
	{
		link: "https://reddit.com/r/zen_browser/",
		icon: <RedditIcon className="h-6 w-6 fill-white" />,
	},
	{
		link: "https://discord.gg/nnShMQzR4b",
		icon: <DiscordIcon className="h-6 w-6 fill-white" />,
	},
	{
		link: "https://mastodon.social/@zenbrowser",
		icon: <MastodonIcon className="h-6 w-6 fill-white" />,
	},
];
