"use client";
import * as React from "react";
import Slider from "react-slick";

// Import slick-carousel CSS in your global stylesheet
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = Slider as unknown as React.FC<any>; // Fix TypeScript issue

const FeaturedIn: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: false,
    dots: false,
    
    pauseOnHover: false,
    
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-black text-white py-10 w-full">
      <h2 style={{ fontFamily: "Geist" }} className="text-center text-[39px] md:text-[50px] font-bold mb-6">
        Featured In
      </h2>
      <div className="px-6">
        <SlickSlider {...settings}>
          {["Bloomberg", "CoinDesk", "CoinMarketCap", "CryptoRank", "Decrypt","Forbes","ICObench","icoHotlist","Nasdaq","techcrunch","telegraph","yahoofinance"].map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img src={`/coin-icon/${logo}.jpg`} alt={logo} className="w-[200px] xl:w-[280px] h-[80px] object-contain" />
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default FeaturedIn;
