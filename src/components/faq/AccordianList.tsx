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
                 
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  )
}