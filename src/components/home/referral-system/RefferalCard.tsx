import CommonButton from "@/components/common/CommonButton";
import { useRouter } from 'next/navigation';
import React from "react";

interface CardProps {
  title: string;
  value: string;
  subValues: { label: string; value: string;images:any }[];
  hasButton?: boolean;
  symbol:string,
  earnsymbol:string
}

const RefferalCard: React.FC<CardProps> = ({ title, value, subValues, hasButton,symbol ,earnsymbol}) => {
  const router = useRouter()
  return (
    <div style={{fontFamily:"Geist"}} className="refferCommonMainBg rounded-lg py-[90px] px-[80px] shadow-md text-white">
      <h3 style={{fontFamily:"Geist"}} className="text-blueAccent text-[21px] font-bold text-[#2B9AE6]">{title}</h3>
      <div className="flex items-center justify-between mt-3">
        <p style={{fontFamily:"Gemunu Libre"}} className="text-[50px] font-bold">{value}

          <span className="text-[21px]">{symbol}</span>
        </p>
        {earnsymbol && (

        <div className="relative ">
        <img src={earnsymbol} className="w-[90px] h-[89px] " />
         
        </div>
        )}
      </div>
      {/* <div className="mt-4 space-y-2 text-sm">
        {subValues.map((item, index) => (
          <div  key={index} className="flex justify-between font-bold text-[21px]">
           <div className="flex items-center">
            <img src={item.images} className="w-[21px] h-[18px] " />
           <p style={{fontFamily:"Geist"}} className="text-[21px] font-bold ml-2">{item.label}</p>
           </div>
            <span  style={{fontFamily:"Gemunu Libre"}}>{item.value}</span>
          </div>
        ))}
      </div> */}
      {hasButton && (
       <CommonButton btnName="Buy Now" width="w-full" onClick={()=>router.back()} />
      )}
    </div>
  );
};

export default RefferalCard;
