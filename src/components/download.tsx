"use client";

import { incrementDownloadCount } from "@/lib/db";
import { useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { ny } from "@/lib/utils";
import { Checkbox } from "./ui/checkbox";
import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import Particles from "./ui/particles";
import confetti from "canvas-confetti";
import type {
  Architecture,
  LinuxDownloadType,
  Platform,
  WindowsDownloadType,
} from "@/lib/releases";
import { releases, releaseTree } from "@/lib/releases";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import SparklesText from "./ui/sparkles-text";
import { useRouter } from "next/navigation";

const BASE_URL =
  "https://github.com/zen-browser/desktop/releases/latest/download";

const field_enter = keyframes`
  0% { opacity: 0; transform: scale(0.9); filter: blur(10px); }
  1% { max-height: 100%; }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
`;

const field_exit = keyframes`
  from { display: flex; opacity: 1; transform: scale(1); filter: blur(0); }
  99% { opacity: 0; transform: scale(0.9); filter: blur(10px); }
  100% { display: none; }
`;

const FormField = styled.div<{ enter: boolean; out: boolean }>`
  max-height: 0;
  flex-direction: column;
  opacity: 0;
  width: 100%;
  animation: 0.2s ease-in-out forwards
    ${({ enter, out }) => (enter ? field_enter : out ? field_exit : "")} !important;
  animation-delay: ${({ enter }) => (enter ? "0.4s" : "0s")};
`;

const FieldTitle = ({
  children,
  className,
}: React.PropsWithChildren & React.HTMLAttributes<HTMLHeadElement>) => (
  <h2 className={ny("text-xl font-medium", className)}>{children}</h2>
);

const FieldDescription = ({
  children,
  className,
}: React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>) => (
  <p className={ny("text-base text-[#666] mb-4", className)}>{children}</p>
);

const platforms = {
  Windows: { color: "blue", icon: "windows8" },
  Linux: { color: "yellow", icon: "linux" },
  MacOS: { color: "purple", icon: "apple" },
};

export default function DownloadPage() {
  const router = useRouter();

  const [platform, setPlatform] = useState<Platform | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const [selectedArchitecture, setSelectedArchitecture] =
    useState<Architecture>("specific");
  const [selectedWindowsDownloadType, setSelectedWindowsDownloadType] =
    useState<WindowsDownloadType>("installer");
  const [selectedLinuxDownloadType, setSelectedLinuxDownloadType] =
    useState<LinuxDownloadType>("portable");

  const [hasDownloaded, setHasDownloaded] = useState<boolean>(false);
  const [flowIndex, setFlowIndex] = useState<number>(0);

  const detectPlatform = useCallback(() => {
    if (typeof window === "undefined") return;

    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.includes("win")) {
      setSelectedPlatform("Windows");
    } else if (userAgent.includes("mac")) {
      setSelectedPlatform("MacOS");
    } else if (userAgent.includes("linux")) {
      setSelectedPlatform("Linux");
    }
  }, []);

  const throwConfetti = useCallback(() => {
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
  }, []);

  const getReleaseTarget = useCallback(():
    | keyof typeof releases
    | undefined => {
    if (selectedLinuxDownloadType === "flatpak") {
      router.push(
        "https://dl.flathub.org/repo/appstream/io.github.zen_browser.zen.flatpakref"
      );
      return;
    }

    if (!selectedPlatform) return;

    const platformReleases = releaseTree[selectedPlatform.toLowerCase()];

    if (selectedPlatform === "MacOS")
      return platformReleases[selectedArchitecture];

    return platformReleases[selectedArchitecture][
      selectedPlatform === "Windows"
        ? selectedWindowsDownloadType
        : selectedLinuxDownloadType
    ];
  }, [
    router,
    selectedArchitecture,
    selectedLinuxDownloadType,
    selectedPlatform,
    selectedWindowsDownloadType,
  ]);

  const startDownload = useCallback(() => {
    const releaseTarget = getReleaseTarget();

    if (!releaseTarget) return;

    router.push(`${BASE_URL}/${releases[releaseTarget]}`);

    setHasDownloaded(true);
    incrementDownloadCount(releaseTarget);
    throwConfetti();
  }, [getReleaseTarget, router, throwConfetti]);

  const continueFlow = useCallback(() => {
    if (flowIndex === 0) setPlatform(selectedPlatform);
    if (flowIndex === 2 || (flowIndex === 1 && platform === "MacOS")) {
      startDownload();
    }
    setFlowIndex(flowIndex + 1);
  }, [flowIndex, platform, selectedPlatform, startDownload]);

  const goBackFlow = useCallback(() => {
    if (flowIndex === 1) setPlatform(null);
    else if (flowIndex === 3) {
      setSelectedWindowsDownloadType("installer");
      setSelectedLinuxDownloadType("portable");
    }
    if (flowIndex > 0) setFlowIndex(flowIndex - 1);
  }, [flowIndex]);

  const changeToFlatpak = useCallback(() => {
    if (selectedArchitecture !== "specific") return;
    setSelectedLinuxDownloadType("flatpak");
  }, [selectedArchitecture]);

  useEffect(() => {
    detectPlatform();
  }, [detectPlatform]);

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
                      router.push(
                        "https://docs.zen-browser.app/guides/install-macos"
                      )
                    }
                  >
                    Read Installation Instructions
                  </Button>
                </div>
              )}
            </div>
          )) || (
            <>
              <h1 className="text-6xl font-bold flex flex-col lg:flex-row">
                Download <SparklesText className="mx-2" text="Zen" />
              </h1>
              <p className="text-muted-foreground mt-3">
                We're thrilled for you to experience Zen Browser. First, let us
                know which device you're using. This will only take a moment, we
                promise.
              </p>
            </>
          )}
          <div className="relative w-full pt-12">
            {/* Platform */}
            {!platform && (
              <FormField enter={!platform} out={!platform}>
                <FieldTitle>Platform</FieldTitle>
                <FieldDescription>
                  Choose the platform you want to download Zen for.
                </FieldDescription>
                {Object.entries(platforms).map(([plat, { color, icon }]) => (
                  <div
                    key={plat}
                    onClick={() => setSelectedPlatform(plat as Platform)}
                    className={ny(
                      "select-none mb-2 px-4 py-3 flex items-center rounded-lg bg-background cursor-pointer border",
                      selectedPlatform === plat && `border-${color}-400`
                    )}
                  >
                    <Checkbox checked={selectedPlatform === plat} />
                    <i
                      className={`devicon-${icon}-plain ml-3 p-2 border border-${color}-400 rounded-lg`}
                    ></i>
                    <div className="ml-2">{plat}</div>
                  </div>
                ))}
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
                  <div className="flex items-center justify-center gap-2">
                    <div
                      onClick={() => setSelectedArchitecture("specific")}
                      className={ny(
                        "select-none w-full h-full mb-2 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                        selectedArchitecture === "specific" && "border-blue-400"
                      )}
                    >
                      <h1 className="text-5xl my-2">🚀</h1>
                      <h1 className="text-xl font-semibold my-2">Optimized</h1>
                      <p className="text-muted-foreground mx-auto text-center text-balance text-sm">
                        Blazing fast and compatible with modern devices
                      </p>
                    </div>
                    <div
                      onClick={() => setSelectedArchitecture("generic")}
                      className={ny(
                        "select-none w-full h-full mb-2 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                        selectedArchitecture === "generic" && "border-blue-400"
                      )}
                    >
                      <h1 className="text-5xl my-2">👴</h1>
                      <h1 className="text-xl font-semibold my-2">Generic</h1>
                      <p className="text-muted-foreground mx-auto text-center text-balance text-sm">
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
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setSelectedArchitecture("specific")}
                    className={ny(
                      "select-none w-full h-full mb-2 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                      selectedArchitecture === "specific" && "border-blue-400"
                    )}
                  >
                    <h1 className="text-5xl my-2">🍏</h1>
                    <h1 className="text-xl font-semibold my-2">aarch64</h1>
                    <p className="text-muted-foreground mx-auto text-center text-balance text-sm">
                      64-bit ARM architecture, for Apple's M Series Chips
                    </p>
                  </button>
                  <button
                    onClick={() => setSelectedArchitecture("generic")}
                    className={ny(
                      "select-none w-full h-full mb-2 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                      selectedArchitecture === "generic" && "border-blue-400"
                    )}
                  >
                    <h1 className="text-5xl font-bold my-2">x64</h1>
                    <h1 className="text-xl font-semibold my-2">Intel</h1>
                    <p className="text-muted-foreground mx-auto text-center text-balance text-sm">
                      64-bit Intel architecture, for older Macs
                    </p>
                  </button>
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
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setSelectedWindowsDownloadType("installer")}
                    className={ny(
                      "select-none w-full h-full mb-2 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                      selectedWindowsDownloadType === "installer" &&
                        "border-blue-400"
                    )}
                  >
                    <h1 className="text-5xl my-2">🚀</h1>
                    <h1 className="text-xl font-semibold my-2">Installer</h1>
                    <p className="text-muted-foreground mx-auto text-center text-balance text-sm">
                      Install Zen with a setup wizard
                    </p>
                  </button>
                  <button
                    onClick={() => setSelectedWindowsDownloadType("portable")}
                    className={ny(
                      "select-none w-full h-full mb-2 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border",
                      selectedWindowsDownloadType === "portable" &&
                        "border-blue-400"
                    )}
                  >
                    <h1 className="text-5xl my-2">📦</h1>
                    <h1 className="text-xl font-semibold my-2">Portable</h1>
                    <p className="text-muted-foreground mx-auto text-center text-balance text-sm">
                      Download Zen as a ZIP file
                    </p>
                  </button>
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
                <div className="flex items-center justify-center gap-2">
                  <article
                    onClick={() => setSelectedLinuxDownloadType("appimage")}
                    className={ny(
                      "select-none w-full h-full mb-2 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border space-y-2",
                      selectedLinuxDownloadType === "appimage" &&
                        "border-blue-400"
                    )}
                  >
                    <h1 className="text-5xl">🚀</h1>
                    <h1 className="text-xl font-semibold">AppImage</h1>
                    <p className="text-muted-foreground text-center text-balance text-sm">
                      Install Zen with a setup wizard
                    </p>
                  </article>
                  <article
                    onClick={() => setSelectedLinuxDownloadType("portable")}
                    className={ny(
                      "select-none w-full h-full mb-2 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border space-y-2",
                      selectedLinuxDownloadType === "portable" &&
                        "border-blue-400"
                    )}
                  >
                    <h1 className="text-5xl">📦</h1>
                    <h1 className="text-xl font-semibold">Portable</h1>
                    <p className="text-muted-foreground text-center text-balance text-sm">
                      Download Zen as a ZIP file
                    </p>
                  </article>
                  <article
                    onClick={changeToFlatpak}
                    className={ny(
                      "select-none w-full h-full mb-2 p-5 flex flex-col items-center rounded-lg bg-background cursor-pointer border space-y-2",
                      selectedLinuxDownloadType === "flatpak" &&
                        "border-blue-400",
                      selectedArchitecture === "generic" &&
                        "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <h1 className="text-5xl">🧑‍💻</h1>
                    <h1 className="text-xl font-semibold">Flatpak</h1>
                    <p className="text-muted-foreground text-center text-balance text-sm">
                      Install Zen from the Flatpak repository.
                    </p>
                  </article>
                </div>
              </FormField>
            )}
          </div>
          {!hasDownloaded && (
            <div className="mt-5 flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={goBackFlow}
                className={ny("opacity-70", !platform && "invisible")}
              >
                <ChevronLeft className="size-4" />
                Back
              </Button>
              <Button onClick={continueFlow} disabled={!selectedPlatform}>
                {(flowIndex === 1 && platform === "MacOS") || flowIndex === 2
                  ? "Download 🥳"
                  : "Continue"}
              </Button>
            </div>
          )}
          {(platform === "Linux" || platform === "Windows") &&
            flowIndex === 1 && (
              <div className="mt-5 flex items-center justify-center">
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
