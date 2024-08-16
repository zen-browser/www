
import { getThemeFromId } from "@/lib/themes";

function getQSParamFromURL(
  key: string,
  url: string | undefined
): string | null {
  if (!url) return "";
  const search = new URL(url).search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get(key);
}

export async function GET(request: Request, response: Response) {
  const id = getQSParamFromURL("id", request.url);
  if (!id) {
    return Response.json({ error: "id is required" });
  }
  const theme = await getThemeFromId(id);
  if (!theme) {
    return Response.json({ error: "theme not found" });
  }
  return Response.json( theme );
}