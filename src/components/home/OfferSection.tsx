"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ConstrainedBox from "../core/constrained-box";
import CommonSlider from "./CommonSlider";

const OfferSection: React.FC = () => {
  const cardData = Array(8).fill({
    title: "Dummy text printing",
    description: "Lorem Ipsum has been the industry's standard dummy.",
    image: "/crypto/dollarsymbol.png",
  });

 

  return (
    <section style={{ fontFamily: "Geist" }} className="bg-[#000] text-white py-[10px] md:py-16 w-full">
      <ConstrainedBox classNames="p-4">
        <div className="max-w-8xl mx-auto text-left md:text-center">
          <h2 className="text-[39px] md:text-[50px] font-bold mb-4">
            What We Offer at <span className="text-[#2B9AE6]">DecryptoX</span>
          </h2>
          <p className="text-white text-left md:text-center  font-medium text-[18px] md:text-[22px]">
            We’re creating an ecosystem where users can truly own their trading experience
            without intermediaries.
          </p>
          <p className="text-white  font-medium text-[18px] md:text-[22px]">
            Powered by blockchain, DecryptoX delivers all the advantages of centralized platforms
            but with the freedom
          </p>
          <p className="text-white font-medium text-[18px] md:text-[22px]">
            and security that only decentralization can provide.
          </p>

          {/* Swiper Integration */}
        
             
        </div>
      
      </ConstrainedBox>
      <div  className="w-full mx-auto px-6 text-center ">
         <Swiper
            modules={[Navigation, Pagination,Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
            style={{ overflow: "hidden" }} 
            className="mt-8"
          >
            {cardData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="cardBorderBg  py-[55px] px-[60px] shadow-md hover:shadow-lg transition-all">
                  <div className="flex justify-center items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "89px", height: "91px" }}
                    />
                  </div>
                  <h3 style={{ fontFamily: "Geist" }} className="text-[20px] text-center font-bold mb-2">
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "Geist" }} className="text-[18px] text-white text-center pb-10 pt-3">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      
       </div>
    </section>
  );
};

export default OfferSection;
