
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
} from './ui/table';
import { CheckIcon, XIcon } from "lucide-react";
import { QuestionMarkIcon } from "@radix-ui/react-icons";

function Checkmark() {
  return <CheckIcon className="mx-auto text-black mx-auto rounded-full bg-green-500 dark:bg-green-400 p-1 w-7 h-7" />
}

function Cross() {
  return <XIcon className="mx-auto text-black mx-auto rounded-full bg-red-500 dark:bg-red-400 p-1 w-7 h-7" />
}

function Question() {
  return <QuestionMarkIcon className="mx-auto text-black mx-auto rounded-full bg-yellow-500 dark:bg-yellow-400 p-1 w-7 h-7" />
}

export default function Features() {
  return (
    <div>
      {/*<TextReveal text="Zen will change the way you browse the web. 🌟" />*/}
      <div className="flex flex-col lg:flex-row w-full p-5 lg:p-0">
        <div className="w-full ml-4">
          <div className="bg-pink-300 p-5 border-2 rounded-lg mb-2"></div>
          <div className="bg-blue-300 p-5 border-2 rounded-lg mb-2"></div>
        </div>
        <div className="w-full mr-4 mt-4">
          <div className="bg-yellow-300 border-2 p-5 rounded-lg mb-2"></div>
          <div className="bg-green-300 border-2 p-5 rounded-lg mb-2"></div>
        </div>
      </div>
      <div className="flex relative flex-col items-start justify-start w-full bg-background p-12 rounded-lg border-2 md:shadow-xl">
        <h3 className="text-lg font-bold text-center">Packed with features</h3>
        <div className="w-full p-16">
        <Table>
          <TableHeader>
            <TableRow className="!border-none">
              <TableHead className="py-2 text-2xl absolute font-bold text-black dark:text-white">How Zen differs from other browsers</TableHead>
              <TableHead className="py-2 font-bold text-center"><img src="/favicon.ico" className="bg-black dark:bg-white rounded-md mx-auto mb-2 w-8 h-8" />Zen</TableHead>
              <TableHead className="py-2 pl-4 pr-0 font-bold text-center opacity-60"><img src="/floorp.png" className="bg-black dark:bg-white rounded-md p-1 mx-auto mb-2 w-7 h-7" />Floorp</TableHead>
              <TableHead className="py-2 pl-0 font-bold text-center opacity-60"><img src="/librewolf.png" className="bg-black dark:bg-white rounded-md mx-auto p-1 mb-2 w-7 h-7" />LibreWolf</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="py-3 font-medium">Contain fine-grained security measures like sandboxing</TableCell>
              <TableCell className="py-3"><Checkmark /></TableCell>
              <TableCell className="py-3 pl-4 pr-0"><Cross /></TableCell>
              <TableCell className="py-3"><Checkmark /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 font-medium">Optimized for peak performance</TableCell>
              <TableCell className="py-3"><Checkmark /></TableCell>
              <TableCell className="py-3 pl-4 pr-0"><Cross /></TableCell>
              <TableCell className="py-3"><Cross /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 font-medium">Customizable with cutting-edge features</TableCell>
              <TableCell className="py-3"><Checkmark /></TableCell>
              <TableCell className="py-3 pl-4 pr-0"><Checkmark /></TableCell>
              <TableCell className="py-3"><Cross /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 font-medium">Based on the latest version of Firefox</TableCell>
              <TableCell className="py-3"><Checkmark /></TableCell>
              <TableCell className="py-3 pl-4 pr-0"><Cross /></TableCell>
              <TableCell className="py-3"><Cross /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 font-medium">Updated regularly with new features and latest security patches</TableCell>
              <TableCell className="py-3"><Checkmark /></TableCell>
              <TableCell className="py-3 pl-4 pr-0"><Question /></TableCell>
              <TableCell className="py-3"><Cross /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 font-medium">Open-source</TableCell>
              <TableCell className="py-3"><Checkmark /></TableCell>
              <TableCell className="py-3 pl-4 pr-0"><Checkmark /></TableCell>
              <TableCell className="py-3"><Checkmark /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </div>
      </div>
      <div className="my-40 w-full flex items-center justify-center flex-col">
        <h1 className="text-5xl text-center font-bold w-1/2">Want more?</h1>
        <p className="text-muted-foreground text-center mt-3 w-1/2">Zen Browser is packed with features that will change the way you browse the web. Download it today and experience a new way to browse the web.</p>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <FeatureCard title="Beautifully designed"
              description="Zen is designed to be easy to use and beautiful to look at." />
          <FeatureCard title="Customizable"
              description="Customize Zen to fit your needs. Change the theme, layout, and more." />
          <FeatureCard title="Workspaces"
              description="Create workspaces to keep your tabs organized." />
          <FeatureCard title="Better new tab page"
              description="The new tab page in Zen is designed to help you get to your favorite websites faster." />
          <FeatureCard title="Tab groups"
              description="Organize your tabs into groups to keep your browsing experience organized."
              todo />
          <FeatureCard title="Vertical tabs"
              description="Keep your tabs organized with vertical tabs." />
        </div>
        <Button onClick={() => window.location.href = "/download"} className="mt-8">Download Zen Browser</Button>
      </div>
    </div>
  );
}
