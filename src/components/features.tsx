'use client';
import Sticky from 'react-sticky-el';
import {
  BookmarkCheckIcon,
  CheckIcon,
  ChevronLeft,
  ChevronRight,
  ExternalLinkIcon,
  EyeIcon,
  EyeOffIcon,
  Github,
  HeartHandshake,
  HeartPulseIcon,
  HomeIcon,
  PaintBucket,
  PersonStanding,
  RabbitIcon,
  ShieldAlertIcon,
  ShieldCheck,
  SidebarCloseIcon,
  SidebarIcon,
  SidebarOpenIcon,
  SpaceIcon,
  SplitSquareHorizontal,
  SplitSquareVertical,
  SplitSquareVerticalIcon,
  TableIcon,
  XIcon,
} from 'lucide-react';
import {
  Cross1Icon,
  EyeClosedIcon,
  HeartFilledIcon,
  Link1Icon,
  LockClosedIcon,
  QuestionMarkCircledIcon,
  QuestionMarkIcon,
  ReloadIcon,
  SpaceBetweenHorizontallyIcon,
  UpdateIcon,
} from '@radix-ui/react-icons';
import Image from "next/legacy/image";
import Link from 'next/link';
import { Button } from './ui/button';
import { COLORS } from './create-theme';
import { Slider } from './ui/slider';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import React, { useState } from 'react';
import { ny } from '@/lib/utils';
import ThemeCard from './theme-card';
import { getAllThemes, ZenTheme } from '@/lib/themes';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import Logo from './logo';
import CachedImage from './CachedImage';
import { transform } from 'next/dist/build/swc';

function Checkmark() {
  return (
    <CheckIcon className="text-black rounded-full bg-green-500 dark:bg-green-400 p-1 w-7 h-7 flex-none" />
  );
}

function Cross() {
  return (
    <XIcon className="text-black rounded-full bg-red-500 dark:bg-red-400 p-1 w-7 h-7" />
  );
}

function Question() {
  return (
    <QuestionMarkIcon className="text-black rounded-full bg-yellow-500 dark:bg-yellow-400 p-1 w-7 h-7" />
  );
}

