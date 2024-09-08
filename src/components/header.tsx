"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { Button } from "./ui/button";
import { BorderBeam } from "./ui/border-beam";
import { ny } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import Particles from "./ui/particles";
import Image from "next/legacy/image";
import Link from "next/link";
export default function Header() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <>
      <section
        id="hero"
        className="relative mx-auto min-h-screen flex justify-center flex-col max-w-7xl px-6 text-center md:px-8"
      >
        <a href="/download">
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
            <span
              className={ny(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Introducing Zen Alpha
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </a>
        <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
          Zen is the best way
          <br className="hidden md:block" /> to browse the web.
        </h1>
        <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
          Beautifully designed, privacy-focused, and packed with features.
          <br className="hidden md:block" /> We care about your experience, not
          your data.
        </p>
        <div className="flex flex-col md:flex-row justify-center w-full">
          <a href="/download">
          <Button
            className="animate-fade-in -translate-y-4 gap-1 text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black"
          >
            <span>Download Zen Now </span>
            <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
          </a>
          <a href="#features" className="animate-fade-up -translate-y-4 opacity-0 [--animation-delay:800ms]">
            <Button variant="ghost" className="mt-4 md:mt-0 md:ml-4">
              Start Exploring <ChevronDown className="ml-1 size-4" />
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
