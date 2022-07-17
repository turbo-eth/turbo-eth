import { useContractWrite, erc20ABI } from 'wagmi';
import { useLogContractWrite } from '@turbo-eth/core-wagmi' 

export function useERC20Write(
  address: string,
  method: string,
  args: any[]
): any {
  return useLogContractWrite(useContractWrite(
    {
      addressOrName: address,
      contractInterface: erc20ABI,
    },
    method,
    {
      args: args,
    }
  ));
}

export default useERC20Write;
