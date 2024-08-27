import { getAllThemes, getThemeFromId } from '@/lib/themes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

// Static NextJS API route. We will have /get-theme?id=theme-id static route
export async function generateStaticParams() {
  const themes = await getAllThemes();
  return themes.map((theme) => ({
    id: theme.id,
  }));
}

export async function GET(request: any, { params }: { params: { id: string } }) {
  const themes = await getAllThemes();
  const theme = themes.find((theme) => theme.id === params.id);
  console.log(theme);
  return NextResponse.json(theme);
}