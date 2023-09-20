import React, { useEffect, useState } from "react";
import Web3 from "web3";
import abi from "../abi.json"; // Replace with your NFT contract ABI

const contractAddress = "0x411b426c72fCeCEc6c63989f53Baa7fd7d1219C2"; // Replace with your NFT contract address

function NFTMintingComponent() {
  const [web3, setWeb3] = useState(null);

  // Request MetaMask's permission to access the user's Ethereum account
  async function requestAccount() {
    try {
      await window.ethereum.enable();
    } catch (error) {
      console.error("Error requesting account access:", error);
    }
  }

  // Create a function to mint an NFT
  async function mintNFT() {
    if (!web3) {
      console.error("Web3 is not initialized.");
      return;
    }

    try {
      const accounts = await web3.eth.getAccounts();
      const nftContract = new web3.eth.Contract(abi, contractAddress);

      // Construct the transaction data to mint an NFT
      const tokenURI = "https://your-token-uri.com"; // Replace with your token URI
      const mintingOptions = {
        from: accounts[0],
        gas: web3.utils.toHex(800000),
        gasPrice: web3.utils.toHex(web3.utils.toWei("1", "wei")),
      };

      // Mint the NFT
      const tx = await nftContract.methods
        .mintNFT(accounts[0], tokenURI)
        .send(mintingOptions);
      console.log(`NFT minted. Transaction hash: ${tx.transactionHash}`);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  }

  useEffect(() => {
    // Initialize web3 with MetaMask's provider
    if (typeof window.ethereum !== "undefined") {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    }
  }, []);

  // Render the component
  return (
    <div>
      <h1>NFT Minting Component</h1>
      <button onClick={mintNFT}>Mint NFT</button>
    </div>
  );
}

export default NFTMintingComponent;
