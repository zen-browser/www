"use client";
import React from "react";
import ThemesSearch from "./themes-search";
import { getAllThemes, getThemesFromSearch, ZenTheme } from "@/lib/themes";
import ThemeCard from "./theme-card";

export default function MarketplacePage() {
  const [searchInput, setSearchInput] = React.useState("");
  const [themes, setThemes] = React.useState<ZenTheme[]>([]);

  React.useEffect(() => {
    getAllThemes().then(setThemes);
  }, []);

  return (
    <div className="flex flex-col w-full p-5 lg:w-1/2 lg:p-0 items-center justify-center h-full mt-36">
      <div className="mx-auto w-full text-center">
        <h1 className="text-7xl font-bold">Themes Marketplace</h1>
        <ThemesSearch input={searchInput} setInput={setSearchInput} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full">
        {getThemesFromSearch(themes, searchInput).map((theme) => (
          <ThemeCard key={theme.name} theme={theme} />
        ))}
      </div>
    </div>
  );
}
