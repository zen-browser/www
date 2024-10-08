"use client";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
		  setTheme(savedTheme);
		} else {
		  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		  setTheme(prefersDark ? "dark" : "light");
		}
	  }, [setTheme]);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	if (!mounted) {
		return null;
	}

	return (
		<Button variant="ghost" size="icon" onClick={toggleTheme}>
			{theme === "light" ? (
				<SunIcon className="h-[1.2rem] w-[1.2rem]" />
			) : (
				<MoonIcon className="h-[1.2rem] w-[1.2rem]" />
			)}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
