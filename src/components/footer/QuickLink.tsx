"use client";
import * as React from "react";
import { QuickLinkProps } from "./types";
import { useRouter } from "next/navigation";
import { downloadPdf } from "@/utils";
import Link from "next/link";

export const QuickLink: React.FC<QuickLinkProps> = ({
  text,
  href,
  className = "",
  link,
}) => {
  const router = useRouter();
  return (
    <>
    {link ? (
        <Link
        className={`${className} cursor-pointer text-white`}
        href={link}
       
      >
        {" "}
        {text}
      </Link>

    ):(
      <>


{text === "White Paper" ? (
        <Link
          className={`${className} cursor-pointer text-white`}
          href={"docs/whitepaper.pdf"}
          target="_blank"
        >
          {" "}
          {text}
        </Link>
      ) : (
        <>
        
          {text === "Light Paper" ? (
            <>
              <Link
                className={`${className} cursor-pointer text-white`}
                href={"docs/lightpaper.pdf"}
                target="_blank"
              >
                {" "}
                {text}
              </Link>
            </>
          ) : (
            <>
              <div
                className={`${className} cursor-pointer `}
                onClick={() => {
                  if (href) {
                    router.push("/referearn");
                  } else if (text === "White Paper") {
                    downloadPdf("/docs/whitepaper.pdf", "whitePaper.pdf");
                  } else if (text === "Light Paper") {
                    downloadPdf("/docs/lightpaper.pdf", "litepaper.pdf");
                  }
                }}
              >
                {text}
              </div>
            </>
          )}
        </>
      )}
      
      </>
    )}
     
    </>
  );
};
