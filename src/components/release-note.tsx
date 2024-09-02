import { ReleaseNote } from "@/lib/release-notes";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CheckCheckIcon, StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
export default function ReleaseNoteElement({ data }: { data: ReleaseNote }) {
	return (
		<div className="mb-24 mt-52 flex flex-col">
			<div className="mx-auto w-full px-10 md:px-0 lg:w-2/3">
				<h1 className="text-4xl font-bold">
					Release notes for {data.version} 🎉
				</h1>
				<p className="mt-1 text-sm font-bold text-muted-foreground">
					{data.date}
				</p>
				<p className="text-md mt-4 text-muted-foreground">
					If you encounter any issues, please report them on{" "}
					<Link
						href="https://github.com/zen-browser/desktop/issues/"
						className="text-underline text-blue-500"
					>
						the issues page
					</Link>
					. Thanks everyone for your feedback! ❤️
				</p>
				{data.extra && (
					<p
						className="text-md mt-8"
						dangerouslySetInnerHTML={{
							__html: data.extra.replace(/(\n)/g, "<br />"),
						}}
					></p>
				)}
				{data.breakingChanges && (
					<>
						<h2 className="mt-8 flex items-center text-2xl font-bold">
							<ExclamationTriangleIcon className="mr-4 h-6 w-6" />
							Breaking changes
						</h2>
						<p className="text-md mt-4">
							The following changes may break existing functionality:
						</p>
						<ul className="mt-2 list-inside list-disc">
							{data.breakingChanges?.map((change, index) => (
								<li key={index} className="mt-1 text-muted-foreground">
									{change}
								</li>
							))}
						</ul>
					</>
				)}
				{data.features && (
					<>
						<h2 className="mt-8 flex items-center text-2xl font-bold">
							<StarIcon className="mr-4 h-6 w-6" />
							Features
						</h2>
						<p className="text-md mt-2">
							The following features have been added:
						</p>
						<ul className="mt-4 list-inside list-disc">
							{data.features?.map((feature, index) => (
								<li key={index} className="text-md mt-1 text-muted-foreground">
									{feature}
								</li>
							))}
						</ul>
					</>
				)}
				{data.fixes && (
					<>
						<h2 className="mt-8 flex items-center text-2xl font-bold">
							<CheckCheckIcon className="mr-4 h-6 w-6" />
							Fixes
						</h2>
						<p className="text-md mt-2">
							The following issues have been fixed:
						</p>
						<ul className="mt-2 list-inside list-disc">
							{data.fixes?.map((fix, index) => (
								<li key={index} className="mt-1 text-muted-foreground">
									{fix.description}
									{fix.issue && (
										<Link
											href={`https://github.com/zen-browser/desktop/issues/${fix.issue}`}
											target="_blank"
											className="ml-1 text-blue-500"
										>
											issue #{fix.issue}
										</Link>
									)}
								</li>
							))}
						</ul>
					</>
				)}
			</div>
			<div className="flex flex-wrap items-center justify-center">
				<Link href="/download">
					<Button className="mx-auto mt-12 w-fit">Download Zen now!</Button>
				</Link>
			</div>
		</div>
	);
}
