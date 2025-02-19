import { useAccount, useReadContract } from "wagmi";
import RefferalCard from "./RefferalCard";
import { tokenConfig } from "@/constants/contract";
import { Address, formatEther, parseUnits } from "viem";
import { useAppKitNetwork } from "@reown/appkit/react";

const RefferalDashboard = ({result}:{result?:any}) => {
  const {chainId}=useAppKitNetwork();
   const { address } = useAccount();
  const { data:tokenbalance, isLoading } = useReadContract({
   ...tokenConfig,
    functionName: "balanceOf",
    args: [address as Address],
    chainId: Number(chainId)??97
  });

 

  
  const data = [
    {
      title: "Total Referrals",
      value:Number(result[1]?.result),
      symbol:"",
      earn:"/refer/earn.png",
      subValues: [
        { label: "Today", value: "00",images:"/refer/today.png" },
        { label: "Yesterday", value: "00",images:"/refer/yesterday.png" },
        { label: "Last Week", value: "00",images:"/refer/lastweek.png" },

      ],
    },
    {
      title: "Total Earnings",
      value: result[0]?.result? Number(formatEther(BigInt(result[0]?.result))).toFixed(2) : 0,
      symbol:"$DCRX",
      earn:"/refer/earn.png",
      subValues: [
        { label: "Today", value: "00 $DCRX",images:"/refer/today.png" },
        { label: "Yesterday", value: "00 $DCRX",images:"/refer/yesterday.png" },
        { label: "Last Week", value: "00 $DCRX",images:"/refer/lastweek.png" },
      ],
    },
    {
      title: "Your Wallet Balance",
      value:tokenbalance ? Number(formatEther(BigInt(tokenbalance))).toFixed(2):0,
      symbol:"$DCRX",
      earn:"",
      subValues: [],
      hasButton: true,
    },
   
  ];

  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-1 w-full">
        {data.map((item, index) => (
          <RefferalCard
            key={index}
            title={item.title}
            value={item.value}
            subValues={item.subValues}
            hasButton={item.hasButton}
            symbol={item.symbol}
            earnsymbol={item.earn}
          />
        ))}
      </div>
    </div>
  );
};

export default RefferalDashboard;
