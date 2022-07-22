import { useContract } from 'wagmi';
import Resolver from '@ensdomains/ens-contracts/artifacts/contracts/resolvers/Resolver.sol/Resolver.json';

export function useResolverContract(address: string): any {
  return useContract({
    addressOrName: address,
    contractInterface: Resolver.abi,
  });
}

export default useResolverContract;
