"use client";

import { ny } from "@/lib/utils";
import { Button } from "./ui/button";
import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "./ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export const COLORS = [
  "#ffaa40",
  "#9c40ff",
  "#ff40aa",
  "#40ffaa",
  "#40aaff",
];

const ThemeFormWrapper = styled.div<{ 
  primaryColor: string, 
  accentColor: string, 
  secondaryColor: string,
  tertiaryColor: string,
  colorsBorder: string,
  dialogBg: string,
}>`
  ${({
    primaryColor,
    accentColor,
    secondaryColor,
    tertiaryColor,
    colorsBorder,
    dialogBg,
  }: {
    primaryColor: string;
    accentColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    colorsBorder: string;
    dialogBg: string;
  }) => `
    --zen-primary-color: ${accentColor};

    --zen-colors-primary: ${primaryColor};
    --zen-colors-secondary: ${secondaryColor};
    --zen-colors-tertiary: ${tertiaryColor};

    --zen-colors-border: ${colorsBorder};
    --zen-dialog-background: ${dialogBg};
  `}
`;

const defaultStyles = {
  primaryColor: {
    light: "color-mix(in srgb, var(--zen-primary-color) 50%, black 50%)",
    dark: "color-mix(in srgb, var(--zen-primary-color) 50%, black 50%)",
  },
  secondaryColor: {
    light: "color-mix(in srgb, var(--zen-primary-color) 40%, white 60%)",
    dark: "color-mix(in srgb, var(--zen-primary-color) 40%, black 60%)",
  },
  tertiaryColor: {
    light: "color-mix(in srgb, var(--zen-primary-color) 7%, white 93%)",
    dark: "color-mix(in srgb, var(--zen-primary-color) 15%, black 85%)",
  },
  colorsBorder: {
    light: "color-mix(in srgb, var(--zen-colors-secondary) 90%, black 10%)",
    dark: "color-mix(in srgb, var(--zen-colors-secondary) 80%, black 20%)",
  },
  dialogBg: {
    light: "var(--zen-colors-tertiary)",
    dark: "color-mix(in srgb, var(--zen-primary-color) 10%, black 90%)",
  },
}

