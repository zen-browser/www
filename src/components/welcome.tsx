"use client";

import { InfoCircledIcon } from "@radix-ui/react-icons";
import WordPullUp from "./ui/word-pull-up";

export default function WelcomePage() {
	return (
		<div className="relative flex min-h-screen w-full flex-col items-center justify-center">
			<WordPullUp
				className="text-center text-6xl"
				words="Welcome to Zen Browser!"
			/>
			<p className="max-w-90 mt-12 text-lg">
				A Firefox based browser with a focus on privacy and customization.
				<br />
				Start using it by clicking on the sidebar icon or trying out the split
				view feature!
			</p>
			<p className="text-md mx-auto mt-12 w-2/5 opacity-70">
				<InfoCircledIcon className="mr-4 inline-block size-5 text-yellow-500" />
				Zen Browser is still in development and may have bugs. This welcome page
				is under construction.
			</p>
		</div>
	);
}
