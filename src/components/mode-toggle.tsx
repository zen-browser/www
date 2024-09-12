"use client";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();
	const [currentTheme, setCurrentTheme] = useState<string | undefined>(theme);

	useEffect(() => {
		setCurrentTheme(theme);
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = currentTheme === "light" ? "dark" : "light";
		setTheme(newTheme);
		setCurrentTheme(newTheme);
	};

	// prevent hydration error
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<Button variant="ghost" size="icon" onClick={toggleTheme}>
			{currentTheme === "light" ? (
				<SunIcon className="h-[1.2rem] w-[1.2rem]" />
			) : (
				<MoonIcon className="h-[1.2rem] w-[1.2rem]" />
			)}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
