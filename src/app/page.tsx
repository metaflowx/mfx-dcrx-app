import { FAQ } from "@/components/faq/FAQ";
import Banner from "@/components/home/Banner";

import FeaturedIn from "@/components/home/FeaturedIn";

import { DecryptoXLanding } from "@/components/home/howtobuy/DecryptoXLanding";
import Newsletter from "@/components/home/NewsLetter";
import OfferSection from "@/components/home/OfferSection";

import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import TeamSection from "@/components/home/Team";
import Tokenomics from "@/components/home/Tokenomics";
import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const HomeSection1 = dynamic(() => import("@/components/home/Section1"));
const HomeSection2 = dynamic(() => import("@/components/home/Section2"));
const HomeSection3 = dynamic(() => import("@/components/home/Section3"));
const HomeSection4 = dynamic(() => import("@/components/home/Section4"));
const HomeSection5 = dynamic(() => import("@/components/home/Section5"));
const HomeSection6 = dynamic(() => import("@/components/home/Section6"));

const Home = () => {
  return (
    <PageBox>
      <Banner/>
      <FeaturedIn />
      <DecryptoXLanding />
     
      <ProblemSection />
      <SolutionSection />
      <OfferSection />
      <Tokenomics />
      <TeamSection />
      <FAQ/>
      <HomeSection1 id="hero" />

      {/* <HomeSection2 id="services" />
      <HomeSection3 id="experiences" />
      <HomeSection4 id="skills" /> */}

      <Newsletter />
     
     
    </PageBox>
  );
};

export default Home;
