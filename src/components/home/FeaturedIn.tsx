// components/FeaturedIn.tsx
"use client"
import React, { useRef } from "react";

const FeaturedIn: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white py-10 w-full">
      <h2 className="text-center text-lg font-semibold mb-6">Featured In</h2>
      <div className="relative flex items-center justify-center">
       
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-8 w-full px-6 scrollbar-hide justify-between items-center"
        >
          {/* Logos */}
          <div className="flex items-center">
            <img
              src="/coin-icon/linear.png"
              alt="Linear"
              className="w-[280px] h-[80] object-contain"
            />
          </div>
          <div className="flex items-center">
            <img
              src="/coin-icon/utify.png"
              alt="Utify"
              className="w-[280px] h-[80] object-contain"
            />
          </div>
          <div className="flex items-center">
            <img
              src="/coin-icon/bitrise.png"
              alt="Bitrise"
              className="w-[280px] h-[80] object-contain"
            />
          </div>
          <div className="flex items-center">
            <img
              src="/coin-icon/hopin.png"
              alt="Hopin"
              className="w-[280px] h-[80] object-contain"
            />
          </div>
          <div className="flex items-center">
            <img
              src="/coin-icon/pendo.png"
              alt="Pendo"
              className="w-[280px] h-[80] object-contain"
            />
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default FeaturedIn;
