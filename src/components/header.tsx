
import { ny } from "@/lib/utils";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { ChevronDown, ChevronRight } from "lucide-react";
import WordPullUp from "./ui/word-pull-up";
import ShinyButton from "./ui/shiny-button";
import GridPattern from "./ui/grid-pattern";
import BlurIn from "./ui/blur-in";
import { FadeText } from "./ui/fade-text";
import styled, { keyframes } from "styled-components";

const HeaderElement = styled.div`
  background: light-dark(white, rgba(0, 0, 0, 0.5));
`;

export default function Header() {
  return (
    <>
      <div className="absolute top-3/4 z-10">
        <img src="/browser-dark.png" className={ny('hidden dark:block mx-auto shadow-sm border mt-24 z-0 w-4/5 rounded-xl overflow-hidden')} />
        <img src="/browser-light.png" className={ny('dark:hidden mx-auto shadow-sm border mt-24 z-0 w-4/5 rounded-xl overflow-hidden')} />
      </div>
      <HeaderElement className="w-full relative flex h-screen justify-center flex-col align-center border-b">
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
        <div className="z-10 flex mb-10 items-center justify-center">
          <a href="/download">
          <AnimatedGradientText>
              🎉
              {' '}
              <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
              {' '}
              <span
                className={ny(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                Introducing Zen Alpha
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
          </a>
        </div>
        <WordPullUp
          className="text-3xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
          words="Make It Yours"
        />
        <BlurIn
          word="Firefox based browser with a focus on privacy and customization."
          className="!text-xl text-muted-foreground !font-medium"
        />
        <div className="max-w-1/4 mt-10 flex items-center justify-center">
          <a href="/release-notes" className="mr-5">
            <FadeText
                className="text-md font-medium text-black dark:text-white"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.2 } },
                }}
                text="Release Notes"
            />
          </a>
          <a href="/download">
            <ShinyButton text="Download now" />
          </a>
        </div>
      </HeaderElement>
    </>
  )
}
