import Link from "next/link";
import Logo from "./logo";
import TextReveal from "./ui/text-reveal";

export default function Footer() {
	return (
		<div className="border-grey align-center mt-10 flex w-full flex-col justify-center border-t px-10 py-10 font-medium md:flex-row md:px-0">
			Zen Browser © {new Date().getFullYear()} - Made with ❤️ by the Zen team.
			<Link
				href={"https://github.com/zen-browser"}
				target="_blank"
				className="mt-5 font-bold md:ml-2 md:mt-0"
			>
				Source Code
			</Link>
		</div>
	);
}
