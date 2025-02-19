"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ConnectButton from "../ConnectWallet";
import MarqueHeader from "../ui/MarqueHeader";

declare global {
  interface Window {
    googleTranslateLoaded?: boolean;
    googleTranslateElementInit?: () => void;
  }
}
interface INavItem {
  name: string;
  link: string;
}

const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: INavItem[];
  className?: string;
}) => {
  const pathname = usePathname(); // Get current pathname
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  useEffect(() => {
    const addGoogleTranslate = () => {
      if (typeof window !== "undefined" && !window.googleTranslateLoaded) {
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            { pageLanguage: "en", autoDisplay: false },
            "google_translate_element"
          );
        };

        const script = document.createElement("script");
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateLoaded = true; // Ensure it loads only once
      }
    };

    addGoogleTranslate();
  }, []);

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    setTimeout(() => {
      const selectElement = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = lang;
        selectElement.dispatchEvent(new Event("change"));
      }
    }, 1000); // Delay ensures dropdown is ready
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            " w-full fixed top-0 left-0  z-50  pb-3  h-auto",
            className
          )}
        >
          <MarqueHeader />
          <div id="google_translate_element"></div>

          {/* Logo Section */}
          <div className="flex w-full bg-[#0f1923] pt-1  items-center justify-between px-8 py-3 ">
            <div className="flex items-center space-x-4 cursor-pointer">
              <Link href={"/"}>
                <img
                  src="/crypto/logo.png"
                  alt="Logo"
                  className="h-[50px]" // Adjust the logo height as per the design
                />
              </Link>
            </div>

            {/* Navigation Items for Large Screens */}
            <div className="hidden xl:flex space-x-5">
              {navItems.map((navItem: INavItem, idx: number) => (
                <Link
                  key={idx}
                  href={navItem.link}
                  className={cn(
                    "text-white text-[12px] 2xl:text-[15px]  tracking-wider hover:text-[#2b9ae6] transition",
                    pathname === navItem.link && "text-[#2b9ae6]"
                  )}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <Link href={"https://t.me/Official_DecryptoX"} target="_blank">
                <img
                  src="/crypto/telegram.png"
                  alt="Telegram"
                  className="h-[24px] hidden lg:block"
                />
              </Link>
              <Link href={"https://x.com/_DecryptoX"} target="_blank">
                <img
                  src="/crypto/x.png"
                  alt="X"
                  className="h-[24px] hidden lg:block"
                />
              </Link>

              <ConnectButton />

              <div className="hidden xl:flex language-selector relative">
                <select
                  value={selectedLanguage}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="bg-[#09090B] flex justify-center items-center text-white text-lg border border-white px-3 rounded-[6px] max-w-fit h-[33px] cursor-pointer appearance-none pl-3 pr-8"
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>

                  <option value="cs">Czech</option>
                  <option value="nl">Dutch</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="hu">Hungarian</option>
                  <option value="id">Indonesian</option>
                  <option value="it">Italian</option>
                  <option value="ja">Japanese</option>
                  <option value="ko">Korean</option>
                  <option value="pl">Polish</option>
                  <option value="pt">Portuguese</option>
                  <option value="ro">Romanian</option>
                  <option value="ru">Russian</option>
                  <option value="sk">Slovak</option>
                  <option value="es">Spanish</option>
                  <option value="th">Thai</option>
                  <option value="tr">Turkish</option>
                  <option value="vi">Vietnamese</option>
                  <option value="zh">Chinese</option>
                </select>

                <img
                  src="/crypto/downarrow.png"
                  alt="Language Selector"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                />
              </div>

             
              <button
                onClick={toggleDrawer}
                className="block xl:hidden text-white text-xl focus:outline-none"
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-xl/6 font-semibold text-[var(--textColor)]"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-full bg-[#0f1923] z-50 shadow-lg"
          >
            {/* Close Button */}
            <div className="flex justify-end py-4 px-1">
              <button
                onClick={toggleDrawer}
                className="text-white text-2xl focus:outline-none"
              >
                ✖
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col items-start space-y-6 p-6">
              {navItems.map((navItem: INavItem, idx: number) => (
                <Link
                  key={idx}
                  href={navItem.link}
                  onClick={toggleDrawer}
                  className={cn(
                    "text-white text-lg font-semibold tracking-wider hover:text-[#2b9ae6] transition",
                    pathname === navItem.link && "text-[#2b9ae6]"
                  )}
                >
                  {navItem.name}
                </Link>
              ))}

<div className="language-selector relative">
                <select
                  value={selectedLanguage}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="bg-[#09090B] flex justify-center items-center text-white text-lg border border-white px-3 rounded-[6px] max-w-fit h-[33px] cursor-pointer appearance-none pl-3 pr-8"
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>

                  <option value="cs">Czech</option>
                  <option value="nl">Dutch</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="hu">Hungarian</option>
                  <option value="id">Indonesian</option>
                  <option value="it">Italian</option>
                  <option value="ja">Japanese</option>
                  <option value="ko">Korean</option>
                  <option value="pl">Polish</option>
                  <option value="pt">Portuguese</option>
                  <option value="ro">Romanian</option>
                  <option value="ru">Russian</option>
                  <option value="sk">Slovak</option>
                  <option value="es">Spanish</option>
                  <option value="th">Thai</option>
                  <option value="tr">Turkish</option>
                  <option value="vi">Vietnamese</option>
                  <option value="zh">Chinese</option>
                </select>

                <img
                  src="/crypto/downarrow.png"
                  alt="Language Selector"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                />
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;
