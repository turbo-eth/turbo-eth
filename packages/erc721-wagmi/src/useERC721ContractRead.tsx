
import { useContractRead, erc721ABI } from 'wagmi';

export function useERC721ContractRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractRead(
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

export default useERC721ContractRead;
 