"use client";
import React from "react";
import ThemesSearch from "./themes-search";
import { getThemesFromSearch, ZenTheme } from "@/lib/mods";
import ThemeCard from "./theme-card";
import StickyBox from "react-sticky-box";

export default function MarketplacePage({ themes }: { themes: ZenTheme[] }) {
	const [searchTerm, setSearchTerm] = React.useState("");
	const [sortBy, setSortBy] = React.useState("name");
	const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [showMods, setShowMods] = React.useState("showAll");

	// Filter and sort themes based on search and selected tags
	const filteredAndSortedThemes = React.useMemo(() => {
		return getThemesFromSearch(themes, searchTerm, selectedTags, sortBy);
	}, [themes, searchTerm, selectedTags, sortBy]);

	// Determine modsPerPage based on showMods
	let modsPerPage: number;

	switch (showMods) {
		case 'show12':
			modsPerPage = 12;
			break;
		case 'show24':
			modsPerPage = 24;
			break;
		case 'show36':
			modsPerPage = 36;
			break;
		case 'showAll':
			modsPerPage = filteredAndSortedThemes.length || 1; // Avoid division by zero
			break;
		default:
			modsPerPage = 8; // Default value or you can set a different default
	}

	// Calculate total pages based on modsPerPage
	const totalPages = Math.ceil(filteredAndSortedThemes.length / modsPerPage) || 1;

	// Get the themes to display on the current page
	const currentThemes = React.useMemo(() => {
		if (showMods === 'show36') {
			return filteredAndSortedThemes;
		} else {
			return filteredAndSortedThemes.slice(
				(currentPage - 1) * modsPerPage,
				currentPage * modsPerPage
			);
		}
	}, [filteredAndSortedThemes, currentPage, modsPerPage, showMods]);

	// Toggle tag function
	const toggleTag = (tag: string) => {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
		);
	};

	// Handle page change
	const handlePageChange = (newPage: number) => {
		if (newPage >= 1 && newPage <= totalPages) {
			setCurrentPage(newPage);
		}
	};

	// Reset currentPage when showMods, searchTerm, or selectedTags change
	React.useEffect(() => {
		setCurrentPage(1);
	}, [showMods, searchTerm, selectedTags]);

	// Clamp currentPage to totalPages when totalPages changes
	React.useEffect(() => {
		if (currentPage > totalPages) {
			setCurrentPage(totalPages);
		}
	}, [totalPages, currentPage]);

	return (
		<div className="relative mx-auto flex h-full w-full flex-col lg:flex-row">
			{/* Sidebar */}
			<div className="relative w-full lg:w-fit flex-shrink-0 bg-surface px-10 py-48 shadow dark:bg-[#121212] lg:mt-24 lg:rounded-br-lg lg:rounded-tr-lg lg:py-32 xl:w-1/3 2xl:w-1/4">
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
						setSortBy={setSortBy}
						showMods={showMods}
						setShowMods={setShowMods}
					/>
				</StickyBox>
			</div>

			{/* Main content */}
			<div className="pt-16 flex flex-col w-full lg:w-auto">

				{/* Mods Grid */}
				<div className="grid w-full grid-cols-1 gap-8 px-5 pt-6 lg:w-auto lg:gap-y-16 lg:px-10 xl:w-auto xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
					{currentThemes.map((theme) => (
						<ThemeCard key={theme.name} theme={theme} />
					))}
				</div>

				{/* Pagination at the bottom */}
				{showMods !== 'showAll' && totalPages > 1 && (
					<div className="pagination flex justify-center items-center my-8">
						<button
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}
							className="mr-4 px-4 py-2 bg-gray-300 rounded bg-secondary/80 hover:bg-secondary/60"
						>
							Previous
						</button>
						<span>
              Page {currentPage} of {totalPages}
            </span>
						<button
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
							className="ml-4 px-4 py-2 bg-gray-300 rounded bg-secondary/80 hover:bg-secondary/60"
						>
							Next
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
