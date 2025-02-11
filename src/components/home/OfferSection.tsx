"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ConstrainedBox from "../core/constrained-box";

const OfferSection = ({id}:{id:string}) => {
  const initialData = [
    {
      title: "Spot Trading",
      description: "Trade crypto in real-time with advanced order types and minimal slippage.",
      image: "/offer/SpotTrading.png",
    },
    {
      title: "Margin Trading",
      description: "Amplify your trades with up to 10x leverage and built-in risk management.",
      image: "/offer/MarginTrading.png",
    },
    {
      title: "Futures & Options Trading",
      description: "Hedge risks or speculate with flexible futures and options contracts.",
      image: "/offer/FuturesOptionsTrading.png",
    },
    {
      title: "P2P Trading",
      description: "Trade directly with peers using secure escrow services and fiat conversion.",
      image: "/offer/P2PTrading.png",
    },
    {
      title: "Automated Trading Solutions",
      description: "Leverage AI-driven bots and algorithmic trading for optimized performance.",
      image: "/offer/AutomatedTradingSolutions.png",
    },
    {
      title: "Staking & Yield Generation",
      description: "Earn passive income through staking, dual-token rewards, and high APYs.",
      image: "/offer/StakingYieldGeneration.png",
    },
    {
      title: "DeFi Integration",
      description: "Access lending, liquidity mining, NFT-backed loans, and decentralized insurance.",
      image: "/offer/DeFiIntegration.png",
    },
    {
      title: "Identity & Security",
      description: "Protect assets with decentralized identity, multi-sign wallets, and top-tier security.",
      image: "/offer/IdentitySecurity.png",
    },
    {
      title: " Governance & Community Engagement",
      description: "Shape the platform’s future through DAO governance and voting.",
      image: "/offer/GovernanceCommunityEngagement.png",
    },
    {
      title: "Cross-Chain Functionality",
      description: "Seamlessly trade and transfer assets across multiple blockchain networks.",
      image: "/offer/Cross-ChainFunctionality.png",
    },
   
  
   
   
   
  ];
  const [cardData, setCardData] = useState(initialData);

 

  return (
    <section id={id} style={{ fontFamily: "Geist" }} className="bg-[#000] text-white py-[10px] md:py-16 w-full">
      <ConstrainedBox classNames="p-4">
        <div className="max-w-8xl mx-auto text-left md:text-center">
          <h2 className="text-[25px] md:text-[40px] font-bold ">Core Features of DecryptoX</h2>
          <h2 className="text-[25px] md:text-[35px] font-bold ">
            <span className="text-[#2B9AE6]">Revolutionizing Your Crypto Experience</span>
          </h2>
         
        </div>
      </ConstrainedBox>
      <div className="w-full mx-auto px-6 text-center py-10 relative">
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto slide to the right
            loop={true}
            // onSlideChange={(swiper) => {
            //   if (swiper.isEnd) {
            //     setCardData((prev) => {
            //       const moreData = [
            //         {
            //           title: "DeFi Integration",
            //           description: "Access lending, liquidity mining, NFT-backed loans, and decentralized insurance.",
            //           image: "/offer/DeFiIntegration.png",
            //         },
            //         {
            //           title: "Identity & Security",
            //           description: "Protect assets with decentralized identity, multi-sign wallets, and top-tier security.",
            //           image: "/offer/IdentitySecurity.png",
            //         },
            //       ];
            
            //       const updatedSlides = [...prev, ...moreData]; // Add new slides
            //       return updatedSlides.slice(moreData.length); // Remove older slides from the start
            //     });
            
            //     // Instantly shift back to the previous position to create an infinite effect
            //     setTimeout(() => {
            //       swiper.slideTo(swiper.slides.length - 1, 0); // Instantly shift to last slide
            //     }, 50);
            //   }
            // }}
            
            
           
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1300: { slidesPerView: 4 },
              1600: { slidesPerView: 5 },
            }}
            className="mt-8"
          >
            {cardData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="cardBorderBg h-[400px] flex flex-col justify-between py-[55px] px-[60px] shadow-md hover:shadow-lg transition-all relative">
                  <div className="flex justify-center items-center mb-4">
                    <img src={item.image} alt={item.title} className="w-[89px] h-[91px]" />
                  </div>
                  <h3 style={{ fontFamily: "Geist" }} className="text-[20px] text-center font-bold mb-2">
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "Geist" }} className="text-[18px] text-white text-center pb-10 pt-3 flex-grow">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination Bullets Positioned Below */}
        <div className="flex justify-center mt-5">
          <div className="custom-pagination flex justify-center items-center"></div>
        </div>
      </div>

      {/* Inline Styles for Pagination (Alternative if no global CSS) */}
      <style jsx>{`
  /* Override Swiper styles to remove pagination animation */
  .swiper-pagination,
  .swiper-pagination-bullet,
  .swiper-pagination-bullet-active {
    transition: none !important;
    animation: none !important;
  }
`}</style>
    </section>
  );
};

export default OfferSection;
