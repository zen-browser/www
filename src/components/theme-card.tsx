import { ZenTheme } from "@/lib/themes";
import styled from "styled-components";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

const ThemeCardWrapepr = styled.div`
`;

export default function ThemeCard({
  theme
}: {
  theme: ZenTheme;
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <ThemeCardWrapepr className="flex flex-col justify-start p-6 rounded-lg shadow-md bg-muted/50 border border-muted w-full hover:shadow-lg transition duration-300 ease-in-out hover:bg-muted/100 hover:border-blue-500 cursor-pointer select-none">
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
      </DialogTrigger>
      <DialogContent forceMount>
        <DialogHeader>
          <img src={theme.image} alt={theme.name} className="w-full h-32 object-cover rounded-md mb-10" />
          <DialogTitle>{theme.name}</DialogTitle>
          <DialogDescription>{theme.description}</DialogDescription>
          <hr className="!my-4" />
          <div className="w-full relative flex justify-end">
            <Button className="hidden install-theme" zen-theme-id={theme.id}>
              Install Theme
            </Button>
            <p className="text-muted-foreground text-sm install-theme-error">
              You need to have Zen Browser installed to use this theme. <a href="/download" className="text-blue-500">Download</a>
            </p>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
