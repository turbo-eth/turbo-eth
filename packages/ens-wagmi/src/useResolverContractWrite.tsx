import { useContractWrite } from 'wagmi';
import Resolver from '@ensdomains/ens-contracts/artifacts/contracts/resolvers/Resolver.sol/Resolver.json';

export function useResolverContractWrite(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractWrite(
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

export default useResolverContractWrite;
