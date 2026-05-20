'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BriefcaseLanding } from '@/components/BriefcaseLanding'
import { HomePage } from '@/components/HomePage'

export default function Home() {
  const [isArchiveOpened, setIsArchiveOpened] = useState(false)

  const handleOpenArchive = () => {
    setIsArchiveOpened(true)
  }

  return (
    <AnimatePresence mode="wait">
      {!isArchiveOpened ? (
        <BriefcaseLanding key="briefcase" onOpen={handleOpenArchive} />
      ) : (
        <HomePage key="home" />
      )}
    </AnimatePresence>
  )
}
