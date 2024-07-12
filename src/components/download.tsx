"use client";

import { ny } from "@/lib/utils";
import GridPattern from "./ui/grid-pattern";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Form, FormField, FormItem, FormLabel } from "./ui/form";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { releases } from "@/lib/releases";
import { addDownload } from "@/lib/db";

const BASE_URL = "https://github.com/zen-browser/desktop/releases/latest/download";

function getDefaultPlatformBasedOnUserAgent() {
  let userAgent = "";
  if (typeof window !== "undefined") {
    userAgent = window.navigator.userAgent;   
  }  
  if (userAgent.includes("Win")) {
    return "WindowsInstaller";
  }
  if (userAgent.includes("Mac")) {
    // TODO:
    // return "MacOS";
    return "";
  }
  if (userAgent.includes("Linux")) {
    return "Linux";
  }
  return "";
}

const formSchema = z.object({
  platform: z.string().nonempty(),
});

export default function DownloadPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platform: getDefaultPlatformBasedOnUserAgent(),
    },
  });

  const onSubmit = async (data: any) => {
    const platform = data.platform;
    addDownload(platform);
    console.log("Data: ", data)
    console.log("Platform: ", platform)
    console.log("Releases: ", releases)
    const releasesForPlatform = releases[platform];
    console.log("Releases for platform: ", releasesForPlatform)
    const url = `${BASE_URL}/${releasesForPlatform}`;
    console.log("URL: ", url)
    window.open(url, "_blank");
  }

  return (
    <div className="w-full relative h-screen flex items-center justify-center flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 relative h-full px-12 lg:px-24 xl:px-32 2xl:px-64 text-center flex items-cetner justify-center flex-col">
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
      <div className="w-full lg:w-1/2 relative flex flex-col relative items-cetner justify-start">
        <div className="w-full lg:w-2/3 relative flex flex-col items-center mx-auto mt-10 lg:mt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                  control={form.control}
                  name="platform"
                  render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select your operating system</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="w-full mb-5">
                              <SelectValue placeholder="Operating System" />
                          </SelectTrigger>
                          <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Operating System</SelectLabel>
                                <SelectItem value="WindowsInstaller">Windows Installer</SelectItem>
                                <SelectItem value="WindowsZip">Windows (Zip)</SelectItem>
                                <SelectItem value="MacOS">MacOS</SelectItem>
                                <SelectItem value="Linux">Linux</SelectItem>
                                <SelectItem value="WindowsStubInstaller" disabled>Windows Pretty Installer</SelectItem>
                              </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormItem>
                  )}
                />
              <Button type="submit">Download Zen 🎉</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
