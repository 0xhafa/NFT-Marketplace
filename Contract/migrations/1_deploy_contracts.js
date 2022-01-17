const MyNFT = artifacts.require("MyNFT");

module.exports = async function (deployer, _network, accounts) {
  await deployer.deploy(MyNFT);
  const nft = await MyNFT.deployed();
  await nft.mint(accounts[0]);
};
