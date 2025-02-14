"use client";
import React, { useEffect, useMemo, useState } from "react";
import ConstrainedBox from "../core/constrained-box";
import {
  useAppKit,
  useAppKitAccount,
  useAppKitNetwork,
} from "@reown/appkit/react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import CoinSelector from "./CoinSelector";

import {
  useAccount,
  useBalance,
  useBlockNumber,
  useChainId,
  useReadContract,
  useReadContracts,
  useToken,
  useWriteContract,
} from "wagmi";
import {
  Address,
  erc20Abi,
  formatEther,
  formatUnits,
  parseUnits,
  zeroAddress,
} from "viem";

import { parseEther } from "viem";

import {
  TokenContractAddress,
  ICOContractAddress,
  iocConfig,
  tokenConfig,
} from "@/constants/contract";
import { IcoABI } from "@/app/ABI/IcoABI";
import CountdownTimer from "./Counter";
import WalletModal from "../Modal";
import { downloadPdf, handleNegativeValue } from "@/utils";
import useCheckAllowance from "@/hooks/useCheckAllowance";
import { useQueryClient } from "@tanstack/react-query";
import { extractDetailsFromError } from "@/utils/extractDetailsFromError";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
const Banner = ({ id }: { id: string }) => {
  const { address } = useAccount();
  const { chainId } = useAppKitNetwork();
  const searchparm = useSearchParams();
  const [progress, setProgress] = useState(30);

  const [isOpen, setIsOpen] = useState(false);
  const [coinType, setCoinType] = useState({
    tokenname: "BNB",
    address: zeroAddress,
  });
  const { data: Balance } = useBalance({
    address: address,
  });

  const [saleType, setSaleType] = useState(0);
  const [isAproveERC20, setIsApprovedERC20] = useState(true);
  const [amount, setAmount] = useState("");
  const [referrer, setReferrer] = useState(
    searchparm.get("ref") || zeroAddress
  );
  const queryClient = useQueryClient();
  const { data: blockNumber } = useBlockNumber({ watch: true });
  const { writeContractAsync, isPending, isSuccess, isError } =
    useWriteContract();
  const { open, close } = useAppKit();

  const resultOfCheckAllowance = useCheckAllowance({
    spenderAddress: ICOContractAddress,
    token: coinType.address,
  });

  const { data: resultOfTokenBalance } = useReadContract({
    abi: erc20Abi,
    address: coinType.address,
    functionName: "balanceOf",
    args: [address as Address],
    account: address,
    query: {
      enabled: coinType.tokenname === "BNB" ? false : true,
    },
  });

  const tokenAddress =
    coinType.tokenname === "BNB" ? zeroAddress : coinType.address;
  const calculationresult = useReadContracts({
    contracts: [
      {
        ...iocConfig,
        functionName: "calculateUSDAmount",
        args: [tokenAddress as Address, parseEther(amount)],
        chainId: Number(chainId),
      },
    ],
  });
  const result = useReadContracts({
    contracts: [
      {
        ...iocConfig,
        functionName: "getSaleTokenPrice",
        args: [0],
        chainId: Number(chainId) ?? 97,
      },

      {
        ...iocConfig,
        functionName: "saleType2IcoDetail",
        args: [0],
        chainId: Number(chainId) ?? 97,
      },
      {
        ...tokenConfig,
        functionName: "totalSupply",
        chainId: Number(chainId) ?? 97,
      },
      {
        ...iocConfig,
        functionName: "user2SaleType2Contributor",
        args: [address as Address, 0],
        chainId: Number(chainId) ?? 97,
      },
      {
        ...iocConfig,
        functionName: "saleType2IcoDetail",
        args: [0],
        chainId: Number(chainId),
      },
    ],
  });


  

  const handleBuy = async () => {
    try {
      const formattedAmount = parseUnits(amount, 18);
      const tokenAddress = coinType?.address;
      const res = await writeContractAsync({
        address: ICOContractAddress,
        abi: IcoABI,
        functionName: "buy",
        args: [
          saleType,
          tokenAddress as Address,
          formattedAmount,
          referrer as Address,
        ],
        value: coinType?.tokenname === "BNB" ? parseEther(amount) : BigInt(0),
      });
      if (res) {
        setAmount("");
        toast.success("Transaction completed");
      }
    } catch (error: any) {
      toast.error(extractDetailsFromError(error.message as string) as string);
    }
  };

  const approveToken = async () => {
    try {
      const formattedAmount =
        Number?.(amount) > 0
          ? parseEther?.(amount)
          : parseEther?.(
              BigInt((Number.MAX_SAFE_INTEGER ** 1.3)?.toString())?.toString()
            );
      const res = await writeContractAsync({
        abi: erc20Abi,
        address: coinType.address,
        functionName: "approve",
        args: [ICOContractAddress, formattedAmount],
        account: address,
      });
      if (res) {
        setIsApprovedERC20(true);
        toast.success("Token approved successfully");
      }
    } catch (error: any) {
      toast.error(extractDetailsFromError(error.message as string) as string);
    }
  };

  const calciulatedToken = useMemo(() => {
    if ((result && result?.data) || amount || calculationresult) {
      const tokenPrice = result?.data && result?.data[0]?.result;
      const dividedVa = calculationresult?.data
        ? (Number(
            formatEther(BigInt(calculationresult?.data[0]?.result ?? 0))
          ) > 0
            ? Number(
                formatEther(BigInt(calculationresult?.data[0]?.result ?? 0))
              )
            : Number(amount)) / Number(formatEther(BigInt(tokenPrice ?? 0)))
        : 0;
      const purchaseToken =
        result &&
        result?.data &&
        result?.data[3]?.result &&
        formatEther(BigInt(result?.data[3]?.result?.volume));
      const tokeninUSD =
        result && result?.data
          ? Number(formatEther(BigInt(result?.data[0]?.result ?? 0)))
          : 0;
      const totalTokenSupply =
        result &&
        result?.data &&
        result?.data[4]?.result &&
        formatEther(BigInt(result?.data[4]?.result?.saleTokenAmount));
      const totalTokenQty =
        result &&
        result?.data &&
        result?.data[4]?.result &&
        formatEther(BigInt(result?.data[4]?.result?.saleQuantity));


      const totalTokenSale =
        result &&
        result?.data &&
        result?.data[4]?.result &&
        formatEther(BigInt(result?.data[4]?.result?.saleTokenAmount));

      const purchaseTokenUSD = Number(purchaseToken) * Number(tokeninUSD);
      const totalTokenSupplyUSD = Number(totalTokenSupply) * Number(tokeninUSD);

      const totalSoldToken = Number(totalTokenSale) - Number(totalTokenQty);
      const totalSaleTokenUSD = Number(totalSoldToken) * Number(tokeninUSD);

      return {
        getToken: dividedVa?.toFixed(2),
        purchaseTokenUSD: purchaseTokenUSD.toFixed(2),
        totalTokenSupplyUSD: totalTokenSupplyUSD,
        totalSale: totalSaleTokenUSD.toFixed(2),
        purchaseToken: Number(purchaseToken).toFixed(2),
      };
    }
  }, [result, amount, calculationresult]);

  useEffect(() => {
    if (resultOfCheckAllowance && address) {
      const price = parseFloat(amount === "" ? "0" : amount);
      const allowance = parseFloat(
        formatEther?.(resultOfCheckAllowance.data ?? BigInt(0))
      );
      if (allowance >= price) {
        setIsApprovedERC20(true);
      } else {
        setIsApprovedERC20(false);
      }
    }
  }, [resultOfCheckAllowance, address, amount]);

  // use to refetch
  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: resultOfCheckAllowance.queryKey,
    });
    queryClient.invalidateQueries({
      queryKey: result.queryKey,
    });
  }, [blockNumber, queryClient,result, resultOfCheckAllowance]);


  const minBuy = result?.data?.[4]?.result?.minBuy
    ? Number(formatEther(BigInt(result.data[4].result.minBuy)))
    : 0;
  const maxBuy = result?.data?.[4]?.result?.maxBuy
    ? Number(formatEther(BigInt(result.data[4].result.maxBuy)))
    : 0;

  const max = 100;
  const progressWidth =
    (Number(calciulatedToken?.totalSale) /
      Number(calciulatedToken?.totalTokenSupplyUSD)) *
    100;

  return (
    <div
      id={id}
      style={{ fontFamily: "Geist" }}
      className="min-h-screen bannerBg   text-white flex items-center justify-center px-4 max-w-xl:pb-10"
    >
      <ConstrainedBox>
        <div className=" flex flex-col lg:flex-row items-center mt-[120px] sm:mt-[85px] w-full">
          <div className="text-center lg:text-left w-full pl-[10px]">
            <h1 className="text-[30px] sm:text-[40px] md:text-[60px] lg:text-[70px] font-bold">
              Join Decryptox:
            </h1>
            <p className="text-[20px] md:text-[30px] text-[#2B9AE6] font-bold mt-2">
              Be a Part of the Decentralized Revolution!
            </p>
            <p className="mt-4 font-medium text-[14px] sm:text-[24px] max-w-xl">
              Redefine Trading with the World’s Most Advanced Decentralized
              Platform—Secure, Seamless, and Built for You.
            </p>
            <div className="block flex-wrap md:flex xl:flex w-full gap-4 mt-6 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  style={{
                    background:
                      "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%)",
                  }}
                  href={"/docs/whitepaper.pdf"}
                  target="_blank"
                  className="flex justify-center items-center mb-[10px] md:mb-[0px] w-[100%] md:w-[238px] h-[45px] md:h-[60px] rounded-full hover:bg-blue-600 text-[21px] font-bold text-black transition-all duration-300"
                >
                  White Paper
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  style={{ border: "1px solid #2B9AE6" }}
                  href={"/docs/lightpaper.pdf"}
                  target="_blank"
                  className="flex justify-center items-center mb-[10px] md:mb-[0px] border border-[#2B9AE6] w-[100%] md:w-[238px] h-[45px] md:h-[60px] text-[#2B9AE6] rounded-full text-[21px] font-bold transition-all duration-300"
                >
                  Light Paper
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  style={{ border: "1px solid #2B9AE6" }}
                  href={"/docs/lightpaper.pdf"}
                  target="_blank"
                  className="flex justify-center items-center border border-[#2B9AE6] w-[100%] md:w-[238px] h-[45px] md:h-[60px] text-[#2B9AE6] rounded-full text-[21px] font-bold transition-all duration-300"
                >
                  Audit Report 
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Section */}
          <div className="jsborderBg w-full md:w-auto">
            <div className="jscardBorderBgPayment  px-[20px] md:px-[40px] py-[30px] max-sm:w-full md:w-auto ">
              <h2
                style={{ fontFamily: "Geist, serif" }}
                className="text-[39px] md:text-[42px] font-bold mb-4 text-center"
              >
                Buy DCRX
              </h2>
              <div className="w-full text-center mb-4">

                {Math.floor(Date.now() / 1000) <= Number(result?.data?.[1]?.result?.startAt) + Number(63120) ?(

                  <CountdownTimer
                    label="Sale Starts In"
                    targetTime={
                      result &&
                      result.data &&
                      result.data &&
                      result.data[1]?.result &&
                      result.data[1]?.result &&
                      result.data[1]?.result?.startAt
                    }
                  />
                ):(

                <CountdownTimer
                  label="Sale Ends In"
                  targetTime={
                    result &&
                    result.data &&
                    result.data &&
                    result.data[1]?.result &&
                    result.data[1]?.result &&
                    result.data[1]?.result?.endAt
                  }
                />
                )}
             
               
              </div>
              {/* <img src="/card/progress.png" className="w-[505px] pb-4" /> */}
              <div
                style={{
                  background:
                    "#000",
                  border: "1px solid #2B9AE6",
                }}
                className="w-full h-[10px] rounded-full mb-6"
              >
                <div
                  style={{
                    width: `${progressWidth}%`, // Dynamically set width
                    background: "linear-gradient(90deg, #2B9AE6 0%, #000000 100%)",
                    border: "1px solid #2B9AE6",
                  }}
                  className="h-full rounded-full transition-all duration-300 ease-in-out"
                ></div>
              </div>

              <div className="block sm:flex justify-between items-center">
                <p
                  style={{ fontFamily: "Geist, serif" }}
                  className="text-[#FFFFFF] text-[18px] font-bold"
                >
                  USDT Raised:{" "}
                </p>
                <p
                  style={{ fontFamily: "Geist, serif" }}
                  className="text-[#FFFFFF] text-[18px] font-bold"
                >
                  ${calciulatedToken?.totalSale || 0} / ${" "}
                  {calciulatedToken?.totalTokenSupplyUSD || 0}
                </p>
              </div>
              {address && (
                <div className="flex justify-between items-center">
                  <p
                    style={{ fontFamily: "Geist, serif" }}
                    className="text-[#FFFFFF] text-[18px] font-bold"
                  >
                    Your purchased $DCRX:{" "}
                  </p>
                  <div>
                    <p
                      style={{ fontFamily: "Geist, serif" }}
                      className="text-[#FFFFFF] text-[18px] font-bold"
                    >
                      {calciulatedToken?.purchaseToken || 0}
                    </p>

                    {/*                   <p
                    style={{ fontFamily: "Geist, serif" }}
                    className="text-[#FFFFFF] text-[12px] font-bold"
                  >
                    ${calciulatedToken?.purchaseTokenUSD || 0}
                  </p> */}
                  </div>
                </div>
              )}
              <div className="text-center">
                <p className="mt-2 coinBgValue p-[20px]">
                  $1 DCRX = $
                  {result &&
                    result?.data &&
                    formatEther(BigInt(result?.data[0]?.result ?? 0))}
                </p>
              </div>

              <CoinSelector setCoinType={setCoinType} coinType={coinType} />
            

              <div className="mt-2  items-center hidden sm:flex justify-between w-full">
                <div>
                <p className="text-white text-[15px] pt-4">{`${coinType?.tokenname} you pay`}</p>
                  <div className="input___border w-full sm:w-auto mr-1">
                    <input
                      type="number"
                      onKeyDown={(e) => {
                        handleNegativeValue(e);
                      }}
                      value={amount}
                      placeholder="0"
                      className=" h-[38px] inputBg text-white px-4 py-2 w-full sm:w-auto"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                <p className="text-white text-[15px] pt-4">$DCRX you receive</p>
                  <div className="input___border w-full sm:w-auto mt-1 sm:mt-0">
                    <input
                      type="number"
                      placeholder="0"
                      value={calciulatedToken?.getToken}
                      className=" h-[38px] inputBg text-white px-4 py-2 w-full sm:w-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2  block sm:hidden  w-full">
              <p className="text-white text-[15px] pt-4">{`${coinType?.tokenname} you pay`}</p>

             
                <div className="input___border w-full sm:w-auto">
                  <input
                    onKeyDown={(e) => {
                      handleNegativeValue(e);
                    }}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    value={amount}
                    placeholder="0"
                    className=" h-[38px] inputBg text-white px-4 py-2 w-full sm:w-auto"
                  />
                </div>

                <p className="text-white text-[15px] pt-4">$DCRX you receive</p>
                <div className="input___border w-full sm:w-auto mt-1 sm:mt-0">
                  <input
                    type="number"
                    placeholder="0"
                    value={calciulatedToken?.getToken}
                    disabled
                    className=" h-[38px] inputBg text-white px-4 py-2 w-full sm:w-auto"
                  />
                </div>
              </div>

              {amount ? (
                <>
                  {Number(amount) < minBuy && (
                    <p className="pt-1" style={{ color: "red" }}>
                      Min: {minBuy}
                    </p>
                  )}

                  {Number(amount) > maxBuy && (
                    <p className="pt-1" style={{ color: "red" }}>
                      Max: {maxBuy}
                    </p>
                  )}
                </>
              ) : (
                <p style={{ color: "red" }}></p>
              )}
              {!address ? (
                <button
                  onClick={async () => open()}
                  className="w-full bg-[#2B9AE6] mt-4 h-[55px] rounded-lg text-lg font-semibold"
                >
                  Connect Wallet
                </button>
              ) : (
                <button
                  disabled={
                    Number(amount) < minBuy ||
                    Number(amount) > maxBuy ||
                    isPending ||
                    amount === "" ||
                    Number(amount) <= 0 ||
                    (coinType?.tokenname === "BNB"
                      ? Number(Balance?.formatted) < Number(amount) ||
                        Number(Balance?.formatted) === 0
                      : Number(formatEther(BigInt(resultOfTokenBalance ?? 0))) <
                        Number(amount))
                  }
                  onClick={() => {
                    if (coinType?.tokenname === "BNB") {
                      handleBuy();
                    } else {
                      !isAproveERC20 ? approveToken() : handleBuy();
                    }
                  }}
                  className={`w-full mt-4 h-[55px] rounded-lg text-lg font-semibold
                  ${
                    amount === "" || Number(amount) <= 0
                      ? "bg-gray-400" // Invalid amount -> Gray
                      : (
                          coinType?.tokenname === "BNB"
                            ? Number(Balance?.formatted) < Number(amount) ||
                              Number(Balance?.formatted) === 0
                            : Number(
                                formatEther(BigInt(resultOfTokenBalance ?? 0))
                              ) < Number(amount)
                        )
                      ? "bg-red-500" // Insufficient balance -> Red
                      : "bg-[#2B9AE6]" // Valid input -> Blue
                  }`}
                >
                  {isPending
                    ? coinType?.tokenname === "BNB" || isAproveERC20
                      ? "Buying..."
                      : "Approving..."
                    : coinType?.tokenname === "BNB" && amount === ""
                    ? "Please enter amount"
                    : coinType?.tokenname === "BNB" && Number(amount) <= 0
                    ? "Please enter correct amount"
                    : (
                        coinType?.tokenname === "BNB"
                          ? Number(Balance?.formatted) < Number(amount) ||
                            Number(Balance?.formatted) === 0
                          : Number(
                              formatEther(BigInt(resultOfTokenBalance ?? 0))
                            ) < Number(amount)
                      )
                    ? "Insufficient funds"
                    : coinType?.tokenname === "BNB" || isAproveERC20
                    ? "Buy Now"
                    : "Approve"}
                </button>
              )}

              {address ? (
                ""
              ) : (
                <p
                  className="text-center text-[#2B9AE6] text-[16px] mt-4 cursor-pointer "
                  onClick={() => setIsOpen(true)}
                >
                  Don’t have a wallet?
                </p>
              )}

              <WalletModal setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
          </div>
        </div>
      </ConstrainedBox>
    </div>
  );
};

export default Banner;
