## NFT Marketplace
This is a basic NFT visualizer, set to deploy and display NFTs on localhost.

# Deploying the Contract on Ganache
To deploy the contract on Ganha install and run: `ganache-cli`

Go to \Contract folder and deploy the contract by running: `truffle migrate`

# Start Server
Go to \Backend folder and start server by running: `nodemon app.js`

# Start Frontend
To visualize the NFT, first copy `MyNFT.json` located in  Contract\build\contracts and paste it in Frontend\client\src\abi.

Then, run: `npm start` and see the NFT.