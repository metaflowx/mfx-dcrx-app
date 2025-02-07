"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ConstrainedBox from "../core/constrained-box";
import CommonSlider from "./CommonSlider";

const OfferSection: React.FC = () => {
  const cardData = [
    {
      title: "Dummy text printing",
    description: "Lorem Ipsum has been the industry's standard dummy.",
    image: "/crypto/dollarsymbol.png",
    },
    {
      title: "Margin Trading",
    description: "Lorem Ipsum has been the industry's standard dummy.",
    image: "/crypto/dollarsymbol.png",
    },
    {
      title: "Dummy text printing",
    description: "Lorem Ipsum has been the industry's standard dummy.",
    image: "/crypto/dollarsymbol.png",
    },
    {
      title: "Dummy text printing",
    description: "Lorem Ipsum has been the industry's standard dummy.",
    image: "/crypto/dollarsymbol.png",
    },
    {
      title: "Dummy text printing",
    description: "Lorem Ipsum has been the industry's standard dummy.",
    image: "/crypto/dollarsymbol.png",
    },
    {
      title: "Dummy text printing",
    description: "Lorem Ipsum has been the industry's standard dummy.",
    image: "/crypto/dollarsymbol.png",
    },
  ];

  // const cardData = [
  //   {
  //     title: "Spot Trading",
  //   description: "Trade with precision in real-time! Enjoy seamless crypto trading with advanced order types, minimal slippage, and a user-friendly interface that’s designed for both novice traders and seasoned professionals. Your trading experience, streamlined and efficient!",
  //   image: "/crypto/dollarsymbol.png",
  //   },
  //   {
  //     title: "Margin Trading",
  //   description: "Unlock more buying power! Amplify your trades with up to 10x leverage, giving you the flexibility to maximize your profits. Integrated risk management tools and real-time portfolio tracking ensure you’re always in control while trading with power.",
  //   image: "/crypto/dollarsymbol.png",
  //   },
  //   {
  //     title: "Futures & Options Trading",
  //   description: "Master risk, master profits! Take your trading strategies to the next level by hedging risks or speculating on price movements with diverse futures contracts and options. Access robust tools that allow for dynamic and flexible trading decisions in real-time.",
  //   image: "/crypto/dollarsymbol.png",
  //   },
  //   {
  //     title: "P2P Trading",
  //   description: "Trade directly with the community! Engage in decentralized peer-to-peer trading, where you can set your own terms. Enjoy the security of escrow services and fiat-to-crypto conversion for a seamless, frictionless trading experience, all within the DecryptoX ecosystem.",
  //   image: "/crypto/dollarsymbol.png",
  //   },
  //   {
  //     title: "Automated Trading Solutions",
  //   description: "Let AI work for you! Harness the power of AI-driven grid bots, algorithmic trading, and copy trading features to automate your strategies, ensuring optimized trades around the clock. No need to worry about missing opportunities—let the technology do the work!",
  //   image: "/crypto/dollarsymbol.png",
  //   },
  //   {
  //     title: "Staking & Yield Generation",
  //   description: "Put your crypto to work! Earn passive income effortlessly through fixed or flexible staking options, dual-token rewards, and enhanced APYs. Maximize your returns by making the most of your $DCRX holdings!",
  //   image: "/crypto/dollarsymbol.png",
  //   },
  //   {
  //     title:"DeFi Integration",
  //     description:"Unlock limitless earning potential! Dive into a wide range of DeFi features including collateralized loans, liquidity mining, NFT-backed loans, DeFi Insurance and decentralized liquidity pools. DecryptoX offers a complete suite of DeFi tools to help you earn like never before.",
  //     image: "/crypto/dollarsymbol.png",

  //   },
  //   {
  //     title:"Identity & Security",
  //     description:"Your assets, securely protected! Keep your personal data safe and your funds secure with decentralized identity (DID) solutions, multi-signature wallets, hardware wallet compatibility, and anti-front-running mechanisms. Enjoy peace of mind with industry-leading security protocols.",
  //     image: "/crypto/dollarsymbol.png",

  //   },

  //   {
  //     title:"Governance & Community Engagement",
  //     description:"Shape the future of DecryptoX! Be a part of the DecryptoX revolution by actively participating in DAO governance. Propose new features, vote on platform decisions, and earn rewards through active community involvement. The power is in your hands!",
  //     image: "/crypto/dollarsymbol.png",

  //   },

  //   {
  //     title:"Cross-Chain Functionality",
  //     description:"Breaking down blockchain barriers! Enjoy seamless trading, liquidity provision, and asset transfers across multiple blockchains. Cross-chain swaps, bridges, and interoperable liquidity pools ensure you never miss an opportunity to capitalize on diverse crypto assets.",
  //     image: "/crypto/dollarsymbol.png",

  //   }

  // ];

 

  return (
    <section style={{ fontFamily: "Geist" }} className="bg-[#000] text-white py-[10px] md:py-16 w-full">
      <ConstrainedBox classNames="p-4">
        <div className="max-w-8xl mx-auto text-left md:text-center">
          <h2 className="text-[39px] md:text-[50px] font-bold mb-4">
            What We Offer at <span className="text-[#2B9AE6]">DecryptoX</span>
          </h2>
          <p className="text-white text-left md:text-center  font-medium text-[18px] md:text-[22px]">
            We’re creating an ecosystem where users can truly own their trading experience
            without intermediaries.
          </p>
          <p className="text-white  font-medium text-[18px] md:text-[22px]">
            Powered by blockchain, DecryptoX delivers all the advantages of centralized platforms
            but with the freedom
          </p>
          <p className="text-white font-medium text-[18px] md:text-[22px]">
            and security that only decentralization can provide.
          </p>

          {/* Swiper Integration */}
        
             
        </div>
      
      </ConstrainedBox>
      <div className="w-full mx-auto px-6 text-center py-10 relative">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={1}
    slidesPerView={1}
    navigation={false}
    pagination={{ clickable: true, el: ".custom-pagination" }}
    autoplay={{ delay: 1000, disableOnInteraction: false }}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 5 },
    }}
    className="mt-8"
  >
    {cardData.map((item, idx) => (
      <SwiperSlide key={idx}>
        <div className="cardBorderBg py-[55px] px-[60px] shadow-md hover:shadow-lg transition-all relative">
          <div className="flex justify-center items-center mb-4">
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "89px", height: "91px" }}
            />
          </div>
          <h3 style={{ fontFamily: "Geist" }} className="text-[20px] text-center font-bold mb-2">
            {item.title}
          </h3>
          <p style={{ fontFamily: "Geist" }} className="text-[18px] text-white text-center pb-10 pt-3">
            {item.description}
          </p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Custom Pagination Below the Cards */}
  {/* <div className="custom-pagination absolute left-1/2 transform -translate-x-1/2 -bottom-10 z-50"></div> */}
  <div className="custom-pagination absolute left-1/2 transform  -bottom-14 z-50 flex justify-center gap-2"></div>
</div>

    </section>
  );
};

export default OfferSection;
