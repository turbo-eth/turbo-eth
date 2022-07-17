import * as React from 'react';
import classNames from 'classnames';
import truncateAddress from './utils/truncateAddress';

interface AddressProps {
  className?: string;
  address?: string;
  truncate?: boolean;
  length?: number;
}

export const Address = ({
  className,
  truncate,
  address = '0x00',
}: AddressProps) => {
  const classes = classNames(className, 'Address');

  if (truncate) {
    return <span className={classes}>{truncateAddress(address)}</span>;
  }

  return <span className={classes}>{address}</span>;
};

export default Address;
