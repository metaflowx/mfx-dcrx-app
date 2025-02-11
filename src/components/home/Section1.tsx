import React from 'react';
import ConstrainedBox from '../core/constrained-box';
import { useRouter } from 'next/navigation';
import { useAppKit } from '@reown/appkit/react';

const HomeSection1= ({ id }: { id: string }) => {
  const router = useRouter()
    const { open, close } = useAppKit()
  const referStep=[
    {
      title:"Connect Wallet & Get Your Link ",
      description:"Connect your wallet and access your unique referral link."
    },
    {
      title:"Share with Friends",
      description:"Invite your network via social media, email, or direct message."
    },
    {
      title:"They Join & Invest ",
      description:"Your referrals sign up and participate in the ICO."
    },
    {
      title:"Earn Rewards Instantly",
      description:" Get rewarded in $DCRX for every successful referral!"
    },
  ]
  return (
    <div  id={id} className="min-h-screen w-full text-white flex flex-col items-center px-4 py-6">
      {/* Header Section */}
      <div className="text-left md:text-center max-w-xxl pt-3 lg:pt-[150px]">
        <h1 className="text-[30px] lg:text-[40px]  mb-4 text-[#2B9AE6] leading-snug " style={{fontFamily:"Geist, serif",fontWeight:700}} >Earn More with the DecryptoX Referral Program!</h1>
        <p className="text-white mt-6 text-[16px] md:text-[20px]">
        Grow the community and earn rewards! Invite friends to join our ecosystem and share your unique referral link. 
        </p>
        <p className="text-white text-[16px] md:text-[20px]">
        When your referrals connect their wallet and make a qualifying purchase of $100 or more, you'll earn exclusive 
        </p>
        <p className="text-white mb-6 text-[16px] md:text-[20px]">
        bonuses in $DCRX. The more you refer, the more you earn, so start building your rewards today!
        </p>
        {/* <CommonButton btnName=" Refer a friend" /> */}
        <button onClick={async () => open()}  style={{
      background: "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%",
    }} className="px-6 py-3  hover:bg-blue-500  rounded-[13px] shadow-md text-black w-[237px] text-[21px] font-bold">
          Refer a friend
        </button>
      </div>

      {/* Steps Section */}
      <ConstrainedBox>

      <div className="mt-12 w-full ">
        <h2 className="text-[30px] md:text-[30px] font-bold mb-8 text-[#2B9AE6] text-left md:text-center leading-snug" style={{fontFamily:"Geist, serif",fontWeight:700}} >
        Refer a Friend in 4 Easy Steps & Earn Rewards!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9">
          {referStep.map((item,index)=>{
            return(
              <div
              key={index}
              className="cardBorderWithoutBg p-4 rounded-md text-center"
            >
              <h3 style={{fontFamily:"Geist"}} className="text-[70px] font-bold mb-1 text-[#2B9AE6]">{`0${index + 1}.`}</h3>
              <h4 style={{fontFamily:"Outfit"}} className="text-[20px] font-bold mb-2">{item?.title}</h4>
              <p style={{fontFamily:"Geist"}} className="text-white text-[15px] font-semibold text-center">
             {item?.description}
              </p>
            </div>
            )
          })}
        </div>
      </div>
      </ConstrainedBox>
    </div>
  );
};

export default HomeSection1;
