import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { theme: string } }) {
    const { theme } = params;

    // Construct an absolute URL
    const url = new URL(`/mods/${theme}`, request.url);

    // Return a 301 permanent redirect
    return NextResponse.redirect(url.toString(), 301);
}
