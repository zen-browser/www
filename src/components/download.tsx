"use client";

import { ny } from "@/lib/utils";
import GridPattern from "./ui/grid-pattern";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { DownloadCloudIcon, DownloadIcon } from "lucide-react";

const BASE_URL = "https://github.com/zen-browser/desktop/releases/download/latest";

const releases: any  = {
  Windows: [
    "zen.win64.zip",
  ],
  //MacOS: [],
  Linux: [
    "zen.linux.tar.bz2",
  ],
};

function getDefaultPlatformBasedOnUserAgent() {
  const userAgent = window.navigator.userAgent;
  if (userAgent.includes("Win")) {
    return "Windows";
  }
  if (userAgent.includes("Mac")) {
    return "MacOS";
  }
  if (userAgent.includes("Linux")) {
    return "Linux";
  }
  return "Windows";
}

export default function DownloadPage() {
  return (
    <div className="w-full relative h-screen flex items-center justify-center">
      <div className="w-1/2 relative h-full px-64 flex items-cetner justify-center flex-col">
        <GridPattern  
          numSquares={30}
          maxOpacity={0.5}
          height={50}
          width={50}
          duration={3}
          repeatDelay={1}
          x={-1}
          y={-1}
          strokeDasharray="4 2"
          className={ny(
              '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
              'w-full z-0',
          )}
        />
        <h1 className="!text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]">
          Download Zen Browser
        </h1>
        <p className="!text-md text-muted-foreground !font-medium">
          Get started with Zen Browser today. Get back to browsing the web with peace of mind.
        </p>
      </div>
      <div className="w-1/2 relative flex items-cetner justify-start">
        <Tabs defaultValue={getDefaultPlatformBasedOnUserAgent()} className="mx-auto w-fit flex flex-col items-start justify-center">
          <TabsList>
            {Object.keys(releases).map((platform) => (
              <TabsTrigger key={platform} value={platform}>{platform}</TabsTrigger>
            ))}
          </TabsList>
          {Object.keys(releases).map((platform) => (
            <TabsContent key={platform} value={platform} className="border rounded-md p-5 border-gray">
              <table>
                <thead className="">
                  <tr>
                    <th className="text-start pb-4 min-w-64">File</th>
                    <th className="text-start pb-4">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {releases[platform].map((release: string) => (
                    <tr key={release} className="relative w-full">
                      <td className="min-w-64">{release}</td>
                      <td className="flex items-center w-full justify-center">
                        <a href={`${BASE_URL}/${release}`} className="text-blue-500">
                          <DownloadIcon size={24} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
