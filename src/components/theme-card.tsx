import Image from "next/image";
import { getThemeAuthorLink, ZenTheme } from "@/lib/themes";
import styled from "styled-components";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";import { Button } from "./ui/button";

const ThemeCardWrapepr = styled.div`
`;

export default function ThemeCard({
  theme
}: {
  theme: ZenTheme;
}) {
  return (
    <ThemeCardWrapepr onClick={(event) => {
      if (event.target instanceof HTMLAnchorElement) return;
      window.open(`/themes/${theme.id}`, "_self");
    }} className="flex flex-col justify-start p-5 rounded-lg shadow-sm bg-muted dark:bg-muted/50 border border-grey-900 dark:border-muted w-full hover:shadow-lg transition duration-300 ease-in-out hover:bg-muted/100 hover:border-blue-500 cursor-pointer select-none ">
      <Image src={theme.image} alt={theme.name} width={500} height={500} quality={100}
      className="w-full h-32 object-cover rounded-lg border shadow" />
      <h2 className="text-xl font-bold mt-4 overflow-ellipsis text-start">{theme.name}</h2>
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
      <p className="text-md mt-2 overflow-ellipsis text-muted-foreground text-start">{theme.description}</p>
    </ThemeCardWrapepr>
  );
}
