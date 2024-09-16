import styled, { keyframes } from "styled-components";

const hueShift = keyframes`
    0% {
        filter: hue-rotate(0deg);
    }
    50% {
        filter: hue-rotate(170deg);
    }
    100% {
        filter: hue-rotate(0deg);
    }
`;

const TextTitle = styled.h1`
	background-clip: text;
	background-image: linear-gradient(90deg, #0077e7, #01d8d1);
	filter: hue-rotate(0deg);
	animation: ${hueShift} 10s infinite linear 1s;
    padding-bottom: 5px;
`;

export default function CoolHeaderText() {
	return (
        <>
            <div className="relative font-extrabold mt-5 mb-3 -translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
                <TextTitle>
                    Beautiful. Fast. Private.<br />Your Browser, Your Way.
                </TextTitle>
            </div>
            <div className="text-white absolute animate-fade-in top-[-5px] right-[-20px] transform shadow !rotate-[15deg] rounded-full mt-12 pointer-events-none hidden md:block bg-blue-500 px-3 py-1 w-fit h-fit opacity-0 [--animation-delay:400ms]">
                Alpha Version
            </div>
        </>
	);
}
