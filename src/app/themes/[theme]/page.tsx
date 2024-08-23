"use client";
import ThemePage from "@/components/theme-page";
import { getThemeFromId } from "@/lib/themes";
import { useParams } from "next/navigation";

export default async function ThemeInfoPage() {
  const params = useParams<{ theme: string }>();
  const { theme: themeID } = params;

  const theme = await getThemeFromId(themeID);
  if (!theme) {
    return <div>Theme not found</div>;
  }

  return <ThemePage theme={theme} />;
}