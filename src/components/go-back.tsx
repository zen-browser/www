"use client";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

export const GoBack = () => {
	const [link, setLink] = useState("/mods");

	useEffect(() => {
		const referrer = document.referrer;
		if (referrer) {
			try {
				const prevUrl = new URL(referrer);
				if (prevUrl.pathname === "/mods") {
					setLink(prevUrl.href);
				}
			} catch (e) {
				// ignore
			}
		}
	}, []);

	return (
		<a className="flex cursor-pointer items-center opacity-70" href={link}>
			<ChevronLeft className="mr-1 h-4 w-4" />
			<h3 className="text-md">Go back</h3>
		</a>
	);
};
