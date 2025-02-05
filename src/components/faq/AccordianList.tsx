"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./AccordianData"




export default function AccordianList({faqs}:{faqs?:any}) {
  return (
    <div style={{fontFamily:"Geist"}} className=" text-white">
      <div className="mt-10">
        

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq:any, index:any) => (
            <div
              key={index}
              className="group accordianBg rounded-lg border border-blue-800/30 bg-blue-950/20 backdrop-blur-sm  transition-all duration-200"
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="flex w-full items-center justify-between px-6 py-6 text-left">
                  <span className="text-lg sm:text-[25px]   font-medium">{faq.question}</span>
               
                </AccordionTrigger>
                <AccordionContent style={{lineHeight:"30px"}}  className="px-6 pb-4 text-white text-lg  sm:text-[20px]">
                  {faq.answer}
                  {faq.detail ?(
                    <>
                    <h2 className="mt-2">For News Bar</h2>
                    <ul>
                      <li>
                      Empower Your Crypto Journey—Trade Securely with DecryptoX Today!  

                      </li>
                      <li>
                      Snag $DCRX at Just $0.012—Phase 1 Early Bird Rewards Won’t Last!  

                      </li>
                      <li>
                      Phase 2 Kicks Off at $0.015—Prices Rise Every 2 Days. Act Fast!  

                      </li>
                      <li>
                      Over $750,000 Raised and Climbing—Join the DeFi Revolution Now!  

                      </li>
                      <li>
                      Win Big with Our 1 Million $DCRX Giveaway—Follow, Share & Claim Your Prize!  
 

                      </li>
                      <li>
                      Early Investors Reap Exclusive Rewards—Limited Tokens, Lifetime Benefits!  
                      </li>
                      <li>
                      Shape DeFi’s Future—Invest in $DCRX and Lead the Charge!  
                      </li>
                    </ul>
                    </>
                  ):""}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  )
}