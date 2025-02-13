"use client";
import * as React from "react";
import { FeatureItem } from "./FeatureItem";
import { StepCard } from "./StepCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const features = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a60c2bb3dcf452cfbf4fbf6bbda5ddefebb4bc3dc08468890f29e65741f61e81?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    text: "True Decentralization: Trade with full control—no intermediaries, no restrictions.",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d01415a31ee4a7ef77f3c3ecbdd4b31565e40b58dc8f33c69fbdc4d49fa0ca8?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    text: "Smart Trading, Simplified: AI-powered tools bring intelligent trading to decentralized finance. ",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e5d7800417b1dfb9f5f965e820a3e7f0e2a9011b385a31598c7dbd5ee9c5950c?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    text: "Next-Gen Security: Secure, private authentication with Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs).",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d01415a31ee4a7ef77f3c3ecbdd4b31565e40b58dc8f33c69fbdc4d49fa0ca8?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    text: "Beyond Trading: A complete DeFi ecosystem to stake, invest, and grow your assets.",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d01415a31ee4a7ef77f3c3ecbdd4b31565e40b58dc8f33c69fbdc4d49fa0ca8?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    text: "Community-Driven: Governed by a DAO, ensuring users shape the platform’s future. ",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d01415a31ee4a7ef77f3c3ecbdd4b31565e40b58dc8f33c69fbdc4d49fa0ca8?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    text: "Borderless Trading: Seamless cross-chain compatibility for unrestricted asset movement.",
  },
];

const steps = [
  {
    title: "Connect Your Wallet",
    number: "/crypto/01.png",
    iconSrc: "/crypto/dollarsymbol.png",
    description:
      "Use trusted wallets like MetaMask or Trust Wallet, and link them to the DecryptoX platform. ",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dffc8191ec9005bd6788ceea652815f4f0d0030ad3fae4e0e138296f442a85db?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
  },
  {
    title: "Fund Your Wallet with Crypto",
    number: "/crypto/02.png",
    iconSrc: "/crypto/dollarsymbol.png",
    description:
      "Add BNB or any supported coin to your wallet to make sure you're ready to purchase $DCRX tokens.",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dffc8191ec9005bd6788ceea652815f4f0d0030ad3fae4e0e138296f442a85db?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
  },
  {
    title: "Purchase $DCRX Tokens",
    number: "/crypto/03.png",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3b6430341b9773c3890ad92f958279b5194a5ea2a067692f435ded238db0dc?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    description:
      "Head to the token sale page, enter the desired amount of $DCRX, and complete your purchase using your connected wallet.",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dffc8191ec9005bd6788ceea652815f4f0d0030ad3fae4e0e138296f442a85db?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
  },
  {
    title: "Claim Your $DCRX & Earn More!",
    number: "/crypto/04.png",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3b6430341b9773c3890ad92f958279b5194a5ea2a067692f435ded238db0dc?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    description:
      "After your purchase, claim your $DCRX tokens and dive into our Refer and Earn Program. ",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dffc8191ec9005bd6788ceea652815f4f0d0030ad3fae4e0e138296f442a85db?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
  },
  
];

export const DecryptoXLanding = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="flex bannerBuyBg h-auto  flex-col pt-[50px] px-4 rounded-none max-md:pt-[14px] max-md:pr-5 relative pb-30"
    >
      <div className="absolute hidden sm:block left-[-10px] bottom-[10px] xl:bottom-[0px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/deeeb0862e0e005843d75d6c9037124fb10ab600d0f6cf24ebd9cf68c4d78fa3?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
          alt=""
          className="object-contain shrink-0 self-start max-w-full aspect-[0.32] w-[90px] xl:w-[125px]"
        />
      </div>
      <div className="self-center w-full max-w-[1618px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-full max-md:ml-0 ">
            <div
              style={{ fontFamily: "Geist" }}
              className="text-[25px] md:text-[50px] font-bold text-white leading-snug  max-md:mt-1 w-full flex justify-start sm:justify-center mb-2"
            >
              <span className="text-sky-500 text-left sm:text-center">Why DecryptoX?</span>
              <br />
              {/* <span className="text-[20px] md:text-[30px]">DecryptoX at a Glance</span> */}
            </div>

           
            <div className="flex flex-col mt-0 md:mt-1.5 w-full text-xl font-bold text-white">
              <div
                style={{ fontFamily: "Geist" }}
                className="text-[16.5px] md:text-[18px]  font-medium leading-snug md:leading-10 max-md:max-w-full "
              >
                At DecryptoX, we’re not just redefining trading—we’re redefining
                ownership. In a world where centralized platforms limit your
                freedom and compromise your data, DecryptoX empowers you to
                trade, invest, and grow without intermediaries. Our platform
                combines the efficiency of centralization with the transparency
                and security of decentralization, giving you complete control of
                your financial journey.
                <br />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-start mt-10 w-full max-md:mr-2.5 max-md:max-w-full">
                {features.slice(0, 3).map((feature, index) => (
                  <FeatureItem key={index} {...feature} />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3  gap-10 items-start mt-7 w-full max-md:mr-2.5 max-md:max-w-full">
                {features.slice(3, 6).map((feature, index) => (
                  <FeatureItem key={index + 2} {...feature} />
                ))}
              </div>
              
            </div>
          
            <div className="self-center pt-[10px] md:pt-[54px] text-[20px] md:text-[35px] font-bold leading-none text-sky-500 max-md:text-4xl">
            <span style={{ fontFamily: "Geist" }} className="text-sky-500 text-[18px] md:text-[35px]">
              How to Buy DecryptoX ($DCRX)?
            </span>
          
          </div>

          </div>
         
        </div>
      </div>
      <div className="2xl:hidden mt-5">
      
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={false}
          loop={false}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1524: { slidesPerView: 4 },

          }}
          className="mySwiper"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index} className="h-[100%]" >
              <div key={index} className="flex flex-col w-full h-[100%] min-h-[380px]">
                <StepCard {...step} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden 2xl:flex flex-wrap gap-5 justify-end items-start  max-md:max-w-full relative mb-[-150px]">
        <div className="flex flex-col self-end   max-md:max-w-full">
         
          <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
                >
                  <StepCard {...step} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
