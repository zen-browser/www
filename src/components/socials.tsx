import React from 'react'
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ModeToggle } from './mode-toggle';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Socials() {
  return (
    <div>
        <Link
              href="https://github.com/zen-browser"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon">
                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]"/>
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://discord.gg/nnShMQzR4b"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon">
                <DiscordLogoIcon className="h-[1.2rem] w-[1.2rem]"/>
                <span className="sr-only">Twitter</span>
              </Button>
        </Link>
        <ModeToggle />
    </div>
  )
}
