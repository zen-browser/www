"use client";

import Image from "next/image";

const inDev = process.env.NODE_ENV === "development";
function imageLoader({ src }: { src: string }) {
	// Load locally if we are in development
	if (inDev) {
		return src.replace(/^www\/public/, "");
	}
	return src.replace(/^www\/public/, "");
}

export default function CachedImage({ ...props }: any) {
	return <Image {...props} loader={imageLoader} />;
}
