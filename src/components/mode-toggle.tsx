"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export function ModeToggle() {
	const { setTheme, resolvedTheme } = useTheme();

	const toggleTheme = () => {
		const newTheme = resolvedTheme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	return (
		<Button variant="ghost" size="icon" onClick={toggleTheme}>
			<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	);
}
