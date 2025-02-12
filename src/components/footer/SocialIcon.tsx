import Link from "next/link";
import { SocialIconProps } from "./types";


export const SocialIcon: React.FC<SocialIconProps> = ({ src,url, alt, className }) => {
 
  
  return(
    <Link href={url} target="_blank" >
    <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`object-contain  my-auto fill-white ${className}`}
  />
    </Link>
  )
}