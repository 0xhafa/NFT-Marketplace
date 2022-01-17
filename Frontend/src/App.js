import React, { useState, useEffect } from "react";
import getWeb3 from "./getWeb3";
import axios from 'axios';
import "./App.css";

function App() {
  const [tokenInfo, setTokenInfo] = useState('undefined');

  useEffect(() => {
    const init = async () => {
      // Get network provider and web3 instance.
      const { nft } = await getWeb3();
      const tokenURI = await nft.tokenURI(0);
      const { data } = await axios.get(tokenURI);
      setTokenInfo(data.result);  
    };
    init();
  }, []);

  if(typeof tokenInfo === 'undefined') {
    return 'Loading...';
  }
  
  let tk = Object(tokenInfo["properties"]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center">{Object(tk.name).description}</h1>
          <div>
            <p className="lead text-center">{Object(tk.description).description}</p>
            <img src={Object(tk.image).description} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
