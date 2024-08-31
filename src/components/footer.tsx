import Link from "next/link";
import Logo from "./logo";
import TextReveal from "./ui/text-reveal";
import { DiscordIcon, MastodonIcon, RedditIcon } from "./Icons";

export default function Footer() {
  return (
    <div className="font-medium flex-col items-center px-10 md:px-0 border-t w-full border-grey py-10 mt-10 flex justify-center align-center gap-2">
      Zen Browser © {new Date().getFullYear()} - Made with ❤️ by the Zen team.
      <a
        href={"https://github.com/zen-browser"}
        target="_blank"
        className="mt-5 md:mt-0 md:ml-2 font-bold"
      >
        Source Code
      </a>
      <div className="flex items-center gap-4 justify-center mt-1.5">
        {
          [{
            link: "https://reddit.com/r/zen_browser/",
            icon: <RedditIcon className="w-6 h-6 fill-white" />,
          },
          {
            link: "https://discord.gg/nnShMQzR4b",
            icon: <DiscordIcon className="w-6 h-6 fill-white" />,
          },
          {
            link: "https://mastodon.social/@zenbrowser",
            icon: <MastodonIcon className="w-6 h-6 fill-white" />,
          }].map(({ link, icon }, i) => (
            <Link href={link} key={i}>
              {icon}
            </Link>
          ))
        }
      </div>
    </div>
  );
}
