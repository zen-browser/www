"use client";
import React from "react";
import ThemesSearch from "./themes-search";
import { getAllThemes, getThemesFromSearch, ZenTheme } from "@/lib/themes";
import ThemeCard from "./theme-card";
import { Button } from "./ui/button";

export default function MarketplacePage({ themes }: { themes: ZenTheme[] }) {
	const [searchInput, setSearchInput] = React.useState("");
	const [tags, setTags] = React.useState<string[]>(["all"]);

	return (
		<div className="mx-auto flex h-full w-full flex-col items-center justify-center">
			<div className="mx-auto mb-12 w-full border-b bg-surface pb-24 pt-48 text-center dark:bg-[#121212]">
				<div className="lg:px-none mx-auto w-full px-2 lg:w-1/2 xl:w-1/2">
					<h1 className="text-4xl font-bold lg:text-7xl">Themes Store</h1>
					<ThemesSearch
						input={searchInput}
						setInput={setSearchInput}
						tags={tags}
						setTags={setTags}
					/>
				</div>
			</div>
			<div className="mt-10 grid w-full grid-cols-1 gap-8 px-5 md:grid-cols-2 lg:w-1/2 lg:px-0 xl:w-2/3 xl:grid-cols-3 2xl:w-3/4 2xl:grid-cols-4">
				{getThemesFromSearch(themes, searchInput, tags).map((theme) => (
					<ThemeCard key={theme.name} theme={theme} />
				))}
			</div>
		</div>
	);
}
