import * as React from 'react';
import { FeatureItem } from './FeatureItem';
import { StepCard } from './StepCard';

const features = [
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a60c2bb3dcf452cfbf4fbf6bbda5ddefebb4bc3dc08468890f29e65741f61e81?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5", text: "Lorem Ipsum is simply dummy text" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d01415a31ee4a7ef77f3c3ecbdd4b31565e40b58dc8f33c69fbdc4d49fa0ca8?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5", text: "Lorem Ipsum is simply dummy text" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5d7800417b1dfb9f5f965e820a3e7f0e2a9011b385a31598c7dbd5ee9c5950c?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5", text: "Lorem Ipsum is simply dummy text" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d01415a31ee4a7ef77f3c3ecbdd4b31565e40b58dc8f33c69fbdc4d49fa0ca8?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5", text: "Lorem Ipsum is simply dummy text" }
];

const steps = [
  {
    number: "/crypto/01.png",
    iconSrc: "/crypto/dollarsymbol.png",
    description: "AI-Driven Trading Bots Utilize advanced AI algorithms for automated trading strategies, including grid trading and yield optimization.",
    arrowSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dffc8191ec9005bd6788ceea652815f4f0d0030ad3fae4e0e138296f442a85db?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
  },
  {
    number: "/crypto/02.png",
    iconSrc: "/crypto/dollarsymbol.png",
    description: "AI-Driven Trading Bots Utilize advanced AI algorithms for automated trading strategies, including grid trading and yield optimization.",
    arrowSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dffc8191ec9005bd6788ceea652815f4f0d0030ad3fae4e0e138296f442a85db?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
  },
  {
    number: "/crypto/03.png",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3b6430341b9773c3890ad92f958279b5194a5ea2a067692f435ded238db0dc?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    description: "AI-Driven Trading Bots Utilize advanced AI algorithms for automated trading strategies, including grid trading and yield optimization.",
    arrowSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dffc8191ec9005bd6788ceea652815f4f0d0030ad3fae4e0e138296f442a85db?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
  },
  {
    number: "/crypto/04.png",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3b6430341b9773c3890ad92f958279b5194a5ea2a067692f435ded238db0dc?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    description: "AI-Driven Trading Bots Utilize advanced AI algorithms for automated trading strategies, including grid trading and yield optimization.",
    arrowSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dffc8191ec9005bd6788ceea652815f4f0d0030ad3fae4e0e138296f442a85db?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
  }
];

export const DecryptoXLanding= ({ id }: { id: string }) => {
  return (
    <div id={id} className="flex bannerBuyBg flex-col pt-32 pr-10 rounded-none max-md:pt-24 max-md:pr-5 relative pb-10">
       <div className='absolute left-0 bottom-14'>
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
            <div style={{fontFamily:"Geist",}} className="text-6xl font-bold text-white leading-[65px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
              <span className="text-sky-500">What is DecryptoX</span>
              <br />
              Home to the most secure, exciting, and innovative web3 projects
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-1.5 w-full text-xl font-bold text-white max-md:mt-10 max-md:max-w-full">
              <div style={{fontFamily:"Geist",lineHeight:"47px"}} className="text-[23.5px] font-medium leading-10 max-md:max-w-full ">
                We're creating an ecosystem where users can truly own their
                trading experience without intermediaries. Powered by
                blockchain, DecryptoX delivers all the advantages of centralized
                platforms, but with the freedom and security that only
                decentralization can provide.
                <br />
              </div>
              <div className="flex flex-wrap gap-10 items-start mt-10 w-full max-md:mr-2.5 max-md:max-w-full">
                {features.slice(0, 2).map((feature, index) => (
                  <FeatureItem key={index} {...feature} />
                ))}
              </div>
              <div className="flex flex-wrap gap-10 items-start mt-7 w-full max-md:mr-2.5 max-md:max-w-full">
                {features.slice(2, 4).map((feature, index) => (
                  <FeatureItem key={index + 2} {...feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between items-start  max-md:max-w-full absolute right-[30px] bottom-[-165px]">
       
        <div className="flex flex-col self-end   max-md:max-w-full">
          <div className="self-center text-6xl font-bold leading-none text-sky-500 max-md:text-4xl">
            <span style={{fontFamily:"Geist"}} className="text-white">How to</span> Buy?
          </div>
          <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
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