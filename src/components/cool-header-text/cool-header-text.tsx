import { LockKeyholeIcon, Paintbrush2Icon, RabbitIcon } from "lucide-react";
import WordRotate from "../ui/word-rotate";

export default function CoolHeaderText() {
	return (
		<>
			<div className="my-5">
				<h1 className="text-6xl font-bold text-muted-foreground duration-200">
					The browser<br className="hidden md:block"/> made for your 
					<span style={{ transform: "translateY(5px)" }} className="inline-block ml-5 w-24">
						<span className="bg-purple-100 bg-green-100 bg-blue-100 dark:border-2 dark:bg-transparent dark:border-purple-700 dark:border-green-700 dark:border-blue-700 hidden">{/* Forwards the color to the WordRotate component */}</span>
						<WordRotate className="text-base w-full" words={["privacy", "experience", "speed"]} duration={2000} colors={["purple", "green", "blue"]} 
							icons={[<LockKeyholeIcon key="ic1" className="w-5 h-5 mr-2" />, <Paintbrush2Icon key="ic2" className="w-5 h-5 mr-2" />, <RabbitIcon key="ic3" className="w-5 h-5 mr-2" />]} />
					</span>
				</h1>
			</div>
			<div className="pointer-events-none absolute right-[-125px] top-[-140px] mt-12 hidden h-fit w-fit !rotate-[15deg] transform animate-fade-in rounded-full border-2 bg-surface px-3 py-1 opacity-0 shadow [--animation-delay:400ms] md:block">
				Alpha Version
			</div>
		</>
	);
}
