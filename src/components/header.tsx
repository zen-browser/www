import { ny } from "@/lib/utils";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { ChevronDown, ChevronRight } from "lucide-react";
import WordPullUp from "./ui/word-pull-up";
import ShinyButton from "./ui/shiny-button";
import GridPattern from "./ui/grid-pattern";
import BlurIn from "./ui/blur-in";
import { FadeText } from "./ui/fade-text";

export default function Header() {
  return (
    <div className="w-full relative flex h-screen justify-center flex-col align-center">
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
               Introducing Zen Beta
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
        <a href="/docs" className="mr-5">
          <FadeText
              className="text-md font-medium text-black dark:text-white"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.2 } },
              }}
              text="Documentation"
          />
        </a>
        <a href="/download">
          <ShinyButton text="Download now" />
        </a>
      </div>
      <ChevronDown className="absolute bottom-5 left-1/2 size-7 mb-10 animate-bounce" style={{
        transform: 'translateX(-50%)',
      }} />
    </div>
  )
}
