pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyToken is ERC721 {
    uint256 public totalMints = 1;
    address  payable receiver=payable(0x960C7A125DB7ED5cAD05eB6B8Df96c998f4BFBE3);
    uint256 public mintPrice = 1 ether;
    string public URI = "https://bafybeifqmgyfy4by3gpms5sdv3ft3knccmjsqxfqquuxemohtwfm7y7nwa.ipfs.dweb.link/metadata.json";
    mapping(address => uint256) public walletMints;

    constructor() ERC721("MyToken", "MTK") {}

    function safeMint(address to) internal {
        uint256 tokenId = totalMints;
        totalMints++;

        _mint(to, tokenId);
    }

    function mintToken() public payable {
        require(mintPrice == msg.value, "wrong amount sent");

        safeMint(msg.sender);
        receiver.transfer(mintPrice);
    }
    }


