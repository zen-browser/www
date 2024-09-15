"use client";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ModeToggle() {
	const { setTheme } = useTheme();
	const [currentTheme, setCurrentTheme] = useState("light");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const savedTheme = localStorage.getItem("theme") || "light";
		setCurrentTheme(savedTheme);
		setTheme(savedTheme);
	}, [setTheme]);

	const toggleTheme = () => {
		const newTheme = currentTheme === "light" ? "dark" : "light";
		setCurrentTheme(newTheme);
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

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
