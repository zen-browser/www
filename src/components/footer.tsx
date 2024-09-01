import socialLinks from "@/lib/social-links";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="border-grey align-center mt-10 flex w-full flex-col items-center justify-center gap-2 border-t px-10 py-10 font-medium md:px-0">
			Zen Browser © {new Date().getFullYear()} - Made with ❤️ by the Zen team.
			<a
				href={"https://github.com/zen-browser"}
				target="_blank"
				className="mt-5 font-bold md:ml-2 md:mt-0"
			>
				Source Code
			</a>
			<div className="mt-1.5 flex items-center justify-center gap-4">
				{socialLinks.map(({ link, icon }, i) => (
					<Link href={link} key={i}>
						{icon}
					</Link>
				))}
			</div>
		</div>
	);
}
