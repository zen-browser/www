"use client";

import { LOGO_COLORS } from "@/lib/logos";
import { ny } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Logo({ withText, ...props }: any) {
  const [currentColorIndex, setCurrentColorIndex] = useState(
    Math.floor(Math.random() * LOGO_COLORS.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) =>
        (prevIndex + 1) % LOGO_COLORS.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center m-0" {...props}>
      {LOGO_COLORS.map((color, index) => (
        <Image
          key={color}
          src={`https://cdn.jsdelivr.net/gh/zen-browser/www/public/logos/zen-${color}.svg`}
          width={40}
          height={40}
          alt={`Zen Logo ${color}`}
          className={ny(
            "transition-all duration-300 hover:scale-110",
            withText && "mr-2",
            index === currentColorIndex ? "opacity-100" : "opacity-0 absolute"
          )}
        />
      ))}
      {withText && <span className="text-2xl font-bold ml-2">zen</span>}
    </div>
  );
}