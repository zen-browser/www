import {
	FieldDescription,
	FieldTitle,
	FormField,
} from "@/components/download/form";
import { Platforms } from "@/components/download/types";
import { ny } from "@/lib/utils";

interface WindowsInstallerProps {
	flowIndex: number;
	platform: Platforms | null;
	selectedArchitecture: string;
    setSelectedWindowsDownloadType: (value: string) => void;
    selectedWindowsDownloadType: string;
}

export const WindowsInstaller = ({
	flowIndex,
	platform,
	selectedArchitecture,
    setSelectedWindowsDownloadType,
    selectedWindowsDownloadType,
}: WindowsInstallerProps) => {
	return (
		<FormField
			enter={platform === "Windows" && flowIndex === 2}
			out={platform !== "Windows" && flowIndex >= 2}
		>
			<FieldTitle className="text-2xl">
				Download Zen for Windows {selectedArchitecture}
			</FieldTitle>
			<FieldDescription>
				Choose the type of download you want for Zen for Windows.
			</FieldDescription>
			<div className="flex items-stretch justify-center">
				<div
					onClick={() => setSelectedWindowsDownloadType("installer")}
					className={ny(
						"mb-2 flex flex-1 cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
						selectedWindowsDownloadType === "installer"
							? "border-blue-400"
							: "",
					)}
				>
					<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">🚀</h1>
					<h1 className="my-2 text-2xl font-semibold">Installer</h1>
					<p className="mx-auto text-center text-muted-foreground">
						Install Zen with a setup wizard
					</p>
				</div>
				<div
					onClick={() => setSelectedWindowsDownloadType("portable")}
					className={ny(
						"mb-2 ml-10 flex flex-1 cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
						selectedWindowsDownloadType === "portable" ? "border-blue-400" : "",
					)}
				>
					<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">📦</h1>
					<h1 className="my-2 text-2xl font-semibold">Portable</h1>
					<p className="mx-auto text-center text-muted-foreground">
						Download Zen as a ZIP file
					</p>
				</div>
			</div>
		</FormField>
	);
};
