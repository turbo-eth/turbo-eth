// @ts-nocheck
import erc20MintableABI from '@turbo-lab/core-sol/abis/contracts/MintableERC20.sol/MintableERC20.json'
import erc721MintableABI from '@turbo-lab/core-sol/abis/contracts/MintableERC721.sol/MintableERC721.json'

import turboTokenMainnet from '@turbo-lab/core-sol/deployments/localhost/TurboToken.json';
import turboTokenTestnet from '@turbo-lab/core-sol/deployments/localhost/TurboToken.json';
import turboTokenLocalhost from '@turbo-lab/core-sol/deployments/localhost/TurboToken.json';


function useNetworkContract(network: string, contract: string) {

    switch (network) {
        case 'mainnet':
            switch (contract) {
                case 'TurboToken':
                    return turboToken
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 'testnet':
            switch (contract) {
                case 'TurboToken':
                    return turboTokenTestnet
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 'localhost':
            switch (contract) {
                case 'TurboToken':
                    return turboTokenLocalhost
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        default:
            break;
    }

}

export { erc20MintableABI, erc721MintableABI, useNetworkContract }