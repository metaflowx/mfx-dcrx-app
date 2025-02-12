"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CoinSelector.css";
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
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

  useEffect(() => {
    if (swiperInstance && selectedIndex !== null) {
      swiperInstance.slideTo(selectedIndex, 300); // Slide to selected index with animation
    }
  }, [selectedIndex, swiperInstance]);

  return (
    <div className="w-auto md:w-[510px]">
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        navigation
        onSwiper={setSwiperInstance} // Get Swiper instance
        breakpoints={{
          240: { slidesPerView: 2, spaceBetween: 10 },
          440: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
          1624: { slidesPerView: 4, spaceBetween: 10 },
        }}
        className="py-4"
      >
        {tokenAddrss?.map((coin: any, index: number) => (
          <SwiperSlide
            style={{ width: "fit-content" }}
            key={index}
            className="flex justify-center"
          >
            <TokenData
              chainId={chainId}
              coin={coin}
              index={index}
              setCoinType={(coinData: any) => {
                setCoinType(coinData);
                setSelectedIndex(index); // Update selected index
              }}
              coinType={coinType}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <style
        dangerouslySetInnerHTML={{
          __html: `
            .swiper-slide {
              width: fit-content !important;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .swiper-backface-hidden .swiper-slide {
              transform: none !important;
            }
          `,
        }}
      /> */}
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
  index: number;
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
      } min-w-[110px] h-[50px] text-sm`}
    >
      {coin === zeroAddress ? "BNB" : symbol}
    </button>
  );
};
