"use client";
import { ReleaseNote, releaseNotes } from "@/lib/release-notes";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { BrushIcon, CheckCheckIcon, StarIcon } from "lucide-react";
import StickyBox from "react-sticky-box";

import moment from "moment";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";
import { AccordionContent, AccordionTrigger } from "./ui/accordion";
import { ny } from "@/lib/utils";

function DateContainer({ data }: { data: ReleaseNote }) {
	const splitDate = data.date.split("/");
	return (
		<>
			{moment({
				year: parseInt(splitDate[2]),
				month: parseInt(splitDate[1]) - 1,
				day: parseInt(splitDate[0]),
			}).format("MMMM Do, YYYY")}
			<div className="mt-2 flex items-center text-blue-500 opacity-60">
				<a
					href={`https://github.com/zen-browser/desktop/releases/tag/${data.version}`}
				>
					GitHub Release
				</a>
				{data.workflowId && (
					<>
						<span className="mx-1 text-muted-foreground">•</span>
						<a
							href={`https://github.com/zen-browser/desktop/actions/runs/${data.workflowId}`}
						>
							Workflow Run
						</a>
					</>
				)}
			</div>
			{data.inProgress && (
				<div className="mt-5 flex">
					<ExclamationTriangleIcon className="mr-3 size-6 text-yellow-500 opacity-60" />
					<div>
						<p>This release is still in progress, stay tuned!</p>
						<p className="mt-2">
							Consider joining our{" "}
							<a
								href="https://discord.gg/zen-browser"
								className="text-blue-500"
							>
								Discord
							</a>{" "}
							for update pings!
						</p>
					</div>
				</div>
			)}
		</>
	);
}

const dateContainerStyles =
	"ml-10 mr-24 mt-1 h-fit min-w-52 text-xs text-muted-foreground";

export default function ReleaseNoteElement({ data }: { data: ReleaseNote }) {
	return (
		<section
			className={ny(
				"relative flex flex-col border-t lg:flex-row",
				data.version == releaseNotes[0].version ? "mt-24 pt-24" : "mt-36 pt-36",
			)}
			id={data.version}
		>
			<StickyBox
				className={ny("mb-0 hidden lg:block", dateContainerStyles)}
				offsetTop={120}
			>
				<DateContainer data={data} />
			</StickyBox>
			<div className={ny("mb-6 block lg:hidden", dateContainerStyles)}>
				<DateContainer data={data} />
			</div>
			<div className="px-5 md:px-10 md:pr-32">
				<h1 className="text-3xl font-bold">
					Release notes for {data.version} 🎉
				</h1>
				<p className="text-md mt-4 text-muted-foreground">
					If you encounter any issues, please report them on{" "}
					<a
						href="https://github.com/zen-browser/desktop/issues/"
						className="text-underline text-blue-500"
					>
						the issues page
					</a>
					. Thanks everyone for your feedback! ❤️
				</p>
				{data.image && (
					<img
						src={`https://cdn.jsdelivr.net/gh/zen-browser/www/public/releases/${data.version}.png`}
						alt="Release Image"
						className="mt-8 w-full rounded-lg"
					/>
				)}
				{data.extra && (
					<p
						className="text-md mt-8 text-muted-foreground"
						dangerouslySetInnerHTML={{
							__html: data.extra.replace(/(\n)/g, "<br />"),
						}}
					></p>
				)}
				<Accordion type="single" collapsible className="mt-8">
					{data.breakingChanges && (
						<AccordionItem value="breaking-changes" title="Breaking Changes">
							<AccordionTrigger className="border-b">
								<div className="flex items-center">
									<ExclamationTriangleIcon className="mr-2 mt-1 size-5 text-red-500 opacity-50" />
									<span className="ml-2">Breaking Changes</span>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<ul className="ml-6" style={{ listStyleType: "initial" }}>
									{data.breakingChanges.map((change) => (
										<li
											key={change}
											className="text-md mt-4 text-muted-foreground"
										>
											<span className="ml-1">{change}</span>
										</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					)}
					{data.fixes && (
						<AccordionItem value="fixes" title="Fixes">
							<AccordionTrigger className="border-b">
								<div className="flex items-center">
									<CheckCheckIcon className="mr-2 mt-1 size-5 text-green-500 opacity-50" />
									<span className="ml-2">Fixes</span>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<ul className="ml-6" style={{ listStyleType: "initial" }}>
									{data.fixes.map((fix) => (
										<li
											key={fix.description}
											className="text-md mt-4 text-muted-foreground"
										>
											<span className="ml-1">{fix.description}</span>
											{fix.issue && (
												<a
													href={`https://github.com/zen-browser/desktop/issues/${fix.issue}`}
													className="text-underline ml-1 text-blue-500"
												>
													#{fix.issue}
												</a>
											)}
										</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					)}
					{data.themeChanges && (
						<AccordionItem value="theme-changes" title="Theme Changes">
							<AccordionTrigger className="border-b">
								<div className="flex items-center">
									<BrushIcon className="mr-2 mt-1 size-5 text-blue-500 opacity-50" />
									<span className="ml-2">Theme Changes</span>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<ul className="ml-6" style={{ listStyleType: "initial" }}>
									{data.themeChanges.map((change) => (
										<li
											key={change}
											className="text-md mt-4 text-muted-foreground"
										>
											<span className="ml-1">{change}</span>
										</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					)}
					{data.features && (
						<AccordionItem value="features" title="Features">
							<AccordionTrigger>
								<div className="flex items-center">
									<StarIcon className="mr-2 mt-1 size-5 text-yellow-700 opacity-50" />
									<span className="ml-2">Features</span>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<ul className="ml-6" style={{ listStyleType: "initial" }}>
									{data.features.map((feature) => (
										<li
											key={feature}
											className="text-md mt-4 text-muted-foreground"
										>
											<span className="ml-1">{feature}</span>
										</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					)}
				</Accordion>
			</div>
		</section>
	);
}
