"use client";

import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Navigation } from "@/components/navigation";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden">
			<Header />
			<Features />
		</main>
	);
}
