import { useEffect } from 'react';

export function useLogContractRead(initialized: any): any {
  useEffect(() => {
    console.log(initialized.error);
  }, [initialized.error]);

  return initialized
}

export default useLogContractRead;
