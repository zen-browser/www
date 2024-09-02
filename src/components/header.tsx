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
				className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 text-center md:px-8"
			>
				<Link href="/download">
					<AnimatedGradientText>
						🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
						<span
							className={ny(
								`animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
							)}
						>
							Introducing Zen Alpha
						</span>
						<ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
					</AnimatedGradientText>
				</Link>
				<h1 className="-translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
					Zen is the best way
					<br className="hidden md:block" /> to browse the web.
				</h1>
				<p className="mb-12 -translate-y-4 animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
					Beautifully designed, privacy-focused, and packed with features.
					<br className="hidden md:block" /> We care about your experience, not
					your data.
				</p>
				<div className="flex w-full flex-col justify-center md:flex-row">
					<Link href="/download">
						<Button className="-translate-y-4 animate-fade-in gap-1 text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black">
							<span>Download Zen Now </span>
							<ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
						</Button>
					</Link>
					<Link
						href="#features"
						className="-translate-y-4 animate-fade-up opacity-0 [--animation-delay:800ms]"
					>
						<Button variant="ghost" className="mt-4 md:ml-4 md:mt-0">
							Start Exploring <ChevronDown className="ml-1 size-4" />
						</Button>
					</Link>
				</div>
			</section>
		</>
	);
}
