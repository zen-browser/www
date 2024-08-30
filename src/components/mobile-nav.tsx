"use client"

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
import { jsonData } from './navigation'
import { HeartFilledIcon } from "@radix-ui/react-icons"
import Socials from './socials'
import { buttonVariants } from "@/components/ui/button"
import { useTranslations } from "next-intl";

export function MobileNav() {

   const t = useTranslations('navigation');

   return (
      <Sheet>
         <div className="z-40 flex w-full items-center justify-between sm:hidden">
            <SheetTrigger>
                  <div className="grid gap-4 grid-cols-2 items-center">
                     <div
                        className={ny(
                           buttonVariants({
                           variant: "ghost",
                           }),
                           "h-8 w-8 px-0 ml-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                        )}
                     >
                        <SidebarOpen className="size-6" />
                        <span className="sr-only">Toggle Menu</span>
                     </div>
                     <Logo className="size-6" />
                  </div>
            </SheetTrigger>
            <Socials />
         </div>
         <SheetContent side="left" className="pr-0">
            <MobileLink
               href="/"
               className="flex items-center"
            >
               <Logo withText />
            </MobileLink>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
               <div className="flex flex-col space-y-2">
                  <div className="flex flex-col space-y-3 pt-6">
                     <h4 className="font-medium">{t('getting-started')}</h4>
                  </div>
                  {jsonData.mainLinks.map(({title, href}) => (
                     <MobileLink
                        href={href}
                        key={href}
                        className="text-muted-foreground"
                     >
                        {title}
                     </MobileLink>
                  ))}
               </div>
               <div className="flex flex-col space-y-2">
                  <div className="flex flex-col space-y-3 pt-6">
                     <h4 className="inline-flex items-center font-medium">              
                        {t('donate')}
                        <HeartFilledIcon className="ml-2 text-red-500" />
                     </h4>
                  </div>
                  {jsonData.donationLinks.map(({title, href}) => (
                     <MobileLink
                        href={href}
                        key={href}
                        className="text-muted-foreground"
                     >
                        {title}
                     </MobileLink>
                  ))}
               </div>
               <div className="flex flex-col space-y-2">
               <div className="flex flex-col space-y-3 pt-6">
                  <h4 className="font-medium">{t('resources')}</h4>
               </div>
               {jsonData.usefulLinks.map(({title, href}) => (
                  <MobileLink
                     href={href}
                     key={href}
                     className="text-muted-foreground"
                  >
                     {title}
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
         }}
         className={ny(className)}
         {...props}
      >
         {children}
      </a>
   )
}