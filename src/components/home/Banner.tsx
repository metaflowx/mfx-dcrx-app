"use client"
import React, { useState } from 'react'
import ConstrainedBox from '../core/constrained-box';
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';



const Banner = ({ id }: { id: string }) => {
  const[coinType,setCoinType]=useState("ETH")

  const { address, isConnected, } = useAppKitAccount()
  const { open, close } = useAppKit()
 
  return (
    <div id={id} style={{fontFamily:"Geist"}} className="min-h-screen bannerBg   text-white flex items-center justify-center">
        <ConstrainedBox >

      <div className=" flex flex-col lg:flex-row items-center sm:mt-[85px] ">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h1 className="sm:text-[40px] md:text-[60px] lg:text-[80px] font-bold">Join Decryptox:</h1>
          <p className="text-[30px] text-[#2B9AE6] font-bold mt-2">Be a Part of the Decentralized Revolution!</p>
          <p className="mt-4 font-medium text-[24px]">
            Unlock a world of financial freedom where you own your assets,
            control your data, and trade with confidence.
          </p>
          <div className="flex gap-4 mt-6 justify-center lg:justify-start">
            <button
             style={{
              background: "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%",
            }}
            className="w-[238px] h-[60px] rounded-full hover:bg-blue-600 text-[21px] font-bold text-black">
              White Paper
            </button>
            <button style={{border:"1px solid #2B9AE6"}} className="border border-[#2B9AE6] w-[238px] h-[60px] text-[#2B9AE6] rounded-full   text-[21px] font-bold">
              Light Paper
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div style={{
          background:"url(/card/payment.png)"
        }} 
        className="cardBorderBgPayment sm:px-[20px] md:px-[90px] py-[30px] ">
          <h2 style={{fontFamily: "Geist, serif"}} className="text-[49px] font-bold mb-4 text-center">Buy DCRX</h2>
          <div className="grid grid-cols-4 text-center mb-4">
            <div className='timerBg'>
              <p style={{fontFamily: "Gemunu Libre, serif",lineHeight:"62px"}} className="text-[62px] font-bold text-[#2B9AE6]">09</p>
              <p style={{fontFamily: "Geist, serif"}} className='text-[20px]'>Days</p>
            </div>
            <div className='timerBg '>
              <p style={{fontFamily: "Gemunu Libre, serif",lineHeight:"62px"}} className="text-[62px] font-bold text-[#2B9AE6]">59</p>
              <p style={{fontFamily: "Geist, serif"}} className='text-[20px]'>Hours</p>
            </div>
            <div className='timerBg '>
              <p style={{fontFamily: "Gemunu Libre, serif",lineHeight:"62px"}} className="text-[62px] font-bold text-[#2B9AE6]">20</p>
              <p style={{fontFamily: "Geist, serif"}} className='text-[20px]'>Minutes</p>
            </div>
            <div className='timerBg '>
              <p style={{fontFamily: "Gemunu Libre, serif",lineHeight:"62px"}} className="text-[62px] font-bold text-[#2B9AE6]">30</p>
              <p style={{fontFamily: "Geist, serif"}} className='text-[20px]'>Seconds</p>
            </div>
          </div>
          <img src="/card/progress.png" className='w-[505px] pb-4' />
          {/* <hr className="border-gray-500 my-4" /> */}
          <div className='flex justify-between items-center'>
          <p style={{fontFamily: "Geist, serif"}} className='text-[#FFFFFF] text-[18px] font-bold'>USDT Raised: </p>
            <p style={{fontFamily: "Geist, serif"}} className='text-[#FFFFFF] text-[18px] font-bold'>$0 / $0 DCRX</p>
           
          </div>
          <div className='flex justify-between items-center'>
          <p style={{fontFamily: "Geist, serif"}} className='text-[#FFFFFF] text-[18px] font-bold'>Your purchased $DCRX: </p>
          <p style={{fontFamily: "Geist, serif"}} className='text-[#FFFFFF] text-[18px] font-bold'>00</p>
          </div>
          <div className="text-center">
            
            <p className="mt-2 coinBgValue p-[20px]">$1 DCRX = $0.0206</p>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <button onClick={()=>setCoinType("ETH")} className={`${coinType==="ETH" ? "bg-[#2B9AE6] rounded-md": "coinBgBtn"} " w-[121px] h-[50px]  text-sm"`}>ETH</button>
            <button onClick={()=>setCoinType("USDT")} className={`${coinType==="USDT" ? "bg-[#2B9AE6] rounded-md": "coinBgBtn"} " w-[121px] h-[50px]  text-sm"`}>USDT</button>
            <button onClick={()=>setCoinType("USDC")} className={`${coinType==="USDC" ? "bg-[#2B9AE6] rounded-md": "coinBgBtn"} " w-[121px] h-[50px]  text-sm"`}>USDC</button>
            <button onClick={()=>setCoinType("DAI")} className={`${coinType==="DAI" ? "bg-[#2B9AE6] rounded-md": "coinBgBtn"} " w-[121px] h-[50px]  text-sm"`}>DAI</button>
          </div>
          <p className='text-white text-[15px] pt-4'>{`${coinType} you pay`}</p>
          <div className="mt-2 flex items-center justify-between">

           <div className='input___border'>
           <input
              type="text"
              placeholder="0"
              className=" h-[38px] inputBg text-white px-4 py-2"
            />
           </div>

           <div className='input___border'>
           <input
              type="text"
              placeholder="0"
              className=" h-[38px] inputBg text-white px-4 py-2 "
            />
           </div>
            
          </div>
          {!address ?
               <button onClick={async()=>open()}  className="w-full bg-[#2B9AE6] mt-4 h-[55px] rounded-lg text-lg font-semibold">
               Connect Wallet
             </button>
             :
             <button onClick={async()=>{}}  className="w-full bg-[#2B9AE6] mt-4 h-[55px] rounded-lg text-lg font-semibold">
             Buy Now
           </button>
          }

          <p className="text-center text-[#2B9AE6] text-[16px] mt-4">Don’t have a wallet?</p>
        </div>
      </div>
        </ConstrainedBox>
    </div>
  );
};

export default Banner;
