'use client'

import CachedImage from "@/components/CachedImage";
import Logo from "@/components/logo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLinkIcon, EyeClosedIcon, LockClosedIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { ShieldCheck, ShieldAlertIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const FAQ = () => {
    const [feature, setFeature] = useState("");
    
	return (
		<div className="mx-auto mt-36 flex w-full flex-col bg-surface shadow md:w-5/6 md:rounded-md lg:w-3/4 lg:flex-row">
			<div className="relative flex w-full flex-col justify-center p-5 lg:w-1/2 lg:p-12">
				<h1 className="text-4xl font-medium text-gray-800 dark:text-gray-100">
					Frequently Asked Questions{" "}
					<QuestionMarkCircledIcon className="inline h-8 w-8"></QuestionMarkCircledIcon>
				</h1>
				<Accordion
					type="single"
					value={feature}
					onValueChange={(value) => setFeature(value === feature ? "" : value)}
					className="mt-8"
				>
					<AccordionItem value="item-1">
						<AccordionTrigger>Is it Firefox based?</AccordionTrigger>
						<AccordionContent>
							Yes, Zen Browser is focused on being always at the latest version
							of Firefox, ensuring that you have the latest security updates and
							features.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Does it track me?</AccordionTrigger>
						<AccordionContent>
							<strong>No!</strong> Zen Browser is built with privacy in mind. We
							don't track you, we don't collect your data, and we don't sell
							your data to third parties.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>How secure is Zen Browser?</AccordionTrigger>
						<AccordionContent>
							Zen Browser is built on top of Firefox, which is known for its
							security features. We also have additional security features like
							HTTPS only built into Zen Browser to help keep you safe online.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>

			<div className="relative h-auto overflow-hidden rounded-md lg:w-1/2">
				{feature === "" && (
					<div className="absolute flex h-full w-full items-center justify-center">
						<div className="flex w-full flex-col items-center justify-center space-y-6">
							<div className="flex h-fit w-full max-w-sm animate-fade-in items-center justify-center rounded-full border-2 border-white bg-surface p-4 shadow">
								<Logo className="h-10 w-10" />
								<span className="mx-4 text-4xl">+</span>
								<svg
									className="relative h-10 w-10 dark:fill-white"
									xmlns="http://www.w3.org/2000/svg"
									fillOpacity="context-fill-opacity"
								>
									<path
										style={{ transform: "scale(2) translate(5%, 5%)" }}
										d="M10.39 0C8.948.788 7.987 2.025 7.767 3.66c-1.017.162-1.768.781-1.768.781s.72-.44 1.736-.511a4.04 4.04 0 0 1 3.789 2.034s-.758-.62-1.928-.468c1.315.68 1.872 2.002 1.701 3.369-.17 1.367-1.183 2.435-2.354 2.723-1.171.287-2.333.099-3.229-.61-.896-.708-1.251-1.533-1.305-2.254.213-.533.541-.812 1.1-1.092.558-.279 1.422-.283 1.572-.283s.8-.507.95-.894c-.726-.363-1.292-.65-1.696-.934-.404-.283-.492-.534-1.012-.898-.307-1.006-.021-1.955-.021-1.955s-1.043.437-1.93 1.49c0 0-.342-.338-.28-2.006-.427.155-1.366 1.004-1.947 1.92a7.277 7.277 0 0 0-.798 1.723A8.296 8.296 0 0 0-.003 8a8 8 0 0 0 16 0c0-2.256-.93-4.252-2.188-5.002 0 0 .542.932.813 2.43-.4-1.04-1.235-2.166-1.877-2.844-.643-.678-2.068-1.88-2.357-2.584z"
									/>
								</svg>
							</div>
							<div className="flex h-fit w-full max-w-sm animate-fade-in items-center justify-center rounded-full border-2 border-white bg-surface p-4 shadow">
								<LockClosedIcon className="h-10 w-10" />
								<span className="mx-4 text-4xl">+</span>
								<EyeClosedIcon className="h-10 w-10" />
							</div>
							<div className="flex h-fit w-full max-w-sm animate-fade-in items-center justify-center rounded-full border-2 border-white bg-surface p-4 shadow">
								<ShieldCheck className="h-10 w-10" />
								<span className="mx-4 text-4xl">+</span>
								<ShieldAlertIcon className="h-10 w-10" />
							</div>
						</div>
					</div>
				)}

				<CachedImage
					width={1350}
					height={900}
					src="www/public/feature-item-1.png"
					alt="Zen Browser"
					className="robject-right ounded-md h-full w-full object-cover"
				/>
				{feature === "item-1" && (
					<div className="absolute left-0 top-0 grid h-full w-full grid-rows-3">
						<div></div>
						<div className="tems-center m-auto flex h-fit w-fit animate-fade-in rounded-full border-2 border-white bg-surface p-4 shadow">
							<Logo className="h-10 w-10" />{" "}
							<span className="mx-4 text-4xl">+</span>{" "}
							<svg
								className="relative h-10 w-10 dark:fill-white"
								xmlns="http://www.w3.org/2000/svg"
								fillOpacity="context-fill-opacity"
							>
								<path
									style={{ transform: "scale(2) translate(5%, 5%)" }}
									d="M10.39 0C8.948.788 7.987 2.025 7.767 3.66c-1.017.162-1.768.781-1.768.781s.72-.44 1.736-.511a4.04 4.04 0 0 1 3.789 2.034s-.758-.62-1.928-.468c1.315.68 1.872 2.002 1.701 3.369-.17 1.367-1.183 2.435-2.354 2.723-1.171.287-2.333.099-3.229-.61-.896-.708-1.251-1.533-1.305-2.254.213-.533.541-.812 1.1-1.092.558-.279 1.422-.283 1.572-.283s.8-.507.95-.894c-.726-.363-1.292-.65-1.696-.934-.404-.283-.492-.534-1.012-.898-.307-1.006-.021-1.955-.021-1.955s-1.043.437-1.93 1.49c0 0-.342-.338-.28-2.006-.427.155-1.366 1.004-1.947 1.92a7.277 7.277 0 0 0-.798 1.723A8.296 8.296 0 0 0-.003 8a8 8 0 0 0 16 0c0-2.256-.93-4.252-2.188-5.002 0 0 .542.932.813 2.43-.4-1.04-1.235-2.166-1.877-2.844-.643-.678-2.068-1.88-2.357-2.584z"
								/>
							</svg>
						</div>
						<a
							href="https://github.com/zen-browser/desktop?tab=readme-ov-file#compatibility"
							target="_blank"
							rel="noopener noreferrer"
							className="tems-center m-auto flex h-fit w-fit animate-fade-in items-center rounded-full border-2 border-white bg-surface p-4 opacity-0 shadow [--animation-delay:300ms]"
						>
							See what version of Firefox Zen uses{" "}
							<ExternalLinkIcon className="ml-4 h-4 w-4 opacity-50" />
						</a>
					</div>
				)}

				{feature === "item-2" && (
					<div className="absolute left-0 top-0 grid h-full w-full grid-rows-3">
						<div></div>
						<div className="tems-center m-auto flex h-fit w-fit animate-fade-in rounded-full border-2 border-white bg-surface p-4 shadow">
							<LockClosedIcon className="h-10 w-10" />{" "}
							<span className="mx-4 text-4xl">+</span>{" "}
							<EyeClosedIcon className="h-10 w-10" />
						</div>
						<Link
							href="/privacy-policy"
							target="_blank"
							className="tems-center m-auto flex h-fit w-fit animate-fade-in items-center rounded-full border-2 border-white bg-surface p-4 opacity-0 shadow [--animation-delay:300ms]"
							prefetch={false}
						>
							Learn about Zen's privacy policy{" "}
							<ExternalLinkIcon className="ml-4 h-4 w-4 opacity-50" />
						</Link>
					</div>
				)}

				{feature === "item-3" && (
					<div className="absolute left-0 top-0 grid h-full w-full grid-rows-3">
						<div></div>
						<div className="tems-center m-auto flex h-fit w-fit animate-fade-in rounded-full border-2 border-white bg-surface p-4 shadow">
							<ShieldCheck className="h-10 w-10" />{" "}
							<span className="mx-4 text-4xl">+</span>{" "}
							<ShieldAlertIcon className="h-10 w-10" />
						</div>
						<a
							href="https://docs.zen-browser.app/security"
							target="_blank"
							className="tems-center m-auto flex h-fit w-fit animate-fade-in items-center rounded-full border-2 border-white bg-surface p-4 opacity-0 shadow [--animation-delay:300ms]"
						>
							See how Zen keeps you safe{" "}
							<ExternalLinkIcon className="ml-4 h-4 w-4 opacity-50" />
						</a>
					</div>
				)}
			</div>
		</div>
	);
};
