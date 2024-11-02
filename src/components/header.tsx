import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import CoolHeaderText from "./cool-header-text/cool-header-text";
import Link from "next/link";
import HeaderMarquee from "./header-marquee";
export default function Header() {
	return (
		<>
			<section
				id="hero"
				className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-6 text-center md:mt-[-50px] md:px-8"
			>
				<div className="relative">
					<CoolHeaderText />
				</div>
				<p className="mb-16 mt-2 -translate-y-4 animate-fade-in text-balance text-base tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-base">
					Beautifully designed, privacy-focused, and packed with features. We
					care about
					<br className="hidden md:block" />
					your experience, not your data.
				</p>
				<div className="flex w-full flex-col justify-center md:flex-row">
					<Link href="/download" prefetch={false}>
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
			<HeaderMarquee />
		</>
	);
}
