'use client';

import { Architecture } from "@/components/download/types";
import { ny } from "@/lib/utils";

interface ArchitectureCardProps {
	selected: boolean;
	onClick: (architecture: Architecture) => void;
	architecture: Architecture;
}

const ARCHITECTURE_DATA: Record<
	Architecture,
	{ label: string; icon: string; description: string }
> = {
	generic: {
		label: "Generic",
		icon: "👴",
		description: "Slow but compatible with older devices",
	},
	specific: {
		label: "Optimized",
		icon: "🚀",
		description: "Blazing fast and compatible with modern devices",
	},
};

export const ArchitectureCard = ({
	architecture,
	selected,
	onClick,
}: ArchitectureCardProps) => {
	const handleArchitectureChange = () => {
		onClick(architecture);
	};

	const label = ARCHITECTURE_DATA[architecture].label;
	const icon = ARCHITECTURE_DATA[architecture].icon;
	const description = ARCHITECTURE_DATA[architecture].description;

	return (
		<div
			onClick={handleArchitectureChange}
			className={ny(
				"mb-2 flex flex-1 cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
				selected ? "border-blue-400" : "",
			)}
		>
			<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">{icon}</h1>
			<h1 className="my-2 text-2xl font-semibold">{label}</h1>
			<p className="mx-auto text-center text-muted-foreground">{description}</p>
		</div>
	);
};
