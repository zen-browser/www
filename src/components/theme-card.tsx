import { getThemeAuthorLink, ZenTheme } from "@/lib/themes";
import styled from "styled-components";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ny } from "@/lib/utils";

const ThemeCardWrapper = styled.div``;

export default function ThemeCard({
	theme,
	className,
}: {
	theme: ZenTheme;
	className?: string;
}) {
	const maxNameLen = 50;
	const maxDescLen = 100;

	return (
		<ThemeCardWrapper
			onClick={(event) => {
				if (event.target instanceof HTMLAnchorElement) return;
				window.open(`/themes/${theme.id}`, "_self");
			}}
			className={ny(
				"border-grey-900 flex w-full cursor-pointer select-none flex-col justify-start rounded-lg border bg-muted p-5 shadow-sm transition duration-300 ease-in-out hover:border-blue-500 hover:bg-surface hover:shadow-lg dark:border-muted dark:bg-muted/50",
				className,
			)}
		>
			<img
				src={theme.image}
				alt={theme.name}
				width={500}
				height={500}
				className="h-32 w-full rounded-lg border object-cover shadow"
			/>
			<h2 className="mt-4 overflow-ellipsis text-start text-xl font-bold">
				{theme.name.substring(0, maxNameLen).trim() +
					(theme.name.length > maxNameLen ? "..." : "")}
			</h2>
			<div className="mt-2 flex">
				{theme.homepage && (
					<>
						<a
							href={theme.homepage}
							className="text-md text-blue-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							Homepage
						</a>
						<span className="text-md mx-2 text-muted-foreground">{"·"}</span>
					</>
				)}
				<a
					href={getThemeAuthorLink(theme)}
					className="text-md text-blue-500"
					target="_blank"
					rel="noopener noreferrer"
				>
					Author
				</a>
			</div>
			<p className="text-md mt-2 overflow-ellipsis text-start text-muted-foreground">
				{theme.description.substring(0, maxDescLen).trim() +
					(theme.description.length > maxDescLen ? "..." : "")}
			</p>
		</ThemeCardWrapper>
	);
}
