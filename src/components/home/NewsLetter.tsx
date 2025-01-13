import React from "react";

const Newsletter: React.FC = () => {
  return (
    <div style={{fontFamily:"Geist"}}  className="newsLetterbg py-[100px] px-4 text-center w-full">
      <h2 style={{lineHeight:"63px"}} className="text-white text-[57px] font-bold mb-6">
        Stay up to date with <br /> our Newsletter
      </h2>
      <form style={{border:"1px solid #FFFFFF"}} className="newsLetterbgBorder rounded-full flex justify-center items-center max-w-[800px] mx-auto">
        <input
          type="email"
          placeholder="Enter Your Email Id"
          className="flex-1 p-[1rem] rounded-l-full  outline-none bg-transparent text-white"
        />
         <button
             style={{
              background: "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%",
            }}
            className="w-[299px] h-[60px] rounded-full hover:bg-blue-600 text-[21px] font-bold text-black">
              Subscribe Newsletter
            </button>
        
      </form>
    </div>
  );
};

export default Newsletter;
