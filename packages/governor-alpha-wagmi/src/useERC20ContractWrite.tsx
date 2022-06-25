import { useContractWrite } from 'wagmi';
import MintableERC20_ABI from './MintableERC20.json';

export function useERC20ContractRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractWrite(
    {
      addressOrName: address,
      contractInterface: MintableERC20_ABI,
    },
    method,
    {
      args: args,
    }
  );
}

export default useERC20ContractRead;
