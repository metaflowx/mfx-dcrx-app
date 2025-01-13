import * as React from "react";
import { FAQImage } from "./FAQImage";
import { FAQItem } from "./FAQItem";

const faqData = [
  {
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fbe64f115304ed884d0b03ed0c65dff9ff2b9d65929e80148421a1fa940e56a?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
  }
];

export const FAQ: React.FC = () => {
  return (
    <div className="flex flex-col text-white rounded-none">
      <div className="flex relative flex-col px-20 w-full min-h-[1413px] max-md:pl-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f75fdbb7b037765f31823dc6e775d9e765822276c2c42a1d71615d54a2349bd?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center px-20 pt-12 pb-32 bg-zinc-950 max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-col mb-0 w-full max-w-[1517px] max-md:mb-2.5 max-md:max-w-full">
            <div className="self-center text-6xl font-bold leading-none text-center max-md:max-w-full max-md:text-4xl">
              <span className="text-sky-500">Frequently</span> Asked Questions
            </div>
            <div className="self-center mt-8 text-5xl font-bold leading-none text-center max-md:max-w-full">
              Have questions? We have answers!
            </div>
            <FAQImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/27ae7b5eb746aed5ec233d94d4f77b524551c926da77705e35fe06a0bb3cd644?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5" alt="" />
            <FAQImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/0532bac1aba7fc5d7581c975aafb03cce25a400937eff7707645fae0a1c42bce?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5" alt="" />
            <FAQImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/17a11d87cb57a54dad4e886720c3870c54e522ad2342a151d8c5b6585672b7e6?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5" alt="" />
            <div className="flex z-10 shrink-0 rounded-none h-[263px] max-md:max-w-full" />
            {faqData.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};