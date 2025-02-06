




"use client";

import ConstrainedBox from "../core/constrained-box";



export default function HomeSection3() {
  return (
    <main className=" bg-black text-white p-8 pb-[30px] md:p-16 w-full relative">
      <ConstrainedBox >

      <div className=" flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        {/* Left Content Section */}
        <div className="flex-1 space-y-8">
          <h1 className="text-2xl md:text-5xl font-bold leading-snug text-[#0EA5E9]">
         
          Turn Your Network into  <br /> Rewards!
          </h1>
          
          {/* <p className="text-lg text-gray-300">
            Lorem Ipsum has been the industry&apos;s standard dummy
          </p> */}
          
          <div className="space-y-6">
            {[
              "Instant Commissions – Earn a percentage of every successful referral’s purchase.",
              "Tiered Bonuses – Unlock higher rewards as more friends join through your link.",
              "Passive Income – Keep earning as your referrals continue to invest and trade."
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1">
                  <div className="w-5 h-5 rounded-sm  flex items-center justify-center">
                   <img src="/crypto/check.png" />
                  </div>
                </div>
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full bgreferGrp md:w-[500px] aspect-square">
          <div className="relative">
          <img src="/crypto/refergrp1.png" />
          {/* <div className="absolute right-[-40px] bottom-[-40px] w-[500px]"> 
         <img src="/crypto/refergrpbg.png" />
         </div> */}
          </div>

         
        </div>
      </div>
      </ConstrainedBox>
    
    </main>
  );
}
