import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ny } from "@/lib/utils";

const TAGS = ["all", "color-scheme", "utility"];

export default function ThemesSearch({
	input,
	setInput,
	tags,
	setTags,
}: {
	input: string;
	setInput: (input: string) => void;
	tags: string[];
	setTags: (tags: string[]) => void;
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
			<div className="mt-4 flex flex-wrap gap-2">
				{TAGS.map((tag) => (
					<Button
						variant="ghost"
						key={tag}
						onClick={() => setTags([tag])}
						className={ny(
							`!h-fit !min-w-24 !rounded-full !py-2 px-5 ${tags.includes(tag) ? "bg-black text-white dark:bg-white dark:text-black" : ""}`,
						)}
					>
						{tag.replace(/-/g, " ")}
					</Button>
				))}
			</div>
		</>
	);
}
