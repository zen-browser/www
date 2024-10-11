import { CopyButton } from "@/components/ui/copy-button";
import { InfoIcon } from "lucide-react";

const linuxAppimageBashScript =
	"bash <(curl https://updates.zen-browser.app/appimage.sh)";

const linuxAppimageTwilightBashScript =
	"bash <(curl https://updates.zen-browser.app/appimage.sh) twilight";

export const AppImageInstaller = ({ isTwilight }: { isTwilight: boolean }) => {
	const script = isTwilight
		? linuxAppimageTwilightBashScript
		: linuxAppimageBashScript;
	return (
		<div className="mt-10 rounded-md border bg-surface p-5 shadow">
			<div className="flex items-center">
				<InfoIcon className="size-4" />
				<p className="ml-3 font-bold">AppImage users?</p>
			</div>
			<p className="mt-2 text-muted-foreground">
				If you're using an AppImage, you can use the automatic installer, check
				it out{" "}
			</p>
			<pre className="mt-2 flex items-center justify-between rounded-md bg-background p-2 text-muted-foreground">
				{script}
				<CopyButton valueToCopy={script} />
			</pre>
		</div>
	);
};
