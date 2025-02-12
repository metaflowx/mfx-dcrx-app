"use client";
import React, { useRef, useState } from "react";
import RoadmapCard from "./RoadmapCard";

const Roadmap = ({id}:{id:string}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activePhaseId, setActivePhaseId] = useState<number>(1); // State for active phase ID


  // Handle slider navigation
  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth / 2; // Adjust scroll amount
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      // Update activePhaseId
      setActivePhaseId((prevId) => {
        const nextId =
          direction === "left" ? Math.max(1, prevId - 1) : Math.min(phases.length, prevId + 1);
        return nextId;
      });
    }
  };


  const phases = [
    {
      id: 1,
      qtr:"Q4 2024 ",
      title: "Phase 1",
      description: "Conceptualization &",
      description1:"Initial Developmen",
      icon: "/coin-icon/edit.png",
      position: "top",
    },
    {
      id: 2,
      qtr:"Q1-Q2 2025 ",
      title: "Phase 2",
      description: "Pre-ICO Development &",
      description1:"Token Sale Preparations",
      icon: "/coin-icon/dollar.png",
      position: "bottom",
    },
    {
      id: 3,
      qtr:"Q4 2025 ",
      title: "Phase 3",
      description: "Platform MVP Launch & ",
      description1:"Core Feature Rollout",
      icon: "/coin-icon/phase3.png",
      position: "top",
    },
    {
      id: 4,
      qtr:" Q1-Q2 2026 ",
      title: "Phase 4",
      description: "Full Platform Rollout &",
      description1:"Feature Expansion",
      icon: "/coin-icon/rocket.png",
      position: "bottom",
    },
    {
      id: 5,
      qtr:" Q3-Q4 2026 ",
      title: "Phase 5",
      description: "Community Governance & ",
      description1:"Ecosystem Scaling",
      icon: "/coin-icon/edit.png",
      position: "top",
    },
    {
      id: 6,
      qtr:" Q1-Q2 2027+ ",
      title: "Phase 6",
      description: "Long-Term Growth &",
      description1:"Sustainability Initiatives",
      icon: "/coin-icon/rocket.png",
      position: "bottom",
    },
  ];

  return (
    <div className="bg-[#141414] text-white pt-[10px] sm:pt-[50px] mb:pt-[100px] pb-[0px] md:pb-[150px] w-full" id={id}>
      {/* Vision Section */}
      <div style={{fontFamily:"Plus Jakarta Sans"}} className="text-left md:text-center mb-[15px] md:mb-16 px-4">
        <h2  className="text-[25px] md:text-[37px] font-bold text-[#2B9AE6]">DecryptoX Roadmap</h2>
        <p className="text-[20px] md:text-[20px] mt-4 font-bold leading-snug">
        Charting a Path to Innovation, Growth, and Ecosystem Evolution

        </p>
      </div>
      <RoadmapCard activePhaseId={activePhaseId} setActivePhaseId={setActivePhaseId} />

      {/* Custom Slider */}
      <div className="hidden lg:block relative w-full mt-4">
        {/* Slider Buttons */}
        <button
          onClick={() => scrollSlider("left")}
          className="absolute top-1/2 left-0 transform -translate-y-1/2  text-white p-3 rounded-full shadow-lg z-10"
        >
          <img src="/crypto/backwardarrow.png" className="w-[83px] h-[83px]" />
        </button>
        <button
          onClick={() => scrollSlider("right")}
          className="absolute top-1/2 right-0 transform -translate-y-1/2  text-white p-3 rounded-full shadow-lg z-10"
        >
          <img src="/crypto/forwardarrow.png" className="w-[83px] h-[83px]" />
        </button>

        {/* Slider Content */}
        <div ref={sliderRef} className="relative mx-[80px]">
          <img src="/crypto/curveline.png" className="absolute top-0 left-0 w-full h-96 object-contain" />

          {/* Phase Cards */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-6 gap-8 2xl:gap-16 max-w-7xl mx-auto mt-20">
            {phases.map((phase) => (
              <div
                key={phase.id}
                className={`flex flex-col items-center relative  ${
                  phase.position === "top" ? phase.id==5 ? "mt-[75px]" : "mt-0" : phase.id==4?  "mt-[180px]": phase.id==6?"mt-[150px] 2xl:mt-[160px]  " : "mt-20"
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex absolute left-[44px] items-center justify-center  text-2xl font-bold rounded-full transform ${
                    phase.position === "bottom" ?  phase.id==2? "bottom-[83px]"  : phase.id==4? "bottom-[-65px]" :"bottom-[-4px]" : "top-[-70px]"
                  } `}
                >
                  <div  className={`flex items-center justify-center w-16 h-16 border text-2xl font-bold rounded-full transform  ${
                    activePhaseId === phase.id ? "bg-[#2B9AE6] border-[#fff]" : "bg-transparent border-white"
                  }`}>

                 <img src= {phase.icon}  alt="icon" className="w-[31px] h-[28px]" />
                  </div>

                 <h5 style={{fontFamily:"Outfit"}} className="text-[12px] xl:text-[22px] font-bold whitespace-pre pl-2">{phase?.qtr}</h5>
                </div>

                {/* Line to Curve */}
                <div
                  style={{ background: "#fff" }}
                  className={`w-[1px] relative 2xl:mr-0 mr-[34px] lg:mr[44px] ${
                    phase.position === "top" ? `${phase.id==1? "-mt-2 h-[12rem]":phase.id==3? "-mt-15 h-[12rem]" : "-mt-18 h-[15rem]" }` : phase.id==6 ? "h-[13rem] 2xl:h-[12rem]" :  phase.id==2?  "h-[12rem] ": phase.id==4 ? "h-[15rem]":""
                  }`}
                >
                   <div style={{fontFamily:"Outfit"}} className={`text-center absolute ${ phase.position === "top"?" bottom-[-80px]":"top-[-80px]"} right-4 w-full text-[#2B9AE6] font-bold text-[20px]`}>
                  <h3 className=" font-bold whitespace-pre text-[14px] 2xl:text-[20px]">{phase.title}</h3>
                  <h3 className="whitespace-pre text-[13px] 2xl:text-[16px]">{phase.description}</h3>
                  <h3 className="whitespace-pre text-[13px] 2xl:text-[16px]">{phase.description1}</h3>

                </div>
                </div>

             
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;


