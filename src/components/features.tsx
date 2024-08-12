import { useEffect, useState } from "react";
import Feature, { FeatureCard } from "./feature";
import { Button } from "./ui/button";
import TextReveal from "./ui/text-reveal";
import styled, { css, keyframes } from "styled-components";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { CheckIcon, EyeIcon, EyeOffIcon, RabbitIcon, XIcon } from "lucide-react";
import { EyeClosedIcon, LockClosedIcon, QuestionMarkIcon } from "@radix-ui/react-icons";
import ShineBorder from "./ui/shine-border";
import SparklesText from "./ui/sparkles-text";

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
  return (
    <div className="relative">
      {/*<TextReveal text="Zen will change the way you browse the web. 🌟" />*/}
      <h1 className="text-5xl font-bold mt-2 text-center p-5 md:p-0 flex flex-col md:flex-row justify-center items-center mb-2">What does Zen offer to <SparklesText className="mx-2" text="YOU" />?</h1>
      <p className="text-muted-foreground text-center mx-auto w-3/4 md:w-full p-5 lg:p-0 mb-10">
      Discover how Zen Browser can transform your web experience with powerful features that keep you ahead.
      Here are<br className="hidden md:block"/> some of the features that Zen offers.</p>

      <div className="flex flex-col lg:flex-row w-full mt-4 p-5 lg:p-0 gap-4 lg:gap-8">
        <div className="w-full flex flex-col gap-4 lg:gap-8">
          <div className="hover:border-blue-500 transition-all duration-100 bg-background relative mx-auto lg:mx-0 flex flex-col lg:max-w-md justify-center rounded-xl md:border-2 p-10 md:shadow-xl">
            <h1 className="text-5xl font-bold">Split views</h1>
            <p className="text-muted-foreground mt-3">
            Multitask effortlessly by splitting your browser into multiple views, so you can browse several sites at once.
            </p>
            <img src="/split-view.png" className="mt-8 w-full h-full h-auto" />
          </div>
          <div className="hover:border-blue-500 transition-all duration-100 bg-background mx-auto lg:mx-0 relative flex flex-col mt-8 lg:max-w-md justify-center rounded-xl md:border-2 p-20 md:shadow-xl">
            <h1 className="text-5xl font-bold">Workspaces</h1>
            <p className="text-muted-foreground mt-3">
            Stay organized and clutter-free by creating workspaces tailored to your browsing needs.
            </p>
            <img src="/workspaces.png" className="mt-8 w-full h-full" />
          </div>
        </div>
        <div className="w-full lg:mr-4 flex flex-col">
          <div className="hover:border-blue-500 transition-all duration-100 bg-background relative mx-auto lg:mx-0 mt-8 lg:mt-0 flex-col flex lg:max-w-md justify-center rounded-xl md:border-2 p-20 md:shadow-xl">
            <h1 className="text-5xl font-bold">Profile switching</h1>
            <p className="text-muted-foreground mt-3">
            Seamlessly switch between work and personal profiles for a focused browsing experience.
            </p>
            <img src="/profiles.png" className="mt-8 w-full h-full" />
          </div>
          <div className="hover:border-blue-500 transition-all duration-100 bg-background relative mx-auto lg:mx-0 mt-8 flex-col flex lg:max-w-md justify-center rounded-xl md:border-2 p-20 md:shadow-xl">
            <h1 className="text-5xl font-bold">Side web panels</h1>
            <p className="text-muted-foreground mt-3">
            Access favorite sites and services instantly, without leaving your current page.
            </p>
            <img src="/sidebar.png" className="mt-8 w-full h-full" />
          </div>
        </div>
      </div>
      <ShineBorder
        borderWidth={2}
        borderRadius={12}
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        className="mt-20 flex relative flex-col items-start justify-start w-full bg-background p-12 rounded-lg md:shadow-xl"
      >
        <div className="w-full p-16">
          <Table>
            <TableHeader>
              <TableRow className="!border-none" style={{ pointerEvents: 'none'}}>
                <TableHead className="py-2 text-2xl font-bold text-black dark:text-white">
                  <span className="">
                  How Zen compares to other browsers
                  </span>
                </TableHead>
                <TableHead className="font-bold text-center min-w-[70px]">
                  <img src="/favicon.ico" className="dark:bg-white rounded-md mx-auto mb-2 w-9 h-9" />
                  Zen
                </TableHead>
                <TableHead className="pl-4 pr-0 font-bold text-center opacity-60 min-w-[70px]">
                  <img src="/floorp.png" className="dark:bg-white rounded-md p-1 mx-auto mt-1 mb-3 w-7 h-7" />
                  Floorp
                </TableHead>
                
                <TableHead className="font-bold text-center opacity-60 min-w-[70px] ">
                  <img src="/librewolf.png" className="dark:bg-white rounded-md mx-auto p-1 mt-1 mb-3 w-7 h-7" />
                  LibreWolf
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
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
              <TableRow>
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
              <TableRow>
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
              <TableRow>
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
      </ShineBorder>
      <div className="flex flex-col items-center justify-center w-full mt-20">
        <div className="flex flex-col lg:flex-row w-full mt-4 p-5 justify-between items-center">
          <RabbitIcon className="mx-auto hidden md:block w-32 h-32" />
          <div className="flex flex-col max-w-lg text-center md:text-start">
            <h1 className="text-5xl font-bold flex items-center flex-col md:flex-row">Built for <SparklesText className="md:mx-2" text="speed" /></h1>
            <p className="text-muted-foreground mt-3">
            Zen is engineered for speed, consistently outperforming competitors with every release, ensuring a faster browsing experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full mt-20 p-5 justify-between items-center">
          <div className="flex flex-col max-w-lg text-center md:text-start">
            <h1 className="text-5xl font-bold flex flex-col md:flex-row items-center">Privacy is <SparklesText className="md:mx-2" text="key" /></h1>
            <p className="text-muted-foreground mt-3">
            Zen strikes the perfect balance between privacy and usability, allowing you to browse without compromising your data.
            </p>
          </div>
          <EyeClosedIcon className="mx-auto hidden md:block w-32 h-32" />
        </div>
        <div className="flex flex-col lg:flex-row w-full mt-20 p-5 justify-between items-center">
          <LockClosedIcon className="mx-auto hidden md:block w-32 h-32" />
          <div className="flex flex-col text-center md:text-start max-w-lg">
            <h1 className="text-5xl font-bold items-center flex-col">Security is <SparklesText className="inline" text="important" /></h1>
            <p className="text-muted-foreground mt-3">
            Zen incorporates advanced security technologies that outshine other Firefox-based browsers, keeping you safe online.
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 w-full flex items-center justify-center flex-col">
        <h1 className="text-5xl text-center font-bold w-1/2">Want more?</h1>
        <p className="text-muted-foreground text-center mt-3 w-1/2">
        Zen Browser is packed with features designed to revolutionize your browsing.
          Download it today and experience a new way to explore the web.
        </p>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <FeatureCard title="Beautifully designed"
              description="Zen offers an intuitive, aesthetically pleasing interface that’s easy to navigate." />
          <FeatureCard title="Customizable"
              description="Personalize Zen to match your preferences with themes, layouts, and more." />
          <FeatureCard title="Keyboard shortcuts"
              description="Boost your productivity with keyboard shortcuts tailored for efficiency." />
          <FeatureCard title="Your browsing experience, your way"
              description="Zen adapts to your needs, offering a browsing experience as unique as you." />
          <FeatureCard title="Tab groups"
              description="Keep your browsing organized with tab groups that streamline your workflow."
              todo />
          <FeatureCard title="Vertical tabs"
              description="Maximize space and order with vertical tabs, designed for easy access." />
        </div>
        <Button
          onClick={() => (window.location.href = "/download")}
          className="mt-8"
        >
          Download Zen Browser
        </Button>
      </div>
    </div>
  );
}
