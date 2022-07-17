import { HardhatUserConfig } from 'hardhat/config';
import { HardhatNetworkAccountUserConfig } from 'hardhat/types';

// Accounts
const TESTNET_PK_DEPLOYER = process.env.TESTNET_PK_DEPLOYER || '';
const MAINNET_PK_DEPLOYER = process.env.MAINNET_PK_DEPLOYER || '';

// Json RPC Endpoints
const ARCHIVE_NODE_RPC_URL = process.env.ARCHIVE_NODE_RPC_URL;
const ETHEREUM_MAINNET_RPC_URL = process.env.ETHEREUM_MAINNET_RPC_URL;
const ETHEREUM_TESTNET_RPC_URL = process.env.ETHEREUM_TESTNET_RPC_URL;
const POLYGON_MAINNET_RPC_URL = process.env.POLYGON_MAINNET_RPC_URL;
const POLYGON_TESTNET_RPC_URL = process.env.POLYGON_TESTNET_RPC_URL;
const OPTIMISM_MAINNET_RPC_URL = process.env.OPTIMISM_MAINNET_RPC_URL;
const OPTIMISM_TESTNET_RPC_URL = process.env.OPTIMISM_TESTNET_RPC_URL;

// Forking
const FORK_ENABLED = process.env.FORK_ENABLED;
const FORK_BLOCK_NUMBER = process.env.FORK_BLOCK_NUMBER;

const networks: HardhatUserConfig['networks'] = {
  coverage: {
    url: 'http://127.0.0.1:8555',
    blockGasLimit: 200000000,
    allowUnlimitedContractSize: true,
  },
  localhost: {
    chainId: 1,
    url: 'http://127.0.0.1:8545',
    allowUnlimitedContractSize: true,
  },
};

if (MAINNET_PK_DEPLOYER && ETHEREUM_MAINNET_RPC_URL) {
  networks.mainnet = {
    url: ETHEREUM_MAINNET_RPC_URL,
    accounts: [MAINNET_PK_DEPLOYER as unknown as HardhatNetworkAccountUserConfig],
  };
}

if (TESTNET_PK_DEPLOYER && ETHEREUM_TESTNET_RPC_URL) {
  networks.mainnet = {
    url: ETHEREUM_MAINNET_RPC_URL,
    accounts: [MAINNET_PK_DEPLOYER as unknown as HardhatNetworkAccountUserConfig],
  };
}

if (MAINNET_PK_DEPLOYER && POLYGON_MAINNET_RPC_URL) {
  networks.mainnet = {
    url: POLYGON_MAINNET_RPC_URL,
    accounts: [MAINNET_PK_DEPLOYER as unknown as HardhatNetworkAccountUserConfig],
  };
}

if (TESTNET_PK_DEPLOYER && POLYGON_TESTNET_RPC_URL) {
  networks.mainnet = {
    url: POLYGON_MAINNET_RPC_URL,
    accounts: [MAINNET_PK_DEPLOYER as unknown as HardhatNetworkAccountUserConfig],
  };
}

if (MAINNET_PK_DEPLOYER && OPTIMISM_MAINNET_RPC_URL) {
  networks.mainnet = {
    url: OPTIMISM_MAINNET_RPC_URL,
    accounts: [MAINNET_PK_DEPLOYER as unknown as HardhatNetworkAccountUserConfig],
  };
}

if (TESTNET_PK_DEPLOYER && OPTIMISM_TESTNET_RPC_URL) {
  networks.mainnet = {
    url: OPTIMISM_MAINNET_RPC_URL,
    accounts: [MAINNET_PK_DEPLOYER as unknown as HardhatNetworkAccountUserConfig],
  };
}

if (ARCHIVE_NODE_RPC_URL && FORK_ENABLED) {
  networks.hardhat = {
    chainId: 1,
    hardfork: 'istanbul',
    forking: {
      url: ARCHIVE_NODE_RPC_URL,
      blockNumber: Number(FORK_BLOCK_NUMBER) || 0,
    },
  };
} else {
  networks.hardhat = {
    allowUnlimitedContractSize: true,
  };
}

export default networks;
