import React, { useEffect, useRef, useState } from "react";

const roadmapData = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Dummy text printing",
    description:
      "Despite the rise of DEXs, true decentralization remains elusive. Many platforms still rely on centralized components, compromising user autonomy and asset control.",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Dummy text printing",
    description:
      "Decentralized exchanges are the future. Building robust infrastructures to ensure autonomy and scalability for users.",
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Dummy text printing",
    description:
      "Innovative solutions to improve asset control and strengthen decentralized frameworks for global adoption.",
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "Dummy text printing",
    description:
      "Innovative solutions to improve asset control and strengthen decentralized frameworks for global adoption.",
  },
  {
    id: 5,
    phase: "Phase 5",
    title: "Dummy text printing",
    description:
      "Innovative solutions to improve asset control and strengthen decentralized frameworks for global adoption.",
  },
  {
    id: 6,
    phase: "Phase 6",
    title: "Dummy text printing",
    description:
      "Innovative solutions to improve asset control and strengthen decentralized frameworks for global adoption.",
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
      className="flex overflow-x-auto scrollbar-hide items-center space-x-[69px] py-8 px-1"
    >
      {roadmapData.map((item, index) => (
        <div
          key={item.id}
          data-id={item.id} // Add a data attribute to identify cards
          onClick={() => handleCardClick(item.id)} // Handle card click
          className={`relative flex-shrink-0 w-[394px] h-[234px] rounded-[20px] shadow-lg p-6 cursor-pointer transition-transform duration-300 ${
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
          <h4 className="text-[#2B9AE6] text-[20px] font-bold">{item.phase}</h4>
          {/* Title */}
          <h3 className="text-white font-bold text-[25px] mt-2">
            {item.title}
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
