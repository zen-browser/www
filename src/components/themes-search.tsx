import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ny } from "@/lib/utils";

const TAGS = [
  "all",
  "color-scheme",
  "utility",
];

export default function ThemesSearch({
  input, setInput, tags, setTags
}: {
  input: string;
  setInput: (input: string) => void;
  tags: string[];
  setTags: (tags: string[]) => void;
}) {
  return (
    <>
      <div className="flex w-full p-2 bg-black/10 dark:bg-muted/50 rounded-full overflow-hidden mt-10 items-center border border-black dark:border-muted">
        <SearchIcon className="w-6 h-6 mx-4 text-black dark:text-white" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search themes"
          className="w-full bg-transparent border-none focus:outline-none focus:border-none focus:ring-0 dark:text-white text-black"
        />
        <Button
          onClick={() => window.open("https://docs.zen-browser.app/themes-store/themes-marketplace-submission-guidelines#themes-store-submission-guidelines", "_blank")}
          className="text-muted rounded-full rounded-r-none hidden md:block"
        >Submit a theme</Button>
        <Button
          onClick={() => window.open("/create-theme", "_self")}
          className="text-muted rounded-full rounded-l-none border-l border-black dark:border-none hidden md:block"
        >Create your theme</Button>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {TAGS.map((tag) => (
          <Button
            variant="ghost"
            key={tag}
            onClick={() => setTags([tag])}
            className={ny(`!rounded-full px-5 ${tags.includes(tag) ? "bg-black dark:bg-white text-white dark:text-black" : ""}`)}
          >{tag}</Button>
        ))}
      </div>
    </>
  );
}
