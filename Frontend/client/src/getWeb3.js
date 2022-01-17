import { ethers, Contract } from "ethers";
import NFT from "./MyNFT.json";

const getWeb3 = () =>
  new Promise((resolve, reject) => {

    window.addEventListener("load", async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        //"http://127.0.0.1:8545"
      );

      const signer = provider.getSigner();
      
      //const accounts = await web3.eth.getAccounts();
      const network = await provider.getNetwork();
      console.log(NFT.networks[network.chainId]);
      console.log(network.chainId);

      // Get the contract instance.
      const nft = new Contract(
        NFT.networks["1642036649405"].address,
        NFT.abi,
        signer
      );

      resolve({ nft });
    });
  });

export default getWeb3;
