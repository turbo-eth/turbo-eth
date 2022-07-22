import { useContractRead } from 'wagmi';
import PublicResolver from '@ensdomains/ens-contracts/artifacts/contracts/resolvers/PublicResolver.sol/PublicResolver.json';

export function usePublicResolverRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractRead(
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

export default usePublicResolverRead;
