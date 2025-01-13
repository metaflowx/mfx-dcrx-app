import { SocialIconProps } from "./types";


export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, className }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`object-contain shrink-0 self-stretch my-auto fill-white ${className}`}
  />
);