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
	padding-bottom: 8px;
`;

export default function CoolHeaderText() {
	return (
		<>
			<div className="relative mb-3 mt-5 -translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-extrabold font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
				<TextTitle>
					Beautiful. Fast. Private.
					<br />
					Your Browser, Your Way.
				</TextTitle>
			</div>
			<div className="pointer-events-none absolute right-[-20px] top-[-5px] mt-12 hidden h-fit w-fit !rotate-[15deg] transform animate-fade-in rounded-full bg-blue-500 px-3 py-1 text-white opacity-0 shadow [--animation-delay:400ms] md:block">
				Alpha Version
			</div>
		</>
	);
}
