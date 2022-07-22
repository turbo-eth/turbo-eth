import { useContractWrite } from 'wagmi';
import ENS from '@ensdomains/ens-contracts/artifacts/contracts/registry/ENS.sol/ENS.json';

export function useEnsContractWrite(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractWrite(
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

export default useEnsContractWrite;
