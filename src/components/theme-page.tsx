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

export default async function ThemePage({ themeID }: { themeID: string }) {
	const theme = await getThemeFromId(themeID);
	if (!theme) {
		return <div>Theme not found</div>;
	}

	const readme = await getThemeMarkdown(theme);

	return (
		<div className="relative mx-auto mt-24 flex flex-col items-start lg:mt-56 lg:flex-row">
			<div className="w-md relative mx-auto mr-5 flex h-full w-full flex-col rounded-lg border bg-surface p-5 shadow md:mx-0 md:max-w-sm lg:sticky lg:top-0">
				<a
					className="mb-4 mt-2 flex cursor-pointer items-center opacity-70"
					href="/themes"
				>
					<ChevronLeft className="mr-1 h-4 w-4" />
					<h3 className="text-md">Go back</h3>
				</a>
				<img
					src={theme.image}
					alt={theme.name}
					className="f-full rounded-lg border-2 object-cover shadow"
				/>
				<h1 className="mt-5 text-2xl font-bold">{theme.name}</h1>
				<p className="mt-2 text-sm text-muted-foreground">
					{theme.description}
				</p>
				{theme.homepage && (
					<a
						href={theme.homepage}
						className="text-md mt-4 text-blue-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						Visit Homepage
					</a>
				)}
				<hr className="mt-4" />
				<Button
					className="mt-4 hidden !rounded-lg"
					id="install-theme"
					data-umami-event={`${theme.name}-Install`}
					zen-theme-id={theme.id}
				>
					Install Theme 🎉
				</Button>
				<Button
					className="mt-4 hidden !rounded-lg"
					id="install-theme-uninstall"
					data-umami-event={`${theme.name}-Uninstall`}
					zen-theme-id={theme.id}
				>
					Uninstall Theme
				</Button>
				<p
					id="install-theme-error"
					className="mt-2 text-sm text-muted-foreground"
				>
					You need to have Zen Browser installed to install this theme.{" "}
					<a href="/download" className="text-blue-500">
						Download now!
					</a>
				</p>
			</div>
			<div className="flex w-full max-w-xl flex-col px-5 lg:min-h-[calc(100vh/2-2rem)] lg:min-w-96 lg:pl-10">
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
					<a
						href={getThemeAuthorLink(theme)}
						className="text-md mt-4 text-blue-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						{theme.author}
					</a>
					{` • v${theme.version}`}
				</p>
			</div>
		</div>
	);
}
