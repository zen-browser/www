"use client";

import { ny } from "@/lib/utils";
import CachedImage from "./CachedImage";
import { Slider } from "./ui/slider";
import React from "react";

export default function BrowserComplexityExample() {
	const [selectedImage, setSelectedImage] = React.useState([1]);
	return (
		<div className="mx-auto mb-32 flex h-screen w-full flex-col items-center md:w-5/6 lg:w-3/4 xl:mb-64">
			<h2 className="text-center text-4xl font-bold md:text-5xl">
				How much browser do you want?
			</h2>
			<p className="text-md mx-auto mt-4 w-2/3 text-center text-muted-foreground">
				Zen is designed to be simple and easy to use. We believe that the best
				software is the one that you don't notice. However, we can assure you
				that if you want customization, we have you covered
			</p>
			<div className="mb-6 mt-12 flex w-64 gap-4">
				<span className="opacity-90">🌱</span>
				<Slider
					step={1}
					max={3}
					showSteps="half"
					value={selectedImage}
					onValueChange={setSelectedImage}
				/>
				<span className="opacity-90">🌳</span>
			</div>
			<div className="mx-auto flex justify-center md:mb-36">
				{[...Array(4)].map((_, i) => (
					<CachedImage
						width={1620}
						height={900}
						loading="lazy"
						key={i}
						src={`www/public/browsers/image${i + 1}.png`}
						alt="Zen Browser"
						className={ny(
							"mx-12 w-full rounded-md object-cover object-right shadow",
							selectedImage[0] === i
								? "" //"animate-fade-up duration-500 !opacity-100"
								: "hidden",
						)}
					/>
				))}
			</div>
		</div>
	);
}
