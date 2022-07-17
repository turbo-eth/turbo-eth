
import { useContract, erc20ABI } from 'wagmi';

export function useERC20Contract(
  address: string,
): any {
  return useContract(
    {
      addressOrName: address,
      contractInterface: erc20ABI,
    },
  );
}

export default useERC20Contract;
 