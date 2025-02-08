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
    title: "Connect Your Wallet & Choose Your Network",
    number: "/crypto/01.png",
    iconSrc: "/crypto/dollarsymbol.png",
    description:
      "Get started by connecting your wallet! Use trusted wallets like MetaMask or Trust Wallet, and link them to the DecryptoX platform. Choose your preferred blockchain – BNB or ETH – and you're good to go!",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dffc8191ec9005bd6788ceea652815f4f0d0030ad3fae4e0e138296f442a85db?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
  },
  {
    title: "Fund Your Wallet with Crypto Prepare your wallet for action!",
    number: "/crypto/02.png",
    iconSrc: "/crypto/dollarsymbol.png",
    description:
      "Add ETH or BNB or any supported coin to your wallet to make sure you're ready to purchase $DCRX tokens. Have a smooth and seamless transaction with the crypto you already own.",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dffc8191ec9005bd6788ceea652815f4f0d0030ad3fae4e0e138296f442a85db?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
  },
  {
    title: "Purchase $DCRX Tokens Ready to own $DCRX?",
    number: "/crypto/03.png",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3b6430341b9773c3890ad92f958279b5194a5ea2a067692f435ded238db0dc?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    description:
      "Head to the token sale page, enter the desired amount of $DCRX, and complete your purchase using your connected wallet. Once done, check the Your Purchased $DCRX tab on the form to view your newly acquired tokens. Simple, intuitive, and ready to empower your trading journey!",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dffc8191ec9005bd6788ceea652815f4f0d0030ad3fae4e0e138296f442a85db?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
  },
  {
    title: "Claim Your $DCRX & Earn More! Unlock extra rewards!",
    number: "/crypto/04.png",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3b6430341b9773c3890ad92f958279b5194a5ea2a067692f435ded238db0dc?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    description:
      "After your purchase, claim your $DCRX tokens and dive into our Refer and Earn Program or participate in exciting giveaways to unlock even more rewards. The journey doesn't stop here – the more you engage, the more you earn!",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dffc8191ec9005bd6788ceea652815f4f0d0030ad3fae4e0e138296f442a85db?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
  },
  
];

export const DecryptoXLanding = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="flex bannerBuyBg h-auto  flex-col pt-32 px-10 rounded-none max-md:pt-[14px] max-md:pr-5 relative pb-30"
    >
      <div className="absolute left-0 bottom-14">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/deeeb0862e0e005843d75d6c9037124fb10ab600d0f6cf24ebd9cf68c4d78fa3?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
          alt=""
          className="object-contain shrink-0 self-start max-w-full aspect-[0.32] w-[125px]"
        />
      </div>
      <div className="self-center w-full max-w-[1618px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div
              style={{ fontFamily: "Geist" }}
              className="text-[20px] md:text-[50px] font-bold text-white leading-snug  max-md:mt-1 max-md:max-w-full"
            >
              <span className="text-sky-500">Why DecryptoX?</span>
              <br />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-0 md:mt-1.5 w-full text-xl font-bold text-white max-md:max-w-full">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start mt-10 w-full max-md:mr-2.5 max-md:max-w-full">
                {features.slice(0, 2).map((feature, index) => (
                  <FeatureItem key={index} {...feature} />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 items-start mt-7 w-full max-md:mr-2.5 max-md:max-w-full">
                {features.slice(2, 4).map((feature, index) => (
                  <FeatureItem key={index + 2} {...feature} />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 items-start mt-7 w-full max-md:mr-2.5 max-md:max-w-full">
                {features.slice(4, 6).map((feature, index) => (
                  <FeatureItem key={index + 2} {...feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={false}
          loop={true}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="flex flex-col w-full">
                <StepCard {...step} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden lg:flex flex-wrap gap-5 justify-end items-start  max-md:max-w-full relative mb-[-150px]">
        <div className="flex flex-col self-end   max-md:max-w-full">
          <div className="self-center pt-10 text-[20px] md:text-[30px] font-bold leading-none text-sky-500 max-md:text-4xl">
            <span style={{ fontFamily: "Geist" }} className="text-white">
              How to Buy DecryptoX ($DCRX)
            </span>
          
          </div>
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
