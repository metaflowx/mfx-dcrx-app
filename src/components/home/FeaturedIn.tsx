// components/FeaturedIn.tsx
"use client";
import React from "react";
import Slider from "react-slick";

// Import slick-carousel CSS in your global stylesheet
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedIn: React.FC = () => {
  // Define settings for react-slick
  const settings: SliderSettings = {
    infinite: true, // Infinite loop
    slidesToShow: 5, // Number of logos visible at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-scroll
    autoplaySpeed: 2000, // Delay in ms
    speed: 500, // Transition speed
    arrows: false, // Disable next/prev arrows
    dots: false, // Disable navigation dots
    pauseOnHover: false, // Continue scrolling even on hover
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  } ;

  return (
    <div className="bg-black text-white py-10 w-full">
      <h2 className="text-center text-lg font-semibold mb-6">Featured In</h2>
      <div className="px-6">
        <Slider {...settings}>
          {/* Logos */}
          {["linear", "utify", "bitrise", "hopin", "pendo"].map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={`/coin-icon/${logo}.png`}
                alt={logo}
                className="w-[280px] h-[80px] object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedIn;

// Type definitions for react-slick settings
interface SliderSettings {
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  speed: number;
  arrows: boolean;
  dots: boolean;
  pauseOnHover: boolean;
  responsive?: Array<{
    breakpoint: number;
    settings: Partial<Omit<SliderSettings, "responsive">>;
  }>;
}
