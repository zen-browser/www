"use client";
import { useState, useEffect } from "react";
import { ny } from "@/lib/utils";
import {
	BicepsFlexedIcon,
	ChevronLeft,
	InfoIcon,
	TestTubeDiagonalIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { CopyButton } from "../ui/copy-button";
import Particles from "../ui/particles";
import { releases, releaseTree } from "@/lib/releases";
import { InfoCircledIcon } from "@radix-ui/react-icons";
const BASE_URL =
	"https://github.com/zen-browser/desktop/releases/latest/download";
const TWILIGHT_BASE_URL =
	"https://github.com/zen-browser/desktop/releases/download/twilight";

import SparklesText from "../ui/sparkles-text";
import { RainbowButton } from "../ui/rainbow-button";
import { throwConfetti } from "@/components/download/tools/throw-confetti";
import {
	FieldDescription,
	FieldTitle,
	FormField,
} from "@/components/download/form";
import { PlatformSelect } from "@/components/download/platform-select";

type Platform = "Windows" | "MacOS" | "Linux" | "Unsupported";

export default function DownloadPage() {
	const [platform, setPlatform] = useState<string | null>(null);
	const [isTwilight, setIsTwilight] = useState(false);
	const [architecture, setArchitecture] = useState<string | null>(null);

	const [selectedPlatform, setSelectedPlatform] = useState<Platform | "">("");
	const [selectedArchitecture, setSelectedArchitecture] = useState("specific");
	const [selectedWindowsDownloadType, setSelectedWindowsDownloadType] =
		useState("installer");
	const [selectedLinuxDownloadType, setSelectedLinuxDownloadType] =
		useState("portable");

	const [hasDownloaded, setHasDownloaded] = useState(false);

	const [flowIndex, setFlowIndex] = useState(0);
	useEffect(() => {
		let userAgent: string = "";
		if (typeof window !== "undefined") {
			userAgent = window.navigator.userAgent;
		}
		switch (true) {
			case userAgent.includes("Win"):
				setSelectedPlatform("Windows");
				break;
			case userAgent.includes("Mac"):
				setSelectedPlatform("MacOS");
				break;
			case userAgent.includes("Linux"):
				setSelectedPlatform("Linux");
				break;
			default:
				setSelectedPlatform("Unsupported");
				break;
		}
		const searchParams = new URLSearchParams(window.location.search);
		setIsTwilight(searchParams.has("twilight"));
	}, []);

	const startDownload = () => {
		let releaseTarget: string;
		if (selectedLinuxDownloadType === "flatpak") {
			window.open(
				"https://dl.flathub.org/repo/appstream/io.github.zen_browser.zen.flatpakref",
			);
			releaseTarget = "flatpak";
		} else {
			const platform = releaseTree[selectedPlatform.toLowerCase()];
			let arch: string = selectedArchitecture;
			if (selectedPlatform === "MacOS") {
				releaseTarget = platform[arch];
			} else {
				releaseTarget =
					platform[arch][
						selectedPlatform === "Windows"
							? (selectedWindowsDownloadType as string)
							: (selectedLinuxDownloadType as string)
					];
			}
			console.log("Downloading: ");
			console.log("platform: ", selectedPlatform);
			console.log("compat: ", arch);
			const baseUrl = isTwilight ? TWILIGHT_BASE_URL : BASE_URL;
			window.location.replace(`${baseUrl}/${releases[releaseTarget]}`);
		}
		setHasDownloaded(true);
		throwConfetti();
	};

	const continueFlow = () => {
		if (flowIndex === 0) setPlatform(selectedPlatform);
		if (flowIndex === 1) setArchitecture(selectedArchitecture);
		if (flowIndex === 2 || (flowIndex === 1 && platform === "MacOS")) {
			startDownload();
		}
		setFlowIndex(flowIndex + 1);
	};

	const goBackFlow = () => {
		if (flowIndex === 1) {
			setPlatform(null);
		} else if (flowIndex === 2) {
			setArchitecture(null);
		} else if (flowIndex === 3) {
			setSelectedWindowsDownloadType("installer");
			setSelectedLinuxDownloadType("portable");
		}
		if (flowIndex > 0) setFlowIndex(flowIndex - 1);
	};

	const changeToFlatpak = () => {
		setSelectedLinuxDownloadType("flatpak");
	};

	const linuxAppimageBashScript =
		"bash <(curl https://updates.zen-browser.app/appimage.sh)";

	const linuxFlatpakScript =
		"flatpak install flathub io.github.zen_browser.zen";

	return (
		<>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
			/>

			<div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden lg:flex-row">
				<div className="mx-auto flex w-full flex-col justify-center p-10 md:p-20 lg:w-1/2 lg:p-0 2xl:w-1/3">
					{(hasDownloaded && (
						<div className="mt-20 flex flex-col items-start">
							<h1 className="text-6xl font-bold">Downloaded! ❤️</h1>
							<p className="mt-3 text-muted-foreground">
								Your download of Zen Browser will begin shortly. Enjoy browsing
								the web with Zen!
							</p>
							<div className="mt-5 flex items-center font-bold">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/zen-browser"
								>
									Source Code
								</a>
								<a
									target="_blank"
									className="ml-5"
									rel="noopener noreferrer"
									href="https://patreon.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
								>
									Donate
								</a>
								<a className="ml-5" href="/release-notes/latest">
									Release Notes
								</a>
							</div>
							{selectedLinuxDownloadType === "appimage" && (
								<div className="mt-10 rounded-md border bg-surface p-5 shadow">
									<div className="flex items-center">
										<InfoIcon className="size-4" />
										<p className="ml-3 font-bold">AppImage users?</p>
									</div>
									<p className="mt-2 text-muted-foreground">
										If you're using an AppImage, you can use the automatic
										installer, check it out{" "}
									</p>
									<pre className="mt-2 flex items-center justify-between rounded-md bg-background p-2 text-muted-foreground">
										{linuxAppimageBashScript}
										<CopyButton valueToCopy={linuxAppimageBashScript} />
									</pre>
								</div>
							)}
							{selectedLinuxDownloadType === "flatpak" && (
								<div className="mt-10 rounded-md border bg-surface p-5 shadow">
									<div className="flex">
										<InfoIcon className="mt-1 size-4" />
										<p className="ml-3 font-bold">
											The Flatpak version is not optimized. For optimized
											versions, please select other formats.
										</p>
									</div>
									<p className="mt-2 text-muted-foreground">
										If you're using Flatpak, you can install Zen Browser with
										the following command
									</p>
									<pre className="mt-2 flex items-center justify-between rounded-md bg-background p-2 text-muted-foreground">
										{linuxFlatpakScript}
										<CopyButton valueToCopy={linuxFlatpakScript} />
									</pre>
								</div>
							)}
						</div>
					)) || (
						<>
							<h1 className="flex flex-col items-center text-6xl font-bold lg:flex-row">
								Download{" "}
								<SparklesText
									className="mx-2"
									text={isTwilight ? "Twilight" : "Zen"}
								/>
							</h1>
							<p className="mt-3 text-muted-foreground">
								We're thrilled for you to experience Zen Browser. First, let us
								know which device you're using. This will only take a moment, we
								promise.
							</p>
							{isTwilight && (
								<div className="mt-5 flex items-center text-yellow-500">
									<InfoCircledIcon className="ml-2 mr-4 size-4" />
									<p className="text-xs text-muted-foreground opacity-80">
										You're about to download Zen Browser Twilight, our
										experimental build. This build is not stable and may contain
										bugs.
									</p>
								</div>
							)}
						</>
					)}
					{/*Changes for the Choose your platform as checkbox looks old*/}
					<div className="relative w-full">
						{platform === null && (
							<PlatformSelect
								platform={platform}
								selectedPlatform={selectedPlatform}
								onPlatformChange={setSelectedPlatform}
							/>
						)}
						{/* Architecture */}
						{(platform === "Windows" || platform === "Linux") &&
							flowIndex === 1 && (
								<FormField
									enter={
										platform === "Windows" ||
										(platform === "Linux" && flowIndex === 1)
									}
									out={
										platform !== "Windows" &&
										platform !== "Linux" &&
										flowIndex >= 1
									}
								>
									<FieldTitle>Select Architecture</FieldTitle>
									<FieldDescription>
										Choose the architecture of your device, either optimized or
										generic.
									</FieldDescription>
									<div className="flex items-stretch justify-center">
										<div
											onClick={() => setSelectedArchitecture("specific")}
											className={ny(
												"mb-2 flex flex-1 cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
												selectedArchitecture === "specific"
													? "border-blue-400"
													: "",
											)}
										>
											<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">
												🚀
											</h1>
											<h1 className="my-2 text-2xl font-semibold">Optimized</h1>
											<p className="mx-auto text-center text-muted-foreground">
												Blazing fast and compatible with modern devices
											</p>
										</div>
										<div
											onClick={() => setSelectedArchitecture("generic")}
											className={ny(
												"mb-2 ml-10 flex flex-1 cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
												selectedArchitecture === "generic"
													? "border-blue-400"
													: "",
											)}
										>
											<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">
												👴
											</h1>
											<h1 className="my-2 text-2xl font-semibold">Generic</h1>
											<p className="mx-auto text-center text-muted-foreground">
												Slow but compatible with older devices.
											</p>
										</div>
									</div>
								</FormField>
							)}
						{platform === "MacOS" && flowIndex === 1 && (
							<FormField
								enter={platform === "MacOS"}
								out={platform !== "MacOS"}
							>
								<FieldTitle>Download Zen for MacOS</FieldTitle>
								<FieldDescription>
									Click the button below to download Zen for MacOS.
								</FieldDescription>
								<div className="flex items-center justify-center">
									<div
										onClick={() => setSelectedArchitecture("specific")}
										className={ny(
											"mb-2 flex h-64 w-full cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
											selectedArchitecture === "specific"
												? "border-blue-400"
												: "",
										)}
									>
										<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">
											🍏
										</h1>
										<h1 className="my-2 text-2xl font-semibold">AArch64</h1>
										<p className="mx-auto text-center text-muted-foreground">
											64-bit ARM architecture, for Apple's M Series Chips
										</p>
									</div>
									<div
										onClick={() => setSelectedArchitecture("generic")}
										className={ny(
											"mb-2 ml-10 flex h-64 w-full cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
											selectedArchitecture === "generic"
												? "border-blue-400"
												: "",
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
						{flowIndex === 2 && platform === "Windows" && (
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
										<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">
											🚀
										</h1>
										<h1 className="my-2 text-2xl font-semibold">Installer</h1>
										<p className="mx-auto text-center text-muted-foreground">
											Install Zen with a setup wizard
										</p>
									</div>
									<div
										onClick={() => setSelectedWindowsDownloadType("portable")}
										className={ny(
											"mb-2 ml-10 flex flex-1 cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
											selectedWindowsDownloadType === "portable"
												? "border-blue-400"
												: "",
										)}
									>
										<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">
											📦
										</h1>
										<h1 className="my-2 text-2xl font-semibold">Portable</h1>
										<p className="mx-auto text-center text-muted-foreground">
											Download Zen as a ZIP file
										</p>
									</div>
								</div>
							</FormField>
						)}
						{flowIndex === 2 && platform === "Linux" && (
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
											selectedLinuxDownloadType === "appimage"
												? "border-blue-400"
												: "",
										)}
									>
										<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">
											🚀
										</h1>
										<h1 className="my-2 text-2xl font-semibold">AppImage</h1>
										<p className="mx-auto text-center text-muted-foreground">
											Install Zen with a setup wizard
										</p>
									</div>
									<div
										onClick={() => setSelectedLinuxDownloadType("portable")}
										className={ny(
											"mb-2 ml-5 flex flex-1 cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
											selectedLinuxDownloadType === "portable"
												? "border-blue-400"
												: "",
										)}
									>
										<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">
											📦
										</h1>
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
												selectedLinuxDownloadType === "flatpak"
													? "border-blue-400"
													: "",
											)}
										>
											<h1 className="my-2 text-5xl opacity-40 dark:opacity-20">
												🧑‍💻
											</h1>
											<h1 className="my-2 text-2xl font-semibold">Flatpak</h1>
											<p className="mx-auto text-center text-muted-foreground">
												Install Zen from the Flatpak repository.
											</p>
										</div>
									)}
								</div>
							</FormField>
						)}
					</div>
					{!hasDownloaded && (
						<div className="mt-5 flex items-center justify-between">
							<Button
								variant="ghost"
								onClick={() => goBackFlow()}
								className={ny(
									"opacity-70",
									platform === null ? "invisible" : "",
								)}
							>
								<ChevronLeft className="size-4" />
								Back
							</Button>
							<Button
								onClick={() => continueFlow()}
								disabled={
									selectedPlatform === "Unsupported" || !selectedPlatform
								}
							>
								{(flowIndex === 1 && platform === "MacOS") || flowIndex === 2
									? "Download 🥳"
									: "Continue"}
							</Button>
						</div>
					)}
					{selectedPlatform === "Unsupported" && (
						<div className="mt-5 flex items-center">
							<InfoCircledIcon className="mr-2 size-4" />
							<p className="text-muted-foreground">
								Unfortunately, Zen Browser is not available for your platform at
								this time.
							</p>
						</div>
					)}
					{(platform === "Linux" || platform === "Windows") &&
						flowIndex === 1 && (
							<div className="mt-5 flex items-center">
								<InfoCircledIcon className="mr-2 size-4" />
								<p className="text-muted-foreground">
									Confused about which build to choose?{" "}
									<a
										href="https://docs.zen-browser.app/guides/generic-optimized"
										target="_blank"
										className="text-blue-400"
									>
										System requirements
									</a>
									.
								</p>
							</div>
						)}
				</div>
			</div>
			{/* We'll hide the button for now since "mr. benchmarks" thinks people act like apes and just "click on buttons without reading" */}
			{isTwilight && (
				<div className="absolute bottom-10 right-10">
					<RainbowButton onClick={() => setIsTwilight(!isTwilight)}>
						{!isTwilight ? (
							<TestTubeDiagonalIcon className="mr-4 size-5" />
						) : (
							<BicepsFlexedIcon className="mr-4 size-5" />
						)}
						{!isTwilight ? "Download Twilight" : "Switch to Stable"}
					</RainbowButton>
				</div>
			)}
			<Particles
				className="absolute inset-0 -z-10 hidden dark:block"
				quantity={50}
				ease={70}
				size={0.05}
				staticity={70}
				color="#ffffff"
			/>
			<Particles
				className="absolute inset-0 -z-10 block dark:hidden"
				quantity={30}
				ease={70}
				size={0.05}
				staticity={70}
				color="#000000"
			/>
		</>
	);
}
