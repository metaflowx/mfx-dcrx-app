import * as React from "react";
import { ImageProps } from "./types";

export const FAQImage: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`object-contain w-full rounded-none aspect-[11.36] max-md:max-w-full ${className || ''}`}
  />
);