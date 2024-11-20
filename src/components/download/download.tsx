"use client";
import { useState, useEffect } from "react";
import { ny } from "@/lib/utils";
import {
	BicepsFlexedIcon,
	ChevronLeft,
	TestTubeDiagonalIcon,
} from "lucide-react";
import { Button } from "../ui/button";
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

import { PlatformSelect } from "@/components/download/platform-select";
import { ArchitectureSelect } from "@/components/download/architecture-select";
import { LinuxInstaller } from "@/components/download/linux-installer";
import { WindowsInstaller } from "@/components/download/windows-installer";
import { DownloadedHeader } from "@/components/download/downloaded-header";
import { AppImageInstaller } from "@/components/download/appimage-installer";
import { FlatPakInstaller } from "@/components/download/flatpak-installer";
import { AlertModal } from "@/components/alert-modal";

type Platform = "Windows" | "MacOS" | "Linux" | "Unsupported";

export default function DownloadPage() {
	const [platform, setPlatform] = useState<Platform | null | "">(null);
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
		if (selectedPlatform === "Linux" && selectedLinuxDownloadType === "flatpak") {
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

	const [alertOpen, setAlertOpen] = useState(false);

	const handleContinue = () => {
		if (
			flowIndex === 2 &&
			selectedPlatform === "Linux" &&
			selectedLinuxDownloadType === "flatpak" &&
			selectedArchitecture === "specific"
		) {
			setAlertOpen(true);
		} else {
			continueFlow();
		}
	};

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

			<div className="relative flex w-full flex-col items-center justify-center overflow-hidden lg:flex-row">
				<div className="mx-auto flex w-full flex-col justify-center p-10 md:p-20 lg:w-1/2 lg:p-0 2xl:w-1/3">
					<AlertModal
						open={alertOpen}
						onOpenChange={setAlertOpen}
						onConfirm={continueFlow}
					/>
					{(hasDownloaded && (
						<div className="mt-20 flex flex-col items-start">
							<DownloadedHeader />
							{selectedPlatform === "Linux" && selectedLinuxDownloadType === "appimage" && (
								<AppImageInstaller isTwilight={isTwilight} />
							)}
							{selectedPlatform === "Linux" && selectedLinuxDownloadType === "flatpak" && <FlatPakInstaller />}
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
						<ArchitectureSelect
							flowIndex={flowIndex}
							platform={platform}
							selectedArchitecture={selectedArchitecture}
							setSelectedArchitecture={setSelectedArchitecture}
						/>
						{flowIndex === 2 && platform === "Windows" && (
							<WindowsInstaller
								platform={platform}
								flowIndex={flowIndex}
								selectedArchitecture={selectedArchitecture}
								setSelectedWindowsDownloadType={setSelectedWindowsDownloadType}
								selectedWindowsDownloadType={selectedWindowsDownloadType}
							/>
						)}
						{flowIndex === 2 && platform === "Linux" && (
							<LinuxInstaller
								changeToFlatpak={changeToFlatpak}
								flowIndex={flowIndex}
								isTwilight={isTwilight}
								platform={platform}
								selectedArchitecture={selectedArchitecture}
								setSelectedLinuxDownloadType={setSelectedLinuxDownloadType}
								selectedLinuxDownloadType={selectedLinuxDownloadType}
							/>
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
								onClick={handleContinue}
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
