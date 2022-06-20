import * as React from 'react';
import PropTypes from 'prop-types';

import { useConnect } from 'wagmi'

interface IsWalletConnectedProps {
 children: React.ReactNode;
 loading: React.ReactNode;
 enableButton: boolean;
}

export const IsWalletConnected = ({ children, loading}: IsWalletConnectedProps) => { 
 const { isConnected } = useConnect()
  if (!isConnected) return loading
  return children
}


IsWalletConnected.defaultProps = {
    loading: null
}

IsWalletConnected.propTypes = {
    loading: PropTypes.func,
}

export default IsWalletConnected;