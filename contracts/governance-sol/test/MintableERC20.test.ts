import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { Contract, ContractFactory } from 'ethers';
import {  ethers } from 'hardhat';

const { getSigners, utils } = ethers;
const { parseEther: toWei } = utils;

describe('MintableERC20', () => {
    let wallet0: SignerWithAddress;
    let wallet1: SignerWithAddress;
    let wallet2: SignerWithAddress;
    let MintableERC20: Contract;
    let MintableERC20Factory: ContractFactory;


    before(async () => {
        [wallet0, wallet1, wallet2] = await getSigners();
        MintableERC20Factory = await ethers.getContractFactory('MintableERC20');
    });

    beforeEach(async () => {
        MintableERC20 = await MintableERC20Factory.deploy(
            "Token A",
            "ATOK"
        );
    });

    /**
     * @description Test mint(address to, uint256 amount)
     * -= Expected Behavior =-
     * 1. mint tokens to the given address
     */
    describe('mint(address to, uint256 amount)', () => {
        it('should SUCCEED to mint', async () => {
            const amount = toWei('100');
            await MintableERC20.mint(wallet0.address, amount);
            expect(await MintableERC20.balanceOf(wallet0.address)).to.be.equal(amount);
        });
    });

});
