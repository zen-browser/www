"use client";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { ny } from "@/lib/utils";
import { ChevronLeft, InfoIcon } from "lucide-react";
import { Button } from "./ui/button";
import { CopyButton } from "./ui/copy-button";
import Particles from "./ui/particles";
import confetti from "canvas-confetti";
import { releases, releaseTree } from "@/lib/releases";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const BASE_URL =
	"https://github.com/zen-browser/desktop/releases/latest/download";

import SparklesText from "./ui/sparkles-text";
const field_enter = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
    filter: blur(10px);
  }
  1% {
    max-height: 100%;
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
`;

const field_exit = keyframes`
  from {
    display: flex;
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
  99% {
    opacity: 0;
    transform: scale(0.9);
    filter: blur(10px);
  }
  100% {
    display: none;
  }
`;

const FormField = styled.div<{ enter: boolean; out: boolean }>`
	max-height: 0;
	flex-direction: column;
	margin-top: 3rem;
	opacity: 0;
	width: 100%;
	animation: 0.2s ease-in-out forwards
		${({ enter, out }) => (enter ? field_enter : out ? field_exit : "")} !important;
	animation-delay: ${({ enter }) => (enter ? "0.4s" : "0s")};
`;

const FieldTitle = styled.div`
	font-size: 1.35rem;
	font-weight: 500;
`;

const FieldDescription = styled.div`
	font-size: 1rem;
	color: #666;
	margin-bottom: 1rem;
`;

export default function DownloadPage() {
	const [platform, setPlatform] = useState<string | null>(null);
	const [architecture, setArchitecture] = useState<string | null>(null);
	const [windowsDownloadType, setWindowsDownloadType] = useState<string | null>(
		null,
	);
	const [linuxDownloadType, setLinuxDownloadType] = useState<string | null>(
		null,
	);

	const [selectedPlatform, setSelectedPlatform] = useState("");
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
		if (userAgent.includes("Win")) {
			setSelectedPlatform("Windows");
		}
		if (userAgent.includes("Mac")) {
			setSelectedPlatform("MacOS");
		}
		if (userAgent.includes("Linux")) {
			setSelectedPlatform("Linux");
		}
	}, []);
	const throwConfetti = () => {
		const end = Date.now() + 3 * 1000; // 3 seconds
		const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
		const frame = () => {
			if (Date.now() > end) return;

			confetti({
				particleCount: 2,
				angle: 60,
				spread: 55,
				startVelocity: 60,
				origin: { x: 0, y: 0.5 },
				colors,
			});
			confetti({
				particleCount: 2,
				angle: 120,
				spread: 55,
				startVelocity: 60,
				origin: { x: 1, y: 0.5 },
				colors,
			});
			requestAnimationFrame(frame);
		};
		frame();
	};

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
			window.location.replace(`${BASE_URL}/${releases[releaseTarget]}`);
		}
		setHasDownloaded(true);
		throwConfetti();
	};

	const continueFlow = () => {
		if (flowIndex === 0) setPlatform(selectedPlatform);
		if (flowIndex === 1) setArchitecture(selectedArchitecture);
		if (flowIndex === 2 || (flowIndex === 1 && platform === "MacOS")) {
			setWindowsDownloadType(selectedWindowsDownloadType);
			setLinuxDownloadType(selectedLinuxDownloadType);
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
			setWindowsDownloadType(null);
			setSelectedWindowsDownloadType("installer");
			setLinuxDownloadType(null);
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
								<a href="https://github.com/zen-browser">Source Code</a>
								<a
									className="ml-5"
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
										<CopyButton
											valueToCopy={linuxAppimageBashScript}
										/>
									</pre>
								</div>
							)}
							{selectedLinuxDownloadType === "flatpak" && (
								<div className="mt-10 rounded-md border bg-surface p-5 shadow">
									<div className="flex items-center">
										<InfoIcon className="size-4" />
										<p className="ml-3 font-bold">Flatpak users?</p>
									</div>
									<p className="mt-2 text-muted-foreground">
										If you're using Flatpak, you can install Zen Browser with
										the following command
									</p>
									<pre className="mt-2 flex items-center justify-between rounded-md bg-background p-2 text-muted-foreground">
										{linuxFlatpakScript}
										<CopyButton
											valueToCopy={linuxFlatpakScript}
										/>
									</pre>
								</div>
							)}
						</div>
					)) || (
						<>
							<h1 className="flex flex-col text-6xl font-bold lg:flex-row">
								Download <SparklesText className="mx-2" text="Zen" />
							</h1>
							<p className="mt-3 text-muted-foreground">
								We're thrilled for you to experience Zen Browser. First, let us
								know which device you're using. This will only take a moment, we
								promise.
							</p>
						</>
					)}
					{/*Changes for the Choose your platform as checkbox looks old*/}
					<div className="relative w-full">
						{platform === null && (
							<FormField enter={platform === null} out={platform !== null}>
								<FieldTitle>Platform</FieldTitle>
								<FieldDescription>
									Choose the platform you want to download Zen for.
								</FieldDescription>
								<div className="flex">
									<div
										onClick={() => setSelectedPlatform("Windows")}
										className={ny(
											"mr-2 flex cursor-pointer select-none flex-col items-center justify-center rounded-lg border bg-background",
											selectedPlatform === "Windows" ? "border-blue-400" : "",
										)}
										style={{
											height: "11.25rem",
											width: "18.75rem",
										}}
									>
										<i
											className="devicon-windows8-original rounded-lg border border-blue-400 p-2"
											style={{ marginBottom: "10px" }}
										></i>
										<div className="font-bold">Windows</div>
									</div>

									<div
										onClick={() => setSelectedPlatform("Linux")}
										className={ny(
											"mr-2 flex cursor-pointer select-none flex-col items-center justify-center rounded-lg border bg-background",
											selectedPlatform === "Linux" ? "border-yellow-400" : "",
										)}
										style={{
											height: "11.25rem",
											width: "18.75rem",
										}}
									>
										<i
											className="devicon-linux-plain rounded-lg border border-yellow-400 p-2"
											style={{ marginBottom: "10px" }}
										></i>
										<div className="font-bold">Linux</div>
									</div>

									<div
										onClick={() => setSelectedPlatform("MacOS")}
										className={ny(
											"flex cursor-pointer select-none flex-col items-center justify-center rounded-lg border bg-background",
											selectedPlatform === "MacOS" ? "border-purple-400" : "",
										)}
										style={{
											height: "11.25rem",
											width: "18.75rem",
										}}
									>
										<i
											className="devicon-apple-original rounded-lg border border-purple-400 p-2"
											style={{ marginBottom: "10px" }}
										></i>
										<div className="font-bold">MacOS</div>
									</div>
								</div>
							</FormField>
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
									<div className="flex items-center justify-center">
										<div
											onClick={() => setSelectedArchitecture("specific")}
											className={ny(
												"mb-2 flex h-full w-full cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
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
												"mb-2 ml-10 flex h-full w-full cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
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
								<div className="flex items-center justify-center">
									<div
										onClick={() => setSelectedWindowsDownloadType("installer")}
										className={ny(
											"mb-2 flex h-full w-full cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
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
											"mb-2 ml-10 flex h-full w-full cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
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
								<div className="flex items-center justify-center">
									<div
										onClick={() => setSelectedLinuxDownloadType("appimage")}
										className={ny(
											"mb-2 flex h-full w-full cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
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
											"mb-2 ml-5 flex h-full w-full cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
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
									<div
										onClick={() => changeToFlatpak()}
										className={ny(
											"mb-2 ml-5 flex h-full w-full cursor-pointer select-none flex-col items-center rounded-lg border bg-background p-5",
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
								disabled={selectedPlatform === null}
							>
								{(flowIndex === 1 && platform === "MacOS") || flowIndex === 2
									? "Download 🥳"
									: "Continue"}
							</Button>
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
