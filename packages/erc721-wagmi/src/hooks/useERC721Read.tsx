
import { useContractRead, erc721ABI } from 'wagmi';
import { useLogContractRead } from '@turbo-eth/core-wagmi' 

export function useERC721Read(
  address: string,
  method: string,
  args: any[]
): any {
  return useLogContractRead(useContractRead(
    {
      addressOrName: address,
      contractInterface: erc721ABI,
    },
    method,
    {
      args: args,
    }
  ));
}

export default useERC721Read;
 