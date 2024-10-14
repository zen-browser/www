"use client";

import { Platforms } from "@/components/download/types";
import { ny } from "@/lib/utils";

interface PlatformCardProps {
	onClick: (platform: Exclude<Platforms, "Unsupported">) => void;
	platform: Exclude<Platforms, "Unsupported">;
	selected: boolean;
}

const PLATFORMS_DATA: Record<
	Exclude<Platforms, "Unsupported">,
	{ label: string; icon: string; borderColor: string }
> = {
	Windows: {
		label: "Windows",
		icon: "devicon-windows8-original",
		borderColor: "border-blue-400",
	},
	MacOS: {
		label: "MacOS",
		icon: "devicon-apple-original",
		borderColor: "border-purple-400",
	},
	Linux: {
		label: "Linux",
		icon: "devicon-linux-plain",
		borderColor: "border-yellow-400",
	},
};

export const PlatformCard = ({
	onClick,
	platform,
	selected,
}: PlatformCardProps) => {
	const handlePlatformChange = () => {
		onClick(platform);
	};

	const borderColor = PLATFORMS_DATA[platform].borderColor;
	const label = PLATFORMS_DATA[platform].label;
	const icon = PLATFORMS_DATA[platform].icon;

	return (
		<div
			onClick={handlePlatformChange}
			className={ny(
				"flex cursor-pointer select-none flex-col items-center justify-center rounded-lg border bg-background",
				selected ? borderColor : "",
			)}
			style={{
				height: "11.25rem",
				width: "18.75rem",
			}}
		>
			<i
				className={ny("rounded-lg border p-2", icon, borderColor)}
				style={{ marginBottom: "10px" }}
			></i>
			<div className="font-bold">{label}</div>
		</div>
	);
};
