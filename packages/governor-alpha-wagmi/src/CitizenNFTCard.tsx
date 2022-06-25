// @ts-nocheck
import * as React from 'react';

import classNames from 'classnames';
import useCitizenV1ContractRead from './useCitizenV1ContractRead';

interface CitizenNFTCardProps {
  className?: string;
  account?: string;
  contract: string;
}

export const CitizenNFTCard = ({
  className,
  contract,
  account,
  tokenId = "1"
}: CitizenNFTCardProps) => {
  const classes = classNames(className, 'CitizenNFTCard');

  const { data, isError, isLoading } = useCitizenV1ContractRead(contract, 'tokenURI', [
    tokenId,
  ]);

  const [tokenData, setTokenData] = React.useState();
  React.useEffect(() => {
    if (data) {
      (async () => {
        const json = Buffer.from(data.substring(29), "base64").toString();
        const result = JSON.parse(json);
        setTokenData(result);
      })();
    }
  }, [data]);

  if (isError || isLoading) return null;
  return<div className=''>
     <div className={classes}>{tokenData?.name}</div>
     <div className={classes}>{tokenData?.description}</div>
  </div>
};

export default CitizenNFTCard;
