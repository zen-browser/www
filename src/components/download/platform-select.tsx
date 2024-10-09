import {
	FieldDescription,
	FieldTitle,
	FormField,
} from "@/components/download/form";
import { PlatformCard } from "@/components/download/platform-card";
import { Platforms } from "@/components/download/types";

interface PlatformSelectProps {
	platform: Platforms | null;
	selectedPlatform: Platforms | "";
	onPlatformChange: (platform: Platforms | "") => void;
}

export const PlatformSelect = ({
	platform,
	selectedPlatform,
	onPlatformChange,
}: PlatformSelectProps) => {
	return (
		<FormField enter={platform === null} out={platform !== null}>
			<FieldTitle>Platform</FieldTitle>
			<FieldDescription>
				Choose the platform you want to download Zen for.
			</FieldDescription>
			<div className="flex">
				<PlatformCard
					onClick={onPlatformChange}
					platform="Windows"
					selected={selectedPlatform === "Windows"}
				/>

				<PlatformCard
					onClick={onPlatformChange}
					platform="Linux"
					selected={selectedPlatform === "Linux"}
				/>

				<PlatformCard
					onClick={onPlatformChange}
					platform="MacOS"
					selected={selectedPlatform === "MacOS"}
				/>
			</div>
		</FormField>
	);
};
