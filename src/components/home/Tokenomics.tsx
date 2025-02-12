// components/Tokenomics.tsx
import React from 'react';
import ConstrainedBox from '../core/constrained-box';
import CommonHeading from '../common/CommonHeading';
import { downloadPdf } from '@/utils';
import { motion } from "framer-motion";
import Link from 'next/link';
import { useReadContracts } from 'wagmi';
import { tokenConfig, TokenContractAddress } from '@/constants/contract';
import { useAppKitNetwork } from '@reown/appkit/react';
import { formatEther } from 'viem';

const Tokenomics = ({ id }: { id: string }) => {
   const { chainId } = useAppKitNetwork();
    const result = useReadContracts({
      contracts: [
       
        {
          ...tokenConfig,
          functionName: "totalSupply",
          chainId: Number(chainId) ?? 97,
        },
       
       
      ],
    });
  return (
    <div className='bg-[#000] w-full' id={id}>

    <ConstrainedBox classNames='px-4 sm:px-4  lg:px-0'>

    <div className="bg-black text-white py-12  w-full pl-2">
        <CommonHeading heading='Tokenomics' fontSize="text-[25px] md:text-[45px] text-left sm:text-center w-full" />
      <div className=" mx-auto flex flex-col lg:flex-row items-center justify-between mt-4">
        {/* Left Section */}
        <div className="lg:w-1/2 ">
        
          
          <h3 style={{fontFamily:"Plus Jakarta Sans",}} className="text-[20px] lg:text-[25px] leading-snug font-bold mt-4 max-w-md">
            Revolutionizing Decentralized Finance with Purpose-Driven Utility
          </h3>
          <h4 style={{fontFamily:"Plus Jakarta Sans",}} className='text-[20px] lg:text-[22px] leading-snug font-bold mt-4 max-w-md'>Powering the Future of DeFi with $DCRX
          </h4>
          <div style={{fontFamily:"Plus Jakarta Sans"}} className="mt-6">
            <p className="text-3xl lg:text-[20px] font-bold">
              <span className="text-[20px] md:text-[20px] font-bold">Symbol: $DCRX</span> 
            </p>
            <p className=" md:text-[20px] font-bold mt-[10px]">
              Initial Value: 1 $DCRX = $0.012
            </p>
            
            <p className="text-[20] md:text-[20px] font-bold mt-[10px]">
              <span >Type:</span> Utility Token
            </p>
            <p style={{fontFamily:"Outfit"}} className="text-[20px] md:text-[20px] font-normal mt-[20px]">
              <span >Network:</span> Binance Smart Chain (BSC)
            </p>
            <p style={{fontFamily:"Outfit"}} className="text-[14px] md:text-[20px] font-normal mt-[10px]">
              <span >Binance Smart Chain (BEP-20):</span> {TokenContractAddress}
            </p>
            <p style={{fontFamily:"Outfit",lineHeight:"25px"}} className="text-[20px] md:text-[20px] font-normal mt-3">
              <span >Total Supply: </span> 
                    59,900,000,000 DCRX
            </p>
            <div className="text-[20px] md:text-[20px] font-bold mt-2">
            Limited Supply. Maximum Utility.
           
            </div>
            <div className="text-[20px] md:text-[20px] font-bold">
            Join the revolution and be part of the decentralized future today!
            </div>
          </div>
          <div className="xs:block sm:flex gap-4 mt-8">
          <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                  <button 
             onClick={()=>  window.scroll(0,0)}
            style={{border:"1px solid #2B9AE6"}} className="border mb-[10px] sm:mb-[0px] border-[#2B9AE6] w-full md:w-[238px] mt-2 sm:mt-0 md:mt-0 lg:mt-0 h-[45px] md:h-[60px] text-[#2B9AE6] rounded-full   text-[21px] font-bold">
             Buy Now
            </button>
              </motion.div>
        

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >

<Link
              
              style={{
                background:
                  "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%",
              }}
            href={"docs/whitepaper.pdf"} target="_blank"
              className="flex justify-center items-center  w-[100%] md:w-[238px] h-[45px] md:h-[60px] rounded-full hover:bg-blue-600 text-[21px] font-bold text-black"
            >
              White Paper
            </Link>
              </motion.div>

         
           
          </div>
          
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div >
           <img src="/crypto/supply.png" alt="supply" />
           
           {/* <div className="text-center mt-4">
            <p style={{fontFamily:"Plus Jakarta Sans"}} className="text-[#2B9AE6] text-[27px] md:text-[37px] font-bold">Total Supply</p>
            <p style={{fontFamily:"Plus Jakarta Sans",lineHeight:"37px"}}  className="text-[27px] md:text-[37px] font-bold text-white">{ result &&
                    result?.data &&
                    result?.data[0]?.result &&
                    formatEther(BigInt(result?.data[0]?.result))}</p>
          </div> */}
          </div>
         
        </div>
      </div>
    </div>
    </ConstrainedBox>
    </div>
  );
};

export default Tokenomics;
