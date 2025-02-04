"use client"
import React, { useEffect, useState } from 'react'
import ConstrainedBox from '../core/constrained-box';
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import CoinSelector from './CoinSelector';
import { useReadContract, useWriteContract } from 'wagmi';
import { formatUnits, parseUnits } from "viem";
import BuyToken from "@/app/ABI/TokenSupply.json"
import BuyICO from "@/app/ABI/IcoToken.json"
import { parseEther } from "viem";
import { contractAddress, ICOContract } from '@/constants/contract';
const Banner = ({ id }: { id: string }) => {
  const[coinType,setCoinType]=useState({
    tokenname:"ETH",
    address:""
  })
  const [totalSupply, setTotalSupply] = useState<string>("");
  const { address, isConnected, } = useAppKitAccount()
  const [saleType, setSaleType] = useState(0); 
 
  const [amount, setAmount] = useState(""); 
  const [referrer, setReferrer] = useState("0xReferrerAddress");
  const { writeContract, isPending, isSuccess, isError } = useWriteContract();
  const { open, close } = useAppKit()

  const { data, isLoading } = useReadContract({
    address: contractAddress,
    abi: BuyToken,
    functionName: "totalSupply",
  });

  useEffect(() => {
    if (data) {
      setTotalSupply(formatUnits(BigInt(data.toString()), 18)); // Adjust decimals based on your token
    }
  }, [data]);
 console.log(">>>>>>>>>>totalSupply",isError,isLoading);

 const handleBuy = async () => {
  try {
    const formattedAmount = parseUnits(amount, 18);
    const tokenAddress =coinType?.address
    const res = await writeContract({
      address: ICOContract,
      abi: BuyICO,
      functionName: "buy",
      args: [saleType, tokenAddress, formattedAmount, referrer],
      value: parseEther("0.1"), // Adjust ETH amount if needed
    });
  } catch (error) {
    console.error("Transaction failed:", error);
  }
};
 
  return (
    <div id={id} style={{fontFamily:"Geist"}} className="min-h-screen bannerBg   text-white flex items-center justify-center px-4">
        <ConstrainedBox >

      <div className=" flex flex-col lg:flex-row items-center mt-[100px] sm:mt-[85px] ">
     
        <div className="text-center lg:text-left">
          <h1 className="sm:text-[40px] md:text-[60px] lg:text-[70px] font-bold">Join Decryptox:</h1>
          <p className="text-[20px] md:text-[30px] text-[#2B9AE6] font-bold mt-2">Be a Part of the Decentralized Revolution!</p>
          <p className="mt-4 font-medium text-[14px] sm:text-[24px]">
            Unlock a world of financial freedom where you own your assets,
            control your data, and trade with confidence.
          </p>
          <div className="block md:flex gap-4 mt-6 justify-center lg:justify-start">
            <button
             style={{
              background: "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%",
            }}
            className="mb-[10px] sm:mb-[0px] w-[100%] md:w-[238px] h-[45px] md:h-[60px] rounded-full hover:bg-blue-600 text-[21px] font-bold text-black">
              White Paper
            </button>
            <button style={{border:"1px solid #2B9AE6"}} className="border border-[#2B9AE6] w-[100%] md:w-[238px] h-[45px] md:h-[60px] text-[#2B9AE6] rounded-full   text-[21px] font-bold">
              Light Paper
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className='jsborderBg'>
        <div 
        className="jscardBorderBgPayment  px-[20px] md:px-[40px] py-[30px] max-sm:w-full md:w-auto ">
          <h2 style={{fontFamily: "Geist, serif"}} className="text-[39px] md:text-[42px] font-bold mb-4 text-center">Buy DCRX</h2>
          <div className="grid grid-cols-4 text-center mb-4">
            <div className='timerBg'>
              <p style={{fontFamily: "Gemunu Libre, serif",lineHeight:"62px"}} className="text-[42px] md:text-[62px] font-bold text-[#2B9AE6]">09</p>
              <p style={{fontFamily: "Geist, serif"}} className='text-[13px] sm:text-[20px]'>Days</p>
            </div>
            <div className='timerBg '>
              <p style={{fontFamily: "Gemunu Libre, serif",lineHeight:"62px"}} className="text-[42px] md:text-[62px] font-bold text-[#2B9AE6]">59</p>
              <p style={{fontFamily: "Geist, serif"}} className='text-[13px] sm:text-[20px]'>Hours</p>
            </div>
            <div className='timerBg '>
              <p style={{fontFamily: "Gemunu Libre, serif",lineHeight:"62px"}} className="text-[42px] md:text-[62px] font-bold text-[#2B9AE6]">20</p>
              <p style={{fontFamily: "Geist, serif"}} className='text-[13px] sm:text-[20px]'>Minutes</p>
            </div>
            <div className='timerBg '>
              <p style={{fontFamily: "Gemunu Libre, serif",lineHeight:"62px"}} className="text-[42px] md:text-[62px] font-bold text-[#2B9AE6]">30</p>
              <p style={{fontFamily: "Geist, serif"}} className='text-[13px] sm:text-[20px]'>Seconds</p>
            </div>
          </div>
          <img src="/card/progress.png" className='w-[505px] pb-4' />
        
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
         
          <CoinSelector setCoinType={setCoinType} coinType={coinType} />
          <p className='text-white text-[15px] pt-4'>{`${coinType?.tokenname} you pay`}</p>

          <div className="mt-2  items-center hidden sm:flex justify-between w-full">

           <div className='input___border w-full sm:w-auto mr-1'>
           <input
              type="number"
              placeholder="0"
              className=" h-[38px] inputBg text-white px-4 py-2 w-full sm:w-auto"
              onChange={(e)=>setAmount(e.target.value)}
            />
           </div>

           <div className='input___border w-full sm:w-auto mt-1 sm:mt-0' >
           <input
             type="number"
              placeholder="0"
              className=" h-[38px] inputBg text-white px-4 py-2 w-full sm:w-auto"
            />
           </div>
            
          </div>
          <div className='mt-2  block sm:hidden  w-full'>
          <div className='input___border w-full sm:w-auto'>
           <input
              type="text"
              placeholder="0"
              className=" h-[38px] inputBg text-white px-4 py-2 w-full sm:w-auto"
            />
           </div>

           <div className='input___border w-full sm:w-auto mt-1 sm:mt-0' >
           <input
              type="text"
              placeholder="0"
              className=" h-[38px] inputBg text-white px-4 py-2 w-full sm:w-auto"
            />
           </div>
          </div>
          {!address ?
               <button onClick={async()=>open()}  className="w-full bg-[#2B9AE6] mt-4 h-[55px] rounded-lg text-lg font-semibold">
               Connect Wallet
             </button>
             :
             <button onClick={()=>handleBuy()}  className="w-full bg-[#2B9AE6] mt-4 h-[55px] rounded-lg text-lg font-semibold">
           {isPending ? "Buying":"Buy Now"}  
           </button>
          }

          <p className="text-center text-[#2B9AE6] text-[16px] mt-4">Don’t have a wallet?</p>
        </div>
        </div>
      </div>
        </ConstrainedBox>
    </div>
  );
};

export default Banner;
