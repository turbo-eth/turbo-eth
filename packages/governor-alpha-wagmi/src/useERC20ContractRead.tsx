
import { useContractRead, erc20ABI } from 'wagmi';

export function useERC20ContractRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractRead(
    {
      addressOrName: address,
      contractInterface: erc20ABI,
    },
    method,
    {
      args: args,
    }
  );
}

export default useERC20ContractRead;
 