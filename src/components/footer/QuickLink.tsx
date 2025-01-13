


import * as React from "react";
import { QuickLinkProps } from "./types";


export const QuickLink: React.FC<QuickLinkProps> = ({ text, className = "" }) => (
  <div className={`${className}`}>{text}</div>
);