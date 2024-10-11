import { SearchIcon, TagIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import React from "react";

const TAGS = ["color scheme", "dark", "tabs"];

export default function ThemesSearch({
	input,
	setInput,
	tags,
  toggleTag,
  sortBy,
  setSortBy,
}: {
	input: string;
	setInput: (input: string) => void;
	tags: string[];
  toggleTag: (tag: string) => void;
  sortBy: string;
  setSortBy: (method: string) => void;
}) {
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
			</div>
      <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-[180px] mt-4">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Alphabetical</SelectItem>
            <SelectItem value="createdAt">Created Date</SelectItem>
            <SelectItem value="updatedAt">Updated Date</SelectItem>
          </SelectContent>
        </Select>
			<div className="mt-4 flex flex-wrap gap-2">
        <div className="flex flex-wrap gap-2 mb-6">
        {TAGS.map((tag) => (
          <Button
            key={tag}
            variant={tags.includes(tag) ? "default" : "secondary"}
            size="sm"
            onClick={() => toggleTag(tag)}
            className="flex items-center"
          >
            <TagIcon className="w-4 h-4 mr-1" />
            {tag}
          </Button>
        ))}
      </div>
			</div>
		</>
	);
}
