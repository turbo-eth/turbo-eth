import { useContract } from 'wagmi';
import PublicResolver from '@ensdomains/ens-contracts/artifacts/contracts/resolvers/PublicResolver.sol/PublicResolver.json';

export function usePublicResolverContract(address: string): any {
  return useContract({
    addressOrName: address,
    contractInterface: PublicResolver.abi,
  });
}

export default usePublicResolverContract;
