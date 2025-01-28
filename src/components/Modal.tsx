"use client"
import React, { useState, useEffect } from 'react';
import CommonButton from './common/CommonButton';

const WalletModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Disable scrolling when the modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Restore scrolling when the modal is closed
    }

    // Cleanup the style when the component is unmounted or modal is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-10 backdrop-blur-[7px]">
         
          <div className="bg-[#111827] px-12 p-8  shadow-lg text-center max-w-xl w-full rounded-[22px]">
          <div className='w-full flex justify-end'>
          <img src="/images/cross.png" className='w-[18px] h-[18px] cursor-pointer' onClick={()=>setIsOpen(false)}  />

          </div>
            <h1 className="text-2xl font-bold mb-4">Need a <span className='text-[#2B9AE6]'>Wallet</span> , Try Best Wallet</h1>
            <div className="w-full flex justify-between items-center mb-6">
              <img src="/images/icon.png" className='w-[104px] h-[104px] ' />
            <p className=" text-left pl-2">Best Wallet is a beginner-friendly app that makes it easy to buy our presale token. Follow the steps below to get started.</p>
              </div>
            <div className="mb-6">
              <p>Scan the QR code below on your mobile device <br /> to install the Best Wallet app</p>
           
              <div className="bg-gray-200 w-[153px] h-[153px] mx-auto my-4">
              <img src="/images/screen.png" />
              </div>
            </div>
            <p className="mb-6">Already installed the Best Wallet app? Hit the button below to connect.</p>
            <CommonButton btnName='Connect Wallet' width="w-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default WalletModal;
