"use client";
import React, { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imgSrc: string;
  bgColor: string;
}

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Micheal Johnson",
      role: "Developer",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imgSrc: "/card/micheal.png", // Replace with your image paths
      bgColor: "bg-black",
    },
    {
      name: "Nathaniel Lewis",
      role: "Founder & CO",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imgSrc: "/card/nathaniel.png",
      bgColor: "bg-black",
    },
    {
      name: "David Williams",
      role: "Consultant",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imgSrc: "/card/david.png",
      bgColor: "bg-black",
    },
    {
      name: "Jessica Brown",
      role: "Designer",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imgSrc: "/card/jessica.png",
      bgColor: "bg-black",
    },
    {
      name: "Robert Smith",
      role: "Project Manager",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imgSrc: "/card/robert.png",
      bgColor: "bg-black",
    },
    {
      name: "Sophia Lee",
      role: "Marketing Specialist",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imgSrc: "/images/member6.png",
      bgColor: "bg-black",
    },
  ];

  return (
    <section className="bg-black text-white py-16 w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-center text-3xl font-bold text-cyan-400">Our Team</h2>
        <p className="text-center mt-2 text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 mt-10">
          {teamMembers.slice(0,3).map((member, index) => (
            <div
              key={index}
              className={`p-6 pt-[70px] pb-[30px] border border-[#1B429A] bg-[#09090B]   transition cursor-pointer ${
                index === 0
                  ? "rounded-tl-[20px] rounded-bl-[20px]" // First item: Top-left & Bottom-left
                  : index === 2
                  ? "rounded-tr-[20px] rounded-br-[20px]" // Third item: Top-right & Bottom-right
                  : ""
              }`}
              onClick={() => setSelectedMember(member)}
            >
              <div className="flex flex-col items-center">
                {/* Image */}
                <div
                  className={` rounded-full ${member.bgColor} flex items-center justify-center mb-4`}
                >
                  <img src={member.imgSrc} alt={member.name} className="rounded-full w-[234px] h-[234px]" />
                </div>
                {/* Name and Role */}
                <h3 className="text-center text-[28px] font-semibold">{member.name}</h3>
                <p className="text-center text-[20px] text-gray-300">{member.role}</p>
              </div>
              {/* Button */}
              <div className="mt-4 flex justify-center">
              <img src="/card/ad.png" className="w-[44px]" />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 mt-1">
          {teamMembers.slice(3,6).map((member, index) => (
            <div
              key={index}
              className={`p-6 pt-[70px] pb-[30px] border border-[#1B429A] bg-[#09090B]  transition cursor-pointer ${
                index === 0
                  ? "rounded-tl-[20px] rounded-bl-[20px]" // First item: Top-left & Bottom-left
                  : index === 2
                  ? "rounded-tr-[20px] rounded-br-[20px]" // Third item: Top-right & Bottom-right
                  : ""
              }`}
              onClick={() => setSelectedMember(member)}
            >
              <div className="flex flex-col items-center">
                {/* Image */}
                <div
                  className={` rounded-full  flex items-center justify-center mb-4`}
                >
                  <img src={member.imgSrc} alt={member.name} className="rounded-full w-[234px] h-[234px]" />
                </div>
                {/* Name and Role */}
                <h3 className="text-center text-[28px] font-semibold">{member.name}</h3>
                <p className="text-center text-[20px] text-gray-300">{member.role}</p>
              </div>
              {/* Button */}
              <div className="mt-4 flex justify-center">
                <img src="/card/ad.png" className="w-[44px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
