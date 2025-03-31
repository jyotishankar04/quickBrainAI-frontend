import React, { useEffect } from "react";
import HomeNav from "../../components/_home/HomeNav";
import HeroSection from "../../components/_home/HomeHero";
import HowItWorks from "../../components/_home/HowItWorks";
import PricingSection from "../../components/_home/PricingCard";
import Faq from "../../components/_home/Faq";
import CtaSec from "../../components/_home/CtaSec";

import SecondPage from "../../components/_home/secondpage";
import HeroTestomonial from "../../components/_home/HeroTestomonial";
import HomeFooter from "../../components/_home/HomeFooter";
import MainChatBot from "../../components/_home/_aichatbot/MainChatBot";

// import NoteTakingFeatures from '../../components/_home/toppara'

// import FeaturesGrid from '../../components/_home/sixcards'
// import AIPlaygroundSection from '../../components/_home/playsection'
const Home = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return (
    <div className="">
      <HomeNav />
      <HeroSection />
      <MainChatBot />
      <div className="container mx-auto px-4">
        <SecondPage />
        <HowItWorks />
        <PricingSection />

        <HeroTestomonial />
        <Faq />

        <CtaSec />
      </div>
      <HomeFooter />

      {/* <NoteTakingFeatures />
        <FeaturesGrid />
        <AIPlaygroundSection /> */}
    </div>
  );
};

export default Home;
