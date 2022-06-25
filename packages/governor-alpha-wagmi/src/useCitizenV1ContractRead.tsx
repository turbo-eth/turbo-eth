import { useContractRead } from 'wagmi';
import CitizenV1 from '@democracy-labs/governance-sol/artifacts/contracts/CitizenV1.sol/CitizenV1.json';

export function useCitizenV1ContractRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractRead(
    {
      addressOrName: address,
      contractInterface: CitizenV1.abi,
    },
    method,
    {
      args: args,
    }
  );
}

export default useCitizenV1ContractRead;
 