import { socialIcons } from "@/components/footer/Footer";
import { SocialIcon } from "@/components/footer/SocialIcon";
import React from "react";
import RefferalDashboard from "./RefferalDashboard";
import ConstrainedBox from "@/components/core/constrained-box";
import CommonButton from "@/components/common/CommonButton";

const ReferralSection: React.FC = () => {
  const bonusPlan = [
    { range: "$100 - $1k", bonus: "2% bonus" },
    { range: "$1k - $5k", bonus: "4% bonus" },
    { range: "$5k - $10k", bonus: "8% bonus" },
    { range: "$10k and above", bonus: "10% bonus" },
  ];
  return (
    <section  className="mainReferBg text-white py-[10px] md:py-10 px-5 sm:px-10 md:px-20 rounded-lg w-full pt-10 sm:pt-2">
      <ConstrainedBox>

      <div className="w-full">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
    {/* Left Section */}
    <div
      style={{ fontFamily: "Geist" }}
      className="col-span-12 xl:col-span-8 space-y-5 refferFriendInputMainBg py-12 md:py-[120px] px-4 md:px-[20px]"
    >
      <h2
        style={{ fontFamily: "Geist", lineHeight: "40px" }}
        className="text-xl md:text-2xl lg:text-[35px] font-bold text-[#2B9AE6]"
      >
        Refer Friends To Earn <br /> Share your referral link with friends
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h6 className="text-white text-[20px] sm:text-[24px] font-normal">
            Your Referral Link
          </h6>
          <div
            style={{ border: "1px solid #2B9AE6" }}
            className="flex items-center bg-[#09090B] h-[48px] rounded-lg p-3 relative overflow-hidden"
          >
            <img src="/crypto/link.png" className="pr-2" />
            <input
              type="text"
              placeholder="Generate Link"
              className="bg-[#09090B] flex-1 text-sm focus:outline-none text-white"
            />
            <button className="ml-3 bg-[#2B9AE6] w-[60px] h-[48px] flex justify-center items-center text-sm absolute right-0 top-0 bottom-0">
              <img src="/crypto/copyicon.png" />
            </button>
          </div>
        </div>

        <div>
          <h6 className="text-white text-[20px] sm:text-[24px] font-normal">
            Referral Code
          </h6>
          <div
            style={{ border: "1px solid #2B9AE6" }}
            className="flex items-center bg-[#09090B] h-[48px] rounded-lg p-3 relative overflow-hidden"
          >
            <img src="/crypto/link.png" className="pr-2" />
            <input
              type="text"
              placeholder="Generate Link"
              className="bg-[#09090B] flex-1 text-sm focus:outline-none text-white"
            />
            <button className="ml-3 bg-[#2B9AE6] w-[60px] h-[48px] flex justify-center items-center text-sm absolute right-0 top-0 bottom-0">
              <img src="/crypto/copyicon.png" />
            </button>
          </div>
        </div>
      </div>

      <h6 className="text-white text-[24px] sm:text-[27px] font-bold">
        Share your referral link
      </h6>
      <div className="flex space-x-3">
        {/* Social Icons */}
        {socialIcons.map((icon, index) => (
          <span
            key={index}
            className="w-8 h-8 flex items-center justify-center rounded-full"
          >
            <SocialIcon key={index} {...icon} />
          </span>
        ))}
      </div>
    </div>

    {/* Right Section */}
    <div className="col-span-12 xl:col-span-4 refferCommonMainBg refferCommonMainBg1 rounded-lg  p-10  xl:p-6 ">
      <div className="flex justify-between items-center pb-12 pt-14">

      <h3 style={{fontFamily:"Geist"}} className="text-xl  text-[#2B9AE6] text-[36px] font-bold leading-snug">Our Bonus <br /> Plan:</h3>
      <CommonButton btnName="Refer Now" width=" sm:w-[130px]" />
      </div>
      
      {bonusPlan.map((item, index) => (
    <div  style={{ fontFamily: "Geist" }} key={index} className="flex justify-between items-center text-[28px] ">
     <p className="font-bold leading-snug"> {item.range}</p>
      
       <p className="font-bold leading-snug">{item.bonus}</p>
    </div>
  ))}
     
    </div>
  </div>
</div>

      <RefferalDashboard />
      </ConstrainedBox>
    </section>
  );
};

export default ReferralSection;
