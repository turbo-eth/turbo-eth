import { useContractRead } from 'wagmi';
import Resolver from '@ensdomains/ens-contracts/artifacts/contracts/resolvers/Resolver.sol/Resolver.json';

export function useResolverContractRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractRead(
    {
      addressOrName: address,
      contractInterface: Resolver.abi,
    },
    method,
    {
      args: args,
    }
  );
}

export default useResolverContractRead;
