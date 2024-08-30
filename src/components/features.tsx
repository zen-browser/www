'use client';
import Sticky from 'react-sticky-el';
import {
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
  SpaceIcon,
  SplitSquareHorizontal,
  SplitSquareVertical,
  XIcon,
} from 'lucide-react';
import {
  Cross1Icon,
  EyeClosedIcon,
  HeartFilledIcon,
  Link1Icon,
  LockClosedIcon,
  QuestionMarkIcon,
  ReloadIcon,
  UpdateIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';
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

function Checkmark() {
  return (
    <CheckIcon className="text-black rounded-full bg-green-500 dark:bg-green-400 p-1 w-7 h-7" />
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
  const [feature, setFeature] = useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setFeature((feature) => (feature + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
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
            <img src="https://cdn.jsdelivr.net/gh/zen-browser/www/public/themes.webp" alt="Zen Browser" className="rounded-md mt-12" />
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
                <p className='ml-2 text-gray-600 dark:text-gray-300'>Automated Releases, to prove security</p>
              </div>
              <div className='flex items-center mt-5'>
                <Checkmark />
                <p className='ml-2 text-gray-600 dark:text-gray-300'>Comunity driven</p>
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
          <h1 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Built for simplicity</h1>
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
        <img src="https://cdn.jsdelivr.net/gh/zen-browser/www/public/browser-1.png" alt="Zen Browser" className="rounded-md lg:w-1/2" />
      </div>
      <div className='w-full md:w-5/6 lg:w-3/4 flex flex-col lg:flex-row md:rounded-md mx-auto bg-surface mt-36 shadow'>
        <img src="https://cdn.jsdelivr.net/gh/zen-browser/www/public/browser-2.png" alt="Zen Browser" className="rounded-md lg:w-1/2" />
        <div className='p-16 lg:w-1/2 flex flex-col justify-center'>
          <h1 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Split Views</h1>
          <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>Zen Browser allows you to split your view into multiple panes, so you can work on multiple things at once. It's perfect for multitasking.</p>
          <div className="relative">
            <Button className='mt-8' onClick={() => window.open('/download', '_self')}>Download Now</Button>
          </div>
        </div>
      </div>
      <div className='w-full md:w-5/6 lg:w-3/4 p-5 lg:p-12 flex flex-col lg:flex-row md:rounded-md mx-auto bg-surface mt-36 shadow'>
        <div className="flex p-16 lg:w-1/2 flex-col justify-center">
          <h3 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Better tab management</h3>
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
              <p className='ml-2 text-gray-600 dark:text-gray-300'>Tab Groups (Comming Soon)</p>
            </div>
          </div>
        </div>
        <div className="border-t lg:border-t-0 lg:border-l h-[1px] lg:h-[unset] lg:w-[1px] mx-2"></div>
        <div className="flex p-16 lg:w-1/2 flex-col">
          <h3 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Security And Privacy is <span className='text-purple-500 font-bold'>important</span> to us</h3>
          <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>
            Zen is based on Firefox, ensuring that your browsing experience prioritizes security and privacy. With advanced tracking protection and minimal data collection, Zen keeps your online activity safe and secure, giving you peace of mind as you explore the web.
          </p>
          <div className="relative">
            <Button className='mt-8' variant="ghost" onClick={() => window.open('/download', '_blank')}>Security in zen <ExternalLinkIcon className='opacity-50 h-4 w-4 ml-4' /></Button>
            <Button className='mt-8' variant="ghost" onClick={() => window.open('/privacy-policy', '_blank')}>Your Privacy <ExternalLinkIcon className='opacity-50 h-4 w-4 ml-4' /></Button>        
          </div>
        </div>
      </div>
      <div className='w-full md:w-5/6 lg:w-3/4 flex flex-col lg:flex-row md:rounded-md mx-auto bg-surface mt-36 shadow'>
        <div className='p-16 lg:w-1/2 flex flex-col justify-center'>
          <h1 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Sidebar</h1>
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
        <img src="https://cdn.jsdelivr.net/gh/zen-browser/www/public/browser-3.png" alt="Zen Browser" className="rounded-md lg:w-1/2" />
      </div>
      <div className='w-full md:w-5/6 lg:w-3/4 flex flex-col lg:flex-row md:rounded-md mx-auto bg-surface mt-36 shadow'>
        <img src="https://cdn.jsdelivr.net/gh/zen-browser/www/public/browser-4.jpg" alt="Zen Browser" className="rounded-md lg:w-1/2" />
        <div className='p-16 lg:w-1/2 flex flex-col justify-center'>
          <h1 className='text-4xl font-medium text-gray-800 dark:text-gray-100'>Introducing Compact Mode</h1>
          <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>Zen Browser's compact mode gives you more screen real estate by hiding the title bar and tabs. It's perfect for when you need to focus on your work.</p>
          <div className="relative">
            <Button className='mt-8' onClick={() => window.open('/download', '_self')}>What are you waiting for?</Button>
          </div>
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
