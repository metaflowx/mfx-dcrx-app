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
    link: "/#howtobuy",
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
    link: "/#roadmap",
    icon: faLaptopCode,
  },
  {
    name: "OUR TEAM",
    link: "/#team",
    icon: faCreditCard,
  },
  {
    name: "FAQS",
    link: "/#faq",
    icon: faEnvelope,
  },
 
  {
    name: "REFER & EARN",
    link: "/referearn",
    icon: faCreditCard,
  },
  // {
  //   name: "$1M GIVEAWAY",
  //   link: "/referearn",
  //   icon: faCreditCard,
  // },
  
];
