// // components/ProblemSection.tsx
// import React from "react";
// import CommonHeading from "../common/CommonHeading";

// const ProblemSection: React.FC = () => {
//   return (
//     <section className="bg-black text-white py-12 w-full">
//       <div style={{fontFamily:"Geist",
         


//         }} className="max-w-7xl mx-auto px-6 text-center pt-[180px]">
//           <div className="mb-4">
//             <CommonHeading heading={"Problem"} fontSize="text-[42px]" />
//           </div>
       
//         <h1 className="text-[62px] font-bold ">
//           The existing crypto trading landscape {" "}
         
//         </h1>
//         <p className="text-[62px] font-bold mb-8">
//         is 
//         <span className="text-[#1B429A] ml-2">fundamentally broken.</span>
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
//           {[
//             {
//               title: "Counterparty Risks",
//               description:
//                 "Despite the rise of DEXs, true decentralization remains elusive. Many platforms still rely on centralized components, compromising user autonomy and asset control.",
//             },
//             {
//               title: "Decentralization",
//               description:
//                 "Despite the rise of DEXs, true decentralization remains elusive. Many platforms still rely on centralized components, compromising user autonomy and asset control.",
//             },
//             {
//               title: "Liquidity",
//               description:
//                 "Despite the rise of DEXs, true decentralization remains elusive. Many platforms still rely on centralized components, compromising user autonomy and asset control.",
//             },
//             {
//               title: "Capital Efficiency",
//               description:
//                 "Despite the rise of DEXs, true decentralization remains elusive. Many platforms still rely on centralized components, compromising user autonomy and asset control.",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="cardBorderBgBorder p-2  rounded-lg shadow-md text-center"
//             >
//               <div className="flex justify-center items-center mb-4 mt-4">
//                 <img src="/crypto/dollarsymbol.png" style={{width:"89px",height:"92px"}} />
//               </div>
//               <h3 className="text-xl gradient-text font-bold py-6">{item.title}</h3>
//               <p className="text-sm text-gray-300 pb-12 font-bold">{item.description}</p>
//             </div>
//           ))}
//         </div>
//         <div className="borderBg mt-12 p-[45px]">
//           <p className="text-white text-[20px] text-center font-medium">
//             By design, DecryptoX solves the problem of liquidity fragmentation
//             and introduces a 
//           </p>
//           <p className="text-white text-[20px] text-center font-medium">
//             truly decentralized, efficient trading
//             infrastructure.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProblemSection;
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
  ];

  return (
    <section className="bg-black text-white py-[10px] md:py-12 w-full">
      <div
        style={{
          fontFamily: "Geist",
        }}
        className="max-w-7xl mx-auto px-6 text-left md:text-center pt-[10px] md:pt-[180px]"
      >
        <div className="mb-4">
          <CommonHeading heading={"Problem"} fontSize="text-[42px]" />
        </div>

        <h1 className="text-[30px] xl:text-[62px] font-bold">
          The existing crypto trading landscape{" "}
        </h1>
        <p className="text-[30px] xl:text-[62px] font-bold mb-8">
          is
          <span className="text-[#1B429A] ml-2">fundamentally broken.</span>
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

