"use client";

import Image from "next/image";
import BlurIn from "./ui/blur-in";
import { Button } from "./ui/button";
import Particles from "./ui/particles";
import Link from "next/link";

// <Welcome /> component

function Welcome() {
  const buttonStyles = "mt-10 rounded-lg text-white dark:text-black";

  return (
    <div className="my-32 mx-auto w-full max-w-[1300px] relative">
      <HeroSection />

      {/* The Zen Sidebar */}

      <div className="p-10 lg:p-20 border border-gray-700 flex items-center justify-center flex-col lg:flex-row">
        <GradientImage
          imgSrc="/sidebar-demo-screencap.png"
          imgW={480}
          imgH={400}
          imgAlt="An image of a browser"
        />
        <div className="flex-1 max-w-[300px] mt-10 lg:mt-10 lg:ml-14">
          <h1 className="font-bold text-2xl">The Zen Sidebar</h1>
          <p className="mt-6 text-sm text-muted-foreground">
            Need to keep your favorite websites and tools at your fingertips?
            The sidebar gives you quick access to your favorite websites when
            you need them. <br />
            <br />
            Easily switch between websites using the sidebar favorites.
            <br />
            <br />
            You can find the sidebar in the left-hand menu or with Alt/Option +
            P
          </p>
          {/* Someone needs to write some docs on how the sidebar works first 
          <Link 
            href="">
              <Button className={buttonStyles}>
                Sidebar Docs
              </Button>
          </Link>
          */}
        </div>
      </div>

      {/* Compact Mode */}

      <div className="p-10 lg:p-20 border border-gray-700 flex items-center justify-center lg:flex-row-reverse flex-col">
        <GradientImage
          imgSrc="/compact-mode-demo-screencap.png"
          imgW={480}
          imgH={400}
          imgAlt="An image of a browser"
        />
        <div className="flex-1 max-w-[300px] mt-10 lg:mt-10 lg:mr-14">
          <h1 className="font-bold text-2xl">Compact Mode</h1>
          <p className="mt-6 text-sm text-muted-foreground">
            Sick of the browser getting in the way of what matters? Remove all
            the menus, toolbars, and tabs and experience the web in all of its
            glory. <br /> <br />
            Compact Mode can be toggled using Control/Command + Alt/Option + C
          </p>
          {/* Someone needs to write some docs on how compact mode works first 
          <Link 
            href="">
              <Button className={buttonStyles}>
                Compact Mode Docs
              </Button>
          </Link>
          */}
        </div>
      </div>

      {/* Workspaces */}

      <div className="p-10 lg:p-20 border border-gray-700 flex items-center justify-center flex-col lg:flex-row">
        <GradientImage
          imgSrc="/workspaces-demo-screencap.png"
          imgW={480}
          imgH={400}
          imgAlt="An image of a browser"
        />
        <div className="flex-1 max-w-[300px] mt-10 lg:mt-10 lg:ml-14">
          <h1 className="font-bold text-2xl">Workspaces</h1>
          <p className="mt-6 text-sm text-muted-foreground">
            Need to keep track of the tabs for a specific project, context or
            topic? With workspaces, you can separate your work tabs from your
            personal tabs without cluttering your main browsing experience.
            <br /> <br />
            You can find workspaces above your tabs on the left or cycle through
            your workspaces with Control/Command + Alt/Option + E
          </p>
          {/* Someone needs to write some docs on how the workspaces work first 
          <Link 
            href="">
              <Button className={buttonStyles}>
                Workspaces Docs
              </Button>
          </Link>
          */}
        </div>
      </div>

      {/* Firefox Compatibility */}

      <div className="p-10 lg:p-20 border border-gray-700 flex items-center justify-center lg:flex-row-reverse flex-col">
        <GradientImage
          imgSrc="/firefox-extensions-screencap.png"
          imgW={480}
          imgH={400}
          imgAlt="An image of a browser"
        />
        <div className="flex-1 max-w-[300px] mt-10 lg:mt-10 lg:mr-14">
          <h1 className="font-bold text-2xl">Firefox Compatibility</h1>
          <p className="mt-6 text-sm text-muted-foreground">
            Zen Browser is based on Firefox meaning Firefox Extensions are
            compatible on Zen Browser. <br /> 
            <br />
            Install your favorites, such as "uBlock Origin", "BetterTTV" and
            "Dark Reader"
          </p>
          <Link 
            href="https://addons.mozilla.org/en-US/firefox/extensions/">
              <Button className={buttonStyles}>
                Visit Firefox Extensions
              </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

// sub-components

function HeroSection() {
  const buttonStyles =
    "block mx-auto my-2 sm:inline sm:mx-2 animate-fade-in -translate-y-4 gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black";

  return (
    <div className="w-full h-[80vh] max-h-[800px] relative flex flex-col items-center justify-center">
      <BlurIn
        className="px-5 text-3xl md:text-6xl text-center mb-4"
        word="Welcome to Zen Browser!"
      />
      <p className="animate-fade-in px-5 mb-12 text-balance text-lg text-center tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
        A Firefox based browser with a focus on privacy and customization
      </p>

      <nav>
        <Link href="https://docs.zen-browser.app/">
          <Button className={buttonStyles}>
            <span>Zen Browser Docs</span>
          </Button>
        </Link>
        <Link href="https://zen-browser.app/themes">
        <Button className={buttonStyles}>
          <span>Visit Theme Store</span>
        </Button>
        </Link>
        <Link href="https://github.com/zen-browser">
        <Button className={buttonStyles}>
          <span>Contribute On GitHub</span>
        </Button>
        </Link>
      </nav>

      <Particles
        className="absolute inset-0 -z-10 hidden dark:block"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color="#ffffff"
      />
      <Particles
        className="absolute inset-0 -z-10 block dark:hidden"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color="#000000"
      />
    </div>
  );
}

type GradientImageTypes = {
  imgSrc: string;
  imgW: number;
  imgH: number;
  imgAlt: string;
};

function GradientImage(props: GradientImageTypes) {
  const { imgSrc, imgW, imgH, imgAlt } = props;

  return (
    <div className={`relative w-[${imgW}px]`}>
      <Image
        src={imgSrc}
        width={imgW}
        height={imgH}
        alt={imgAlt}
        className={`max-h-[${imgH}px] max-w-[${imgW}px]`}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-white dark:from-black to-transparent"></div>
    </div>
  );
}
