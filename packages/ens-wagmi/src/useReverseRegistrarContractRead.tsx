import { useContractRead } from 'wagmi';
import ReverseRegistrar from '@ensdomains/ens-contracts/artifacts/contracts/registry/ReverseRegistrar.sol/ReverseRegistrar.json';

export function useReverseRegistrarContractRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractRead(
    {
      addressOrName: address,
      contractInterface: ReverseRegistrar.abi,
    },
    method,
    {
      args: args,
    }
  );
}

export default useReverseRegistrarContractRead;
