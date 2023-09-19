pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyToken is ERC721 {
    uint256 public totalMints = 0;

    uint256 public mintPrice = 1 ether;
    string public URI = "JSON";
    mapping(address => uint256) public walletMints;

    constructor() ERC721("MyToken", "MTK") {}

    function safeMint(address to) internal {
        uint256 tokenId = totalMints;
        totalMints++;

        _safeMint(to, tokenId);
    }

    function mintToken() public payable {
        require(mintPrice == msg.value, "wrong amount sent");
        safeMint(msg.sender);
    }

    function getMyWalletMints() public view returns (uint256) {
        return walletMints[msg.sender];
    }
}


