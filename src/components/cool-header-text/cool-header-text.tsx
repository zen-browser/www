import { LockKeyholeIcon, Paintbrush2Icon, RabbitIcon } from "lucide-react";
import WordRotate from "../ui/word-rotate";

export default function CoolHeaderText() {
	return (
		<>
			<div className="my-5">
				<h1 className="text-6xl font-bold text-muted-foreground duration-200">
					The browser
					<br className="hidden md:block" /> made for your
					<span
						style={{ transform: "translateY(5px)" }}
						className="ml-5 inline-block w-24"
					>
						<span className="hidden bg-blue-100 bg-green-100 bg-purple-100 dark:border-2 dark:border-blue-700 dark:border-green-700 dark:border-purple-700 dark:bg-transparent">
							{/* Forwards the color to the WordRotate component */}
						</span>
						<WordRotate
							className="w-full text-base"
							words={["privacy", "experience", "speed"]}
							duration={2000}
							colors={["purple", "green", "blue"]}
							icons={[
								<LockKeyholeIcon key="ic1" className="mr-2 h-5 w-5" />,
								<Paintbrush2Icon key="ic2" className="mr-2 h-5 w-5" />,
								<RabbitIcon key="ic3" className="mr-2 h-5 w-5" />,
							]}
						/>
					</span>
				</h1>
			</div>
			<div className="pointer-events-none absolute right-[-125px] top-[-140px] mt-12 hidden h-fit w-fit !rotate-[15deg] transform animate-fade-in rounded-full border-2 bg-surface px-3 py-1 opacity-0 shadow [--animation-delay:400ms] md:block">
				Alpha Version
			</div>
		</>
	);
}
