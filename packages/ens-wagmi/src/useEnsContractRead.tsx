import { useContractRead } from 'wagmi';
import ENS from '@ensdomains/ens-contracts/artifacts/contracts/registry/ENS.sol/ENS.json';

export function useEnsContractRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractRead(
    {
      addressOrName: address,
      contractInterface: ENS.abi,
    },
    method,
    {
      args: args,
    }
  );
}

export default useEnsContractRead;
