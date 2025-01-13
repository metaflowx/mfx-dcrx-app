// components/ProblemSection.tsx
import React from "react";

const ProblemSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 w-full">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-lg text-blue-500 font-semibold mb-4">Problem</h2>
        <h1 className="text-4xl font-bold mb-8">
          The existing crypto trading landscape is{" "}
          <span className="text-blue-500">fundamentally broken.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "Counterparty Risks",
              description:
                "Despite the rise of DEXs, true decentralization remains elusive. Many platforms still rely on centralized components, compromising user autonomy and asset control.",
            },
            {
              title: "Decentralization",
              description:
                "Despite the rise of DEXs, true decentralization remains elusive. Many platforms still rely on centralized components, compromising user autonomy and asset control.",
            },
            {
              title: "Liquidity",
              description:
                "Despite the rise of DEXs, true decentralization remains elusive. Many platforms still rely on centralized components, compromising user autonomy and asset control.",
            },
            {
              title: "Capital Efficiency",
              description:
                "Despite the rise of DEXs, true decentralization remains elusive. Many platforms still rely on centralized components, compromising user autonomy and asset control.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="cardBorderBgBorder  p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-blue-500 text-3xl mb-4">💲</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#0b0b0b] mt-12 py-4 rounded-lg">
          <p className="text-gray-300">
            By design, DecryptoX solves the problem of liquidity fragmentation
            and introduces a truly decentralized, efficient trading
            infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
