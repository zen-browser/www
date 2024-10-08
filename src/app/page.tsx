"use client";

import Features from "@/components/features";
import Header from "@/components/header";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden">
			<Header />
			<Features />
		</main>
	);
}
