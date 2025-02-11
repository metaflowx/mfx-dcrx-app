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
  const [selectedMember, setSelectedMember] = useState<any>("");

  const teamMembers: TeamMember[] = [
    {
      name: "Aryan Mehta",
      role: " Founder & CEO",
      description:
        "With over 10 years of experience in blockchain and fintech, Aryan is the visionary leader behind DecryptoX. As an entrepreneur he blends innovation with a passion for inclusivity and decentralization.",
        imgSrc: "/card/01-01.png",
      bgColor: "bg-black",
    },
    {
      name: "Sophia Nguyen",
      role: "Chief Technology Officer (CTO)",
      description:
        "Sophia, a tech visionary, brings unparalleled expertise in distributed ledger technology and Web3 protocols to DecryptoX. She has been pivotal in scaling decentralized applications to the users and ensuring robust security for cutting-edge projects.",
     
      imgSrc: "/card/02-01.png", 
      bgColor: "bg-black",
    },
    {
      name: "John Tan",
      role: "Community Manager",
      description:
        "John is a master of crypto community engagement and user adoption strategies. His focus is on creating a dynamic, globally connected community for DecryptoX, ensuring that each user feels heard and valued.",
      imgSrc: "/card/03-01.png",
      bgColor: "bg-black",
    },
    {
      name: "Mohamed El-Sayed,",
      role: "Chief Marketing Officer (CMO)",
      description:
        "Mohamed, an experienced marketer, specializes in driving crypto adoption across emerging markets. His expertise has fueled campaigns and played a key role in boosting blockchain worldwide.",
        imgSrc: "/card/04-01.png",
      bgColor: "bg-black",
    },
    {
      name: " Kin Lai Wong,",
      role: "Lead Blockchain Developer",
      description:
        "Kin, a blockchain prodigy, is an expert in Solidity, Ethereum Layer 2 solutions, and security audits. Her meticulous work in deploying high-transaction smart contracts ensures that DecryptoX remains secure, scalable, and decentralized.",
      imgSrc: "/card/05-01.png",
      bgColor: "bg-black",
    },
    {
      name: " Susan Lee",
      role: "Blockchain Advisor",
      description:
        "Susan, a distinguished blockchain expert, brings invaluable knowledge in decentralized governance and ecosystems. Her strategic guidance shapes the direction of DecryptoX, steering it toward a more inclusive and transparent digital economy.",
      imgSrc: "/card/06-01.png",
      bgColor: "bg-black",
    },
  ];

  
  

  return (
    <section className="bg-black text-white  py-1 md:py-16 w-full" id={id} onMouseOut={() => setSelectedMember("")} >
      <div
        style={{ fontFamily: "Geist" }}
        className="max-w-6xl mx-auto px-4 text-center"
      >
        {/* Section Header */}
        <CommonHeading heading="Our Team" fontSize={"text-[40px] "} />

        

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 mt-10" >
          {teamMembers.slice(0, 3).map((member, index) => {
            return (
              <>
                {selectedMember.name === member?.name ? (
                  <>
                    <div className="flex cursor-pointer justify-center border border-[#1B429A] items-center rounded-tr-[20px] rounded-br-[20px]  teamCardBg">
                      <div className="max-w-sm w-full  rounded-lg  text-center ">
                        <h2
                          style={{ fontFamily: "Plus Jakarta Sans" }}
                          className="text-white text-[30px] font-bold"
                        >
                          {selectedMember?.name}
                        </h2>
                        <p
                          style={{ fontFamily: "Outfit" }}
                          className="text-[#AEAEAE] text-[22px] mt-1"
                        >
                          {selectedMember?.role}
                        </p>
                        <p
                          style={{ fontFamily: "Geist" }}
                          className="text-white text-[16px] mt-4 text-center font-medium px-6"
                        >
                          {selectedMember.description}
                        </p>
                        {/* <div className="flex justify-center gap-4 mt-6">
                          <img
                            src="/crypto/facebook.png"
                            alt="facebook"
                            className="w-[38px] h-[38px]"
                          />
                          <img
                            src="/crypto/telegra.png"
                            alt="telegram"
                            className="w-[38px] h-[38px]"
                          />

                          <img
                            src="/crypto/instagram.png"
                            alt="insta"
                            className="w-[38px] h-[38px]"
                          />
                        </div> */}
                      </div>
                    </div>
                  </>
                ) : (
                  <div
                    key={index}
                    className={`p-6  pt-[40px] pb-[30px] border border-[#1B429A] bg-[#09090B]  transition cursor-pointer ${
                      index === 0
                        ? "rounded-tl-[20px] rounded-bl-[20px]"
                        : index === 2
                        ? "rounded-tr-[20px] rounded-br-[20px]"
                        : ""
                    }`}
                    onMouseEnter={() => setSelectedMember(member)}
                    onMouseUp={() => setSelectedMember("")}
                    onMouseLeave={()=> setSelectedMember("")}
                    onMouseOut={()=>setSelectedMember("")}
                  >
                    <div className="flex flex-col items-center">
                      {/* Image */}
                      <div
                        className={` rounded-full  flex items-center justify-center mb-4`}
                      >
                        <img
                          src={member.imgSrc}
                          alt={member.name}
                          className="rounded-full w-[234px] h-[234px]"
                        />
                      </div>
                      {/* Name and Role */}
                      <h3 className="text-center text-[28px] font-semibold">
                        {member.name}
                      </h3>
                      <p className="text-center text-[20px] text-gray-300">
                        {member.role}
                      </p>
                    </div>
                    {/* Button */}
                    <div className="mt-4 flex justify-center">
                      <img src="/card/ad.png" className="w-[44px]" />
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 mt-1">
          {teamMembers.slice(3, 6).map((member, index) => {
            return (
              <>
                {selectedMember.name === member?.name ? (
                  <>
                    <div className="flex cursor-pointer justify-center border border-[#1B429A] items-center rounded-tr-[20px] rounded-br-[20px]  teamCardBg">
                      <div className="max-w-sm w-full  rounded-lg  text-center ">
                        <h2
                          style={{ fontFamily: "Plus Jakarta Sans" }}
                          className="text-white text-[30px] font-bold"
                        >
                          {selectedMember?.name}
                        </h2>
                        <p
                          style={{ fontFamily: "Outfit" }}
                          className="text-[#AEAEAE] text-[22px] mt-1"
                        >
                          {selectedMember?.role}
                        </p>
                        <p
                          style={{ fontFamily: "Geist" }}
                          className="text-white text-[16px] mt-4 text-center font-medium px-6"
                        >
                          {selectedMember.description}
                        </p>
                        {/* <div className="flex justify-center gap-4 mt-6">
                          <img
                            src="/crypto/facebook.png"
                            alt="facebook"
                            className="w-[38px] h-[38px]"
                          />
                          <img
                            src="/crypto/telegra.png"
                            alt="telegram"
                            className="w-[38px] h-[38px]"
                          />

                          <img
                            src="/crypto/instagram.png"
                            alt="insta"
                            className="w-[38px] h-[38px]"
                          />
                        </div> */}
                      </div>
                    </div>
                  </>
                ) : (
                  <div
                    key={index}
                    className={`p-6 pt-[40px] pb-[30px] border border-[#1B429A] bg-[#09090B]  transition cursor-pointer ${
                      index === 0
                        ? "rounded-tl-[20px] rounded-bl-[20px]"
                        : index === 2
                        ? "rounded-tr-[20px] rounded-br-[20px]"
                        : ""
                    }`}
                    onMouseUp={() => setSelectedMember("")}
                    onMouseEnter={() => {
                      setSelectedMember(member);
                    }}
                    onMouseLeave={()=> setSelectedMember("")}
                    onMouseOut={()=>setSelectedMember("")}
                    
                  >
                    <div className="flex flex-col items-center">
                      {/* Image */}
                      <div
                        className={` rounded-full  flex items-center justify-center mb-4`}
                      >
                        <img
                          src={member.imgSrc}
                          alt={member.name}
                          className="rounded-full w-[234px] h-[234px]"
                        />
                      </div>
                      {/* Name and Role */}
                      <h3 className="text-center text-[28px] font-semibold">
                        {member.name}
                      </h3>
                      <p className="text-center text-[20px] text-gray-300">
                        {member.role}
                      </p>
                    </div>
                    {/* Button */}
                    <div className="mt-4 flex justify-center">
                      <img src="/card/ad.png" className="w-[44px]" />
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
