//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CitizenAlpha {
  constructor(string memory name, string memory symbol) ERC20(name, symbol) {}
}
