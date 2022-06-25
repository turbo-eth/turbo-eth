//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";
import { Base64 } from "base64-sol/base64.sol";

contract CitizenV1 is ERC721, AccessControl {
  using Strings for uint256;
  using Strings for address;
  uint256 public totalCitizens;

  mapping(address => bool) private _isCitizen;
  mapping(address => string) private _citizenDID;
  mapping(uint256 => string) private _citizenAlias;

  bytes32 public constant MY_ROLE = keccak256("FOUNDERS");

  event Issued(address indexed citizen, uint256 id);
  event Revoked(address indexed citizen, uint256 id);

  constructor(address[] memory founders, address democracyV1)
    ERC721("Citizen", "CIZ")
    AccessControl()
  {
    for (uint256 index = 0; index < founders.length; index++) {
      uint256 _totalCitizens = totalCitizens++;
      _mint(founders[index], _totalCitizens);
      _citizenAlias[_totalCitizens] = "anon";
      _setupRole(
        0x0000000000000000000000000000000000000000000000000000000000000000,
        founders[index]
      );
      _setupRole(MY_ROLE, founders[index]);
    }
  }

  /* ================================================================================ */
  /* External Functions                                                               */
  /* ================================================================================ */

  function issue(address to, string calldata name) external {
    require(!isCitizen(to), "Existing Citizen");
    uint256 _totalCitizens = totalCitizens++;
    _citizenAlias[_totalCitizens] = name;
    _mint(to, _totalCitizens);
    // emit Issued(to, _totalCitizens);
  }

  function revoke(uint256 citizenId) external {
    _burn(totalCitizens);
    // emit Revoked(citizenId);
  }

  function isCitizen(address citizen) public returns (bool) {
    return _isCitizen[citizen];
  }

  function getDID(address citizen) public returns (string memory) {
    return _citizenDID[citizen];
  }

  function setDID(string calldata did) public returns (string memory) {
    return _citizenDID[msg.sender] = did;
  }

  function transferFrom(
    address from,
    address to,
    uint256 tokenId
  ) public virtual override {
    require(false, "CitizenAlpha: Keep your Soul ");
  }

  /**
   * @notice Given a token ID and seed, construct a token URI for an official Nouns DAO noun.
   * @dev The returned value may be a base64 encoded data URI or an API URL.
   */
  function tokenURI(uint256 tokenId) public view override returns (string memory) {
    return _constructTokenURI(tokenId);
  }

  /* ================================================================================ */
  /* Internal Functions                                                               */
  /* ================================================================================ */

  function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override(ERC721, AccessControl)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }

  function _constructTokenURI(uint256 _tokenId) internal view returns (string memory) {
    string memory description = string(abi.encodePacked("Citizen #", _tokenId.toString()));
    string memory name = "Citizen";
    string memory image = "";
    string memory citizenALIAS = _citizenAlias[_tokenId];

    // address _owner = ownerOf(_tokenId--);
    address _owner = address(this);

    return
      string(
        abi.encodePacked(
          "data:application/json;base64,",
          Base64.encode(
            bytes(
              abi.encodePacked(
                '{"name":"',
                name,
                ":",
                citizenALIAS,
                '", "description":"',
                description,
                '", "image": "',
                "data:image/svg+xml;base64,",
                image,
                '"}'
              )
            )
          )
        )
      );
  }
}
