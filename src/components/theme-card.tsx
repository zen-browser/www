
import { getThemeAuthorLink, ZenTheme } from "@/lib/themes";
import styled from "styled-components";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";import { Button } from "./ui/button";
import { ny } from "@/lib/utils";

const ThemeCardWrapper = styled.div`
`;

export default function ThemeCard({
  theme,
  className
}: {
  theme: ZenTheme;
  className?: string;
}) {

  const maxNameLen = 50;
  const maxDescLen = 100;

  return (
    <ThemeCardWrapper onClick={(event) => {
      if (event.target instanceof HTMLAnchorElement) return;
      window.open(`/themes/${theme.id}`, "_self");
    }} className={ny("flex flex-col justify-start p-5 rounded-lg shadow-sm bg-muted dark:bg-muted/50 border border-grey-900 dark:border-muted w-full hover:shadow-lg transition duration-300 ease-in-out hover:bg-muted/100 hover:border-blue-500 cursor-pointer select-none ", className)}>
      <img src={theme.image} alt={theme.name} width={500} height={500}
      className="w-full h-32 object-cover rounded-lg border shadow" />
      <h2 className="text-xl font-bold mt-4 overflow-ellipsis text-start">{theme.name.substring(0, maxNameLen).trim() + (theme.name.length > maxNameLen ? "..." : "")}</h2>
      <div className="flex mt-2">
        {theme.homepage && (
          <>
            <a href={theme.homepage} className="text-blue-500 text-md" target="_blank" rel="noopener noreferrer">
              Homepage
            </a>
            <span className="text-muted-foreground text-md mx-2">
              {"·"}
            </span>
          </>
        )}
        <a href={getThemeAuthorLink(theme)} className="text-blue-500 text-md" target="_blank" rel="noopener noreferrer">
          Author
        </a>
      </div>
      <p className="text-md mt-2 overflow-ellipsis text-muted-foreground text-start">
        {theme.description.substring(0, maxDescLen).trim() +
          (theme.description.length > maxDescLen ? "..." : "")}
      </p>
    </ThemeCardWrapper>
  );
}
