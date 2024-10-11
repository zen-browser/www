import {
	FieldDescription,
	FieldTitle,
	FormField,
} from "@/components/download/form";
import { Platforms } from "@/components/download/types";
import { ny } from "@/lib/utils";

interface LinuxInstallerProps {
	flowIndex: number;
	platform: Platforms | null;
	selectedArchitecture: string;
	setSelectedLinuxDownloadType: (value: string) => void;
	selectedLinuxDownloadType: string;
	isTwilight: boolean;
	changeToFlatpak: () => void;
}

export const LinuxInstaller = ({
	flowIndex,
	platform,
	selectedArchitecture,
	setSelectedLinuxDownloadType,
	selectedLinuxDownloadType,
	isTwilight,
	changeToFlatpak,
}: LinuxInstallerProps) => {
	return (
		<FormField
			enter={platform === "Linux" && flowIndex === 2}
			out={platform !== "Linux" && flowIndex >= 2}
		>
			<FieldTitle className="text-2xl">
				Download Zen for Linux {selectedArchitecture}
			</FieldTitle>
			<FieldDescription>
				Choose the type of download you want for Zen for Linux.
			</FieldDescription>
			<div className="flex items-stretch justify-center">
				<div
					onClick={() => setSelectedLinuxDownloadType("appimage")}
					className={ny(
						"mb-2 flex flex-1 cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
						selectedLinuxDownloadType === "appimage" ? "border-blue-400" : "",
					)}
				>
					<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">🚀</h1>
					<h1 className="my-2 text-2xl font-semibold">AppImage</h1>
					<p className="mx-auto text-center text-muted-foreground">
						Install Zen with a setup wizard
					</p>
				</div>
				<div
					onClick={() => setSelectedLinuxDownloadType("portable")}
					className={ny(
						"mb-2 ml-5 flex flex-1 cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
						selectedLinuxDownloadType === "portable" ? "border-blue-400" : "",
					)}
				>
					<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">📦</h1>
					<h1 className="my-2 text-2xl font-semibold">Portable</h1>
					<p className="mx-auto text-center text-muted-foreground">
						Download Zen as a ZIP file
					</p>
				</div>
				{!isTwilight && (
					<div
						onClick={() => changeToFlatpak()}
						className={ny(
							"mb-2 ml-5 flex flex-1 cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
							selectedLinuxDownloadType === "flatpak" ? "border-blue-400" : "",
						)}
					>
						<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">🧑‍💻</h1>
						<h1 className="my-2 text-2xl font-semibold">Flatpak</h1>
						<p className="mx-auto text-center text-muted-foreground">
							Install Zen from the Flatpak repository.
						</p>
					</div>
				)}
			</div>
		</FormField>
	);
};
