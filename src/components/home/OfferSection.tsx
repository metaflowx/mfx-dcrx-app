
import React from 'react';

import ConstrainedBox from '../core/constrained-box';

const OfferSection = () => {
  return (
    <section style={{fontFamily:"Geist"}} className="bg-[#000] text-white py-16 w-full">
      <ConstrainedBox classNames="p-4">

      <div className="max-w-8xl mx-auto text-center">
        <h2 className="text-[59px] font-bold mb-4">
          What We Offer at <span className="text-[#2B9AE6]">DecryptoX</span>
        </h2>
        <p className="text-white text-center font-medium text-[22px]" >
          We’re creating an ecosystem where users can truly own their trading experience
          without intermediaries. 
        </p>
        <p className="text-white text-center font-medium text-[22px]">
        Powered by blockchain, DecryptoX delivers all the
          advantages of centralized platforms but with the freedom 
        </p>
        <p className="text-white text-center font-medium text-[22px]">
        and security that
        only decentralization can provide.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {Array(5)
            .fill(null)
            .map((_, idx) => (
              <div
                key={idx}

                className="cardBorderBg rounded-xl py-[40px] shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-center items-center mb-4">
                <div className="flex justify-center items-center  mt-4">
                <img src="/crypto/dollarsymbol.png" style={{width:"89px",height:"91px"}} />
              </div>
                </div>
                <h3 style={{fontFamily:"Geist"}} className="text-[20px] text-center font-bold mb-2">Dummy text printing</h3>
                <p style={{fontFamily:"Geist"}} className="text-[18px] text-white text-center pb-10 pt-3">
                    Lorem Ipsum has been the industry's standard dummy.
                  </p>
              </div>
            ))}
        </div>
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
      </ConstrainedBox>
    </section>
  );
};

export default OfferSection;
