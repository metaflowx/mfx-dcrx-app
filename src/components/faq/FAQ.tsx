import * as React from "react";
import { FAQItem } from "./FAQItem";
import { FAQData } from "./types";
import AccordianList from "./AccordianList";
import ConstrainedBox from "../core/constrained-box";

const faqData: FAQData = {
  title: "Frequently Asked Questions",
  subtitle: "Have questions? We have answers!",
  items: [
    {
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fbe64f115304ed884d0b03ed0c65dff9ff2b9d65929e80148421a1fa940e56a?placeholderIfAbsent=true&apiKey=c2126efc2f0a4f0aa81c13e8f4289df5"
    }
  ]
};

export const FAQ = ({ id }: { id: string }) => {
  return (
    <div className="flex faqbg flex-col text-white rounded-none w-full" id={id}>
      <ConstrainedBox classNames="px-4">
      <div className="flex relative flex-col  w-full py-[0px] md:py-[80px]  max-md:max-w-full">
        
        <div className="flex relative flex-col items-center  pt-4 pb-32   max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-col mb-0 w-full max-w-[1217px] max-md:mb-2.5 max-md:max-w-full">
            <div className="self-center text-[50px] font-bold leading-none text-center max-md:max-w-full max-md:text-2xl">
              <span className="text-sky-500">Frequently</span> Asked Questions
            </div>
            <div className="self-center mt-8 text-2xl lg:text-5xl font-bold leading-none text-center max-md:max-w-full">
              {faqData.subtitle}
            </div>
           <AccordianList />
          
           
          </div>
        </div>
      </div>
      </ConstrainedBox>
    </div>
  );
};