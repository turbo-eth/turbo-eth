import { useContractWrite } from 'wagmi';
import ReverseRegistrar from '@ensdomains/ens-contracts/artifacts/contracts/registry/ReverseRegistrar.sol/ReverseRegistrar.json';

export function useReverseRegistrarContractWrite(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractWrite(
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

export default useReverseRegistrarContractWrite;
