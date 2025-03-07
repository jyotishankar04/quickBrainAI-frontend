import React from 'react'
import HomeNav from '../../components/_home/HomeNav'
import HeroSection from '../../components/_home/HomeHero'
import HowItWorks from '../../components/_home/HowItWorks'
import PricingSection from '../../components/_home/PricingCard'
import Faq from '../../components/_home/Faq'
import CtaSec from '../../components/_home/CtaSec'

const Home = () => {
  return (
    <div>
        <HomeNav />
        <HeroSection/>
        <HowItWorks/>
        <PricingSection />
        <Faq />
        <CtaSec />
    </div>
  )
}

export default Home