# Mint NFT Project

A user can easily mint any NFT using this smart contract and its interface

start by install dependencies and packages.

```shell
npm install
```

In case of any Error check package version.
Add .env file for storing your SECRET_KEY(API_KEY and PRIVATE_KEY).
> Do not forget to include .env to .gitignore.

run following commands to deploy and interact with smart contract.

Update tokenURI to your own token. Use Pinata or similar platform for uri tokens.
```shell
npx hardhat run scripts/deploy.js
npx hardhat run scripts/mint-nft.js
```
