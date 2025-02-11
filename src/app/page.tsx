"use client"
import { FAQ } from "@/components/faq/FAQ";
import Banner from "@/components/home/Banner";

import FeaturedIn from "@/components/home/FeaturedIn";

import { DecryptoXLanding } from "@/components/home/howtobuy/DecryptoXLanding";
import Newsletter from "@/components/home/NewsLetter";
import OfferSection from "@/components/home/OfferSection";

import ProblemSection from "@/components/home/ProblemSection";
import Roadmap from "@/components/home/roadmap/Roadmap";
import SolutionSection from "@/components/home/SolutionSection";
import TeamSection from "@/components/home/Team";
import Tokenomics from "@/components/home/Tokenomics";
import WalletModal from "@/components/Modal";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any; // Declare 'google' globally
  }
}

const Home = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <PageBox>
      
      <WalletModal setIsOpen={setIsOpen} isOpen={isOpen} />
      <Banner id="home" />
      <FeaturedIn />
      <DecryptoXLanding id="howtobuy" />
     
      <ProblemSection  id="sol"/>
      <SolutionSection />
      <OfferSection id="features" />
      <Tokenomics id="tokenomics" />
      <Roadmap id="roadmap" />
      <TeamSection id="team" />
      <FAQ id="faq"/>
     

      <Newsletter />
     
     
    </PageBox>
  );
};

export default Home;
