import { useContractWrite } from 'wagmi';
import CitizenV1 from '@democracy-labs/governance-sol/artifacts/contracts/CitizenV1.sol/CitizenV1.json';

export function useCitizenV1ContractWrite(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractWrite(
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

export default useCitizenV1ContractWrite
 