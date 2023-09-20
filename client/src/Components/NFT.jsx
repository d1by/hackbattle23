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
      // Assuming `abi` is a JSON string representing the ABI
      var contractInfo = abi;

      // Initialize the contract using web3.eth.contract
      var nftContract =  new web3.eth.Contract(contractInfo.abi,contractAddress);


      // Construct the transaction data to mint an NFT
      const tokenURI = "https://bafybeifqmgyfy4by3gpms5sdv3ft3knccmjsqxfqquuxemohtwfm7y7nwa.ipfs.dweb.link/metadata.json"; // Replace with your token URI
      const mintingOptions = {
        from: accounts[0],
        gas: web3.utils.toHex(3000000),
        gasPrice: web3.utils.toHex(web3.utils.toWei("1000", "wei")),
      };

      // Mint the NFT
      try {
        // Check if the mintNFT method exists in the contract ABI
        if (!nftContract.methods.mintToken) {
            console.error("mintNFT method not found in the contract ABI");
            return;
        }
    
        // Call the mintNFT method
        const tx = await nftContract.methods.mintToken(accounts[0], tokenURI).send(mintingOptions);
      console.log(`NFT minted. Transaction hash: ${tx.transactionHash}`);}
      catch (error) {
        console.error("Error minting NFT:", error);
    }
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  }

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("Please install metamask");
    }
  };

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
      <h1 className="text-white text-5xl p-5">NFT Minting Component</h1>
      <button className="border-2 bg-white hover:bg-blue-500 hover:text-white border-blue-500 px-5 rounded text-xl text-blue-500" onClick={mintNFT}>Mint NFT</button>
      <br />
      <button className="border-2 bg-white hover:bg-blue-500 hover:text-white border-blue-500 px-5 rounded text-xl text-blue-500"onClick={connectWallet}> Connect to wallet</button>
    </div>
  );
}

export default NFTMintingComponent;
