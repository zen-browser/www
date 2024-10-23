import { useMemo, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getThemesFromSearch, type ZenTheme } from "@/lib/mods";

function useMarketplace(themes: ZenTheme[]) {
	const searchParams = useSearchParams();
	const router = useRouter();

	const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
	const [sortBy, setSortBy] = useState(searchParams.get("sort") || "name");
	const [selectedTags, setSelectedTags] = useState<string[]>(
		searchParams.get("tags")?.split(",") || []
	);
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

	// Calculate total pages based on themes per page
	const totalPages = Math.ceil(filteredAndSortedThemes.length / limit) || 1;

	const handlePageChange = (page: number) => {
		const clampedPage = Math.min(page, totalPages);
		setCurrentPage(clampedPage);
	};

	// Get the themes to display on the current page
	const currentThemes = useMemo(() => {
		return filteredAndSortedThemes.slice(
			(currentPage - 1) * limit,
			currentPage * limit,
		);
	}, [currentPage, filteredAndSortedThemes, limit]);

	// Create search params for URL
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
		handlePageChange(1);
	};

	// Toggle tag function
	const toggleTag = (tag: string) => {
		setSelectedTags((prev) => {
			const newTags = prev.includes(tag)
				? prev.filter((t) => t !== tag)
				: [...prev, tag];

			router.replace(
				`/mods?${createSearchParams(searchTerm, newTags, limit, sortBy, 1)}`,
			);
			handlePageChange(1);

			return newTags;
		});
	};

	useEffect(() => {
		if (currentThemes !== loadedThemes) {
			setLoadedThemes(currentThemes);
		}
	}, [currentThemes, loadedThemes]);

	return {
		searchTerm,
		setSearchTerm,
		sortBy,
		setSortBy,
		selectedTags,
		setSelectedTags,
		limit,
		setLimit,
		currentPage,
		setCurrentPage,
		loadedThemes,
		handlePageChange,
		handleLimitChange,
		handleSortByChange,
		toggleTag,
		totalPages,
		createSearchParams,
	};
}

export default useMarketplace;


export function useClipboard(valueToCopy: string) {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(valueToCopy);
	};

	return copyToClipboard;
}
