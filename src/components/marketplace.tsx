"use client";
import React, { Suspense } from "react";
import ThemesSearch from "./themes-search";
import { type ZenTheme } from "@/lib/mods";
import ThemeCard from "./theme-card";
import StickyBox from "react-sticky-box";
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
import useMarketplace from "@/lib/hooks";

function MarketplacePage({ themes }: { themes: ZenTheme[] }) {
	const {
		searchTerm,
		setSearchTerm,
		sortBy,
		handleSortByChange,
		selectedTags,
		toggleTag,
		limit,
		handleLimitChange,
		loadedThemes,
		currentPage,
		totalPages,
		createSearchParams,
	} = useMarketplace(themes);

	const startPage = Math.max(1, currentPage - 2);
	const endPage = Math.min(totalPages, currentPage + 2);
	const isPrevNavigationDisabled = currentPage <= 1;
	const isNextNavigationDisabled = currentPage >= totalPages;

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
							<PaginationItem
								className={ny(isPrevNavigationDisabled && "cursor-not-allowed")}
							>
								<PaginationPrevious
									href={`/mods?${createSearchParams(searchTerm, selectedTags, limit, sortBy, currentPage - 1)}`}
									aria-disabled={isPrevNavigationDisabled}
									className={ny(
										"px-4",
										isPrevNavigationDisabled
											? "pointer-events-none text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
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
							<PaginationItem
								className={ny(isNextNavigationDisabled && "cursor-not-allowed")}
							>
								<PaginationNext
									href={`/mods?${createSearchParams(searchTerm, selectedTags, limit, sortBy, currentPage + 1)}`}
									aria-disabled={isNextNavigationDisabled}
									className={ny(
										"px-4",
										isNextNavigationDisabled
											? "pointer-events-none text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
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
