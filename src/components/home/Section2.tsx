import Image from "next/image";
import ConstrainedBox from "../core/constrained-box";

const HomeSection2 = () => {
  return (
    <div className="bg-[#1F2937] w-full min-h-screen flex items-center justify-center relative">
      <div className="absolute left-0 top-0">
        <img src="/crypto/watchlefttopbg.png" alt="Referral Program" className="w-[400px]" />
      </div>
      <div className="absolute left-0 bottom-0">
        <img src="/crypto/watchleftbg.png" alt="Referral Program" className="w-[505px] opacity-[0.4]" />
      </div>
      <ConstrainedBox classNames="px-4">
        <div>
          <h1 style={{fontFamily:"Geist",lineHeight:"52px"}} className="text-center text-xl md:text-2xl lg:text-[52px] font-semibold text-[#38b6ff] mb-8">
            How can you benefit from Decryptox referral program?
          </h1>
          <div className="grid grid-cols-12 gap-10 items-center mt-[3rem]">
            {/* Left Section: Image */}
            <div className="col-span-12 lg:col-span-5 flex justify-center">
              <div className="relative rounded-xl shadow-lg">
                <img src="/crypto/watch.png" alt="Referral Program" className="w-[526px]" />
              </div>
            </div>

            {/* Right Section: Text Content */}
            <div className="col-span-12 lg:col-span-7 text-white space-y-6">
              {[
                "Dummy text of the printing",
                "Dummy text of the printing",
                "Dummy text of the printing",
              ].map((title, index) => (
                <div style={{fontFamily:"Geist"}} key={index}>
                  <h2 className="text-[43px]  font-bold text-[#2B9AE6] pb-[10px]">
                    {title}
                  </h2>
                  <p className="text-[27px] font-normal text-white">
                    Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s.
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
