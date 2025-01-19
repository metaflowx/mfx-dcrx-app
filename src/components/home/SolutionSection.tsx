import React from "react";
import CommonHeading from "../common/CommonHeading";
import ConstrainedBox from "../core/constrained-box";
import { ImageRotation } from "./ui/ImageRotation";


const SolutionSection: React.FC = () => {
  return (
    <div style={{fontFamily:"Geist"}} className="bg-[#000] text-white py-16 w-full">
     <ConstrainedBox>
     <div className="px-4">
        <div className="text-center mb-12">
       
            <CommonHeading heading={" THE SOLUTION"} fontSize="text-[42px]" />
         
          <h1 style={{lineHeight:"59px"}} className="text-[59px] font-bold mb-4">DecryptoX</h1>
          <p className="text-white text-center text-[24px] font-medium">
            Powered by state channel technology to enable real-time cross-
          </p>
          <p className="text-white text-center text-[24px] font-medium">
          chain
          trading without the need for brokers to bridge assets.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Section - Cards */}
          <div className="md:col-span-12 lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="cardBorderWithoutBg p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-200"
                >
                  <div className="flex justify-center ">
                    <div className="bg-textPrimary p-3 rounded-full">
                    <div className="flex justify-center items-center  mt-4">
                <img src="/crypto/dollarsymbol.png" style={{width:"83px",height:"85px"}} />
              </div>
                    </div>
                  </div>
                  <h3 style={{fontFamily:"Geist"}} className="text-[20px] text-center font-bold mb-2">
                    Dummy text printing
                  </h3>
                  <p style={{fontFamily:"Geist"}} className="text-[18px] text-white text-center pb-10 pt-3">
                    Lorem Ipsum has been the industry's standard dummy.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:col-span-12 lg:col-span-6 flex justify-center">
            <ImageRotation />
            {/* <img
              src="/card/group-icon.png"
              alt="Group Icon"
              className="max-w-full h-auto"
            /> */}
          </div>
        </div>
      </div>
     </ConstrainedBox>
    </div>
  );
};

export default SolutionSection;
