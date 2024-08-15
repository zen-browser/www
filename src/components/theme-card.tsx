import { ZenTheme } from "@/lib/themes";
import styled from "styled-components";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

const ThemeCardWrapepr = styled.div`
`;

export default function ThemeCard({
  theme
}: {
  theme: ZenTheme;
}) {
  return (
    <ThemeCardWrapepr onClick={() => {
      window.open(`/themes/${theme.id}`, "_self");
    }} className="flex flex-col justify-start p-6 rounded-lg shadow-md bg-muted/50 border border-muted w-full hover:shadow-lg transition duration-300 ease-in-out hover:bg-muted/100 hover:border-blue-500 cursor-pointer select-none hover:border-blue-500 hover:shadow-lg">
      <img src={theme.image} alt={theme.name} className="w-full h-32 object-cover rounded-md" />
      <div className="flex">
        <h2 className="text-xl font-bold mt-4 overflow-ellipsis text-start">{theme.name}</h2>
        {theme.homepage && (
          <a href={theme.homepage} className="text-blue-500 text-md ml-4" target="_blank" rel="noopener noreferrer">
            Visit Homepage
          </a>
        )}
      </div>
      <p className="text-md mt-2 overflow-ellipsis text-muted-foreground text-start">{theme.description}</p>
    </ThemeCardWrapepr>
  );
}
