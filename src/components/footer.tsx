import Link from "next/link";
import Logo from "./logo";
import TextReveal from "./ui/text-reveal";

export default function Footer() {
  return (
    <div className="font-medium flex-col md:flex-row px-10 md:px-0 border-t w-full border-grey py-10 mt-10 flex justify-center align-center">
      Zen Browser © {new Date().getFullYear()} - Made with ❤️ by the Zen team.
      <Link
        href={"https://github.com/zen-browser"}
        target="_blank"
        className="mt-5 md:mt-0 md:ml-2 font-bold"
      >
        Source Code
      </Link>
    </div>
  );
}
