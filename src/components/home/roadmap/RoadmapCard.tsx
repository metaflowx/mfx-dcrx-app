import React, { useEffect, useRef, useState } from "react";

const roadmapData = [
  {
    id: 1,
    title: "Phase 1",
    title1:" Conceptualization & Initial Development",
    description: "Conducting market research, designing the technical framework, releasing the whitepaper, and developing our branding strategy to kickstart the DecryptoX platform. Engaging with early users to shape the platform from the ground up.",
    icon: "/coin-icon/edit.png",
    position: "top",
  },
  {
    id: 2,
    title: "Phase 2",
    title1:"Pre-ICO Development & Token Sale Preparations",
    description: "Finalizing smart contract development, ramping up marketing efforts, forging strategic partnerships, and preparing for the ICO token sale. Early adopters get exclusive bonuses, with exchange listing efforts underway.",
    icon: "/coin-icon/dollar.png",
    position: "bottom",
  },
  {
    id: 3,
    title: "Phase 3",
    title1:"Platform MVP Launch & Core Feature Rollout",
    description: "Unveiling the DecryptoX MVP with core features like spot & margin trading, Future & option trading,P2P Trading,DIDs and VCs Integration, Staking and Yeild Generation. Gathering user feedback to refine and enhance the platform, creating a seamless and efficient experience for all traders.",
    icon: "/coin-icon/phase3.png",
    position: "top",
  },
  {
    id: 4,
    title: "Phase 4",
    title1:"Full Platform Rollout & Feature Expansion",
    description: "Expanding the platform with cutting-edge AI-driven trading bots, decentralized liquidity pools, NFT-backed loans, dual investment products, and robust security features. Enhancing the DecryptoX ecosystem to elevate user engagement and trading performance.",
    icon: "/coin-icon/rocket.png",
    position: "bottom",
  },
  {
    id: 5,
    title: "Phase 5",
    title1:"Community Governance & Ecosystem Scaling",
    description: "Introducing full DAO governance, community treasury, and DEX aggregation to amplify platform participation. Enabling users to contribute to decision-making and scaling DecryptoX’s capabilities, ensuring decentralization at its core.",
    icon: "/coin-icon/edit.png",
    position: "top",
  },
  {
    id: 6,
    title: "Phase 6",
    title1:"Long-Term Growth & Sustainability Initiatives",
    description: "Focusing on sustainability efforts, multi-chain integration, token burns, and expanding globally. Continuous platform improvements to ensure DecryptoX remains a leading decentralized exchange with long-term success and thriving ecosystem growth.",
    icon: "/coin-icon/rocket.png",
    position: "bottom",
  },
];

const RoadmapCard = ({
  activePhaseId,
  setActivePhaseId,

}: {
  activePhaseId: number;
  setActivePhaseId: any;
 
}) => {
  const [selectedId, setSelectedId] = useState<number | null>(1); // Default selected ID
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedId(id);
    setActivePhaseId(id);
  };

  useEffect(() => {
    if (activePhaseId) {
      setSelectedId(activePhaseId);

      // Scroll to the active card
      const container = containerRef.current;
      const activeCard = container?.querySelector(
        `[data-id="${activePhaseId}"]`
      );

      if (container && activeCard) {
        const containerRect = container.getBoundingClientRect();
        const cardRect = (activeCard as HTMLElement).getBoundingClientRect();

        // Calculate scroll offset
        const offset =
          cardRect.left - containerRect.left - container.clientWidth / 2 + cardRect.width / 2;
        container.scrollBy({ left: offset, behavior: "smooth" });
      }
    }
  }, [activePhaseId]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    let autoSlideInterval: NodeJS.Timeout;

    if (mediaQuery.matches) {
      autoSlideInterval = setInterval(() => {
        setSelectedId((prevId) => {
          const nextId = prevId === roadmapData.length ? 1 : prevId! + 1;
          setActivePhaseId(nextId);
          return nextId;
        });
      }, 3000); // Slide every 3 seconds
    }

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [setActivePhaseId]);

  return (
    <div
      ref={containerRef}
      style={{ fontFamily: "Outfit" }}
      className="flex overflow-x-auto scrollbar-hide items-center space-x-[69px] py-8 px-1 h-[100%]"
    >
      {roadmapData.map((item, index) => (
        <div
          key={item.id}
          data-id={item.id} // Add a data attribute to identify cards
          onClick={() => handleCardClick(item.id)} // Handle card click
          className={`relative flex-shrink-0 w-[394px] h-[100%] min-h-[350px] rounded-[20px] shadow-lg p-6 cursor-pointer transition-transform duration-300 ${
            selectedId === item.id ? "bg-[#09090B]" : "bg-[#1F2937]"
          }`}
        >
          <div className="absolute left-[-12px] top-[37px]">
            <img
              src="/crypto/activepoint.png"
              alt="activepoint"
              className="w-[33px] h-[24px] object-contain"
            />
          </div>
          {/* Phase */}
          <h4 className="text-[#2B9AE6] text-[20px] font-bold">{item.title}</h4>
          {/* Title */}
          <h3 className="text-white font-bold text-[20px] mt-2">
            {item.title1}
          </h3>
          {/* Description */}
          <p
            style={{ fontFamily: "Geist" }}
            className="text-white font-normal text-[16px] mt-4"
          >
            {item.description}
          </p>

          {/* Connector Arrow */}
          {index < roadmapData.length - 1 && (
            <div className="absolute top-[50px] right-[-70px] transform -translate-y-1/2 overflow-hidden">
              <div className="bg-white h-[2px] w-[70px]"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RoadmapCard;
