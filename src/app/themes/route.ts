// app/themes/route.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
    const { origin } = request.nextUrl;
    return NextResponse.redirect(`${origin}/mods`, 301);
}

export function HEAD(request: NextRequest) {
    const { origin } = request.nextUrl;
    return NextResponse.redirect(`${origin}/mods`, 301);
}
