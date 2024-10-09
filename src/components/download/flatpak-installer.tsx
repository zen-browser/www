import { CopyButton } from "@/components/ui/copy-button";
import { InfoIcon } from "lucide-react";

export const FlatPakInstaller = () => {
	const linuxFlatpakScript =
		"flatpak install flathub io.github.zen_browser.zen";

	return (
		<div className="mt-10 rounded-md border bg-surface p-5 shadow">
			<div className="flex">
				<InfoIcon className="mt-1 size-4" />
				<p className="ml-3 font-bold">
					The Flatpak version is not optimized. For optimized versions, please
					select other formats.
				</p>
			</div>
			<p className="mt-2 text-muted-foreground">
				If you're using Flatpak, you can install Zen Browser with the following
				command
			</p>
			<pre className="mt-2 flex items-center justify-between rounded-md bg-background p-2 text-muted-foreground">
				{linuxFlatpakScript}
				<CopyButton valueToCopy={linuxFlatpakScript} />
			</pre>
		</div>
	);
};
