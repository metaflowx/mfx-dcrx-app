import React from 'react';

const HomeSection1= ({ id }: { id: string }) => {
  return (
    <div  id={id} className="min-h-screen w-full text-white flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="text-center max-w-xxl pt-[150px]">
        <h1 className="text-[56px]  mb-4 text-[#2B9AE6] " style={{fontFamily:"Geist, serif",fontWeight:700}} >Decryptox referral program</h1>
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
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-[56px] font-bold mb-8 text-[#2B9AE6]" style={{fontFamily:"Geist, serif",fontWeight:700}} >
          Refer a friend in four easy steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="cardBorderWithoutBg p-6 rounded-md text-center"
            >
              <h3 className="text-4xl font-bold mb-4">{`0${index + 1}.`}</h3>
              <h4 className="text-lg font-semibold mb-2">Dummy text printing</h4>
              <p className="text-gray-300 text-sm">
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;
