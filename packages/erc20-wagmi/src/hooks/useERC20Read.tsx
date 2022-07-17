
import { useContractRead, erc20ABI } from 'wagmi';
import { useLogContractRead } from '@turbo-eth/core-wagmi' 
export function useERC20Read(
  address: string,
  method: string,
  args?: any[]
): any {
  return useLogContractRead(useContractRead(
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

export default useERC20Read;
 