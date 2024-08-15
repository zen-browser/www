import { ZenTheme } from "@/lib/themes";
import { Button } from "./ui/button";

export default function ThemePage({ theme }: { theme: ZenTheme }) {
  return (
    <div className="mt-56 flex mx-auto items-start">
      <div className="flex flex-col w-md border-r pr-5 mr-5">
        <h1 className="text-2xl font-bold">{theme.name}</h1>
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
          className="mt-4"
        >Install Theme</Button>
      </div>
    </div>
  );
}
