import React from 'react'
import HomeNav from '../../components/_home/HomeNav'
import HeroSection from '../../components/_home/HomeHero'
import SecondPage from '../../components/_home/secondpage'
// import NoteTakingFeatures from '../../components/_home/toppara'

// import FeaturesGrid from '../../components/_home/sixcards'
// import AIPlaygroundSection from '../../components/_home/playsection'
const Home = () => {
  return (
    <div>
        <HomeNav />
        <HeroSection/>
        <SecondPage /> 
        {/* <NoteTakingFeatures />
        <FeaturesGrid />
        <AIPlaygroundSection /> */}
    </div>
  )
}

export default Home