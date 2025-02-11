// components/Tokenomics.tsx
import React from 'react';
import ConstrainedBox from '../core/constrained-box';
import CommonHeading from '../common/CommonHeading';
import { downloadPdf } from '@/utils';
import Link from 'next/link';
import { useReadContracts } from 'wagmi';
import { tokenConfig } from '@/constants/contract';
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

    <div className="bg-black text-white py-12  w-full">
      <div className=" mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2 ">
        <CommonHeading heading='TOKENOMICS' fontSize="text-[30px] md:text-[40px]" />
          
          <h3 style={{fontFamily:"Plus Jakarta Sans",}} className="text-[20px] lg:text-[25px] leading-snug font-bold mt-4 max-w-md">
            Revolutionizing Decentralized Finance with Purpose-Driven Utility
          </h3>
          <div style={{fontFamily:"Plus Jakarta Sans"}} className="mt-6">
            <p className="text-3xl lg:text-[25px] font-bold">
              <span className="text-[20px] md:text-[25px] font-bold">Symbol:</span> $DCRX
            </p>
            <p className="text-[25px] md:text-[25px] font-bold mt-[40px]">
              Initial Value:
            </p>
            <p className="text-[20px] md:text-[25px] font-bold mt-[10px]">
              1 $DCRX = $0.012
            </p>
            <p className="text-[25] md:text-[25px] font-bold mt-[10px]">
              <span >Type:</span> Utility Token
            </p>
            <p style={{fontFamily:"Outfit"}} className="text-[20px] md:text-[25px] font-normal mt-[20px]">
              <span >Network:</span> Binance Smart Chain (BSC)
            </p>
            <p style={{fontFamily:"Outfit"}} className="text-[20px] md:text-[25px] font-normal mt-[20px]">
              <span >Binance Smart Chain (BEP-20):</span> 0xXXXXXXXXXXXXXXXXXXXXXXXXXX
            </p>
            <p style={{fontFamily:"Outfit",lineHeight:"25px"}} className="text-[20px] md:text-[25px] font-normal">
              <span >Total Supply:</span> { result &&
                    result?.data &&
                    result?.data[0]?.result &&
                    formatEther(BigInt(result?.data[0]?.result))} DCRX
            </p>
          </div>
          <div className="xs:block sm:flex gap-4 mt-8">
          <button 
             onClick={()=>  window.scroll(0,0)}
            style={{border:"1px solid #2B9AE6"}} className="border border-[#2B9AE6] w-full md:w-[238px] mt-2 sm:mt-0 md:mt-0 lg:mt-0 h-[45px] md:h-[60px] text-[#2B9AE6] rounded-full   text-[21px] font-bold">
             Buy Now
            </button>
          <Link
              
                style={{
                  background:
                    "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%",
                }}
              href={"docs/whitepaper.pdf"} target="_blank"
                className="flex justify-center items-center mb-[10px] sm:mb-[0px] w-[100%] md:w-[238px] h-[45px] md:h-[60px] rounded-full hover:bg-blue-600 text-[21px] font-bold text-black"
              >
                White Paper
              </Link>
           
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
