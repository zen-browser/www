'use client'

import { SidebarOpen } from 'lucide-react'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import Logo from './logo'
import { ny } from '@/lib/utils'
import { components } from './navigation'

export function MobileNav() {
   const [open, setOpen] = React.useState(false);

   return (
      <Sheet open={open} onOpenChange={setOpen}>
         <SheetTrigger asChild>
            <div className="z-40 flex w-full items-center space-between sm:hidden">
               <Logo className="size-6 ml-4" />
               <Button
                  variant="ghost"
                  className="mr-2 px-0 ml-auto text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
               >
                  <SidebarOpen className="size-6" />
                  <span className="sr-only">Toggle Menu</span>
               </Button>
            </div>
         </SheetTrigger>
         <SheetContent side="left" className="pr-0">
            <MobileLink
               href="/"
               className="flex items-center"
               onOpenChange={setOpen}
            >
               <Logo withText />
            </MobileLink>
            <ScrollArea className="mt-4 h-[calc(100vh-8rem)] pl-6">
               <div className="flex flex-col space-y-3">
                  <MobileLink
                     href="/download"
                    onOpenChange={setOpen}
                  >
                    <div>Download</div>
                     <p className="opacity-60 text-xs">
                        Get the latest version of Zen Browser.
                     </p>
                  </MobileLink>
                  <MobileLink
                     href="/themes"
                    onOpenChange={setOpen}
                  >
                    <div>Theme Store</div>
                     <p className="opacity-60 text-xs">
                        Customize your browsing experience.
                     </p>
                  </MobileLink>
                  <MobileLink
                     href="/release-notes"
                    onOpenChange={setOpen}
                  >
                    <div>Release Notes</div>
                     <p className="opacity-60 text-xs">
                        Stay up to date with the latest changes.
                     </p>
                  </MobileLink>
                  <MobileLink
                     href="https://patreon.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
                     onOpenChange={setOpen}
                  >
                     <div>Donate {"<"}3</div>
                     <p className="opacity-60 text-xs">Support the project</p>
                  </MobileLink>
                  {components.map(({title, href, description}) => (
                     <MobileLink
                        href={href}
                        key={href}
                        onOpenChange={setOpen}
                     >
                        <div>{title}</div>
                        <p className='opacity-60 text-xs'>{description}</p>
                     </MobileLink>
                  ))}
                </div>
            </ScrollArea>
         </SheetContent>
      </Sheet>
   )
}

interface MobileLinkProps extends LinkProps {
   onOpenChange?: (open: boolean) => void
   children: React.ReactNode
   className?: string
}

function MobileLink({
   href,
   onOpenChange,
   className,
   children,
   ...props
}: MobileLinkProps) {
   const router = useRouter()
   return (
      <a
         href={href.toString()}
         onClick={() => {
            router.push(href.toString())
            onOpenChange?.(false)
         }}
         className={ny(className, "my-4")}
         {...props}
      >
         {children}
      </a>
   )
}