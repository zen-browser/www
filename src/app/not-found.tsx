import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
          Page Not Found!
        </h1>
        <a href="/"><Button
          className="flex items-center justify-center  animate-fade-in -translate-y-4 gap-1 text-white opacity-0 ease-in-out [--animation-delay:600ms] font-medium dark:text-black"
        >
          <span>Back to Home</span>
          <HomeIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </Button></a>
      </div>
    </main>
  );
}
