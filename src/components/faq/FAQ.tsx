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

const faqs = [
  {
    question: "What is DecryptoX ($DCRX)?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typeDecryptoX ($DCRX) is the next-gen decentralized exchange (DEX) designed to revolutionize trading. It’s more than just a platform—it’s an ecosystem where you can trade, invest, and govern securely. With no intermediaries and a focus on user privacy, DecryptoX empowers you to own your financial journey."
  },
  {
    question: "What’s the purpose of the DecryptoX ICO?",
    answer: "The DecryptoX ICO fuels our mission to build a cutting-edge decentralized ecosystem. Funds raised will drive platform innovation, expand marketing reach, enhance liquidity, and establish strategic partnerships—all to ensure DecryptoX’s growth and success."
  },
  {
    question: "How can I join the $DCRX ICO?",
    answer: "Participating in the $DCRX ICO is simple! Connect your wallet (like MetaMask), choose the amount of $DCRX you want, and confirm the transaction. Your tokens will be instantly transferred to your internal wallet, making it fast, easy, and secure."
  },
  {
    question: "What’s the structure of the ICO?",
    answer: "The $DCRX ICO has two exciting phases: Early Phase: Fixed price of $0.012 per token for 2 months. Public Presale: Starts at $0.015 per token and gradually increases every two days for 4 months. This ensures the best value for early adopters!"
  },
  {
    question: "Why should I join the ICO early?",
    answer: "Early participation means exclusive perks! Secure $DCRX tokens at the lowest prices before they increase in the public presale phase. Don’t miss out on this chance to get ahead in the DecryptoX revolution."
  },
  {
    question: "Can I earn rewards for referring friends to the ICO?",
    answer: "Absolutely! Our referral program rewards you for spreading the word. Invite friends to join the ICO, and you’ll unlock exciting bonuses. Full details will be available on our platform."
  },
  {
    question:"When will $DCRX tokens be available for trading?",
    answer:"After the ICO ends, $DCRX tokens will be tradable on the DecryptoX exchange. Plus, we’re working to list $DCRX on major centralized and decentralized exchanges, expanding your trading options."
  },
  {
    question:"Where can I find more information about DecryptoX?",
    answer:"Stay informed with our resources! Dive into the White Paper for in-depth details or check out our Light Paper for a quick overview. Follow us on social media and subscribe to our newsletter for updates, announcements, and insights.",
    detail:true
  },
 
]
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
           <AccordianList faqs={faqs} />
          
           
          </div>
        </div>
      </div>
      </ConstrainedBox>
    </div>
  );
};