
export default function CoolHeaderText() {
	return (
		<>
			<div className="my-5">
				<h1 className="text-6xl font-bold text-muted-foreground duration-200">
					The browser for <i className="text-blue-500">you</i>,<br />
					not your data.
				</h1>
			</div>
			<div className="pointer-events-none absolute right-[-125px] top-[-140px] mt-12 hidden h-fit w-fit !rotate-[15deg] transform animate-fade-in rounded-full border-2 bg-surface px-3 py-1 opacity-0 shadow [--animation-delay:400ms] md:block">
				Alpha Version
			</div>
		</>
	);
}
