"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
            "flex w-full fixed top-0 left-0 bg-[#0f1923] z-50 items-center justify-between px-8 py-3 shadow-md h-[70px]",
            className
          )}
        >
          {/* Logo Section */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
          >
            <img
              src="/crypto/logo.png"
              alt="Logo"
              className="h-[50px]" // Adjust the logo height as per the design
            />
          </div>

          {/* Navigation Items for Large Screens */}
          <div className="hidden xl:flex space-x-8">
            {navItems.map((navItem: INavItem, idx: number) => (
              <Link
                key={idx}
                href={navItem.link}
                className={cn(
                  "text-white text-[14px] font-semibold tracking-wider hover:text-[#0be1db] transition",
                  pathname === navItem.link && "text-[#0be1db]"
                )}
              >
                {navItem.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <img
              src="/crypto/telegram.png"
              alt="Telegram"
              className="h-[27px] hidden lg:block"
            />
            <img src="/crypto/x.png" alt="X" className="h-[27px] hidden lg:block" />

            {/* Buy Now Button */}
            <button
              style={{
                background: "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%",
              }}
              className="text-black w-[237px] hidden sm:block h-[60px] rounded-[13px] text-[21px] font-bold shadow-md hover:opacity-90"
            >
              Buy Now
            </button>

            {/* Language Selector */}
            <div className="relative flex justify-center items-center">
              <div className="bg-[#09090B] flex justify-center items-center text-white text-lg border border-white px-3 rounded-[6px] w-[71px] h-[33px] cursor-pointer">
                <img
                  src="/crypto/american.png"
                  alt="lan"
                  className="w-[24px] h-[12px]"
                />
                <img src="/crypto/downarrow.png" alt="lan" className="ml-1" />
              </div>
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
            className="fixed top-0 right-0 h-screen w-3/4 bg-[#0f1923] z-50 shadow-lg"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
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
                    "text-white text-lg font-semibold tracking-wider hover:text-[#0be1db] transition",
                    pathname === navItem.link && "text-[#0be1db]"
                  )}
                >
                  {navItem.name}
                </Link>
              ))}

              {/* Additional Items */}
              <div className="flex flex-col space-y-4 mt-8">
                <button
                  style={{
                    background:
                      "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%",
                  }}
                  className="text-black w-[237px] h-[60px] rounded-[13px] text-[21px] font-bold shadow-md hover:opacity-90"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;
