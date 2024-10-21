import {
	getThemeAuthorLink,
	getThemeFromId,
	getThemeMarkdown,
} from "@/lib/mods";
import { Button } from "./ui/button";
import Markdown from "react-markdown";
import "../app/privacy-policy/markdown.css";
import { LoaderCircleIcon } from "lucide-react";
import { GoBack } from "./go-back";

export default async function ThemePage({ themeID }: { themeID: string }) {
	const theme = await getThemeFromId(themeID);
	if (!theme) {
		return <div>Theme not found</div>;
	}

	const readme = await getThemeMarkdown(theme);

	return (
		<div className="relative mx-auto mt-24 flex flex-col items-start lg:mt-56 lg:flex-row">
			<div className="w-md relative mx-auto mr-5 flex h-full w-full flex-col rounded-lg border bg-surface p-5 shadow md:mx-0 md:max-w-sm lg:sticky lg:top-0">
				<div className="mb-2 flex w-full items-center justify-between">
					<GoBack />
					{theme.homepage && (
						<a
							href={theme.homepage}
							className="text-xs text-blue-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							Visit Homepage
						</a>
					)}
				</div>
				<h1 className="mt-5 text-2xl font-bold">{theme.name}</h1>
				<p className="mt-2 text-sm text-muted-foreground">
					{theme.description}
				</p>
				<hr className="mt-4" />
				<Button
					className="mt-4 hidden !rounded-lg"
					id="install-theme"
					zen-theme-id={theme.id}
				>
					Install Theme 🎉
				</Button>
				<Button
					className="mt-4 hidden !rounded-lg"
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
					<a href="/download" className="text-blue-500">
						Download now!
					</a>
				</p>
				<hr className="my-4" />
				<div className="flex justify-between text-sm text-muted-foreground">
					<div>
						<span className="opacity-70">Theme by </span>
						<a
							href={getThemeAuthorLink(theme)}
							className="text-md mt-4 text-blue-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							{theme.author}
						</a>
					</div>
					<div className="opacity-70">v{theme.version}</div>
				</div>
			</div>
			<div className="flex w-full max-w-xl flex-col px-5 lg:min-h-[calc(100vh/2-2rem)] lg:min-w-96 lg:pl-10">
				<img
					src={theme.image}
					alt={theme.name}
					className="w-full rounded-2xl border-2 object-cover shadow"
				/>
				<div id="policy" className="!mt-0 w-full">
					{readme === null ? (
						<LoaderCircleIcon className="mx-auto h-12 w-12 animate-spin" />
					) : (
						<Markdown>{`${readme}`}</Markdown>
					)}
				</div>
			</div>
		</div>
	);
}
