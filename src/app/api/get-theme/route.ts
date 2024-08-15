
import { getThemeFromId } from "@/lib/themes";
import { NextApiRequest, NextApiResponse } from "next";

function getQSParamFromURL(
  key: string,
  url: string | undefined
): string | null {
  if (!url) return "";
  const search = new URL(url).search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get(key);
}

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  const id = getQSParamFromURL("id", request.url);
  if (!id) {
    return Response.json({ error: "id is required" });
  }
  const theme = getThemeFromId(id);
  if (!theme) {
    return Response.json({ error: "theme not found" });
  }
  return Response.json( theme );
}