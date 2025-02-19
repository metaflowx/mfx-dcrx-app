import Image from "next/image";
import ConstrainedBox from "../core/constrained-box";

const HomeSection2 = () => {
  return (
    <div className="bg-[#1F2937] w-full min-h-screen flex items-center justify-center relative p-4">
      <div className="absolute left-0 top-0">
        <img src="/crypto/watchlefttopbg.png" alt="Referral Program" className="w-[400px]" />
      </div>
      <div className="absolute left-0 bottom-0">
        <img src="/crypto/watchleftbg.png" alt="Referral Program" className="w-[505px] opacity-[0.4]" />
      </div>
      <ConstrainedBox >
        <div>
          <h1 style={{fontFamily:"Geist"}} className="text-left md:text-center text-xl md:text-2xl lg:text-[40px] font-semibold leading-snug text-[#38b6ff] mb-8">
          Unlock Exclusive Rewards with Our Referral Program!
          </h1>
          <div className="grid grid-cols-12 gap-0 md:gap-10 items-center mt-[3rem]">
            {/* Left Section: Image */}
            <div className="col-span-12 lg:col-span-5 flex justify-center">
              <div className="relative rounded-xl shadow-lg">
                <img src="/crypto/watch.png" alt="Referral Program" className="w-full md:w-[526px]" />
              </div>
            </div>

            {/* Right Section: Text Content */}
            <div className="col-span-12 lg:col-span-7 text-white space-y-6">
              {[
                {title:"Earn More, Effortlessly ",des:"Get rewarded in $DCRX for every friend who joins and invests."},
                {title:"Unlimited Referrals, Unlimited Rewards",des:"The more you refer, the more you earn—no limits!"},
                {title:"Early Investor Perks",des:" Enjoy exclusive bonuses as an early supporter."}
              ].map((title, index) => (
                <div style={{fontFamily:"Geist"}} key={index}>
                  <h2 className="text-[25px] md:text-[30px]  font-bold text-[#2B9AE6] leading-snug pb-[10px]">
                    {title.title}
                  </h2>
                  <p className="text-[20px] md:text-[23px] font-normal text-white">
                   {title?.des}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ConstrainedBox>
    </div>
  );
};

export default HomeSection2;
