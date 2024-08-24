"use client";
import { addDownload } from "@/lib/db";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { ny } from "@/lib/utils";
import { Checkbox } from "./ui/checkbox";
import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
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
    null
  );
  const [linuxDownloadType, setLinuxDownloadType] = useState<string | null>(
    null
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
        "https://dl.flathub.org/repo/appstream/io.github.zen_browser.zen.flatpakref"
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
    addDownload(releaseTarget);
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
    if (selectedArchitecture === "specific") {
      setSelectedLinuxDownloadType("flatpak");
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

      <div className="w-full overflow-hidden relative h-screen flex items-center justify-center flex-col lg:flex-row">
        <div className="flex flex-col justify-center w-full p-10 md:p-20 lg:p-0 lg:w-1/2 2xl:w-1/3 mx-auto">
          {(hasDownloaded && (
            <div className="flex items-center justify-center flex-col">
              <h1 className="text-6xl font-bold">Downloaded! ❤️</h1>
              <p className="text-muted-foreground mt-3 text-center">
                Zen Browser has been downloaded successfully. Enjoy browsing the
                web with Zen!
              </p>
              <div className="flex font-bold mt-5 items-center justify-between mx-auto">
                <Link href="https://github.com/zen-browser">Source Code</Link>
                <Link
                  className="ml-5"
                  href="https://patreon.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
                >
                  Donate
                </Link>
                <Link className="ml-5" href="/release-notes/latest">
                  Release Notes
                </Link>
              </div>
              {selectedPlatform === "MacOS" && (
                <div className="mt-12 flex flex-col items-start border justify-between rounded-md bg-background p-5">
                  <h3 className="text-xl font-semibold">
                    Installation Instructions
                  </h3>
                  <p className="text-muted-foreground text-sm ">
                    To install Zen on MacOS, the process is a bit different.
                    Please follow the instructions below:
                  </p>
                  <Button
                    className="mt-5"
                    onClick={() =>
                      (window.location.href =
                        "https://docs.zen-browser.app/guides/install-macos")
                    }
                  >
                    Download Zen for MacOS
                  </Button>
                </div>
              )}
            </div>
          )) || (
            <>
              <h1 className="text-6xl font-bold flex flex-col lg:flex-row">Download <SparklesText className="mx-2" text="Zen" /></h1>
              <p className="text-muted-foreground mt-3">
                We're thrilled for you to experience Zen Browser. First, let us know which device you're using. This will only take a moment, we promise.
              </p>
            </>
          )}
          <div className="relative w-full">
            {platform === null && (
              <FormField enter={platform === null} out={platform !== null}>
                <FieldTitle>Platform</FieldTitle>
                <FieldDescription>
                  Choose the platform you want to download Zen for.
                </FieldDescription>
                <div
                  onClick={() => setSelectedPlatform("Windows")}
                  className={ny(
                    "select-none mb-2 px-4 py-3 flex items-center rounded-lg bg-background cursor-pointer border",
                    selectedPlatform === "Windows" ? "border-blue-400" : ""
                  )}
                >
                  <Checkbox checked={selectedPlatform === "Windows"} />
                  <i className="devicon-windows8-original ml-3 p-2 border border-blue-400 rounded-lg"></i>
                  <div className="ml-2">Windows</div>
                </div>
                <div
                  onClick={() => setSelectedPlatform("Linux")}
                  className={ny(
                    "select-none mb-2 px-4 py-3 flex items-center rounded-lg bg-background cursor-pointer border",
                    selectedPlatform === "Linux" ? "border-yellow-400" : ""
                  )}
                >
                  <Checkbox checked={selectedPlatform === "Linux"} />
                  <i className="devicon-linux-plain ml-3 p-2 border border-yellow-400 rounded-lg"></i>
                  <div className="ml-2">Linux</div>
                </div>
                <div
                  onClick={() => setSelectedPlatform("MacOS")}
                  className={ny(
                    "select-none mb-2 px-4 py-3 flex items-center rounded-lg bg-background cursor-pointer border",
                    selectedPlatform === "MacOS" ? "border-purple-400" : ""
                  )}
                >
                  <Checkbox checked={selectedPlatform === "MacOS"} />
                  <i className="devicon-apple-original p-2 border border-purple-400 ml-3 rounded-lg"></i>
                  <div className="ml-2 font-bold">MacOS</div>
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
                        "select-none w-full h-full mb-2 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                        selectedArchitecture === "specific"
                          ? "border-blue-400"
                          : ""
                      )}
                    >
                      <h1 className="text-5xl my-2 opacity-40 dark:opacity-20">
                        🚀
                      </h1>
                      <h1 className="text-2xl font-semibold my-2">Optimized</h1>
                      <p className="text-muted-foreground mx-auto text-center">
                        Blazing fast and compatible with modern devices
                      </p>
                    </div>
                    <div
                      onClick={() => setSelectedArchitecture("generic")}
                      className={ny(
                        "select-none w-full h-full mb-2 ml-10 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                        selectedArchitecture === "generic"
                          ? "border-blue-400"
                          : ""
                      )}
                    >
                      <h1 className="text-5xl my-2 opacity-40 dark:opacity-20">
                        👴
                      </h1>
                      <h1 className="text-2xl font-semibold my-2">Generic</h1>
                      <p className="text-muted-foreground mx-auto text-center">
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
                      "select-none w-full h-full mb-2 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                      selectedArchitecture === "specific"
                        ? "border-blue-400"
                        : ""
                    )}
                  >
                    <h1 className="text-5xl my-2 opacity-40 dark:opacity-20">
                      🍏
                    </h1>
                    <h1 className="text-2xl font-semibold my-2">aarch64</h1>
                    <p className="text-muted-foreground mx-auto text-center">64-bit ARM architecture, for Apple's M Series Chips</p>
                  </div>
                  <div
                    onClick={() => setSelectedArchitecture("generic")}
                    className={ny(
                      "select-none w-full h-full mb-2 ml-10 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                      selectedArchitecture === "generic"
                        ? "border-blue-400"
                        : ""
                    )}
                  >
                    <h1 className="text-5xl font-bold my-2 opacity-40 dark:opacity-20">
                      x64
                    </h1>
                    <h1 className="text-2xl font-semibold my-2">Intel</h1>
                    <p className="text-muted-foreground mx-auto text-center">
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
                      "select-none w-full h-full mb-2 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                      selectedWindowsDownloadType === "installer"
                        ? "border-blue-400"
                        : ""
                    )}
                  >
                    <h1 className="text-5xl my-2 opacity-40 dark:opacity-20">
                      🚀
                    </h1>
                    <h1 className="text-2xl font-semibold my-2">Installer</h1>
                    <p className="text-muted-foreground mx-auto text-center">
                      Install Zen with a setup wizard
                    </p>
                  </div>
                  <div
                    onClick={() => setSelectedWindowsDownloadType("portable")}
                    className={ny(
                      "select-none w-full h-full mb-2 ml-10 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                      selectedWindowsDownloadType === "portable"
                        ? "border-blue-400"
                        : ""
                    )}
                  >
                    <h1 className="text-5xl my-2 opacity-40 dark:opacity-20">
                      📦
                    </h1>
                    <h1 className="text-2xl font-semibold my-2">Portable</h1>
                    <p className="text-muted-foreground mx-auto text-center">
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
                      "select-none w-full h-full mb-2 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                      selectedLinuxDownloadType === "appimage"
                        ? "border-blue-400"
                        : ""
                    )}
                  >
                    <h1 className="text-5xl my-2 opacity-40 dark:opacity-20">
                      🚀
                    </h1>
                    <h1 className="text-2xl font-semibold my-2">AppImage</h1>
                    <p className="text-muted-foreground mx-auto text-center">
                      Install Zen with a setup wizard
                    </p>
                  </div>
                  <div
                    onClick={() => setSelectedLinuxDownloadType("portable")}
                    className={ny(
                      "select-none w-full h-full mb-2 ml-5 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                      selectedLinuxDownloadType === "portable"
                        ? "border-blue-400"
                        : ""
                    )}
                  >
                    <h1 className="text-5xl my-2 opacity-40 dark:opacity-20">
                      📦
                    </h1>
                    <h1 className="text-2xl font-semibold my-2">Portable</h1>
                    <p className="text-muted-foreground mx-auto text-center">
                      Download Zen as a ZIP file
                    </p>
                  </div>
                  <div
                    onClick={() => changeToFlatpak()}
                    className={ny(
                      "select-none w-full h-full mb-2 ml-5 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                      selectedLinuxDownloadType === "flatpak"
                        ? "border-blue-400"
                        : "",
                      selectedArchitecture === "generic"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    )}
                  >
                    <h1 className="text-5xl my-2 opacity-40 dark:opacity-20">
                      🧑‍💻
                    </h1>
                    <h1 className="text-2xl font-semibold my-2">Flatpak</h1>
                    <p className="text-muted-foreground mx-auto text-center">
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
                  platform === null ? "invisible" : ""
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
                <InfoCircledIcon className="size-4 mr-2" />
                <p className="text-muted-foreground">
                  Confused about which build to choose?{" "}
                  <Link
                    href="https://github.com/zen-browser/desktop/blob/main/docs/requirements.md#supported-cpus-for-optimized-builds-windows-and-linux"
                    target="_blank"
                    className="text-blue-400"
                  >
                    System requirements
                  </Link>
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
