import { useContractWrite, erc20ABI } from 'wagmi';

export function useERC20ContractRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractWrite(
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
