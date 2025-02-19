import { socialIcons } from "@/components/footer/Footer";
import { SocialIcon } from "@/components/footer/SocialIcon";
import React, { useEffect, useState } from "react";
import RefferalDashboard from "./RefferalDashboard";
import ConstrainedBox from "@/components/core/constrained-box";
import CommonButton from "@/components/common/CommonButton";
import TransactionHistory from "./TransactionHistory";
import { useAccount, useReadContract, useReadContracts, useWriteContract } from "wagmi";
import { contractConfig, iocConfig } from "@/constants/contract";
import { Address, parseEther } from "viem";
import { usePathname, useRouter } from 'next/navigation'
import { IcoABI } from "@/app/ABI/IcoABI";
import { useAppKitNetwork } from "@reown/appkit/react";
import { FaFacebook, FaTelegram, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ShareReferral from "./ShareReferral";

const ReferralSection: React.FC = () => {
  const pathname = usePathname()
 
  const [url, setUrl] = useState("");
   const { writeContract, isPending, isSuccess, isError } = useWriteContract();
  const { address } = useAccount();
  const {chainId} = useAppKitNetwork()
  const [referrer, setReferrer] = useState("");
  const [copied, setCopied] = useState(false);
  const[isOpen,setIsOpen]=useState(false)
  const bonusPlan = [
    { range: "$100 - $1k", bonus: "2% bonus" },
    { range: "$1k - $5k", bonus: "4% bonus" },
    { range: "$5k - $10k", bonus: "8% bonus" },
    { range: "$10k and above", bonus: "10% bonus" },
  ];


 

 
  useEffect(() => {
   
    
    if (typeof window !== "undefined") {
      setUrl(`${window.location.host}/?ref=${address}`);
    }
  }, [address]);

  
  
 


  const result = useReadContracts({
    contracts: [
     
      {
        ...contractConfig,
        functionName: "getReferralRewards",
        args: [address as Address ],
        chainId: Number(chainId)??97
      },
      {
        ...contractConfig,
        functionName: 'getReferralsCount',
        args: [address as Address ],
        chainId: Number(chainId)??97
        
      },
      {
        ...contractConfig,
        functionName: 'getReferrer',
        args: [address as Address ],
        chainId: Number(chainId)??97
      },
      {
        ...contractConfig,
        functionName: 'totalReferralBonusReward',
        chainId: Number(chainId)??97
      },
      {
        ...iocConfig,
        functionName: "totalContributorLengthForUser",
        args:[address as Address,0],
        chainId: Number(chainId)??97
      },
     
    ],
  })


const totalLength=result &&result?.data && result?.data?.[4]?.result &&  result?.data?.[4]?.result.toString()
  const historyTable = useReadContract({
    ...iocConfig,
    functionName: "user2SaleType2ContributorList",
    args: [
      address as Address,             
      0,                    
      BigInt(0),            
      BigInt(totalLength || 0) 
    ],
    chainId: Number(chainId)??97
  });

  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Hide toast after 3 seconds
    });
  };

  const socialPlatforms = [
    { name: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, icon: <FaFacebook className="text-blue-600 text-3xl hover:opacity-75" /> },
    { name: "Twitter", url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=Join%20now%20and%20earn%20rewards!`, icon: <FaXTwitter className="text-blue-400 text-3xl hover:opacity-75" /> },
    { name: "Telegram", url: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=Join%20now%20and%20earn%20rewards!`, icon: <FaTelegram className="text-blue-500 text-3xl hover:opacity-75" /> },
    { name: "Instagram", url: `https://www.instagram.com/`, icon: <FaInstagram className="text-pink-500 text-3xl hover:opacity-75" /> }, // Instagram does not support direct URL sharing
    { name: "YouTube", url: `https://www.youtube.com/`, icon: <FaYoutube className="text-red-500 text-3xl hover:opacity-75" /> }, // YouTube does not support direct URL sharing
    { name: "LinkedIn", url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, icon: <FaLinkedin className="text-blue-700 text-3xl hover:opacity-75" /> },
  ];
  
  return (
    <section  className="mainReferBg text-white py-[10px] md:py-10 px-5 sm:px-10 md:px-20 rounded-lg w-full pt-20 sm:pt-2">
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
            value={url || ""}
              type="text"
              disabled
              placeholder="Generate Link"
              className="bg-[#09090B] flex-1 text-sm focus:outline-none text-white"
            />
            <button onClick={copyToClipboard} className="ml-3 bg-[#2B9AE6] w-[60px] h-[48px] flex justify-center items-center text-sm absolute right-0 top-0 bottom-0">
              <img src="/crypto/copyicon.png" />
            </button>
          </div>
        </div>

        {/* <div>
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
        </div> */}
      </div>


      {copied && (
        <div style={{background:"linear-gradient(rgb(160, 219, 246) 0%, rgb(43, 154, 230) 100%)"}} className="fixed top-5 left-1/2 transform -translate-x-1/2  text-white px-4 py-2 rounded-lg shadow-md animate-slideIn z-[9999]">
          ✅ Referral link copied!
        </div>
      )}

      <h6 className="text-white text-[24px] sm:text-[27px] font-bold">
        Share your referral link
      </h6>
      <div className="flex space-x-3">
      {socialPlatforms.map(({ name, url, icon }) => (
          <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${name}`}>
            {icon}
          </a>
        ))}
        {/* Social Icons */}
        {/* {socialIcons.map((icon, index) => (
          <span
            key={index}
            className="w-8 h-8 flex items-center justify-center rounded-full"
          >
            <SocialIcon key={index} {...icon} />
          </span>
        ))} */}
      </div>
    </div>

    {/* Right Section */}
    <div className="col-span-12 xl:col-span-4 refferCommonMainBg refferCommonMainBg1 rounded-lg  p-10  xl:p-6 ">
      <div className="flex justify-between items-center pb-12 pt-14 2xl:pt-[118px]">

      <h3 style={{fontFamily:"Geist"}} className="text-[20px]  text-[#2B9AE6] xl:text-[30px] font-bold leading-snug">Our Bonus <br /> Plan:</h3>
      <CommonButton btnName="Refer Now" width=" sm:w-[130px]" onClick={()=>setIsOpen(true)} />
      </div>
      
      {bonusPlan.map((item, index) => (
    <div  style={{ fontFamily: "Geist" }} key={index} className="flex justify-between items-center text-[20px] ">
     <p className="font-bold leading-snug"> {item.range}</p>
      
       <p className="font-bold leading-snug">{item.bonus}</p>
    </div>
  ))}
     
    </div>
  </div>
</div>
{result &&result?.data && result?.data?.length>0 ? (
 <RefferalDashboard result={result && result?.data && result?.data} />
):(
  <div>
    <p>No data found</p>
  </div>
)}

     
      <TransactionHistory historyTable={historyTable && historyTable.data && historyTable.data} />
      </ConstrainedBox>
      {isOpen && (

      <ShareReferral isOpen={isOpen} setIsOpen={setIsOpen} url={url} />
      )}
    </section>
  );
};

export default ReferralSection;
