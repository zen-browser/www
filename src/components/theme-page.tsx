import { getThemeAuthorLink, getThemeMarkdown, ZenTheme } from "@/lib/themes";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import '../app/privacy-policy/markdown.css';
import { ChevronLeft, MoveLeftIcon } from "lucide-react";

export default function ThemePage({ theme }: { theme: ZenTheme }) {
  const [readme, setReadme] = useState<string | null>(null);
  useEffect(() => {
    setReadme(getThemeMarkdown(theme));
  }, []);

  return (
    <div className="mt-24 lg:mt-56 flex-col lg:flex-row flex mx-auto items-start">
      <div className="flex flex-col w-md border-r p-5 lg:p-0 lg:pr-5 mr-5 w-full md:max-w-sm relative">
        <img src={theme.image} alt={theme.name} className="w-full object-cover rounded-lg border shadow" />
        <h1 className="text-2xl mt-5 font-bold">{theme.name}</h1>
        <p className="text-sm text-muted-foreground mt-2">{theme.description}</p>
        {theme.homepage && (
          <a
            href={theme.homepage}
            className="text-blue-500 text-md mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Homepage
          </a>
        )}
        <hr className="mt-4" />
        <Button
          className="mt-4 hidden"
          id="install-theme"
        >Install Theme</Button>
        <p id="install-theme-error" className="text-muted-foreground text-sm mt-2">You need to have Zen Browser installed to install this theme. <a href="/download" className="text-blue-500">Download now!</a></p>
      </div>
      <hr className="block my-4 lg:hidden" />
      <div className="flex flex-col p-5 !pt-0 max-w-xl w-full">
        <div className="flex my-2 items-center cursor-pointer opacity-70" onClick={() => window.history.back()}>
          <ChevronLeft className="w-6 h-6 mr-1" />
          <h3 className="text-lg font-bold">Go back</h3>
        </div>
        <div id="policy">
          <Markdown>{`${readme}`}</Markdown>
        </div>
        <hr className="my-5" />
        <p className="text-muted-foreground text-sm">
          Theme by{" "}
          <a href={getThemeAuthorLink(theme)} className="text-blue-500 text-md mt-4" target="_blank" rel="noopener noreferrer">
            {theme.author}
          </a>
        </p>
      </div>
    </div>
  );
}
