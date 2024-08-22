import Image from "next/image";
import { getThemeAuthorLink, getThemeMarkdown, ZenTheme } from "@/lib/themes";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import '../app/privacy-policy/markdown.css';
import { ChevronLeft, LoaderCircleIcon, LoaderIcon, LoaderPinwheelIcon, MoveLeftIcon } from "lucide-react";

export default function ThemePage({ theme }: { theme: ZenTheme }) {
  const [readme, setReadme] = useState<string | null>(null);
  useEffect(() => {
    getThemeMarkdown(theme).then(setReadme);
  }, [theme]);

  return (
    <div className="mt-24 lg:mt-56 flex-col lg:flex-row flex mx-auto items-start relative">
      <div className="flex flex-col relative lg:fixed w-md h-full p-5 lg:p-0 lg:pr-5 mr-5 w-full md:max-w-sm">
        <Image src={theme.image} alt={theme.name} width={500} height={500} className="w-full object-cover rounded-lg border-2 shadow" />
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
          zen-theme-id={theme.id}
        >Install Theme 🎉</Button>
        <Button
          className="mt-4 hidden"
          id="install-theme-uninstall"
          zen-theme-id={theme.id}
        >Uninstall Theme</Button>
        <p id="install-theme-error" className="text-muted-foreground text-sm mt-2">You need to have Zen Browser installed to install this theme. <a href="/download" className="text-blue-500">Download now!</a></p>
      </div>
      <hr className="block my-4 lg:hidden" />
      <div className="flex flex-col lg:border-l lg:min-h-96 pl-10 lg:ml-[25rem] max-w-xl lg:min-w-96 w-full">
        <div className="flex my-2 items-center cursor-pointer opacity-70" onClick={() => window.history.back()}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          <h3 className="text-md">Go back</h3>
        </div>
        <div id="policy" className="w-full">
          {readme === null ? (
              <LoaderCircleIcon className="animate-spin w-12 h-12 mx-auto" />
          ) : (
            <Markdown>{`${readme}`}</Markdown>
          )}
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
