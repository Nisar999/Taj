import { HeroFolder } from '@/components/HeroFolder'
import { ClearanceSelector } from '@/components/ClearanceSelector'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroFolder />
      <ClearanceSelector />
    </>
  )
}
