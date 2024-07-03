import Logo from "./logo";
import TextReveal from "./ui/text-reveal";

export default function Footer() {
  return (
    <div className="font-medium border-t w-full border-grey py-10 mt-10 flex justify-center align-center">
        Zen Browser © {new Date().getFullYear()} - 
        Made with ❤️ by the Zen team.  
        <a className="ml-2 font-bold" href="https://github.com/zen-browser" target="_blank">Source Code</a>
    </div>
  );
}
