const Web3 = require('web3');
const axios = require('axios');

const etherscanApiKey = 'GGXUMRQZKQ2TX1KDCCSQD3UCGGKAFA8HBI'; 
const contractAddress = '0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413';


const web3 = new Web3('https://cloudflare-eth.com');

const apiUrl = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${etherscanApiKey}`;


async function getContractABI() {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    if (data.status === '1') {
      const contractABI = JSON.parse(data.result);


      const nftContract = new web3.eth.Contract(contractABI, contractAddress);


      const tokenId = '1';
      

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
