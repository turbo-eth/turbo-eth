import { useContractWrite, erc721ABI } from 'wagmi';

export function useERC721ContractWrite(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractWrite(
    {
      addressOrName: address,
      contractInterface: erc721ABI,
    },
    method,
    {
      args: args,
    }
  );
}

export default useERC721ContractWrite;
