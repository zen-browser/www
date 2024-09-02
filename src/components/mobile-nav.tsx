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
import { useTranslations } from 'next-intl'

export function MobileNav() {
   const [open, setOpen] = React.useState(false);
   const t = useTranslations('mobile-nav');
   const t2 = useTranslations('navigation');

   const translatedComponents = components.map(component => ({
      title: t2(component.titleKey),
      href: component.href,
      description: t2(component.descriptionKey),
    }));

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
                  <span className="sr-only">{t('mobile-menu-button')}</span>
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
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
               <div className="flex flex-col space-y-3">
                  <MobileLink
                     href="/download"
                    onOpenChange={setOpen}
                  >
                    {t('mobile-download-link')}
                  </MobileLink>
                  <MobileLink
                     href="/themes"
                    onOpenChange={setOpen}
                  >
                    {t('mobile-theme-store-link')}
                  </MobileLink>
                  <MobileLink
                     href="/release-notes"
                    onOpenChange={setOpen}
                  >
                    {t('mobile-release-notes-link')}
                  </MobileLink>
                  <MobileLink
                     href="https://patreon.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
                     onOpenChange={setOpen}
                  >
                     {t('mobile-donate-link')} {"<"}3
                  </MobileLink>
                  {translatedComponents.map(({title, href, description}) => (
                     <MobileLink
                        href={href}
                        key={href}
                        onOpenChange={setOpen}
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
            onOpenChange?.(false)
         }}
         className={ny(className)}
         {...props}
      >
         {children}
      </a>
   )
}