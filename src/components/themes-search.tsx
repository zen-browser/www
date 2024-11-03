import { SearchIcon, TagIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import type React from "react";

const TAGS = ["color scheme", "dark", "tabs"];

export default function ThemesSearch({
	input,
	setInput,
	tags,
	toggleTag,
	sortBy,
	handleSortByChange,
	limit,
	handleLimitChange,
	allTags,
}: {
	input: string;
	setInput: (input: string) => void;
	tags: string[];
	toggleTag: (tag: string) => void;
	sortBy: string;
	handleSortByChange: (method: string) => void;
	limit: number;
	handleLimitChange: (value: string) => void;
	allTags: string[];
}) {
	const sortOptions = ["name", "newest", "oldest", "updatedAt"];
	const limitOptions = [12, 24, 36];
	return (
		<>
			<div className="mt-10 flex w-full items-center overflow-hidden rounded-full border border-black bg-black/10 p-2 dark:border-muted dark:bg-muted/50">
				<SearchIcon className="mx-4 size-6 text-black dark:text-white" />
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Search Mods"
					className="w-full border-none bg-transparent text-black focus:border-none focus:outline-none focus:ring-0 dark:text-white"
				/>
				{/*
				<Button
					onClick={() =>
						window.open(
							"https://docs.zen-browser.app/themes-store/themes-marketplace-submission-guidelines#themes-store-submission-guidelines",
							"_blank",
						)
					}
					className="hidden rounded-full rounded-r-none text-muted md:block"
				>
					Submit a theme
				</Button>
				<Button
					onClick={() => window.open("/create-theme", "_self")}
					className="hidden rounded-full rounded-l-none border-l border-black text-muted dark:border-none md:block"
				>
					Create your theme
				</Button>*/}
			</div>
			<div className="my-4 flex gap-2">
				<Select
					value={sortOptions.includes(sortBy) ? sortBy : undefined}
					onValueChange={handleSortByChange}
				>
					<SelectTrigger className="w-full sm:w-[180px]">
						<SelectValue placeholder="Sort by" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="name">Alphabetical</SelectItem>
						<SelectItem value="newest">Newest</SelectItem>
						<SelectItem value="oldest">Oldest</SelectItem>
						<SelectItem value="updatedAt">Recently Updated</SelectItem>
					</SelectContent>
				</Select>
				<Select
					value={limitOptions.includes(limit) ? limit.toString() : undefined}
					onValueChange={handleLimitChange}
				>
					<SelectTrigger className="w-full sm:w-[180px]">
						<SelectValue placeholder="Items per page" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="12">Show 12 Mods</SelectItem>
						<SelectItem value="24">Show 24 Mods</SelectItem>
						<SelectItem value="36">Show 36 Mods</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex flex-wrap gap-2">
				<div className="mb-6 flex flex-wrap gap-2">
					{allTags.map((tag) => (
						<Button
							key={tag}
							variant={tags.includes(tag) ? "default" : "secondary"}
							size="sm"
							onClick={() => toggleTag(tag)}
							className="flex items-center"
						>
							<TagIcon className="mr-1 h-4 w-4" />
							{tag}
						</Button>
					))}
				</div>
			</div>
		</>
	);
}
