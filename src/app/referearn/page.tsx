"use client"
import { FAQRefer } from "@/components/faq/FAQRefer";
import ReferralSection from "@/components/home/referral-system/ReferralSection";
import { useAppKitAccount } from "@reown/appkit/react";
import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const ReferEarn = dynamic(
  () => import("@/components/referearn/MainSection")
);

const HomeSection2 = dynamic(() => import("@/components/home/Section2"));
const HomeSection3 = dynamic(() => import("@/components/home/Section3"));
const HomeSection4 = dynamic(() => import("@/components/home/Section4"));
const Home = () => {

  const { address, isConnected, } = useAppKitAccount()
  return (
    <PageBox >
      {!address ?
        <>
          <ReferEarn />
          <HomeSection2 />
          <HomeSection3 />
          <HomeSection4 />
          <FAQRefer />
        </>
        :
        <ReferralSection />
      }

    </PageBox>
  );
};

export default Home;
