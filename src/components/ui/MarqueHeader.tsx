"use client"
import React from "react";
import { motion } from "framer-motion";

const newsItems = [
  "Empower Your Crypto Journey—Trade Securely with DecryptoX Today! ",
  "Snag $DCRX at Just $0.012—Phase 1 Early Bird Rewards Won’t Last!  ",
  "Phase 2 Kicks Off at $0.015—Prices Rise Every 2 Days. Act Fast!  ",
  " Over $750,000 Raised and Climbing—Join the DeFi Revolution Now! ",
  " Win Big with Our 1 Million $DCRX Giveaway—Follow, Share & Claim Your Prize!",
  "Early Investors Reap Exclusive Rewards—Limited Tokens, Lifetime Benefits!",
  " Shape DeFi’s Future—Invest in $DCRX and Lead the Charge!"
];

const MarqueHeader: React.FC = () => {
  return (
    <div className="bg-[#2B9AE6] text-white py-2 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {newsItems.map((news, index) => (
          <span key={index} className="mx-6 text-sm font-medium">
            {news}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueHeader;
