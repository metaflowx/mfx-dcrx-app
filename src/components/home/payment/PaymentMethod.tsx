import * as React from 'react';
import { PaymentMethodProps } from './types';

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ icon, label }) => (
  <div className="flex gap-1 px-6 py-3.5 bg-gray-900 rounded max-md:px-5">
    <img
      loading="lazy"
      src={icon}
      alt={`${label} payment icon`}
      className="object-contain shrink-0 self-start w-5 aspect-[1.05]"
    />
    <div>{label}</div>
  </div>
);