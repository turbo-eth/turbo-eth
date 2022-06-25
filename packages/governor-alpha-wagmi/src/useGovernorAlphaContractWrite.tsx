import { useContractWrite } from 'wagmi';
import GovernorAlpha_ABI from '@democracy-labs/governor-alpha-sol/artifacts/contracts/GovernorAlpha.sol/GovernorAlpha.json';

export function useGovernorAlphaContractWrite(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractWrite(
    {
      addressOrName: address,
      contractInterface: GovernorAlpha_ABI.abi
    },
    method,
    {
      args: args,
    }
  );
}

export default useGovernorAlphaContractWrite;
