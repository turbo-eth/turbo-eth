import { useEffect } from 'react';

export function useLogContractWrite(initialized: any): any {
  useEffect(() => {
    console.log(initialized.error);
  }, [initialized.error]);

  return initialized
}

export default useLogContractWrite;
