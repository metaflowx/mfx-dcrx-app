"use client";
import { SocialIcon } from "./SocialIcon";
import { QuickLink } from "./QuickLink";
import { useRouter } from "next/navigation";
const quickLinks = [
  { text: "Resource Center" },
  { text: "Tokenomics", href: false, link: "/#tokenomics" },
  { text: "Roadmap", href: false, link: "/#roadmap" },
  { text: "White Paper", href: false, link: "" },
  { text: "Light Paper", href: false, link: "" },
  { text: "Refer & Earn", href: true, link: "" },
];

export const socialIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/080206190345f632fbd2fd0d0026a09eccff7a5ed9ee28fada45fa7896214cda?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    alt: "Social Media Icon 1",
    className: "aspect-square w-[17px] stroke-[0.426px] stroke-white",
    url: "https://x.com/_DecryptoX",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed64a4448b4ee9f0042cc3876441e4e3f78a9c50818e2873f1662623bb34c6bb?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    alt: "Social Media Icon 2",
    className: "aspect-[0.57] w-[13px]",
    url: "https://www.facebook.com/officialdecryptox",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a12f6cb982e41d362806b61ceacdd46c33f92a070702cffe27dd03185dd0763?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    alt: "Social Media Icon 3",
    className: "aspect-[1.29] w-[22px]",
    url: "https://t.me/Official_DecryptoX",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/df963f7454a62e496f0f0e6ecdad1ac1df951b94157300ae64b92d899d7ae7ea?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    alt: "Social Media Icon 4",
    className: "aspect-[1.05] w-[22px]",
    url: "https://www.instagram.com/_decryptox/",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a50a9e28dae9607cabb7a4576543b548142be10152bc1405e7e3b9f46ef24360?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5",
    alt: "Social Media Icon 5",
    className: "aspect-[1.37] w-[26px]",
    url: "https://www.youtube.com/@officialDecryptoX",
  },
  {
    src: "/footer/linkedin.png",
    alt: "Social Media Icon 6",
    className: "aspect-[1.52] w-[25px]",
    url: " https://www.linkedin.com/company/official-decryptox/ ",
  },
];

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center px-10 pt-3 md:pt-14 pb-7 w-full bg-black max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full  ">
          <div className="max-md:mr-2.5 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1.5fr_1fr] gap-6 md:gap-10 w-full">
  {/* Logo & Contact */}
  <div className="flex flex-col text-2xl font-semibold text-white items-center md:items-start">
    <img
      onClick={() => router.push("/")}
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aac93ececcbddb307b31672ed4ea92e730c1769393fdcabf04333e486d4b789?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
      alt="Company Logo"
      className="object-contain w-[250px] md:w-[325px] cursor-pointer"
    />
    <div className="mt-3 text-[18px] text-center md:text-left">
      Contact us:
      <a href="mailto:support@decryptox.com" className="text-blue-500 underline ml-1">
        support@decryptox.com
      </a>
    </div>
  </div>

  {/* Enlarged Quick Links Section */}
  <div className="flex flex-col xl:items-center items-start w-full text-white">
    <div className="text-2xl font-semibold text-center w-full">Quick Links</div>
    <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-6 text-base">
      {quickLinks.map((link, index) => (
        <QuickLink key={index} {...link} />
      ))}
    </div>
  </div>

  {/* Social Icons (Right Aligned) */}
  <div className="flex justify-center md:justify-start items-start xl:items-center w-full">
    <div className="flex gap-6">
      {socialIcons.map((icon, index) => (
        <SocialIcon key={index} {...icon} />
      ))}
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
          <div className="flex flex-wrap  mt-7 ml-2.5 text-base text-white max-md:mr-1.5 max-md:max-w-full">
            <div className="grow shrink text-center w-[611px] max-md:max-w-full text-[#403d3d]">
              Disclaimer: Crypto investments are high-risk and not for everyone.
              Do your research and seek advice before investing. DecryptoX
              complies with laws but operates in evolving DeFi regulations.
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2e585acb7950cd58a31de81853bc10acbe7f9926ae9e9997bbb519fa7e8b99e?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
            alt=""
            className="object-contain mt-6 w-full aspect-[1000] stroke-[1px] stroke-white max-md:mt-10 max-md:max-w-full"
          />
          <div className="self-center mt-4 ml-2.5 text-base font-semibold text-center ">
            <span style={{ color: "#403d3d" }}>@copyright 2025</span> |{" "}
            <span
              style={{ color: "#403d3d", cursor: "pointer" }}
              onClick={() => router.push("/privacyandpolicy")}
            >
              Privacy Policy
            </span>{" "}
            |{" "}
            <span
              style={{ color: "#403d3d", cursor: "pointer" }}
              onClick={() => router.push("/termandcondition")}
            >
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
