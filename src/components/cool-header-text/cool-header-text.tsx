import s from "./styles.module.css";

export default function CoolHeaderText() {
	return (
		<>
			<div className="relative mb-3 mt-5 -translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
				<h1 className={s.title}>Stay focused, browse faster with Zen</h1>
			</div>
			<div className="pointer-events-none absolute right-20 top-[-5px] mt-12 hidden h-fit w-fit !rotate-[15deg] transform animate-fade-in rounded-full border-2 bg-surface px-3 py-1 opacity-0 shadow [--animation-delay:400ms] md:block">
				Alpha Version
			</div>
		</>
	);
}
