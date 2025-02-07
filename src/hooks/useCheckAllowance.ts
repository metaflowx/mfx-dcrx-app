import { useAccount, useReadContract } from "wagmi";
import { Address, erc20Abi } from "viem";
import { useAppKitNetworkCore } from "@reown/appkit/react";
import { TokenContractAddress } from "@/constants/contract";

const useCheckAllowance = ({ spenderAddress,token }: { spenderAddress: Address,token:Address }) => {
    const { address } = useAccount();
    const {chainId} = useAppKitNetworkCore()
    const { data: checkAllowanceContract, isSuccess, queryKey } = useReadContract({
        address: TokenContractAddress,
        abi: erc20Abi,
        functionName: "allowance",
        args: [address as Address, spenderAddress],
        query: {
            enabled: (
                address !== undefined &&
                spenderAddress !== undefined
            )
        },
        chainId: Number(chainId)
    });

    return {
        data: checkAllowanceContract,
        isSuccess: isSuccess,
        queryKey
    }

}

export default useCheckAllowance;