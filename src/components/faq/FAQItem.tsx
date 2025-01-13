import * as React from "react";
import { FAQItemProps } from "./types";

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, imageUrl }) => (
  <div className="flex relative z-10 flex-col px-11 pt-12 pb-24 w-full text-white min-h-[377px] max-md:px-5 max-md:max-w-full">
    <img
      loading="lazy"
      src={imageUrl}
      alt=""
      className="object-cover absolute inset-0 size-full"
    />
    <div className="flex relative flex-wrap gap-5 justify-between text-3xl font-bold max-md:max-w-full">
      <div className="max-md:max-w-full">{question}</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1e8b0d6758a07027c2d587b5d7d0fc877a30ff2dc8fde967a31d7c5eb912bc?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
        alt=""
        className="object-contain shrink-0 my-auto w-7 rounded-none aspect-[1.87]"
      />
    </div>
    <div className="relative self-start mt-7 text-2xl leading-9 max-md:max-w-full">
      {answer}
    </div>
  </div>
);