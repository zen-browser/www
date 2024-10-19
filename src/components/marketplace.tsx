"use client";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import ThemesSearch from "./themes-search";
import { getThemesFromSearch, type ZenTheme } from "@/lib/mods";
import ThemeCard from "./theme-card";
import StickyBox from "react-sticky-box";
import { useRouter, useSearchParams } from "next/navigation";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { ny } from "@/lib/utils";

function MarketplacePage({ themes }: { themes: ZenTheme[] }) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
	const [sortBy, setSortBy] = useState(searchParams.get("sort") || "name");
	const tags = useRef<string[]>(searchParams.get("tags")?.split(",") || []);
	const [selectedTags, setSelectedTags] = useState<string[]>(tags.current);
	const [limit, setLimit] = useState(
		Number.parseInt(searchParams.get("limit") || "12"),
	);
	const [currentPage, setCurrentPage] = useState(() => {
		const page = Number.parseInt(searchParams.get("page") || "1");
		const maxPage = Math.ceil(themes.length / limit);
		return Math.min(page, maxPage);
	});
	const [loadedThemes, setLoadedThemes] = useState<ZenTheme[]>([]);

	// Filter and sort themes based on search and selected tags
	const filteredAndSortedThemes = useMemo(() => {
		return getThemesFromSearch(themes, searchTerm, selectedTags, sortBy);
	}, [themes, searchTerm, selectedTags, sortBy]);

	// Calculate total pages based on modsPerPage
	const totalPages = Math.ceil(filteredAndSortedThemes.length / limit) || 1;

	// Get the themes to display on the current page
	const currentThemes = useMemo(() => {
		return filteredAndSortedThemes.slice(
			(currentPage - 1) * limit,
			currentPage * limit,
		);
	}, [currentPage, filteredAndSortedThemes, limit]);

	const createSearchParams = (
		searchTerm: string,
		tags: string[],
		limit: number,
		sortBy: string,
		page: number,
	) => {
		const sp = new URLSearchParams();
		if (searchTerm) sp.set("q", searchTerm);
		if (sortBy !== "name") sp.set("sort", sortBy);
		if (tags?.length > 0) sp.set("tags", tags.join(","));
		if (limit !== 12) sp.set("limit", limit.toString());
		if (page !== 1) sp.set("page", page.toString());
		return sp.toString();
	};

	// Handle limit change
	const handleLimitChange = (limit: string) => {
		router.replace(
			`/mods?${createSearchParams(
				searchTerm,
				selectedTags,
				Number.parseInt(limit),
				sortBy,
				currentPage,
			)}`,
		);
		setLimit(Number.parseInt(limit));
	};

	// Handle sort by change
	const handleSortByChange = (sortBy: string) => {
		router.replace(
			`/mods?${createSearchParams(searchTerm, selectedTags, limit, sortBy, 1)}`,
		);
		setSortBy(sortBy);
		setCurrentPage(1);
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
			`/mods?${createSearchParams(searchTerm, tags.current, limit, sortBy, 1)}`,
		);
		setCurrentPage(1);
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

	const startPage = Math.max(1, currentPage - 2);
	const endPage = Math.min(totalPages, currentPage + 2);

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

				{/* Pagination */}
				<div className="my-8 flex items-center justify-center">
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious
									href={`/mods?${createSearchParams(searchTerm, selectedTags, limit, sortBy, currentPage - 1)}`}
									aria-disabled={currentPage <= 1}
									className={ny(
										"px-4",
										currentPage <= 1
											? "cursor-not-allowed text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
											: "",
									)}
								/>
							</PaginationItem>
							{totalPages > 4 && currentPage > 3 && (
								<PaginationItem key={-1} className="hidden md:block">
									<PaginationEllipsis />
								</PaginationItem>
							)}

							{[...Array(endPage - startPage + 1)].map((_, index) => {
								const pageIndex = startPage + index;
								return (
									<PaginationItem key={pageIndex} className="hidden md:block">
										<PaginationLink
											href={`/mods?${createSearchParams(searchTerm, selectedTags, limit, sortBy, pageIndex)}`}
											aria-current={currentPage === pageIndex}
											className={ny(
												currentPage === pageIndex
													? "border-outline border"
													: "",
												"rounded-md",
											)}
										>
											{pageIndex}
										</PaginationLink>
									</PaginationItem>
								);
							})}
							{totalPages > 4 && currentPage < totalPages - 2 && (
								<>
									<PaginationItem key={totalPages} className="hidden md:block">
										<PaginationEllipsis />
									</PaginationItem>
									{totalPages > 4 && currentPage < totalPages && (
										<PaginationItem
											key={totalPages}
											className="hidden md:block"
										>
											<PaginationLink
												href={`/mods?${createSearchParams(searchTerm, selectedTags, limit, sortBy, totalPages)}`}
												aria-current={currentPage === totalPages}
												className={ny(
													currentPage === totalPages
														? "border-outline border"
														: "",
													"rounded-md",
												)}
											>
												{totalPages}
											</PaginationLink>
										</PaginationItem>
									)}
								</>
							)}
							<div className="block px-2 md:hidden">
								<span>
									{currentPage} of {totalPages}
								</span>
							</div>
							<PaginationItem>
								<PaginationNext
									href={`/mods?${createSearchParams(searchTerm, selectedTags, limit, sortBy, currentPage + 1)}`}
									aria-disabled={currentPage >= totalPages}
									className={ny(
										"px-4",
										currentPage >= totalPages
											? "cursor-not-allowed text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
											: "",
									)}
								/>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
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
