"use client";
import React, { useState } from "react";
import CommonHeading from "../common/CommonHeading";
import { Facebook } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imgSrc: string;
  bgColor: string;
}

const TeamSection = ({ id }: { id: string }) => {
  const [selectedMember, setSelectedMember] = useState("");

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
      imgSrc: "/card/micheal.png",
      bgColor: "bg-black",
    },
  ];

  return (
    <section className="bg-black text-white  py-1 md:py-16 w-full" id={id}>
      <div style={{fontFamily:"Geist"}} className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Header */}
        <CommonHeading heading="Our Team" fontSize={"text-[40px] "} />
      
        <p  className="text-center mt-2 text-white sm:text-[25px] md:text-[40px] font-bold leading-snug">
          Lorem Ipsum is simply dummy text of the 
        </p>
        <p className="text-center  text-white sm:text-[25px] md:text-[40px] font-bold leading-snug">
          printing and typesetting industry.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 mt-10">
        {teamMembers.slice(0,3).map((member, index) => {
            return(
              <>
              {selectedMember===member?.name ? (
                <>
                    <div className="flex cursor-pointer justify-center border border-[#1B429A] items-center rounded-tr-[20px] rounded-br-[20px]  teamCardBg">
      <div className="max-w-sm w-full  rounded-lg  text-center ">
        <h2 style={{fontFamily:"Plus Jakarta Sans"}} className="text-white text-[30px] font-bold">{member?.name}</h2>
        <p style={{fontFamily:"Outfit"}} className="text-[#AEAEAE] text-[26px] mt-1">Founder & CO</p>
        <p style={{fontFamily:"Geist"}} className="text-white text-[20px] mt-4 text-center font-medium px-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <img src='/crypto/facebook.png' alt="facebook" className="w-[38px] h-[38px]" />
          <img src='/crypto/telegra.png' alt="telegram" className="w-[38px] h-[38px]" />
           
         
          <img src='/crypto/instagram.png' alt="insta" className="w-[38px] h-[38px]" />
        </div>
      </div>
    </div>

                </>
              ):(

               <div
              key={index}
              className={`p-6  pt-[70px] pb-[30px] border border-[#1B429A] bg-[#09090B]  transition cursor-pointer ${
                index === 0
                  ? "rounded-tl-[20px] rounded-bl-[20px]" 
                  : index === 2
                  ? "rounded-tr-[20px] rounded-br-[20px]" 
                  : ""
              }`}
              onMouseEnter={() => setSelectedMember(member?.name)}
              onMouseLeave={() => setSelectedMember("")}
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
              )}
              </>
            )
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 mt-1">
          {teamMembers.slice(3,6).map((member, index) => {
            return(
              <>
              {selectedMember===member?.name ? (
                <>
                    <div className="flex cursor-pointer justify-center border border-[#1B429A] items-center rounded-tr-[20px] rounded-br-[20px]  teamCardBg">
      <div className="max-w-sm w-full  rounded-lg  text-center ">
        <h2 style={{fontFamily:"Plus Jakarta Sans"}} className="text-white text-[37px] font-bold">Nathaniel Lewis</h2>
        <p style={{fontFamily:"Outfit"}} className="text-[#AEAEAE] text-[26px] mt-1">Founder & CO</p>
        <p style={{fontFamily:"Geist"}} className="text-white text-[25px] mt-4 text-center font-medium px-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <img src='/crypto/facebook.png' alt="facebook" className="w-[38px] h-[38px]" />
          <img src='/crypto/telegra.png' alt="telegram" className="w-[38px] h-[38px]" />
           
         
          <img src='/crypto/instagram.png' alt="insta" className="w-[38px] h-[38px]" />
        </div>
      </div>
    </div>

                </>
              ):(

               <div
              key={index}
              className={`p-6 pt-[70px] pb-[30px] border border-[#1B429A] bg-[#09090B]  transition cursor-pointer ${
                index === 0
                  ? "rounded-tl-[20px] rounded-bl-[20px]" 
                  : index === 2
                  ? "rounded-tr-[20px] rounded-br-[20px]" 
                  : ""
              }`}
              onMouseLeave={() => setSelectedMember("")}
              onMouseEnter={() => {
                
                setSelectedMember(member?.name)}}
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
              )}
              </>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
