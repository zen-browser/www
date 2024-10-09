"use client";

import { ArchitectureCard } from "@/components/download/architecture-card";
import {
	FieldDescription,
	FieldTitle,
	FormField,
} from "@/components/download/form";
import { MacArchitectureCard } from "@/components/download/mac-architecture-card";
import { Platforms } from "@/components/download/types";

interface ArchitectureSelectProps {
	platform: Platforms | null | "";
	flowIndex: number;
	selectedArchitecture: string;
	setSelectedArchitecture: (value: string) => void;
}

export const ArchitectureSelect = ({
	flowIndex,
	platform,
	selectedArchitecture,
	setSelectedArchitecture,
}: ArchitectureSelectProps) => {
	return (
		<>
			{(platform === "Windows" || platform === "Linux") && flowIndex === 1 && (
				<FormField
					enter={
						platform === "Windows" || (platform === "Linux" && flowIndex === 1)
					}
					out={platform !== "Windows" && platform !== "Linux" && flowIndex >= 1}
				>
					<FieldTitle>Select Architecture</FieldTitle>
					<FieldDescription>
						Choose the architecture of your device, either optimized or generic.
					</FieldDescription>
					<div className="flex items-stretch justify-center gap-4">
						<ArchitectureCard
							architecture="specific"
							selected={selectedArchitecture === "specific"}
							onClick={setSelectedArchitecture}
						/>
						<ArchitectureCard
							architecture="generic"
							selected={selectedArchitecture === "generic"}
							onClick={setSelectedArchitecture}
						/>
					</div>
				</FormField>
			)}
			{platform === "MacOS" && flowIndex === 1 && (
				<FormField enter={platform === "MacOS"} out={platform !== "MacOS"}>
					<FieldTitle>Download Zen for MacOS</FieldTitle>
					<FieldDescription>
						Click the button below to download Zen for MacOS.
					</FieldDescription>
					<div className="flex items-center justify-center gap-4">
						<MacArchitectureCard
							architecture="specific"
							onClick={setSelectedArchitecture}
							selected={selectedArchitecture === "specific"}
						/>
						<MacArchitectureCard
							architecture="generic"
							onClick={setSelectedArchitecture}
							selected={selectedArchitecture === "generic"}
						/>
					</div>
				</FormField>
			)}
		</>
	);
};
