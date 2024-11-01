"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const GoBack = () => {
	let referrer = "";
	const router = useRouter();

	useEffect(() => {
		const _referrer = document.referrer;
		if (_referrer) {
			try {
				const prevUrl = new URL(_referrer);
				if (prevUrl.pathname === "/mods") {
					referrer = _referrer;
				}
			} catch (e) {
				// do nothing
			}
		}
	}, []);

	const goBack = () => {
		if (referrer) {
			router.back();
		} else {
			router.push("/mods");
		}
	}

	return (
		<a className="flex cursor-pointer items-center opacity-70" onClick={goBack} >
			<ChevronLeft className="mr-1 h-4 w-4" />
			<h3 className="text-md">Go back</h3>
		</a>
	);
};