export default function Features() {
  const [feature, setFeature] = useState("item-1");
  return (
    <section className="flex-col w-full" id="features">
      <div className='w-full md:w-5/6 lg:w-3/4 flex flex-col lg:flex-row md:rounded-md mx-auto bg-surface mt-16 shadow'>
        <div className="p-5 lg:p-12 flex-1">
          <div className="flex p-12 flex-col justify-center">
            <h3 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Your Browser, your way <PaintBucket className='inline w-10 h-10'></PaintBucket></h3>
            <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>With Zen's Theme Store, you can customize your browsing experience to reflect your unique style and preferences. Choose from a wide array of themes, colors, and layouts to make Zen truly your own, transforming your browser into a personalized digital space.</p>
            <div className="relative">
              <Button className='mt-8' onClick={() => window.open('/themes', '_self')}>View Theme Store</Button>
            </div>
          </div>
          <hr />
          <div className="flex p-12 flex-col justify-center">
            <h3 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Always up to date <UpdateIcon className='inline w-10 h-10'></UpdateIcon></h3>
            <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>Zen Browser is always up to date, ensuring that you have the latest features and security updates. With automatic updates, you can rest easy knowing that your browser is secure and up to date.</p>
            <div className="relative">
              <Button className='mt-8' onClick={() => window.open('/download', '_self')}>Download Now</Button>
            </div>
          </div>
        </div>

        <div className="border-t lg:border-t-0 lg:border-l h-[1px] lg:h-[unset] lg:w-[1px] mx-2"></div>
        <div className="p-5 lg:p-12 flex-1">
          <div className="flex p-12 flex-col justify-center">
            <h3 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Community driven and Open Source <Link1Icon className='inline w-10 h-10'></Link1Icon></h3>
            <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>Zen thrives on the contributions of its vibrant community. As an open-source project, Zen encourages collaboration and innovation, allowing users and developers alike to shape the future of the browser.</p>
            <div className='relative'>
              <Button className='mt-8' onClick={() => window.open('https://github.com/zen-browser', '_blank')}>GitHub Page</Button>
            </div>
            <div className='w-full mt-14'>
              <div className='flex items-center'>
                <Checkmark />
                <p className='ml-2 text-gray-600 dark:text-gray-300'>Firefox Based</p>
              </div>
              <div className='flex items-center mt-5'>
                <Checkmark />
                <p className='ml-2 text-gray-600 dark:text-gray-300'>Fully Open source</p>
              </div>
              <div className='flex items-center mt-5'>
                <Checkmark />
                <p className='ml-2 text-gray-600 dark:text-gray-300'>Automated Releases to ensure security</p>
              </div>
              <div className='flex items-center mt-5'>
                <Checkmark />
                <p className='ml-2 text-gray-600 dark:text-gray-300'>Community driven</p>
              </div>
              <div className='flex items-center mt-5'>
                <Checkmark />
                <p className='ml-2 text-gray-600 dark:text-gray-300'>Constantly improving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full md:w-5/6 lg:w-3/4 flex flex-col lg:flex-row md:rounded-md mx-auto bg-surface mt-36 shadow'>
        <div className='p-16 lg:w-1/2 flex flex-col justify-center'>
          <h1 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Built for simplicity <EyeIcon className='inline w-8 h-8'></EyeIcon></h1>
          <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>Zen Browser is designed to be simple and easy to use. It's built with the user in mind, so you can focus on what matters most.</p>
          <div className='w-full mt-8'>
            <div className='flex items-center'>
              <Checkmark />
              <p className='ml-2 text-gray-600 dark:text-gray-300'>Completely Customizable</p>
            </div>
            <div className='flex items-center mt-4'>
              <Checkmark />
              <p className='ml-2 text-gray-600 dark:text-gray-300'>Vertical Tabs</p>
            </div>
            <div className='flex items-center mt-4'>
              <Checkmark />
              <p className='ml-2 text-gray-600 dark:text-gray-300'>Thoughtful Design</p>
            </div>
          </div>
        </div>
        <CachedImage width={1350} height={900} src="www/public/browser-1.png" alt="Zen Browser" className="rounded-md lg:w-1/2 object-cover object-right" />
      </div>
      <div className='w-full md:w-5/6 lg:w-3/4 flex flex-col lg:flex-row md:rounded-md mx-auto bg-surface mt-36 shadow'>
        <CachedImage width={1350} height={900} src="www/public/browser-2.png" alt="Zen Browser" className="rounded-md lg:w-1/2 object-cover object-left" />
        <div className='p-16 lg:w-1/2 flex flex-col justify-center'>
          <h1 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Split Views <SplitSquareHorizontal className='inline w-8 h-8'></SplitSquareHorizontal></h1>
          <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>Zen Browser allows you to split your view into multiple panes, so you can work on multiple things at once. It's perfect for multitasking.</p>
          <div className="relative">
            <Button className='mt-8' onClick={() => window.open('/download', '_self')}>Download Now</Button>
          </div>
        </div>
      </div>
      <div className='w-full md:w-5/6 lg:w-3/4 p-5 lg:p-12 flex flex-col lg:flex-row md:rounded-md mx-auto bg-surface mt-36 shadow'>
        <div className="flex p-16 lg:w-1/2 flex-col justify-center">
          <h3 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Better tab management <BookmarkCheckIcon className='inline w-8 h-8'></BookmarkCheckIcon></h3>
          <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>Better tab management helps you stay organized and focused, reducing clutter and enhancing productivity</p>
          <div className='w-full mt-8'>
            <div className='flex items-center'>
              <Checkmark />
              <p className='ml-2 text-gray-600 dark:text-gray-300'>Workspaces</p>
            </div>
            <div className='flex items-center mt-4'>
              <Checkmark />
              <p className='ml-2 text-gray-600 dark:text-gray-300'>Fast profile switcher</p>
            </div>
            <div className='flex items-center mt-4'>
              <Checkmark />
              <p className='ml-2 text-gray-600 dark:text-gray-300'>Container Tabs</p>
            </div>
            <div className='flex items-center mt-4'>
              <Question />
              <p className='ml-2 text-gray-600 dark:text-gray-300'>Tab Groups (Coming Soon)</p>
            </div>
          </div>
        </div>
        <div className="border-t lg:border-t-0 lg:border-l h-[1px] lg:h-[unset] lg:w-[1px] mx-2"></div>
        <div className="flex p-16 lg:w-1/2 flex-col">
          <h3 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Security and Privacy is <span className='text-purple-500 font-bold'>important</span> to us <LockClosedIcon className='inline w-8 h-8'></LockClosedIcon></h3>
          <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>
            Zen is based on Firefox, ensuring that your browsing experience prioritizes security and privacy. With advanced tracking protection and minimal data collection, Zen keeps your online activity safe and secure, giving you peace of mind as you explore the web.
          </p>
          <div className="relative">
            <Button className='mt-8' variant="ghost" onClick={() => window.open('https://docs.zen-browser.app/security', '_blank')}>Security in Zen <ExternalLinkIcon className='opacity-50 h-4 w-4 ml-4' /></Button>
            <Button className='mt-8' variant="ghost" onClick={() => window.open('/privacy-policy', '_blank')}>Your Privacy <ExternalLinkIcon className='opacity-50 h-4 w-4 ml-4' /></Button>
          </div>
        </div>
      </div>
      <div className='w-full md:w-5/6 lg:w-3/4 flex flex-col lg:flex-row md:rounded-md mx-auto bg-surface mt-36 shadow'>
        <div className='p-16 lg:w-1/2 flex flex-col justify-center'>
          <h1 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Sidebar <SidebarIcon className='inline w-8 h-8 ml-1'></SidebarIcon></h1>
          <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>Zen Browser has a built-in sidebar that lets you quickly access your favorite websites, bookmarks, and more. It's the perfect way to stay organized.</p>
          <div className='w-full mt-8'>
            <div className='flex items-center'>
              <Checkmark />
              <p className='ml-2 text-gray-600 dark:text-gray-300'>Quick Access</p>
            </div>
            <div className='flex items-center mt-4'>
              <Checkmark />
              <p className='ml-2 text-gray-600 dark:text-gray-300'>Customizable</p>
            </div>
            <div className='flex items-center mt-4'>
              <Checkmark />
              <p className='ml-2 text-gray-600 dark:text-gray-300'>Easy to Use</p>
            </div>
          </div>
        </div>
        <CachedImage width={1350} height={900} src="www/public/browser-3.png" alt="Zen Browser" className="rounded-md lg:w-1/2 object-cover object-right" />
      </div>
      <div className='w-full md:w-5/6 lg:w-3/4 flex flex-col lg:flex-row md:rounded-md mx-auto bg-surface mt-36 shadow'>
        <CachedImage width={1350} height={900} src="www/public/browser-4.jpg" alt="Zen Browser" className="rounded-md lg:w-1/2 object-cover object-left" />
        <div className='p-16 lg:w-1/2 flex flex-col justify-center'>
          <h1 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Introducing Compact Mode <SidebarCloseIcon className='inline w-8 h-8'></SidebarCloseIcon></h1>
          <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>Zen Browser's compact mode gives you more screen real estate by hiding the title bar and tabs. It's perfect for when you need to focus on your work.</p>
          <div className="relative">
            <Button className='mt-8' onClick={() => window.open('/download', '_self')}>What are you waiting for?</Button>
          </div>
        </div>
      </div>
      <div className='w-full md:w-5/6 lg:w-3/4 flex flex-col lg:flex-row md:rounded-md mx-auto bg-surface mt-36 shadow'>
        <div className="relative w-full lg:w-1/2 p-5 lg:p-12 flex flex-col justify-center">
          <h1 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Frequently Asked Questions <QuestionMarkCircledIcon className='inline w-8 h-8'></QuestionMarkCircledIcon></h1>
          <Accordion type="single" value={feature} onValueChange={setFeature} defaultValue="item-1" className='mt-8'>
            <AccordionItem value="item-1">
              <AccordionTrigger>is it firefox based?</AccordionTrigger>
              <AccordionContent>
                Yes, Zen Browser is focused on being always at the latest version of Firefox, ensuring that you have the latest security updates and features.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Does it track me?</AccordionTrigger>
              <AccordionContent>
                <strong>No!</strong> Zen Browser is built with privacy in mind. We don't track you, we don't collect your data, and we don't sell your data to third parties.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How secure is Zen Browser?</AccordionTrigger>
              <AccordionContent>
                Zen Browser is built on top of Firefox, which is known for its security features. We also have additional security features like https only built into Zen Browser to help keep you safe online.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="lg:w-1/2 h-auto rounded-md relative overflow-hidden">
          <CachedImage width={1350} height={900} src="www/public/feature-item-1.png" alt="Zen Browser" className="object-cover h-full w-full robject-right ounded-md" />
          {feature == "item-1" && (
            <div className='w-full h-full absolute top-0 left-0 grid grid-rows-3'>
              <div></div>
              <div className="w-fit h-fit m-auto tems-center bg-background p-4 border-2 border-white shadow flex rounded-full animate-fade-in">
                <Logo className='w-10 h-10' /> <span className='text-4xl mx-4'>+</span> <svg className='w-10 h-10 relative dark:fill-white' xmlns="http://www.w3.org/2000/svg" fill-opacity="context-fill-opacity"><path style={{ transform: "scale(2) translate(5%, 5%)" }} d="M10.39 0C8.948.788 7.987 2.025 7.767 3.66c-1.017.162-1.768.781-1.768.781s.72-.44 1.736-.511a4.04 4.04 0 0 1 3.789 2.034s-.758-.62-1.928-.468c1.315.68 1.872 2.002 1.701 3.369-.17 1.367-1.183 2.435-2.354 2.723-1.171.287-2.333.099-3.229-.61-.896-.708-1.251-1.533-1.305-2.254.213-.533.541-.812 1.1-1.092.558-.279 1.422-.283 1.572-.283s.8-.507.95-.894c-.726-.363-1.292-.65-1.696-.934-.404-.283-.492-.534-1.012-.898-.307-1.006-.021-1.955-.021-1.955s-1.043.437-1.93 1.49c0 0-.342-.338-.28-2.006-.427.155-1.366 1.004-1.947 1.92a7.277 7.277 0 0 0-.798 1.723A8.296 8.296 0 0 0-.003 8a8 8 0 0 0 16 0c0-2.256-.93-4.252-2.188-5.002 0 0 .542.932.813 2.43-.4-1.04-1.235-2.166-1.877-2.844-.643-.678-2.068-1.88-2.357-2.584z" /></svg>
              </div>
              <a href='https://github.com/zen-browser/desktop?tab=readme-ov-file#compatibility' target='_blank' className="w-fit h-fit m-auto items-center border-2 border-white shadow tems-center bg-background p-4 flex rounded-full opacity-0 animate-fade-in [--animation-delay:300ms]">
                See what version of Firefox Zen uses <ExternalLinkIcon className='opacity-50 h-4 w-4 ml-4' />
              </a>
            </div>
          )}
          {feature == "item-2" && (
            <div className='w-full h-full absolute top-0 left-0 grid grid-rows-3'>
              <div></div>
              <div className="w-fit h-fit m-auto tems-center bg-background p-4 border-2 border-white shadow flex rounded-full animate-fade-in">
                <LockClosedIcon className='w-10 h-10' /> <span className='text-4xl mx-4'>+</span> <EyeClosedIcon className='w-10 h-10' />
              </div>
              <a href='/privacy-policy' target='_blank' className="w-fit h-fit m-auto items-center border-2 border-white shadow tems-center bg-background p-4 flex rounded-full opacity-0 animate-fade-in [--animation-delay:300ms]">
                Learn about Zen's privacy policy <ExternalLinkIcon className='opacity-50 h-4 w-4 ml-4' />
              </a>
            </div>
          )}
          {feature == "item-3" && (
            <div className='w-full h-full absolute top-0 left-0 grid grid-rows-3'>
              <div></div>
              <div className="w-fit h-fit m-auto tems-center bg-background p-4 border-2 border-white shadow flex rounded-full animate-fade-in">
                <ShieldCheck className='w-10 h-10' /> <span className='text-4xl mx-4'>+</span> <ShieldAlertIcon className='w-10 h-10' />
              </div>
              <a href='https://docs.zen-browser.app/security' target='_blank' className="w-fit h-fit m-auto items-center w-fit border-2 border-white shadow tems-center bg-background p-4 flex rounded-full opacity-0 animate-fade-in [--animation-delay:300ms]">
                See how Zen keeps you safe <ExternalLinkIcon className='opacity-50 h-4 w-4 ml-4' />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className='w-full md:w-5/6 lg:w-3/4 p-5 lg:p-12 flex flex-col lg:flex-row md:rounded-md mx-auto bg-surface mt-36 shadow'>
        <div className="flex p-16 lg:w-1/2 flex-col justify-center">
          <h3 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Convinced?</h3>
          <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>Download Zen Browser now and experience the future of browsing.</p>
          <div className="relative">
            <Button className='mt-8' onClick={() => window.open('/download', '_self')}>Download Now</Button>
          </div>
        </div>
        <div className="border-t lg:border-t-0 lg:border-l h-[1px] lg:h-[unset] lg:w-[1px] mx-2"></div>
        <div className="flex p-16 lg:w-1/2 flex-col justify-center">
          <h3 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Even more convinced? <HeartHandshake className='inline text-red-500 h-10 w-10' /></h3>
          <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>Help support the development of Zen Browser by donating to our cause.</p>
          <div className="relative mt-8 flex">
            <Button variant="ghost" onClick={() => window.open('https://patreon.com/zen_browser', '_blank')}>Patreon <ExternalLinkIcon className='opacity-50 h-4 w-4 ml-4' /></Button>
            <Button className="ml-8" variant="ghost" onClick={() => window.open('https://ko-fi.com/zen_browser', '_blank')}>Ko-fi <ExternalLinkIcon className='opacity-50 h-4 w-4 ml-4' /></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
