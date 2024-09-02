
import Link from "next/link";
import Logo from "./logo";
import TextReveal from "./ui/text-reveal";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { MastodonLogo } from "./icons/mastodon";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="font-medium px-10 md:px-0 border-t w-full border-grey py-10 mt-10 flex align-center flex-col">
      <div className="flex mx-auto px-10 lg:px-0 border-b pb-10 justify-between pt-10 w-full lg:!w-2/3">
        <div className="flex flex-col">
          <Logo />
          <div className="mt-auto">
            <h1 className="text-2xl font-bold opacity-80">Zen Browser</h1>
            <h2 className="text-md font-bold opacity-80 mt-6">Follow Us</h2>
            <div className="flex mt-4 opacity-70">
              <a href="https://github.com/zen-browser">
                <GitHubLogoIcon className="w-5 h-5" />
              </a>
              <a href="https://discord.com/servers/mauro-s-little-sweatshop-1088172780480114748" className="ml-5">
                <DiscordLogoIcon className="w-5 h-5" />
              </a>
              <a href="https://fosstodon.org/@zenbrowser" className="ml-5">
                <MastodonLogo className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div>
            <h2 className="text-md font-bold opacity-80">Get Started</h2>
            <ul className="mt-4 opacity-70 font-normal">
              <li>
                <a href="/themes">
                  Themes
                </a>
              </li>
              <li className="mt-2">
                <a href="/download">
                  Download
                </a>
              </li>
              <li className="mt-2">
                <a href="/create-theme">
                  Create a Theme
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0 md:ml-12 lg:ml-24">
            <h2 className="text-md font-bold opacity-80">Get Help</h2>
            <ul className="mt-4 opacity-70 font-normal">
              <li>
                <a href="https://discord.com/invite/mauro-s-little-sweatshop">
                  Discord
                </a>
              </li>
              <li className="mt-2 font-normal">
                <a href="https://github.com/zen-browser/desktop/issues">
                  Report an Issue
                </a>
              </li>
            </ul>
            <h2 className="text-md font-bold opacity-80 mt-8">About</h2>
            <ul className="mt-4 opacity-70 font-normal">
              <li className="mt-2">
                <a href="/about">
                  About Us
                </a>
              </li>
              <li className="mt-2">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0 md:ml-12 lg:ml-24">
            <h2 className="text-md font-bold opacity-80">Resources</h2>
            <ul className="mt-4 opacity-70 font-normal">
              <li>
                <a href="/branding-assets">Branding Assets</a>
              </li>
              <li className="mt-2">
                <a href="https://github.com/zen-browser/desktop">Source Code</a>
              </li>
              <li className="mt-2">
                <a href="https://docs.zen-browser.app">Documentation</a>
              </li>
              <li className="mt-2">
                <a href="/release-notes">Release Notes</a>
              </li>
            </ul>
            <h2 className="text-md font-bold opacity-80 mt-8">Support Us</h2>
            <ul className="mt-4 opacity-70 font-normal">
              <li>
                <a href="https://patreon.com/zen_browser">Patreon</a>
              </li>
              <li className="mt-2">
                <a href="https://ko-fi.com/zen_browser">Ko-fi</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full pt-10 pr-5 pl-3 mx-auto lg:!w-2/3 items-center">
        <p className="text-xs font-normal opacity-30">Crafted with ❤️ by the community - Copyright © {new Date().getFullYear()} Zen Browser</p>
        <a href="/download" className="ml-auto">
          <Button className="ml-auto">Download</Button>
        </a>
      </div>
    </div>
  );
}
