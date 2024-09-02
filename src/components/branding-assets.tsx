import { LOGO_COLORS } from "@/lib/logos";
import Link from "next/link";

export function BrandingAssets() {
	return (
		<div className="mx-auto mt-36 flex h-full w-full flex-col items-center justify-center p-5 lg:w-1/2 lg:p-0">
			<div className="mx-auto w-full text-center">
				<h1 className="text-4xl font-bold lg:text-7xl">Branding Assets</h1>
				<p className="mt-2 text-muted-foreground">
					Download Zen Browser branding assets for your website or project.
				</p>
			</div>
			<div className="mt-10 flex w-full flex-col lg:w-2/3">
				<h2 className="mt-10 text-2xl font-bold">Logos</h2>
				<p className="mt-2 text-muted-foreground">
					Download the Zen Browser logo in different colors.
				</p>
				<div className="mt-10 grid w-full grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4">
					{LOGO_COLORS.map((color) => (
						<div key={color} className="flex flex-col items-center">
							<img
								src={`https://cdn.jsdelivr.net/gh/zen-browser/www/public/logos/zen-${color}.svg`}
								alt={`Zen Browser ${color} logo`}
								className="mt-4 h-24 w-24"
							/>
							<div className="my-2 flex items-center">
								<Link
									href={`/logos/zen-${color}.svg`}
									download={`zen-${color}.svg`}
									className="text-md ml-2 text-blue-500"
								>
									{color}
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="mt-10 flex w-full flex-col lg:w-2/3">
				<h2 className="mt-10 text-2xl font-bold">Empty Logos</h2>
				<p className="mt-2 text-muted-foreground">
					Download the Zen Browser logo in different colors without a filled Zen
					letter.
				</p>
				<div className="mt-10 grid w-full grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4">
					{LOGO_COLORS.map((color) => (
						<div key={color} className="flex flex-col items-center">
							<img
								src={`https://cdn.jsdelivr.net/gh/zen-browser/www/public/logos/zen-alpha-${color}.svg`}
								alt={`Zen Browser ${color} logo`}
								className="mt-4 h-24 w-24"
							/>
							<div className="my-2 flex items-center">
								<Link
									href={`/logos/zen-alpha-${color}.svg`}
									download={`zen-alpha-${color}.svg`}
									className="text-md ml-2 text-blue-500"
								>
									{color}
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="mt-10">
				<h2 className="text-2xl font-bold">License</h2>
				<p className="mt-2 text-muted-foreground">
					All branding assets are licensed under the{" "}
					<Link
						href="https://creativecommons.org/licenses/by-sa/4.0/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500"
					>
						CC BY-SA 4.0
					</Link>
					. Thanks to{" "}
					<Link href="https://www.onnno.nl/" className="text-blue-500">
						Donno (mr. Logos)
					</Link>{" "}
					for the assets.
					<br />
					These logos however shall not be modified in a way that suggests the
					licensor endorses you or your use.
					<br />
					<br />
					You are free to share and adapt the assets for any purpose, even
					commercially.
				</p>
			</div>
		</div>
	);
}
