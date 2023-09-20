const { Web3 } = require('web3');
const axios = require('axios');

const etherscanApiKey = 'GGXUMRQZKQ2TX1KDCCSQD3UCGGKAFA8HBI'; 
const contractAddress = '0x583C0C9E5FAFF93ec408cBD7BaFD3719A27b9A5d';//from Database


const web3 = new Web3('https://rpc.sepolia.dev');

const apiUrl = `https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=0x583C0C9E5FAFF93ec408cBD7BaFD3719A27b9A5d&apikey=GGXUMRQZKQ2TX1KDCCSQD3UCGGKAFA8HBI`;


async function getContractABI() {
  try {
    const response = await axios.get(apiUrl);
    console.log(response);
    const data = response.data;
    if (data.status === '1') {
      const contractABI = JSON.parse(data.result);


      const nftContract = new web3.eth.Contract(contractABI, contractAddress);


      const tokenId = '2';
      

      nftContract.methods.tokenURI(tokenId).call((error, result) => {
        if (!error) {
          console.log(`URI of NFT #${tokenId}: ${result}`);
        } else {
          console.error(`Error: ${error}`);
        }
      });
    } else {
      console.error('Etherscan API Error:', data.message);
    }
  } catch (error) {
    console.error('API Request Error:', error);
  }
}

getContractABI();
