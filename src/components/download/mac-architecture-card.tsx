import { Architecture } from "@/components/download/types";
import { ny } from "@/lib/utils";

interface MacArchitectureCardProps {
	selected: boolean;
	onClick: (architecture: Architecture) => void;
	architecture: Architecture;
}

const MAC_ARCHITECTURE_DATA: Record<
	Architecture,
	{ label: string; icon: string; description: string }
> = {
	generic: {
		label: "Intel",
		icon: "x64",
		description: "64-bit Intel architecture, for older Macs",
	},
	specific: {
		label: "AArch64",
		icon: "🍏",
		description: "64-bit ARM architecture, for Apple's M Series Chips",
	},
};

export const MacArchitectureCard = ({
	architecture,
	onClick,
	selected,
}: MacArchitectureCardProps) => {
	const handleArchitectureChange = () => {
		onClick(architecture);
	};

	const label = MAC_ARCHITECTURE_DATA[architecture].label;
	const icon = MAC_ARCHITECTURE_DATA[architecture].icon;
	const description = MAC_ARCHITECTURE_DATA[architecture].description;

	return (
		<div
			onClick={handleArchitectureChange}
			className={ny(
				"flex h-64 w-full cursor-pointer select-none flex-col items-center justify-center rounded-lg border bg-background p-5",
				selected ? "border-blue-400" : "",
			)}
		>
			<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">{icon}</h1>
			<h1 className="my-2 text-2xl font-semibold">{label}</h1>
			<p className="mx-auto text-center text-muted-foreground">
				{description}
			</p>
		</div>
	);
};
