'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ThemePage({ params }: { params: { theme: string } }) {
    const router = useRouter();
    const { theme } = params;

    useEffect(() => {
        if (theme) {
            router.replace(`/mods/${theme}`);
        }
    }, [theme, router]);

    return null;
}
