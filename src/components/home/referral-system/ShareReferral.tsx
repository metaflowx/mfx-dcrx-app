"use client";

import { CrossIcon } from "lucide-react";
import { useState } from "react";
import {
  FaFacebook,
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaShareAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ShareReferral: React.FC<{ url: string; isOpen: boolean; setIsOpen: any }> = ({
  url,
  isOpen,
  setIsOpen,
}) => {
  const socialPlatforms = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      icon: <FaFacebook className="text-blue-600 text-3xl hover:opacity-75" />,
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=Join%20now%20and%20earn%20rewards!`,
      icon: <FaXTwitter className="text-blue-400 text-3xl hover:opacity-75" />,
    },
    {
      name: "Telegram",
      url: `https://t.me/share/url?url=${encodeURIComponent(
        url
      )}&text=Join%20now%20and%20earn%20rewards!`,
      icon: <FaTelegram className="text-blue-500 text-3xl hover:opacity-75" />,
    },
    {
      name: "Instagram",
      url: `https://www.instagram.com/`,
      icon: <FaInstagram className="text-pink-500 text-3xl hover:opacity-75" />,
    },
    {
      name: "YouTube",
      url: `https://www.youtube.com/`,
      icon: <FaYoutube className="text-red-500 text-3xl hover:opacity-75" />,
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      icon: <FaLinkedin className="text-blue-700 text-3xl hover:opacity-75" />,
    },
  ];

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#111827] p-6 rounded-lg shadow-xl w-[90%] max-w-md relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
             <CrossIcon style={{transform:"rotate(45deg)",color:"#fff"}} />
            </button>
            <h2 className="text-xl font-bold text-center">Share Your Referral Code</h2>
            <p className="text-gray-700 text-center">Invite your friends and earn rewards!</p>

            <input
              type="text"
              value={url}
              readOnly
              className="w-full bg-[#111827] p-2 mt-4 border border-gray-300 rounded-lg text-center"
            />

            {/* Social Share Icons */}
            <div className="flex justify-center gap-4 mt-4">
              {socialPlatforms.map(({ name, url, icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${name}`}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareReferral;
