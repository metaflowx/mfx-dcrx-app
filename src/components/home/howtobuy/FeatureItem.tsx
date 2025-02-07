import * as React from 'react';
import { FeatureItemProps } from './types';

export const FeatureItem: React.FC<FeatureItemProps> = ({ iconSrc, text }) => (
  <div className="flex  flex-1 flex-auto gap-5">
    <img
      loading="lazy"
      src={iconSrc}
      alt=""
      className="object-contain shrink-0 self-start aspect-square w-[26px]"
    />
    <div style={{fontFamily:"Geist",}} className="flex-auto font-bold text-[16px]">{text}</div>
  </div>
);