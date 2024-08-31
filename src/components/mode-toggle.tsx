"use client";

import {useEffect, useState} from "react";
import { MoonIcon, SunIcon, GlobeIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    switch (theme) {
      case 'system':
        setTheme("dark");
        break;
      case 'dark':
        setTheme("light");
        break;
      case 'light':
        setTheme('system');
        break;
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  console.log(theme);
  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <GlobeIcon className={`${ (theme === 'system') ? 'visible' : 'hidden'} h-[1.2rem] w-[1.2rem]`} />
      <SunIcon className={`${ (theme === 'light') ? 'visible' : 'hidden'} h-[1.2rem] w-[1.2rem]`} />
      <MoonIcon className={`${ (theme === 'dark') ? 'visible' : 'hidden'} h-[1.2rem] w-[1.2rem]`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
