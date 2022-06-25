import { useContractRead } from 'wagmi';
// import GovernorAlpha_ABI from '@democracy-labs/governor-alpha-sol/artifacts/contracts/GovernorBravoInterfaces.sol/';

export function useGovernorAlphaContractRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractRead(
    {
      addressOrName: address,
      contractInterface: [],
    },
    method,
    {
      args: args,
    }
  );
}

export default useGovernorAlphaContractRead;
 