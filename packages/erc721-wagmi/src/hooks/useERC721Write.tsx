import { useContractWrite, erc721ABI } from 'wagmi';
import { useLogContractWrite } from '@turbo-eth/core-wagmi' 

export function useERC721Write(
  address: string,
  method: string,
  args: any[]
): any {
  return useLogContractWrite(useContractWrite(
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

export default useERC721Write;
