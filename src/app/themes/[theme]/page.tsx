import { redirect } from 'next/navigation';

export default function Page({ params }: { params: { theme: string } }) {
    const { theme } = params;
    redirect(`/mods/${theme}`);
}
