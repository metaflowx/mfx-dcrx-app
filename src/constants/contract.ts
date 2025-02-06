import { IcoABI } from "@/app/ABI/IcoABI";
import { RefferABI } from "@/app/ABI/RewardToken";
import { TokenABI } from "@/app/ABI/TokenSupply";
export const TokenContractAddress = "0xB68038cD28202F9fcbc087602923BAcf3Bd1bfE6"; 
export const ICOContractAddress ="0x34fb5B808d29E75d43947164d7E6120a4Ff37284"
export const ReferralContractAddress="0x7A5816ABdaE8f26fEBAfE020c720e39a81179948"

export const contractConfig = {
    address: ReferralContractAddress as `0x${string}`,
    abi: RefferABI,
  };

  export const iocConfig = {
    address: ICOContractAddress as `0x${string}`,
    abi: IcoABI,
    
  };

  export const tokenConfig = {
    address: TokenContractAddress as `0x${string}`,
    abi: TokenABI,
    
  };