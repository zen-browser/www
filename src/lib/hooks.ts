import { useMemo, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getThemesFromSearch, type ZenTheme } from "@/lib/mods";

function useMarketplace(themes: ZenTheme[]) {
	const router = useRouter();
	const searchParams = useSearchParams();

	// Simple state management
	const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
	const [sortBy, setSortBy] = useState(searchParams.get("sort") || "name");
	const [tags, setTags] = useState(searchParams.get("tags")?.split(",") || []);
	const [limit, setLimit] = useState(Number(searchParams.get("limit") || 12));
	const [page, setPage] = useState(Number(searchParams.get("page") || 1));

	// Derived value: filtered and sorted themes
	const filteredThemes = useMemo(() => {
		return getThemesFromSearch(themes, searchTerm, tags, sortBy);
	}, [themes, searchTerm, tags, sortBy]);

	// Derived value: total number of pages
	const totalPages = Math.ceil(filteredThemes.length / limit);

	// Current page themes
	const currentThemes = useMemo(() => {
		const start = (page - 1) * limit;
		return filteredThemes.slice(start, start + limit);
	}, [filteredThemes, page, limit]);

	// Helper function to update URL search params
	const updateSearchParams = (
		overrides: Partial<Record<string, string | number>> = {},
	) => {
		const params = new URLSearchParams();

		// Merge current state with overrides first
		const mergedState = {
			q: searchTerm,
			sort: sortBy,
			tags: tags.join(","),
			limit: limit.toString(),
			page: page.toString(),
			...overrides, // Apply any overrides dynamically (e.g., new page number)
		};

		// Now exclude default values after merging the overrides
		const searchParams = {
			q: mergedState.q || undefined,
			sort: mergedState.sort !== "name" ? mergedState.sort : undefined,
			tags: mergedState.tags ? mergedState.tags : undefined,
			limit: mergedState.limit !== "12" ? mergedState.limit : undefined,
			page: mergedState.page !== "1" ? mergedState.page : undefined,
		};
    
		// Only add params that are defined and non-empty
		Object.entries(searchParams).forEach(([key, value]) => {
			if (value) {
				params.set(key, value.toString());
			}
		});

		return `/mods?${params.toString()}`;
	};

	// Handlers for various actions
	const handleSearchChange = (term: string) => {
		setSearchTerm(term);
		setPage(1);
		router.replace(updateSearchParams({ q: term, page: "1" }));
	};

	const handleSortChange = (sort: string) => {
		setSortBy(sort);
		setPage(1);
		router.replace(updateSearchParams({ sort, page: "1" }));
	};

	const handleTagToggle = (tag: string) => {
		const newTags = tags.includes(tag)
			? tags.filter((t) => t !== tag)
			: [...tags, tag];
		setTags(newTags);
		setPage(1);
		router.replace(updateSearchParams({ tags: newTags.join(","), page: "1" }));
	};

	const handleLimitChange = (newLimit: string) => {
		setLimit(Number(newLimit));
		setPage(1);
		router.replace(updateSearchParams({ limit: newLimit, page: "1" }));
	};

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
		router.replace(updateSearchParams({ page: newPage.toString() }));
	};

	// Sync themes to state
	useEffect(() => {
		setPage((prev) => Math.min(prev, totalPages));
	}, [totalPages]);

	return {
		searchTerm,
		setSearchTerm: handleSearchChange,
		sortBy,
		setSortBy: handleSortChange,
		tags,
		toggleTag: handleTagToggle,
		limit,
		setLimit: handleLimitChange,
		page,
		setPage: handlePageChange,
		totalPages,
		currentThemes,
		updateSearchParams,
	};
}

export default useMarketplace;

export function useClipboard(valueToCopy: string) {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(valueToCopy);
	};

	return copyToClipboard;
}
