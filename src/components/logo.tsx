import { ny } from "@/lib/utils";
import React from "react";
import CachedImage from "./CachedImage";

export default function Logo({ withText, ...props }: any) {
	return (
		<div className="m-0 flex items-center" {...props}>
			<CachedImage
				src={`www/public/logos/zen-black.svg`}
				width={40}
				height={40}
				alt="Zen Logo"
				className={ny(
					"transition-all duration-300 hover:scale-110",
					withText && "mr-2",
				)}
			/>
			{withText && <span className="ml-2 text-2xl font-bold">zen</span>}
		</div>
	);
}
