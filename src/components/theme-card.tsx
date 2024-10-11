import { getThemeAuthorLink, ZenTheme } from "@/lib/themes";
import styled from "styled-components";


import { ny } from "@/lib/utils";
import Link from "next/link";

const ThemeCardWrapper = styled.a``;

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
		<Link href={`/themes/${theme.id}`} prefetch={false} passHref legacyBehavior>
			<ThemeCardWrapper
			className={ny(
				"flex w-full cursor-pointer select-none flex-col justify-start bg-surface rounded-xl border-2 border-[transparent] hover:shadow-lg hover:border-[rgba(0,0,0,.5)] dark:bg-[#121212] dark:hover:border-[#333] transition-all duration-200",
				className,
			)}
		>
			<div className="w-full p-5">
				<h2 className="mt-4 overflow-ellipsis text-start text-xl font-bold">
					{theme.name.substring(0, maxNameLen).trim() +
						(theme.name.length > maxNameLen ? "..." : "")}
				</h2>
				<div className="mt-2 flex">
					{theme.homepage && (
						<>
								<object>
									<a
								href={theme.homepage}
								className="text-md text-blue-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								Homepage
									</a>
								</object>
							<span className="text-md mx-2 text-muted-foreground">{"·"}</span>
						</>
					)}
						<object>
							<a
						href={getThemeAuthorLink(theme)}
						className="text-md text-blue-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						Author
							</a>
						</object>
				</div>
				<p className="text-md mt-2 overflow-ellipsis text-start text-muted-foreground">
					{theme.description.substring(0, maxDescLen).trim() +
						(theme.description.length > maxDescLen ? "..." : "")}
				</p>
			</div>
			</ThemeCardWrapper>
		</Link>
	);
}
