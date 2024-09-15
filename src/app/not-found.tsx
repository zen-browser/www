import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";

export default function NotFoundPage() {
	return (
		<main className="grid min-h-screen place-items-center">
			<div className="flex flex-col items-center justify-center text-center">
				<h1 className="-translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
					Page Not Found!
				</h1>
				<a href="/">
					<Button className="flex -translate-y-4 animate-fade-in items-center justify-center gap-1 font-medium text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black">
						<span>Back to Home</span>
						<HomeIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
					</Button>
				</a>
			</div>
		</main>
	);
}
