import {
	getThemeAuthorLink,
	getThemeFromId,
	getThemeMarkdown,
	ZenTheme,
} from "@/lib/themes";
import { Button } from "./ui/button";
import Markdown from "react-markdown";
import "../app/privacy-policy/markdown.css";
import { ChevronLeft, LoaderCircleIcon } from "lucide-react";
import Link from "next/link";

export default async function ThemePage({ themeID }: { themeID: string }) {
	const theme = await getThemeFromId(themeID);
	if (!theme) {
		return <div>Theme not found</div>;
	}

	const readme = await getThemeMarkdown(theme);

	return (
		<div className="relative mx-auto mt-24 flex flex-col items-start lg:mt-56 lg:flex-row">
			<div className="w-md relative mr-5 flex h-full w-full flex-col p-5 md:max-w-sm lg:sticky lg:top-0 lg:p-0 lg:pr-5">
				<Link
					className="mb-9 mt-2 flex cursor-pointer items-center opacity-70"
					href="/themes"
				>
					<ChevronLeft className="mr-1 h-4 w-4" />
					<h3 className="text-md">Go back</h3>
				</Link>
				<img
					src={theme.image}
					alt={theme.name}
					width={500}
					height={500}
					className="w-full rounded-lg border-2 object-cover shadow"
				/>
				<h1 className="mt-5 text-2xl font-bold">{theme.name}</h1>
				<p className="mt-2 text-sm text-muted-foreground">
					{theme.description}
				</p>
				{theme.homepage && (
					<Link
						href={theme.homepage}
						className="text-md mt-4 text-blue-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						Visit Homepage
					</Link>
				)}
				<hr className="mt-4" />
				<Button
					className="mt-4 hidden"
					id="install-theme"
					zen-theme-id={theme.id}
				>
					Install Theme 🎉
				</Button>
				<Button
					className="mt-4 hidden"
					id="install-theme-uninstall"
					zen-theme-id={theme.id}
				>
					Uninstall Theme
				</Button>
				<p
					id="install-theme-error"
					className="mt-2 text-sm text-muted-foreground"
				>
					You need to have Zen Browser installed to install this theme.{" "}
					<Link href="/download" className="text-blue-500">
						Download now!
					</Link>
				</p>
			</div>
			<hr className="my-4 block lg:hidden" />
			<div className="flex w-full max-w-xl flex-col px-5 lg:min-h-[calc(100vh/2-2rem)] lg:min-w-96 lg:border-l lg:pl-10">
				<div id="policy" className="w-full">
					{readme === null ? (
						<LoaderCircleIcon className="mx-auto h-12 w-12 animate-spin" />
					) : (
						<Markdown>{`${readme}`}</Markdown>
					)}
				</div>
				<hr className="my-5" />
				<p className="text-sm text-muted-foreground">
					Theme by{" "}
					<Link
						href={getThemeAuthorLink(theme)}
						className="text-md mt-4 text-blue-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						{theme.author}
					</Link>
					{` • v${theme.version}`}
				</p>
			</div>
		</div>
	);
}
