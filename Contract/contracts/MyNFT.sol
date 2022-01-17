// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//Only localhost
contract MyNFT is ERC721 {
    uint public tokenId;
    address public owner;

    constructor() ERC721("My NFT", "MNFT") {
        owner = msg.sender;
    }

    function mint(address to) external {
        require(msg.sender == owner, 'Only owner');
        _safeMint(to, tokenId);
        tokenId++;
    }

    function _baseURI() internal pure override returns(string memory) {
        return "http://localhost:3000/";
    } 
}