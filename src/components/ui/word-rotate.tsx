'use client'

import type { HTMLMotionProps } from 'framer-motion'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { ny } from '@/lib/utils'

interface WordRotateProps {
   words: string[]
   duration?: number
   framerProps?: HTMLMotionProps<'h1'>
   className?: string
   colors?: string[]
   icons?: React.ReactNode[]
}

export default function WordRotate({
   words,
   duration = 2500,
   framerProps = {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      transition: { duration: 0.25, ease: 'easeOut' },
   },
   className,
   colors,
   icons,
}: WordRotateProps) {
   const [index, setIndex] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex(prevIndex => (prevIndex + 1) % words.length)
      }, duration)

      // Clean up interval on unmount
      return () => clearInterval(interval)
   }, [words, duration])

   return (
      <div className="overflow-hidden inline-block">
         <AnimatePresence mode="wait">
            <motion.h1
               key={words[index]}
               className={ny(className, `text-${colors?.[index] ?? 'primary'}-500 flex items-center bg-${colors?.[index] ?? 'primary'}-100 dark:bg-transparent dark:border-2 dark:border-${colors?.[index] ?? 'primary'}-700 rounded-full px-4 py-2`)}
               {...framerProps}
            >
               {icons?.[index]}
               {words[index]}
            </motion.h1>
         </AnimatePresence>
      </div>
   )
}
