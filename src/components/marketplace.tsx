"use client";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import ThemesSearch from "./themes-search";
import { getThemesFromSearch, type ZenTheme } from "@/lib/mods";
import ThemeCard from "./theme-card";
import StickyBox from "react-sticky-box";
import { Button } from "./ui/button";
import { useRouter, useSearchParams } from "next/navigation";

function MarketplacePage({ themes }: { themes: ZenTheme[] }) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
	const [sortBy, setSortBy] = useState(searchParams.get("sort") || "name");
	const tags = useRef<string[]>(searchParams.get("tags")?.split(",") || []);
	const [selectedTags, setSelectedTags] = useState<string[]>(tags.current);
	const [currentPage, setCurrentPage] = useState(1);
	const [limit, setLimit] = useState(
		Number.parseInt(searchParams.get("limit") || "12"),
	);
	const [loadedThemes, setLoadedThemes] = useState<ZenTheme[]>([]);

	// Filter and sort themes based on search and selected tags
	const filteredAndSortedThemes = useMemo(() => {
		return getThemesFromSearch(themes, searchTerm, selectedTags, sortBy);
	}, [themes, searchTerm, selectedTags, sortBy]);

	// Calculate total pages based on modsPerPage
	const totalPages = Math.ceil(filteredAndSortedThemes.length / limit) || 1;

	// Get the themes to display on the current page
	const currentThemes = useMemo(() => {
		return filteredAndSortedThemes.slice(0, limit * currentPage);
	}, [currentPage, filteredAndSortedThemes, limit]);

	const createSearchParams = (
		searchTerm: string,
		tags: string[],
		limit: number,
		sortBy: string,
	) => {
		const sp = new URLSearchParams();
		if (searchTerm) sp.set("q", searchTerm);
		if (sortBy !== "name") sp.set("sort", sortBy);
		if (tags?.length > 0) sp.set("tags", tags.join(","));
		if (limit !== 12) sp.set("limit", limit.toString());
		return sp.toString();
	};

	// Handle limit change
	const handleLimitChange = (limit: string) => {
		router.replace(
			`/mods?${createSearchParams(searchTerm, selectedTags, Number.parseInt(limit), sortBy)}`,
		);
		setLimit(Number.parseInt(limit));
	};

	// Handle sort by change
	const handleSortByChange = (sortBy: string) => {
		router.replace(
			`/mods?${createSearchParams(searchTerm, selectedTags, limit, sortBy)}`,
		);
		setSortBy(sortBy);
	};

	// Handle page change
	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		setLoadedThemes((prev) => [
			...prev,
			...filteredAndSortedThemes.slice(
				(prev.length / limit) * currentPage,
				page * limit,
			),
		]);
	};

	// Toggle tag function
	const toggleTag = (tag: string) => {
		setSelectedTags((prev) => {
			const newTags = prev.includes(tag)
				? prev.filter((t) => t !== tag)
				: [...prev, tag];
			tags.current = newTags;
			return newTags;
		});
		router.replace(
			`/mods?${createSearchParams(searchTerm, tags.current, limit, sortBy)}`,
		);
	};

	// Clamp currentPage to totalPages when totalPages changes
	useEffect(() => {
		if (currentPage > totalPages) {
			setCurrentPage(totalPages);
		}
	}, [totalPages, currentPage]);

	useEffect(() => {
		setLoadedThemes(currentThemes);
	}, [currentThemes]);

	return (
		<div className="relative mx-auto flex h-full w-full flex-col lg:flex-row">
			{/* Sidebar */}
			<div className="relative w-full flex-shrink-0 bg-surface px-10 py-48 shadow dark:bg-[#121212] lg:mt-24 lg:w-fit lg:rounded-br-lg lg:rounded-tr-lg lg:py-32 xl:w-1/3 2xl:w-1/4">
				<StickyBox
					className="h-fit min-w-52 text-xs text-muted-foreground lg:mb-0"
					offsetTop={120}
				>
					<h1 className="text-4xl font-bold lg:text-7xl">Zen Mods</h1>
					<p className="mt-4 text-lg text-muted-foreground">
						Discover and install Mods for Zen Browser.
					</p>
					<ThemesSearch
						input={searchTerm}
						setInput={setSearchTerm}
						tags={selectedTags}
						toggleTag={toggleTag}
						sortBy={sortBy}
						handleSortByChange={handleSortByChange}
						limit={limit}
						handleLimitChange={handleLimitChange}
					/>
				</StickyBox>
			</div>

			{/* Main content */}
			<div className="flex w-full flex-col pt-16 lg:w-auto">
				{/* Mods Grid */}
				<div className="grid w-full grid-cols-1 gap-8 px-5 pt-6 lg:w-auto lg:gap-y-16 lg:px-10 xl:w-auto xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
					{loadedThemes.map((theme) => (
						<ThemeCard key={theme.name} theme={theme} />
					))}
				</div>

				{/* Load More */}
				{currentPage < totalPages && (
					<div className="my-8 flex items-center justify-center">
						<Button
							variant="secondary"
							onClick={() => handlePageChange(currentPage + 1)}
							className="rounded-md"
						>
							View More
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}

export default function MarketplacePageWrapper(props: { themes: ZenTheme[] }) {
	return (
		<Suspense>
			<MarketplacePage {...props} />
		</Suspense>
	);
}
