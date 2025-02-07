"use client"
import React from "react";
import { motion } from "framer-motion";

const newsItems = [
  "🚀 New Feature Launched!",
  "📢 Upcoming Event: Don't Miss Out!",
  "💰 Special Offer: 50% Discount Available!",
  "🌍 Breaking News: Stay Updated!"
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
