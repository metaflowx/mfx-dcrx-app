// components/Tokenomics.tsx
import React from 'react';

const Tokenomics: React.FC = () => {
  return (
    <div className="bg-black text-white py-12 px-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h2 className="text-blue-500 text-xl font-semibold">TOKENOMICS</h2>
          <h3 className="text-3xl lg:text-4xl font-bold mt-4">
            Revolutionizing Decentralized Finance with Purpose-Driven Utility
          </h3>
          <div className="mt-6">
            <p className="text-lg">
              <span className="font-semibold">Symbol:</span> $DCRX
            </p>
            <p className="text-lg">
              <span className="font-semibold">Initial Value:</span> 1 $DCRX = $0.012
            </p>
            <p className="text-lg">
              <span className="font-semibold">Type:</span> Utility Token
            </p>
            <p className="text-lg">
              <span className="font-semibold">Network:</span> Ethereum Smart Chain
            </p>
            <p className="text-lg">
              <span className="font-semibold">Total Supply:</span> 59.9 Billion DCRX
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              White Paper
            </button>
            <button className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600">
              Light Paper
            </button>
          </div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c545535b22b89cfcbf46858a0a3cf6019f9150256303f61ac33a909cd7ed3ef1?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
              alt="Tokenomics distribution chart"
              className=" z-10 w-full "
            />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div className="relative w-80 h-80">
            {/* Circle Graph */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
              {/* Placeholder for a chart image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-blue-500 flex items-center justify-center text-black font-semibold">
                    X
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Labels */}
           
            <div className="absolute w-full h-full top-0 left-0 text-sm flex flex-col justify-between items-center text-gray-400">
              <p className="absolute -top-8">Public Presale: 25%</p>
              <p className="absolute -left-20">Staking: 15%</p>
              <p className="absolute -bottom-8">Referral Bonus: 1%</p>
              <p className="absolute right-16">Marketing & Growth: 17%</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-blue-400 text-xl font-semibold">Total Supply</p>
            <p className="text-4xl font-bold text-blue-400">59,900,000,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
