import * as React from 'react';
import { TimerBoxProps } from './types';

export const TimerBox: React.FC<TimerBoxProps> = ({ value, label }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex relative flex-col px-6 pt-2.5 pb-6 mx-auto font-bold whitespace-nowrap bg-black bg-opacity-20 h-[127px] w-[127px] max-md:px-5">
      <div className="text-6xl text-sky-500 max-md:text-4xl">{value}</div>
      <div className="self-center text-xl text-white">{label}</div>
    </div>
  </div>
);