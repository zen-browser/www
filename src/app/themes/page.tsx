"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ThemesPage() {
	const router = useRouter();

	useEffect(() => {
		router.replace("/mods");
	}, [router]);

	return null;
}
