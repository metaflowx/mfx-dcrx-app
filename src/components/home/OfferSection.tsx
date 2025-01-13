import React from 'react';

const OfferSection = () => {
  return (
    <section className="bg-primary text-white py-16 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          What We Offer at <span className="text-accent">DecryptoX</span>
        </h2>
        <p className="text-gray-300 mb-12">
          We’re creating an ecosystem where users can truly own their trading experience
          without intermediaries. Powered by blockchain, DecryptoX delivers all the
          advantages of centralized platforms but with the freedom and security that
          only decentralization can provide.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {Array(5)
            .fill(null)
            .map((_, idx) => (
              <div
                key={idx}

                className="cardBorderBg rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-center items-center mb-4">
                  <div className="text-accent text-5xl">&#36;</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dummy text printing</h3>
                <p className="text-gray-400">
                  Lorem Ipsum has been the industry’s standard dummy.
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
    </section>
  );
};

export default OfferSection;
