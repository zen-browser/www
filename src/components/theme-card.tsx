import { getThemeAuthorLink, ZenTheme } from "@/lib/themes";
import styled from "styled-components";
import { DownloadIcon, TagIcon, TrashIcon } from "lucide-react";

import { ny } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const ThemeCardWrapper = styled.div``;

export default function ThemeCard({
	theme,
	className,
}: {
	theme: ZenTheme;
	className?: string;
}) {
	const maxNameLen = 50;
	const maxDescLen = 100;

	return (
		<ThemeCardWrapper
			className={ny(
				"relative flex w-full select-none flex-col justify-start rounded-xl border-2 border-[transparent] bg-surface transition-colors duration-200 hover:border-[rgba(0,0,0,.5)] hover:shadow-lg dark:bg-[#121212] dark:hover:border-[#333]",
				className,
			)}
		>
			<div className="relative m-2 mb-0 aspect-[1.85/1] h-48 overflow-hidden rounded-xl border-2 border-[rgba(0,0,0,.5)] object-cover shadow dark:border-[#333] lg:h-auto">
				<img
					src={theme.image}
					alt={theme.name}
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="w-full p-5">
				<div className="flex w-full items-center justify-between">
					<h2 className="overflow-ellipsis text-start text-xl font-bold">
						{theme.name.substring(0, maxNameLen).trim() +
							(theme.name.length > maxNameLen ? "..." : "")}
					</h2>
					<div className="z-10 aspect-square h-10 w-10">
						<Button
							className="hidden h-full w-full !rounded-lg bg-secondary p-0 text-secondary-foreground shadow-sm hover:bg-primary-foreground"
							id="install-theme"
							zen-theme-id={theme.id}
						>
							<DownloadIcon className="h-5 w-5" />
						</Button>
						<Button
							className="hidden h-full w-full !rounded-lg bg-secondary p-0 text-secondary-foreground shadow-sm hover:bg-red-500"
							id="install-theme-uninstall"
							zen-theme-id={theme.id}
						>
							<TrashIcon className="h-5 w-5" />
						</Button>
					</div>
				</div>
				<div className="mr-10 flex flex-wrap gap-2">
					{theme.tags?.length ? (
						theme.tags.map((tag) => (
							<Badge key={tag} variant="secondary">
								<TagIcon className="mr-1 h-3 w-3" />
								{tag}
							</Badge>
						))
					) : (
						<span className="text-xs italic text-gray-500">
							No tags available
						</span>
					)}
				</div>
				<div className="mt-2 flex">
					{theme.version && (
						<span className="text-md text-muted-foreground">
							v{theme.version}
						</span>
					)}
					{theme.homepage && (
						<>
							<span className="text-md mx-2 text-muted-foreground">{"·"}</span>
							<a
								href={theme.homepage}
								className="text-md z-10 text-blue-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								Homepage
							</a>
						</>
					)}
					{theme.author && (
						<>
							<span className="text-md mx-2 text-muted-foreground">{"·"}</span>
							<a
								href={getThemeAuthorLink(theme)}
								className="text-md z-10 text-blue-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								Author
							</a>
						</>
					)}
				</div>
				<p className="text-md mt-2 overflow-ellipsis text-start text-muted-foreground">
					{theme.description.substring(0, maxDescLen).trim() +
						(theme.description.length > maxDescLen ? "..." : "")}
				</p>
			</div>
			<a href={`/mods/${theme.id}`} className="absolute inset-0 h-full w-full">
				<span className="sr-only">{`Link to ${theme.name} mod details`}</span>
			</a>
		</ThemeCardWrapper>
	);
}
