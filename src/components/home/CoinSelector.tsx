"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CoinSelector.css"; // Import your CSS file
import { erc20Abi, zeroAddress } from "viem";
import { useReadContract, useReadContracts } from "wagmi";
import { useEffect, useMemo, useState } from "react";
import { iocConfig } from "@/constants/contract";
import { useAppKitNetwork } from "@reown/appkit/react";

interface CoinSelectorProps {
  coinType?: any;
  setCoinType: any;
}

const CoinSelector: React.FC<CoinSelectorProps> = ({
  coinType,
  setCoinType,
}) => {
  const { chainId } = useAppKitNetwork();
  const result = useReadContracts({
    contracts: [
      {
        ...iocConfig,
        functionName: "getAcceptedTokenList",
        chainId: Number(chainId),
      },
    ],
  });

  const tokenAddrss = useMemo(() => {
    const tokenlist =
      result && result.data && result.data && result.data[0]?.result;
    if (tokenlist && tokenlist?.length > 0) {
      const mergeArray = [...tokenlist, zeroAddress];

      return mergeArray;
    }
  }, [result]);

  return (
    <div className="w-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 25 },
        }}
        className="py-4"
      >
        {tokenAddrss?.map((coin: any, index: any) => (
          <SwiperSlide
            style={{ width: "106px" }}
            key={index + 1}
            className="flex justify-center w-[106px] "
          >
            <TokenData
              chainId={chainId}
              coin={coin}
              index={index}
              setCoinType={setCoinType}
              coinType={coinType}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoinSelector;

const TokenData = ({
  coin,
  chainId,
  index,
  setCoinType,
  coinType,
}: {
  coin: any;
  chainId: any;
  index: any;
  setCoinType: any;
  coinType: any;
}) => {
  const { data: symbol } = useReadContract({
    abi: erc20Abi,
    address: coin,
    functionName: "symbol",
    query: {
      enabled: coin !== zeroAddress,
    },
    chainId: Number(chainId),
  });
 

  return (
    <button
      onClick={() =>
        setCoinType({
          address: coin,
          tokenname: coin === zeroAddress ? "BNB" : symbol,
        })
      }
      className={`${
        coinType?.tokenname === (coin === zeroAddress ? "BNB" : symbol)
          ? "bg-[#2B9AE6] rounded-md"
          : "coinBgBtn"
      } " min-w-[121px] h-[50px]  text-sm"`}
    >
      {coin === zeroAddress ? "BNB" : symbol}
    </button>
  );
};
