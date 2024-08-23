"use client";
import Sticky from 'react-sticky-el';
import {
  CheckIcon,
  ChevronLeft,
  ChevronRight,
  EyeIcon,
  EyeOffIcon,
  Github,
  HomeIcon,
  RabbitIcon,
  ShieldAlertIcon,
  ShieldCheck,
  SidebarCloseIcon,
  SidebarIcon,
  SpaceIcon,
  SplitSquareHorizontal,
  SplitSquareVertical,
  XIcon,
} from "lucide-react";
import {
  Cross1Icon,
  EyeClosedIcon,
  HeartFilledIcon,
  LockClosedIcon,
  QuestionMarkIcon,
  ReloadIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from './ui/button';
import { COLORS } from './create-theme';
import { Slider } from './ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import React, { useState } from 'react';
import { ny } from '@/lib/utils';

function Checkmark() {
  return (
    <CheckIcon className="mx-auto text-black rounded-full bg-green-500 dark:bg-green-400 p-1 w-7 h-7" />
  );
}

function Cross() {
  return (
    <XIcon className="mx-auto text-black rounded-full bg-red-500 dark:bg-red-400 p-1 w-7 h-7" />
  );
}

function Question() {
  return (
    <QuestionMarkIcon className="mx-auto text-black rounded-full bg-yellow-500 dark:bg-yellow-400 p-1 w-7 h-7" />
  );
}

export default function Features() {
  const [feature, setFeature] = useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setFeature((feature) => (feature + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  });
  return (
    <div className="relative my-32 mx-auto md:border-2 rounded-md md:w-full xl:w-4/5 2xl:w-3/5">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-10 w-full">
        <div className="items-center justify-center flex flex-col p-16">
          <div className="rounded-full px-8 py-3 shadow border-2 flex items-center justify-center">
            <RabbitIcon className="mx-auto w-7 h-7" />
          </div>
          <div className="mt-10">
            <h2 className="text-lg font-bold text-center">
              Goodbye bad performance
            </h2>
            <p className="text-center text-sm mt-2 text-muted-foreground">
              We are constantly tweak firefox's engine and settings to make it
              faster than ever. <a className="text-blue-500" href="https://github.com/zen-browser/desktop/blob/main/docs/performance.md" target='_blank'>Learn more</a>
            </p>
          </div>
        </div>
        <div className="items-center justify-center md:border-l-2 flex flex-col p-16">
          <div className="rounded-full px-8 py-3 shadow border-2 flex items-center justify-center">
            <LockClosedIcon className="mx-auto w-7 h-7" />
          </div>
          <div className="mt-10">
            <h2 className="text-lg font-bold text-center">
              Privacy first
            </h2>
            <p className="text-center text-sm mt-2 text-muted-foreground">
              We don't track you. We don't sell your data. We don't even know
              who you are. <a className="text-blue-500" href="/privacy-policy">Learn more</a>
            </p>
          </div>
        </div>
        <div className="items-center justify-center md:border-l-2 flex flex-col p-16">
          <div className="rounded-full px-8 py-3 shadow border-2 flex items-center justify-center">
            <ShieldCheck className="mx-auto w-7 h-7" />
          </div>
          <div className="mt-10">
            <h2 className="text-lg font-bold text-center">
              Secure by default
            </h2>
            <p className="text-center text-sm mt-2 text-muted-foreground">
              We are always using the latest security features from firefox to
              keep you safe. <a className="text-blue-500" href="https://docs.zen-browser.app/faq#how-do-i-know-zen-is-safe">Learn more</a>
            </p>
          </div>
        </div>
        <div className="relative md:border-t-2 hidden md:block flex-col p-16 row-span-4 scrollarea">
          <Sticky stickyClassName="mx-auto py-32" hideOnBoundaryHit={false} boundaryElement=".scrollarea" topOffset={-130}>
            <h2 className="text-3xl font-bold">
              User experience comes first
            </h2>
            <p className="text-sm mt-2 text-muted-foreground">
              We are always looking for ways to make your experience better. Always looking for feedback and suggestions!
            </p>
          </Sticky>
        </div>
        <div className="relative md:grid border-t-2 md:border-l-2 md:col-span-2 md:grid-cols-2 row-span-2">
          <div className="w-1/2 absolute md:relative z-[-1] opacity-50 md:opacity-1 md:w-full h-full border-r-2 md:border-r"></div>
          <div className="w-1/2 absolute md:relative z-[-1] hidden md:block md:w-full h-full border-l"></div>
          <div className="p-16 md:px-32 h-full md:absolute top-0 left-0 flex flex-col">
            <div className="">
              <div>
                <h2 className="text-3xl font-bold">
                  Customization is key
                </h2>
                <p className="text-sm mt-2 text-muted-foreground">
                  We are always looking for ways to make your experience better. With stackable themes that can be mixed and matched, you can create a browser that is truly yours. <a className="text-blue-500" href="https://docs.zen-browser.app/themes-store/themes-marketplace">Learn more</a>
                </p>
              </div>
              <Link href="/download"><Button className="mt-4 rounded-full p-5 ml-auto">Download Zen now!</Button></Link>
            </div>
            <div className="border rounded-lg shadow-md mt-16 mx-auto p-4 bg-white dark:bg-black flex w-fit transform -translate-x-1/3">
              {COLORS.map((color) => (
                <div key={color} className="w-5 h-5 rounded-full mx-3 " style={{ backgroundColor: color }} />
              ))}
            </div>
            <div className="border w-1/2 rounded-lg shadow-md mt-16 mx-auto p-4 bg-white dark:bg-black flex transform translate-x-[calc(50%-1.5rem)]">
              <Slider defaultValue={[80]} max={100} />
            </div>
            <a href='/themes' className="border-2 w-fit md:w-1/2 lg:w-fit flex items-center justify-center rounded-xl shadow-md mt-16 mx-auto p-4 bg-white dark:bg-black border-blue-500 flex text-muted-foreground">
              <span>
                Checkout our themes store
              </span>
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
        <div className="relative md:grid md:border-l-2 border-t-2 md:col-span-2 grid-cols-2 row-span-2">
          <div className="w-1/2 absolute md:relative z-[-1] opacity-50 md:opacity-1 md:w-full h-full border-r-2 md:border-r"></div>
          <div className="w-1/2 absolute md:relative z-[-1] hidden md:block md:w-full h-full border-l"></div>
          <div className="p-16 md:px-32 h-full md:absolute top-0 left-0 flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className='relative'>
                <h2 className="text-3xl font-bold">
                  Compact mode is here!
                </h2>
                <p className="text-sm mt-2 text-muted-foreground">
                  With a new compact mode, you can save space and focus on what matters.
                </p>
                <div className="bg-blue-600 p-1 px-2 text-white rounded-md text-xs transform rotate-[10deg] absolute right-0 top-[-10px]">
                  Killer feature
                </div>
              </div>
              <Link href="/download"><Button className="mt-4 rounded-full p-5 ml-4">Download Zen now!</Button></Link>
            </div>
            <img src="/compact-mode.png" className="scale-105 hover:scale-110 transform rotate-[-2deg] transition-all duration-100 rounded-md w-full shadow-md dark:shadow-none dark:border-2 mt-16 border-blue-600" />
          </div>
        </div>
        <div className='flex flex-col p-5 md:p-16 md:col-span-2 border-t-2 row-span-2'>
          <div className="rounded-full px-8 py-3 shadow border-2 flex items-center">
            <div className="font-bold text-md">
              What makes Zen Browser different?
            </div>
            <img src="/favicon.ico" className="ml-auto w-7 h-7" />
          </div>
          <div className="h-full w-full flex items-center justify-center">
            <Table className='w-full'>
              <TableHeader>
                <TableRow className="!border-none" style={{ pointerEvents: 'none'}}>
                  <TableHead className="py-2 text-2xl font-bold text-black dark:text-white">
                    <span className="">
                    How Zen compares to other browsers
                    </span>
                  </TableHead>
                  <TableHead className="py-2 font-bold text-center">
                    <Image
                      height={32}
                      width={32}
                      src="/favicon.ico"
                      className="border-2 rounded-lg mx-auto mb-2 w-8 h-8"
                      alt="zen"
                    />
                    Zen
                  </TableHead>
                  <TableHead className="py-2 pl-4 lg:pr-0 pr-2 font-bold text-center opacity-60">
                    <Image
                      height={32}
                      width={32}
                      src="/floorp.png"
                      className="bg-black dark:bg-white rounded-md p-1 mx-auto mb-2 w-7 h-7"
                      alt="floorp"
                    />
                    Floorp
                  </TableHead>
                  <TableHead className="py-2 pl-0 font-bold text-center opacity-60">
                    <Image
                      height={32}
                      width={32}
                      src="/librewolf.png"
                      className="bg-black dark:bg-white rounded-md mx-auto p-1 mb-2 w-7 h-7"
                      alt="librewolf"
                    />
                    LibreWolf
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className='border-none'>
                  <TableCell className="py-3 font-medium">
                  Fine-grained security like sandboxing			
                  </TableCell>
                  <TableCell className="py-3">
                    <Checkmark />
                  </TableCell>
                  <TableCell className="py-3 pl-4 pr-0">
                    <Cross />
                  </TableCell>
                  <TableCell className="py-3">
                    <Checkmark />
                  </TableCell>
                </TableRow>
                <TableRow className='border-none'>
                  <TableCell className="py-3 font-medium">
                    Optimized for peak performance
                  </TableCell>
                  <TableCell className="py-3">
                    <Checkmark />
                  </TableCell>
                  <TableCell className="py-3 pl-4 pr-0">
                    <Cross />
                  </TableCell>
                  <TableCell className="py-3">
                    <Cross />
                  </TableCell>
                </TableRow>
                <TableRow className='border-none'>
                  <TableCell className="py-3 font-medium">
                  Based on the latest Firefox			
                  </TableCell>
                  <TableCell className="py-3">
                    <Checkmark />
                  </TableCell>
                  <TableCell className="py-3 pl-4 pr-0">
                    <Cross />
                  </TableCell>
                  <TableCell className="py-3">
                    <Checkmark />
                  </TableCell>
                </TableRow>
                <TableRow className='border-none'>
                  <TableCell className="py-3 font-medium">
                    Customizable with cutting-edge features
                  </TableCell>
                  <TableCell className="py-3">
                    <Checkmark />
                  </TableCell>
                  <TableCell className="py-3 pl-4 pr-0">
                    <Checkmark />
                  </TableCell>
                  <TableCell className="py-3">
                    <Cross />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className='border-t-2 md:border-l-2 row-span-3 grid grid-rows-3'>
          <div className="flex items-center flex-col justify-center p-16">
            <div className="border-2 shadow-md rounded-full p-8 py-3 flex items-center justify-center">
              <Github className="w-8 h-8" />
              <h2 className="text-lg font-bold ml-4">
                Open source
              </h2>
            </div>
            <p className="text-sm mt-8 text-muted-foreground text-center">
              Zen Browser is open source and always will be. You can check out
              the source code on our <a className="text-blue-500" href="https://github.com/zen-browser">Github</a>!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-16 md:border-t-2">
            <div className="border-2 shadow-md rounded-full p-8 py-3 flex items-center justify-center">
              <ReloadIcon className="w-8 h-8" />
              <h2 className="text-lg font-bold ml-4">
                Updated
              </h2>
            </div>
            <p className="text-sm mt-8 text-muted-foreground text-center">
              We are always working on new features and improvements. You can
              expect regular updates to keep your browser up to date.
            </p>
          </div>
          <div className="flex flex-col p-16 md:border-t-2">
            <div className="border-2 shadow-md rounded-full p-8 py-3 flex items-center justify-center">
              <HeartFilledIcon className="w-8 h-8" />
              <h2 className="text-lg font-bold ml-4">
                Community
              </h2>
            </div>
            <p className="text-sm mt-8 text-muted-foreground text-center">
              Zen Browser is built by a community of passionate developers and
              designers. You can join us on our <a className="text-blue-500" href="https://discord.gg/nnShMQzR4b">Discord</a>!
            </p>
          </div>
        </div>
        <div className="flex flex-col md:border-t-2 md:col-span-2 grid grid-cols-1 md:grid-cols-2">
          <div className="p-16 border-r-2 flex flex-col items-center justify-center">
            <div className="border-2 shadow-md rounded-full p-8 py-3 flex items-center justify-center">
              <EyeClosedIcon className="w-8 h-8" />
              <h2 className="text-lg font-bold ml-4">
                Your Data
              </h2>
            </div>
            <p className="text-sm mt-8 text-muted-foreground text-center">
              We are always looking for ways to improve your privacy. Zen Browser
              comes with built-in privacy features to keep you safe.
            </p>
          </div>
          <div className="p-16 flex flex-col items-center justify-center">
            <div className="border-2 shadow-md rounded-full p-8 py-3 flex items-center justify-center">
              <UpdateIcon className="w-8 h-8" />
              <h2 className="text-lg font-bold ml-4">
                Improvements
              </h2>
            </div>
            <p className="text-sm mt-8 text-muted-foreground text-center">
              We are always looking for ways to make Zen Browser better. You can
              expect regular updates with new features and improvements.
            </p>
          </div>
        </div>
        <div className="flex flex-col border-t-2 md:col-span-3 grid grid-cols-1 md:grid-cols-3 grid-rows-2 row-span-2">
          <div className="relative p-16 border-r-2 flex flex-col items-center justify-center row-span-2 col-span-2">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/split-view.png"
                className={ny("absolute hover:scale-105 rounded-md w-full shadow-md dark:shadow-none dark:border-2 border-blue-500 transform transition-all duration-300",
                  feature === 0 ? 'translate-x-0' : '-translate-x-1/4 opacity-0'
                )}
              />
              <img
                src="/workspaces.png"
                className={ny("absolute hover:scale-105 rounded-md w-full shadow-md dark:shadow-none dark:border-2 border-blue-500 transform transition-all duration-300",
                  feature === 1 ? 'translate-x-0' : '-translate-x-1/4 opacity-0'
                )}
              />
              <img
                src="/sidebar.png"
                className={ny("absolute hover:scale-105 rounded-md w-full shadow-md dark:shadow-none dark:border-2 border-blue-500 transform transition-all duration-300",
                  feature === 2 ? 'translate-x-0' : '-translate-x-1/4 opacity-0'
                )}
              />
            </div>
          </div>
          <div className="p-16 flex flex-col items-center justify-around row-span-2">
            <div className={ny(feature === 0 ? 'opacity-100' : 'opacity-50', "mt-10 md:mt-0 transform transition-all duration-200 cursor-pointer")} onClick={() => setFeature(0)}>
              <h2 className="text-lg font-bold ml-4 flex items-center">
                <SplitSquareHorizontal className="w-4 h-4 mr-2" />
                Split view
              </h2>
              <p className="text-sm mt-2 text-muted-foreground ml-5">
                Split your browser into two windows to work more efficiently.
              </p>
            </div>
            <div className={ny(feature === 1 ? 'opacity-100' : 'opacity-50', "mt-10 md:mt-0 transform transition-all duration-200 cursor-pointer")} onClick={() => setFeature(1)}>
              <h2 className="text-lg font-bold ml-4 flex items-center">
                <HomeIcon className="w-4 h-4 mr-2" />
                Workspaces
              </h2>
              <p className="text-sm mt-2 text-muted-foreground ml-5">
                Organize your tabs into workspaces to keep things tidy.
              </p>
            </div>
            <div className={ny(feature === 2 ? 'opacity-100' : 'opacity-50', "mt-10 md:mt-0 transform transition-all duration-200 cursor-pointer")} onClick={() => setFeature(2)}>
              <h2 className="text-lg font-bold ml-4 flex items-center">
                <SidebarIcon className="w-4 h-4 mr-2" />
                Sidebar
              </h2>
              <p className="text-sm mt-2 text-muted-foreground ml-5">
                Keep your favorite websites at your fingertips with the sidebar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
