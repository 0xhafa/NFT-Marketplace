import { ethers, Contract } from "ethers";
import NFT from "./abi/MyNFT.json";

const getWeb3 = () =>
  new Promise((resolve, reject) => {

    window.addEventListener("load", async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        "http://127.0.0.1:8545"
      );

      const signer = provider.getSigner();
      
      //const accounts = await web3.eth.getAccounts();
      //const network = await provider.getNetwork();

      // Get the contract instance.
      const nft = new Contract(
        NFT.networks[Object.keys(NFT.networks)[Object.keys(NFT.networks).length -1]].address,
        NFT.abi,
        signer
      );

      resolve({ nft });
    });
  });

export default getWeb3;
