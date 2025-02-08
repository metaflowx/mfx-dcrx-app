"use client";
import * as React from "react";
import { QuickLinkProps } from "./types";
import { useRouter } from "next/navigation";
import { downloadPdf } from "@/utils";

export const QuickLink: React.FC<QuickLinkProps> = ({
  text,
  href,
  className = "",
}) => {
  const router = useRouter();
  return (
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
  );
};