export default function CreateThemePage() {
  const [selectedColor, setSelectedColor] = React.useState(COLORS[0]);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const [primaryColor, setPrimaryColor] = React.useState(defaultStyles.primaryColor.dark);
  const [secondaryColor, setSecondaryColor] = React.useState(defaultStyles.secondaryColor.dark);
  const [tertiaryColor, setTertiaryColor] = React.useState(defaultStyles.tertiaryColor.dark);
  const [colorsBorder, setColorsBorder] = React.useState(defaultStyles.colorsBorder.dark);
  const [dialogBg, setDialogBg] = React.useState(defaultStyles.dialogBg.dark);

  React.useEffect(() => {
    setPrimaryColor(isDarkMode ? defaultStyles.primaryColor.dark : defaultStyles.primaryColor.light);
    setSecondaryColor(isDarkMode ? defaultStyles.secondaryColor.dark : defaultStyles.secondaryColor.light);
    setTertiaryColor(isDarkMode ? defaultStyles.tertiaryColor.dark : defaultStyles.tertiaryColor.light);
    setColorsBorder(isDarkMode ? defaultStyles.colorsBorder.dark : defaultStyles.colorsBorder.light);
    setDialogBg(isDarkMode ? defaultStyles.dialogBg.dark : defaultStyles.dialogBg.light);
  }, [isDarkMode]);

  const generateThemeData = () => {
    let theme: any = {
      isDarkMode,
    };
    // Dont add the default values
    if (primaryColor !== (isDarkMode ? defaultStyles.primaryColor.dark : defaultStyles.primaryColor.light)) {
      theme["primaryColor"] = primaryColor;
    }
    if (secondaryColor !== (isDarkMode ? defaultStyles.secondaryColor.dark : defaultStyles.secondaryColor.light)) {
      theme["secondaryColor"] = secondaryColor;
    }
    if (tertiaryColor !== (isDarkMode ? defaultStyles.tertiaryColor.dark : defaultStyles.tertiaryColor.light)) {
      theme["tertiaryColor"] = tertiaryColor;
    }
    if (colorsBorder !== (isDarkMode ? defaultStyles.colorsBorder.dark : defaultStyles.colorsBorder.light)) {
      theme["colorsBorder"] = colorsBorder
    }
    if (dialogBg !== (isDarkMode ? defaultStyles.dialogBg.dark : defaultStyles.dialogBg.light)) {
      theme["dialogBg"] = dialogBg
    }
    if (COLORS.indexOf(selectedColor) !== 0) {
      theme["accentColor"] = selectedColor;
    }
    return JSON.stringify(theme, null, 4);
  }

  return (
    <ThemeFormWrapper 
      primaryColor={primaryColor}
      accentColor={selectedColor}
      secondaryColor={secondaryColor}
      tertiaryColor={tertiaryColor}
      colorsBorder={colorsBorder}
      dialogBg={dialogBg}
      className="flex flex-col mt-32 items-center justify-center w-full min-h-screen">
      <div className="w-full lg:w-1/2 xl:w-1/2 mx-auto px-2 lg:px-none">
        <h1 className="text-4xl lg:text-7xl font-bold">Create your theme</h1>
        <p className="text-lg opacity-40 mt-2">Create your own theme for Zen Browser and share it with the community.</p>
        <div className="text-xs text-muted-foreground mt-8">
            If the color is chosen from the palette, the accent color will be set to the user's selection in the preferences. However, if the color is chosen from the color picker, the accent color will be the color selected.
          </div>
        <div className="flex items-center mt-2">
          {COLORS.map((color) => (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              className={ny(`w-6 h-6 mx-2 cursor-pointer rounded-md shadow-sm text-white`, selectedColor === color ? "ring-2 ring-black dark:ring-white" : "")}
              style={{ backgroundColor: color }}
            ></div>
          ))}
          <div className="mx-4">
            or
          </div>
          <input type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="w-9 h-7 rounded cursor-pointer outline-none" />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full">
            <div className="flex items-center mt-10 select-none">
              <input type="checkbox" className="mr-2" checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)} id="dark-mode" />
              <label htmlFor="dark-mode" className="text-md font-bold opacity-60">Dark mode</label>
            </div>
            <h2 className="text-lg mt-8 font-bold opacity-70">
              Primary color
            </h2>
            <div className="flex items-center mt-2">
              <input type="text" className="border text-gray-500 rounded-lg p-2 w-2/3" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
              <div className="w-11 h-11 ml-4 rounded-lg border bg-[var(--zen-colors-primary)]"></div>
            </div>
            <h2 className="text-lg mt-8 font-bold opacity-70">
              Secondary color
            </h2>
            <div className="flex items-center mt-2">
              <input type="text" className="border text-gray-500 rounded-lg p-2 w-2/3" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} />
              <div className="w-11 h-11 ml-4 rounded-lg border bg-[var(--zen-colors-secondary)]"></div>
            </div>
            <h2 className="text-lg mt-8 font-bold opacity-70">
              Tertiary color
            </h2>
            <div className="flex items-center mt-2">
              <input type="text" className="border text-gray-500 rounded-lg p-2 w-2/3" value={tertiaryColor} onChange={(e) => setTertiaryColor(e.target.value)} />
              <div className="w-11 h-11 ml-4 rounded-lg border bg-[var(--zen-colors-tertiary)]"></div>
            </div>
            <h2 className="text-lg mt-8 font-bold opacity-70">
              Border color
            </h2>
            <div className="flex items-center mt-2">
              <input type="text" className="border text-gray-500 rounded-lg p-2 w-2/3" value={colorsBorder} onChange={(e) => setColorsBorder(e.target.value)} />
              <div className="w-11 h-11 ml-4 rounded-lg border bg-[var(--zen-colors-border)]"></div>
            </div>
            <h2 className="text-lg mt-8 font-bold opacity-70">
              Dialog background color
            </h2>
            <div className="flex items-center mt-2">
              <input type="text" className="border text-gray-500 rounded-lg p-2 w-2/3" value={dialogBg} onChange={(e) => setDialogBg(e.target.value)} />
              <div className="w-11 h-11 ml-4 rounded-lg border bg-[var(--zen-dialog-background)]"></div>
            </div>
            <div className="text-md font-bold text-muted-foreground mt-8">
              Right now, we aren't taking more color themes for the browser, until we find a way to make it more accessible for everyone. However, you can still create your own theme and share it with the community.
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button disabled className="mt-8">Create theme</Button>
              </SheetTrigger>
              <SheetContent className="!w-[600px] !max-w-lg">
                <SheetHeader>
                  <SheetTitle>Theme data</SheetTitle>
                  <SheetDescription>
                    Copy the following JSON object and paste it into your Zen Browser theme format.
                  </SheetDescription>
                </SheetHeader>
                <pre className="text-sm mt-6 text-wrap font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">{generateThemeData()}</pre>
                <SheetFooter className="mt-4">
                  <Button onClick={() => 
                    navigator.clipboard.writeText(generateThemeData())
                  } variant="ghost">
                    Copy to clipboard
                  </Button>
                  <Button onClick={() => {
                    window.open("https://github.com/zen-browser/theme-store/issues/new?assignees=&labels=new-theme&projects=&template=create-theme.yml&title=%5Bcreate-theme%5D%3A+", "_blank");
                  }} >
                    Submit theme
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          {/* Preview */}
          <div className="p-4 pr-0 pb-0 rounded-xl border-2 relative overflow-hidden w-72 h-48 border-[var(--zen-colors-border)] bg-[var(--zen-colors-tertiary)]">
            <div className="border-2 flex items-center justify-center border-[var(--zen-colors-border)] h-full w-full bg-[var(--zen-dialog-background)] rounded-tl-xl p-4 border-b-0 border-r-0">
              <Button className={ny("bg-[var(--zen-colors-secondary)]", isDarkMode ? "text-white" : "text-black")}>Button</Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeFormWrapper>
  );
}
