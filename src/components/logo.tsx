"use client";
import { LOGO_COLORS } from "@/lib/logos";
import { ny } from "@/lib/utils";
import Image from "next/legacy/image";
import React from "react";
import CachedImage from "./CachedImage";

export default function Logo({ withText, ...props }: any) {
  return (
    <div className="flex items-center m-0" {...props}>
      <CachedImage src={`www/public/logos/zen-black.svg`} width={40} height={40} alt="Zen Logo" className={ny("transition-all duration-300 hover:scale-110", withText && "mr-2")} />
      {withText && <span className="text-2xl font-bold ml-2">zen</span>}
    </div>
  );
}
