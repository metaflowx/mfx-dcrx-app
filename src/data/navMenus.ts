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
    link: "/#services",
    icon: faBriefcase,
  },
  {
    name: "FEATURES",
    link: "/#experiences",
    icon: faTimeline,
  },
  {
    name: "TOKENOMICS",
    link: "/#skills",
    icon: faAward,
  },
  {
    name: "ROADMAP",
    link: "/#projects",
    icon: faLaptopCode,
  },
  {
    name: "FAQs",
    link: "/#contact",
    icon: faEnvelope,
  },
  {
    name: "Our Team",
    link: "/payment",
    icon: faCreditCard,
  },
  {
    name: "Refer & Earn",
    link: "/payment",
    icon: faCreditCard,
  },
  {
    name: "$1M Giveaway",
    link: "/payment",
    icon: faCreditCard,
  },
];
