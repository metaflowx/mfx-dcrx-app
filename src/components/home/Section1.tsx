import React from 'react';
import ConstrainedBox from '../core/constrained-box';

const HomeSection1= ({ id }: { id: string }) => {
  return (
    <div  id={id} className="min-h-screen w-full text-white flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="text-center max-w-xxl pt-3 lg:pt-[150px]">
        <h1 className="text-[30px] lg:text-[56px]  mb-4 text-[#2B9AE6] leading-snug " style={{fontFamily:"Geist, serif",fontWeight:700}} >Decryptox referral program</h1>
        <p className="text-white mt-6 text-[22px]">
          Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s, when an  
        </p>
        <p className="text-white mb-6 text-[22px]">
        unknown printer took a galley of type and scrambled
        it to make a type specimen book.
        </p>
        {/* <CommonButton btnName=" Refer a friend" /> */}
        <button  style={{
      background: "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%",
    }} className="px-6 py-3  hover:bg-blue-500  rounded-[13px] shadow-md text-black w-[237px] text-[21px] font-bold">
          Refer a friend
        </button>
      </div>

      {/* Steps Section */}
      <ConstrainedBox>

      <div className="mt-12 w-full ">
        <h2 className="text-[30px] lg:text-[56px] font-bold mb-8 text-[#2B9AE6] text-center leading-snug" style={{fontFamily:"Geist, serif",fontWeight:700}} >
          Refer a friend in four easy steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="cardBorderWithoutBg p-6 rounded-md text-center"
            >
              <h3 style={{fontFamily:"Geist"}} className="text-[90px] font-bold mb-1 text-[#2B9AE6]">{`0${index + 1}.`}</h3>
              <h4 style={{fontFamily:"Outfit"}} className="text-[28px] font-bold mb-2">Dummy text printing</h4>
              <p style={{fontFamily:"Geist"}} className="text-white text-[18px] font-semibold text-center pb-10">
               Lorem Ipsum has been the industry's standard dummy 
              </p>
            </div>
          ))}
        </div>
      </div>
      </ConstrainedBox>
    </div>
  );
};

export default HomeSection1;
