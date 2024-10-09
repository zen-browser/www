'use client';

import { ArchitectureCard } from "@/components/download/architecture-card";
import {
	FieldDescription,
	FieldTitle,
	FormField,
} from "@/components/download/form";
import { Platforms } from "@/components/download/types";
import { ny } from "@/lib/utils";

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
					<div className="flex items-center justify-center">
						<div
							onClick={() => setSelectedArchitecture("specific")}
							className={ny(
								"mb-2 flex h-64 w-full cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
								selectedArchitecture === "specific" ? "border-blue-400" : "",
							)}
						>
							<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">🍏</h1>
							<h1 className="my-2 text-2xl font-semibold">AArch64</h1>
							<p className="mx-auto text-center text-muted-foreground">
								64-bit ARM architecture, for Apple's M Series Chips
							</p>
						</div>
						<div
							onClick={() => setSelectedArchitecture("generic")}
							className={ny(
								"mb-2 ml-10 flex h-64 w-full cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
								selectedArchitecture === "generic" ? "border-blue-400" : "",
							)}
						>
							<h1 className="my-2 text-5xl font-bold opacity-40 dark:opacity-20">
								x64
							</h1>
							<h1 className="my-2 text-2xl font-semibold">Intel</h1>
							<p className="mx-auto text-center text-muted-foreground">
								64-bit Intel architecture, for older Macs
							</p>
						</div>
					</div>
				</FormField>
			)}
		</>
	);
};
