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

const PageBox = dynamic(() => import("@/components/core/PageBox"));


const Home = () => {
  return (
    <PageBox>
      <WalletModal />
      <Banner id="about" />
      <FeaturedIn />
      <DecryptoXLanding id="howtobuy" />
     
      <ProblemSection />
      <SolutionSection />
      <OfferSection />
      <Tokenomics id="tokenomics" />
      <Roadmap id="roadmap" />
      <TeamSection id="team" />
      <FAQ id="faq"/>
     

      <Newsletter />
     
     
    </PageBox>
  );
};

export default Home;
