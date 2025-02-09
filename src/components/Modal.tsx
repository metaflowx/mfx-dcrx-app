"use client"
import React, { useState, useEffect } from 'react';
import CommonButton from './common/CommonButton';
import { Cross } from 'lucide-react';

const WalletModal = ({isOpen,setIsOpen}:{isOpen?:boolean;setIsOpen?:any}) => {
  

  useEffect(() => {
    // Check if MetaMask is installed
    const hasMetaMask = typeof window !== "undefined" && (window as any).ethereum?.isMetaMask;

    if (!hasMetaMask) {
      setIsOpen(true);
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; 
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 z-10 backdrop-blur-[7px]">
          <div className="bg-[#111827] px-6 sm:px-12 p-6 sm:p-8 shadow-lg relative text-center max-w-sm sm:max-w-xl w-full rounded-[22px]">
            {/* Close Button */}
            <div className="w-full flex justify-end  absolute top-10 right-4">
              <img 
                src="/images/cross.png" 
                className="w-5 h-5 sm:w-[18px] sm:h-[18px] cursor-pointer" 
                onClick={() => setIsOpen(false)}  
              />

              {/* <Cross  onClick={() => setIsOpen(false)}   /> */}
            </div>

            {/* Header */}
            <h1 className="text-lg sm:text-2xl font-bold mb-4 mt-5">
              Need a <span className="text-[#2B9AE6]">Wallet</span>? Try Best Wallet
            </h1>

            {/* Wallet Info Section */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-6">
              <img src="/images/icon.png" className="w-[80px] sm:w-[104px] h-[80px] sm:h-[104px] mb-4 sm:mb-0" />
              <p className="text-left sm:pl-2 text-sm sm:text-base">
                Best Wallet is a beginner-friendly app that makes it easy to buy our presale token. Follow the steps below to get started.
              </p>
            </div>

            {/* QR Code Section */}
            <div className="mb-6">
              <p className="text-sm sm:text-base">
                Scan the QR code below on your mobile device <br /> to install the Best Wallet app
              </p>
              <div className="bg-gray-200 w-[120px] sm:w-[153px] h-[120px] sm:h-[153px] mx-auto my-4 flex items-center justify-center">
                <img src="/images/screen.png" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Connect Wallet Button */}
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              Already installed the Best Wallet app? Hit the button below to connect.
            </p>
            <CommonButton btnName="Connect Wallet" width="w-full"
             onClick={() => setIsOpen(false)}  
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WalletModal;
