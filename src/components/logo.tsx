"use client";
import { LOGO_COLORS } from "@/lib/logos";
import { ny } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Logo({ withText, ...props }: any) {
  const [randomColor, setRandomColor] = React.useState(LOGO_COLORS[Math.floor(Math.random() * LOGO_COLORS.length)]);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRandomColor(LOGO_COLORS[Math.floor(Math.random() * LOGO_COLORS.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center m-0" {...props}>
      <Image src={`https://cdn.jsdelivr.net/gh/zen-browser/www/public/logos/zen-${randomColor}.svg`} width={40} height={40} alt="Zen Logo" className={ny("transition-all duration-300 hover:scale-110", withText && "mr-2")} />
      {withText && <span className="text-2xl font-bold ml-2">zen</span>}
    </div>
  );
}
