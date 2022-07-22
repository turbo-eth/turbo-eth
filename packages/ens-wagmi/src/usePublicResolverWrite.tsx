import { useContractWrite } from 'wagmi';
import PublicResolver from '@ensdomains/ens-contracts/artifacts/contracts/resolvers/PublicResolver.sol/PublicResolver.json';

export function usePublicResolverWrite(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractWrite(
    {
      addressOrName: address,
      contractInterface: PublicResolver.abi,
    },
    method,
    {
      args: args,
    }
  );
}

export default usePublicResolverWrite;
