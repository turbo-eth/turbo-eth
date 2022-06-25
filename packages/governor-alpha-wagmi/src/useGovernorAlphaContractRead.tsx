import { useContractRead } from 'wagmi';
import GovernorAlpha_ABI from '@democracy-labs/governor-alpha-sol/artifacts/contracts/GovernorAlpha.sol/GovernorAlpha.json';

export function useGovernorAlphaContractRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractRead(
    {
      addressOrName: address,
      contractInterface: GovernorAlpha_ABI.abi,
    },
    method,
    {
      args: args,
    }
  );
}

export default useGovernorAlphaContractRead;
 