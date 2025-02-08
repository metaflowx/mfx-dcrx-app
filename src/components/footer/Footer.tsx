
import { SocialIcon } from "./SocialIcon";
import { QuickLink } from "./QuickLink";
import { useRouter } from 'next/navigation';
const quickLinks = [
  { text: "Resource Center" ,href:false},
  { text: "tokenomics",href:false },
  { text: "Roadmap",href:false },
  { text: "White Paper",href:false },
  { text: "Light Paper",href:false },
  { text: "Refer & Earn" ,href:true}
];

export const socialIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/080206190345f632fbd2fd0d0026a09eccff7a5ed9ee28fada45fa7896214cda?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5", alt: "Social Media Icon 1", className: "aspect-square w-[17px] stroke-[0.426px] stroke-white" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed64a4448b4ee9f0042cc3876441e4e3f78a9c50818e2873f1662623bb34c6bb?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5", alt: "Social Media Icon 2", className: "aspect-[0.57] w-[13px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a12f6cb982e41d362806b61ceacdd46c33f92a070702cffe27dd03185dd0763?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5", alt: "Social Media Icon 3", className: "aspect-[1.29] w-[22px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/df963f7454a62e496f0f0e6ecdad1ac1df951b94157300ae64b92d899d7ae7ea?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5", alt: "Social Media Icon 4", className: "aspect-[1.05] w-[22px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a50a9e28dae9607cabb7a4576543b548142be10152bc1405e7e3b9f46ef24360?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5", alt: "Social Media Icon 5", className: "aspect-[1.37] w-[26px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/46223b88762e3d223247869ed28a649ecf36cf0cd50d410e4b9c187637bd1a5c?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5", alt: "Social Media Icon 6", className: "aspect-[1.32] w-[25px]" }
];

export const Footer: React.FC = () => {
  
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center px-20 pt-3 md:pt-14 pb-7 w-full bg-black max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1521px] max-md:max-w-full">
          <div className="max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-2xl font-semibold text-white max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aac93ececcbddb307b31672ed4ea92e730c1769393fdcabf04333e486d4b789?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
                    alt="Company Logo"
                    className="object-contain max-w-full aspect-[4.33] w-[325px]"
                  />
                  <div className="mt-3.5 ml-2.5">
                    contact us: <span>support@decryptox.com</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-11 w-full text-white max-md:mt-10 max-md:max-w-full">
                  <div className="self-center text-2xl font-semibold">Quick Links</div>
                  <div className="flex flex-wrap gap-5 mt-9 text-base">
                    {quickLinks.map((link, index) => (
                      <QuickLink key={index} {...link} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-2 w-full max-md:mt-10">
                  <button className="self-end px-10 py-4 text-xl font-bold text-black rounded-xl max-md:px-5">
                    connect wallet
                  </button>
                  <div className="flex gap-6 items-center mt-9 max-md:mr-1">
                    {socialIcons.map((icon, index) => (
                      <SocialIcon key={index} {...icon} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2e585acb7950cd58a31de81853bc10acbe7f9926ae9e9997bbb519fa7e8b99e?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
            alt=""
            className="object-contain mt-6 w-full aspect-[1000] stroke-[1px] stroke-white max-md:max-w-full"
          />
          <div className="flex flex-wrap gap-10 mt-7 ml-2.5 text-base text-white max-md:mr-1.5 max-md:max-w-full">
            <div className="grow shrink text-lg w-[332px]">
              Recommend our services and get rewarded – a win-win situation for both of us.
            </div>
            <div className="grow shrink text-center w-[611px] max-md:max-w-full">
              Disclaimer: DecryptoX is more than just a decentralized exchange—it's a platform designed.
              <br />
              to empower users with control, privacy, and advanced trading capabilities.
            </div>
            <div className="grow shrink self-start font-semibold w-[211px]">
              Privacy Policy | Terms & Conditions
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2e585acb7950cd58a31de81853bc10acbe7f9926ae9e9997bbb519fa7e8b99e?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
            alt=""
            className="object-contain mt-20 w-full aspect-[1000] stroke-[1px] stroke-white max-md:mt-10 max-md:max-w-full"
          />
          <div className="self-center mt-4 ml-2.5 text-base font-semibold text-center text-white">
            @copyright | Privacy Policy | Terms & Conditions
          </div>
        </div>
      </div>
    </div>
  );
};