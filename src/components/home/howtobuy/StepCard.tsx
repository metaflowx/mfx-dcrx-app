import * as React from 'react';
import { StepCardProps } from './types';

export const StepCard: React.FC<StepCardProps> = ({ number, iconSrc, description, arrowSrc, title }) => (
  <div className="flex flex-col stepBgCard items-start pt-5 pb-12 px-6 w-full rounded-2xl max-md:mt-2.5 relative h-[100%] min-h-[380px]"> 
    <div className='absolute right-2 top-12'>
      <img
        loading="lazy"
        src={number}
        alt=""
        className="object-contain shrink-0 my-auto aspect-[0.98] w-[84px]"
      />
    </div>
    <div className="flex pt-8 text-9xl tracking-tighter text-sky-500 whitespace-nowrap max-md:text-4xl">
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 my-auto aspect-[0.98] w-[84px]"
      />
    </div>
    <div className="mt-5 text-lg text-white w-[289px] flex-grow"> 
      <h4 style={{ fontFamily: "Geist" }} className="text-[20px] pb-2 font-semibold">{title}</h4>
      <h6 style={{ fontFamily: "Geist" }} className="font-normal text-[16px]">{description}</h6>
    </div>
    <div className="mt-auto"> 
      <img
        loading="lazy"
        src={arrowSrc}
        alt=""
        className="object-contain mt-6 w-44 max-w-full aspect-[14.71]"
      />
    </div>
  </div>
);
