import React from "react";
import CommonHeading from "../common/CommonHeading";
import ConstrainedBox from "../core/constrained-box";
import { ImageRotation } from "./ui/ImageRotation";


const SolutionSection: React.FC = () => {
  return (
    <div style={{fontFamily:"Geist"}} className="bg-[#000] text-white py-16 w-full">
     <ConstrainedBox>
     <div className="px-4">
        <div className=" mb-12">
       
            <CommonHeading heading={" THE SOLUTION"} fontSize="text-[42px] text-left md:text-center w-full " />
         
          <h1  className="text-[39px] md:text-[40px] text-left md:text-center leading-snug font-bold mb-2">DecryptoX</h1>
          <p className="text-white text-left md:text-center text-[18px] md:text-[24px] font-medium">
          Transforming Crypto for Everyone

          </p>
        
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Section - Cards */}
          <div className="md:col-span-12 lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                
                {
                  logo:"1",
                title:"Privacy First with Decentralized Identity (DID)",
                description:"Take control of your personal data with DID and verifiable credentials, offering enhanced privacy without compromising compliance—your data, your rules."
              },
              {
                logo:"2",
                title:"AI-Driven Simplicity",
              description:"Harness the power of cutting-edge AI tools to simplify complex trading strategies, making crypto accessible and intuitive for beginners and experts alike."},
              {logo:"3", title:"A Unified Financial Powerhouse",
                description:"From staking to lending and cross-chain solutions, DecryptoX merges diverse DeFi opportunities into a single, seamless platform—everything you need in one place."},
                {logo:"4",title:"Borderless Trading with Regulatory Harmony",
                  description:"By leveraging decentralized infrastructure, DecryptoX provides global access while addressing compliance with innovative, forward-thinking solutions."}
            
            ].map((item, index) => (
                <div
                  key={index}
                  className="cardBorderWithoutBg p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-200"
                >
                  <div className="flex justify-center ">
                    <div className="bg-textPrimary p-3 rounded-full">
                    <div className="flex justify-center items-center  mt-4">
                    <img
                  src={`/problem/${item.logo}.png`}
                  style={{ width: "89px", height: "92px" }}
                />
              </div>
                    </div>
                  </div>
                  <h3 style={{fontFamily:"Geist"}} className="text-[20px] text-center font-bold mb-2">
                   {item?.title}
                  </h3>
                  <p style={{fontFamily:"Geist"}} className="text-[18px] text-white text-center pb-10 pt-3">
                   {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:col-span-12 lg:col-span-6 flex justify-center">
            <ImageRotation />
           
          </div>
        </div>
      </div>
     </ConstrainedBox>
    </div>
  );
};

export default SolutionSection;
