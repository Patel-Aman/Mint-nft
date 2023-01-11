const { ethers } = require('hardhat');

require('dotenv').config();
const contract = require('../artifacts/contracts/MyNFT.sol/MyNFT.json');
const {PRIVATE_KEY, API_KEY, CONTRACT_ADDRESS} = process.env;

// provider
const provider = new ethers.providers.AlchemyProvider('goerli', API_KEY);

//signer
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

//contract
const MyNft_contract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

const tokenURI = "https://gateway.pinata.cloud/ipfs/QmbduGJ3wXNgFYMaYx2RKdAPsfdjXRENwvo4NaKxYSeH2x";

async function mintNFT() {
    let nftTxn = await MyNft_contract.mintNFT(signer.address, tokenURI);
    await nftTxn.wait();

    console.log(`NFT Minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`)
}

mintNFT()
.then( () => process.exit(0))
.catch( error => {
    console.log(error);
    process.exit(1);
})