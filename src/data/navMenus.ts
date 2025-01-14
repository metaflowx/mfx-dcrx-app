import { INavItem } from "@/types";
import {
  faHome,
  faUser,
  faBriefcase,
  faTimeline,
  faAward,
  faLaptopCode,
  faEnvelope,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export const navMenus: INavItem[] = [
 
  {
    name: "ABOUT",
    link: "/#about",
    icon: faUser,
  },
  {
    name: "HOW TO BUY",
    link: "/#howtobuy",
    icon: faBriefcase,
  },
  {
    name: "FEATURES",
    link: "/#features",
    icon: faTimeline,
  },
  {
    name: "TOKENOMICS",
    link: "/#tokenomics",
    icon: faAward,
  },
  {
    name: "ROADMAP",
    link: "/#projects",
    icon: faLaptopCode,
  },
  {
    name: "FAQs",
    link: "/#faq",
    icon: faEnvelope,
  },
  {
    name: "Our Team",
    link: "/#team",
    icon: faCreditCard,
  },
  {
    name: "Refer & Earn",
    link: "/referearn",
    icon: faCreditCard,
  },
  
];
