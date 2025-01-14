import { socialIcons } from "@/components/footer/Footer";
import { SocialIcon } from "@/components/footer/SocialIcon";
import React from "react";
import RefferalDashboard from "./RefferalDashboard";
import ConstrainedBox from "@/components/core/constrained-box";

const ReferralSection: React.FC = () => {
  return (
    <section className="bg-[#000] text-white py-10 px-5 sm:px-10 md:px-20 rounded-lg w-full">
      <ConstrainedBox>

      <div className="w-full">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Section */}
          <div
            style={{ fontFamily: "Geist" }}
            className="col-span-12 md:col-span-8 space-y-5 refferFriendInputMainBg py-[120px] px-[20px]"
          >
            <h2
              style={{ fontFamily: "Geist", lineHeight: "40px" }}
              className="text-xl md:text-2xl lg:text-[35px] font-bold text-[#2B9AE6]"
            >
              Refer Friends To Earn <br /> Share your referral link with friends
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h6 className="text-white text-[24px] font-normal">
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
                    <img src="/crypto/copyicon.png"  />
                  </button>
                </div>
              </div>

              <div>
                <h6 className="text-white text-[24px] font-normal">
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
                    <img src="/crypto/copyicon.png"  />
                  </button>
                </div>
              </div>
            </div>

            <h6 className="text-white text-[27px] font-bold">
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
          <div className="col-span-12 md:col-span-4 refferCommonMainBg rounded-lg p-6 space-y-6">
            <h3 className="text-xl font-semibold">Our Bonus Plan:</h3>
            <ul className="space-y-2 text-sm">
              <li>
                $100 - $1k: <span className="font-bold">2% bonus</span>
              </li>
              <li>
                $1k - $5k: <span className="font-bold">4% bonus</span>
              </li>
              <li>
                $5k - $10k: <span className="font-bold">8% bonus</span>
              </li>
              <li>
                $10k and above: <span className="font-bold">10% bonus</span>
              </li>
            </ul>
            <button className="bg-primary text-black w-full py-2 rounded-lg">
              Refer Now
            </button>
          </div>
        </div>
      </div>
      <RefferalDashboard />
      </ConstrainedBox>
    </section>
  );
};

export default ReferralSection;
