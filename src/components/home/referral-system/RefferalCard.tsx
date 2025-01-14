import React from "react";

interface CardProps {
  title: string;
  value: string;
  subValues: { label: string; value: string }[];
  hasButton?: boolean;
}

const RefferalCard: React.FC<CardProps> = ({ title, value, subValues, hasButton }) => {
  return (
    <div className="refferCommonMainBg rounded-lg p-[120px] shadow-md text-white">
      <h3 className="text-blueAccent text-lg font-semibold">{title}</h3>
      <div className="flex items-center justify-between mt-3">
        <span className="text-4xl font-bold">{value}</span>
        <div className="relative w-12 h-12">
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-blueAccent to-white opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-blueAccent to-blueAccent"></div>
        </div>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        {subValues.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
      {hasButton && (
        <button className="mt-4 w-full bg-gradient-to-r from-blueAccent to-blue-500 hover:from-blue-500 hover:to-blueAccent text-sm text-white py-2 rounded-lg">
          Buy Now
        </button>
      )}
    </div>
  );
};

export default RefferalCard;
