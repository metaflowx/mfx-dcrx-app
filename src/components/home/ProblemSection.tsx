
import React from "react";
import Slider from "react-slick";
import CommonHeading from "../common/CommonHeading";
import CommonSlider from "./CommonSlider";

const ProblemSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For medium screens and below
        settings: {
          slidesToShow: 1, // Show one slide
          slidesToScroll: 1, // Scroll one slide at a time
        },
      },
    ],
  };

  const cardData = [
    {
      title: "Counterparty Risks",
      description:
        "Eroded Privacy and User Control: Centralized exchanges rely on outdated KYC systems for systems that expose sensitive user data to potential breaches, leaving privacy and autonomy at risk.",
    },
    {
      title: "Decentralization",
      description:
        "Compliance vs. Accessibility Dilemma: Striking the right balance between regulatory compliance and user empowerment has created barriers, limiting global access and seamless adoption.",
    },
    {
      title: "Liquidity",
      description:
        "Overwhelmingly Complex Platforms: Cryptocurrency platforms often feature convoluted interfaces that deter beginners and frustrate seasoned traders, holding back the potential for widespread adoption.",
    },
    {
      title: "Capital Efficiency",
      description:
        "Fragmented and Isolated Ecosystems: The lack of cross-chain compatibility restricts liquidity and financial opportunities, creating bottlenecks in a space that should thrive on interconnectivity.",
    },
  ];

  return (
    <section className="bg-black text-white py-[10px] md:py-12 w-full">
      <div
        style={{
          fontFamily: "Geist",
        }}
        className="max-w-7xl mx-auto px-6 text-left md:text-center pt-[10px] md:pt-[180px]"
      >
        <div className="mb-1">
          <CommonHeading heading={"The Problem"} fontSize="text-[42px]" />
        </div>

        <h1 className="text-[30px] xl:text-[50px] font-bold">
        Challenges in Today’s {" "}
        </h1>
        <p className="text-[30px] xl:text-[50px] font-bold mb-8">
          
          <span className="text-[#1B429A] ml-2">Crypto Landscape</span>
        </p>

        {/* Slick Slider */}
        <div className="lg:hidden">
         <CommonSlider cardData={cardData} />
        </div>

        {/* Grid View for Medium Screens and Above */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-1">
          {cardData.map((item, index) => (
            <div className="jsborderprob">
              <div
              key={index}
              className="cardBorderBgBorder p-2 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center items-center mb-4 mt-4">
                <img
                  src="/crypto/dollarsymbol.png"
                  style={{ width: "89px", height: "92px" }}
                />
              </div>
              <h3 className="text-xl gradient-text font-bold py-6">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 pb-12 font-bold">
                {item.description}
              </p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

