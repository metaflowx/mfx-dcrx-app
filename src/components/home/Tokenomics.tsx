// components/Tokenomics.tsx
import React from 'react';
import ConstrainedBox from '../core/constrained-box';
import CommonHeading from '../common/CommonHeading';

const Tokenomics: React.FC = () => {
  return (
    <div className='bg-[#000] w-full'>

    <ConstrainedBox>

    <div className="bg-black text-white py-12  w-full">
      <div className=" mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2">
        <CommonHeading heading='TOKENOMICS' fontSize="text-[40px]" />
          
          <h3 style={{fontFamily:"Plus Jakarta Sans",lineHeight:"54px"}} className="text-3xl lg:text-[40px] font-bold mt-4">
            Revolutionizing Decentralized Finance with Purpose-Driven Utility
          </h3>
          <div style={{fontFamily:"Plus Jakarta Sans"}} className="mt-6">
            <p className="text-3xl lg:text-[40px] font-bold">
              <span className="text-3xl lg:text-[40px] font-bold">Symbol:</span> $DCRX
            </p>
            <p className="text-3xl lg:text-[40px] font-bold mt-[40px]">
              Initial Value:
            </p>
            <p className="text-3xl lg:text-[40px] font-bold mt-[10px]">
              1 $DCRX = $0.012
            </p>
            <p className="text-3xl lg:text-[28px] font-bold mt-[10px]">
              <span >Type:</span> Utility Token
            </p>
            <p style={{fontFamily:"Outfit"}} className="text-[25px] font-normal mt-[20px]">
              <span >Network:</span> Ethereum Smart Chain
            </p>
            <p style={{fontFamily:"Outfit",lineHeight:"25px"}} className="text-[25px] font-normal">
              <span >Total Supply:</span> 59.9 Billion DCRX
            </p>
          </div>
          <div className="flex gap-4 mt-8">
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
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div >
           <img src="/crypto/supply.png" alt="supply" />
           
           <div className="text-center mt-4">
            <p style={{fontFamily:"Plus Jakarta Sans"}} className="text-[#2B9AE6] text-[37px] font-bold">Total Supply</p>
            <p style={{fontFamily:"Plus Jakarta Sans",lineHeight:"37px"}}  className="text-[37px] font-bold text-white">59,900,000,000</p>
          </div>
          </div>
         
        </div>
      </div>
    </div>
    </ConstrainedBox>
    </div>
  );
};

export default Tokenomics;
