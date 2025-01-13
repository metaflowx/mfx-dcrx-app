import React from "react";

const SolutionSection: React.FC = () => {
  return (
    <div className="bg-[#000] text-white py-16 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-textPrimary mb-2">
            THE SOLUTION
          </h2>
          <h1 className="text-4xl font-bold mb-4">DecryptoX</h1>
          <p className="text-gray-400">
            Powered by state channel technology to enable real-time cross-chain
            trading without the need for brokers to bridge assets.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Section - Cards */}
          <div className="md:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="cardBorderWithoutBg p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-200"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-textPrimary p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 text-secondary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v8m0-4h4m-4 0H8"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Dummy text printing
                  </h3>
                  <p className="text-sm text-gray-400">
                    Lorem Ipsum has been the industry's standard dummy.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:col-span-6 flex justify-center">
            <img
              src="/card/group-icon.png"
              alt="Group Icon"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
