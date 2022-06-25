// @ts-nocheck
import * as React from 'react';

import classNames from 'classnames';
import useCitizenV1ContractRead from './useCitizenV1ContractRead';
import CitizenNFTCard from './CitizenNFTCard';

interface CitizensLatestCardListProps {
  className?: string;
  account?: string;
  contract: string;
}

export const CitizensLatestCardList = ({
  className,
  contract,
  account,
  tokenId = "1"
}: CitizensLatestCardListProps) => {
  const classes = classNames(className, 'CitizensLatestCardList');

  const { data, isError, isLoading } = useCitizenV1ContractRead(contract, 'totalCitizens', []);

  console.log(data, 'data')

  if (isError || isLoading) return null;
  return<div className='grid grid-cols-12 gap-x-4'>
     {
        Array.from({length: data.toNumber()}, (v, i) => i).map(id =><div className='col-span-4'>
            <CitizenNFTCard key={id} tokenId={id} contract={contract} />
        </div>)
     }
  </div>
};

export default CitizensLatestCardList;
