const { ethers } = require("hardhat");


async function main() {
  const myNft = await ethers.getContractFactory("MyNFT");

  const MyNft = await myNft.deploy();

  console.log("My NFT contrcat deployed at:", MyNft.address);
}

main()
.then( ()=> process.exit(0))
.catch( error => {
  console.error(error);
  process.exit(1);
})