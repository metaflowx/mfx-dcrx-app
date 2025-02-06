import * as React from "react";
import { FAQItem } from "./FAQItem";
import { FAQData } from "./types";
import AccordianList from "./AccordianList";

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

const faqs = [
  {
    question: "How does the referral program work?",
    answer: "Simply share your unique referral link with friends. When they sign up and participate in the ICO, you earn rewards instantly."
  },
  {
    question: "Who can participate in the referral program?",
    answer: "Anyone with an active account can join and start referring friends to earn exclusive rewards."
  },
  {
    question: "What rewards do I get for referring friends?",
    answer: "You receive a percentage of your referral’s token purchase as a bonus, plus additional incentives based on the referral tier system."
  },
  {
    question: "Is there a limit to how many people I can refer?",
    answer: "No limits! The more friends you invite, the more rewards you can earn."
  },
  {
    question: "How can I track my referrals and earnings?",
    answer: "You can monitor your referrals and rewards in the ‘Referral Dashboard’ within your account."
  },
  {
    question: "When will I receive my referral rewards?",
    answer: "Rewards are credited instantly or based on the ICO phase. Check the referral terms for specific payout details."
  },
  
 
]

export const FAQRefer = () => {
  return (
    <div className="flex faqbg flex-col text-white rounded-none w-full" >
      <div className="flex relative flex-col py-[10px]  md:py-[80px]  w-full">
        
        <div className="flex relative flex-col items-center px-20 pt-12 pb-1 md:pb-32  max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mb-0 w-full max-w-[1217px] max-md:mb-2.5 max-md:max-w-full">
            <div className="self-center text-[50px] font-bold leading-none text-left md:text-center max-md:max-w-full max-md:text-4xl">
              <span className="text-[#2B9AE6]">Referral program FAQs</span> 
            </div>
            
           <AccordianList faqs={faqs} />
          
           
          </div>
        </div>
      </div>
    </div>
  );
};