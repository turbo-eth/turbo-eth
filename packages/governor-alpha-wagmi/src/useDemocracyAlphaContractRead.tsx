import { useContractRead } from 'wagmi';
import DemocracyV1 from '@democracy-labs/governance-sol/artifacts/contracts/DemocracyV1.sol/DemocracyV1.json';

export function useDemocracyV1ContractRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractRead(
    {
      addressOrName: address,
      contractInterface: DemocracyV1.abi,
    },
    method,
    {
      args: args,
    }
  );
}

export default useDemocracyV1ContractRead;
 