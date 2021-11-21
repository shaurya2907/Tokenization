const path = require("path");
require("dotenv").config({path: "./.env"});
const HDWalletProvider =require("@truffle/hdwallet-provider");


const AccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },

  ganache_local: {
    provider: function() {
      return new HDWalletProvider(process.env.MNEMONIC , "http://127.0.0.1:7545", AccountIndex)
    },
    network_id: 5777
  },

  goerli_infura: {
    provider: function() {
      
       
          return new HDWalletProvider(process.env.MNEMONIC , "https://goerli.infura.io/v3/00ecdcccffcf4d35ac63ca76335a265e", AccountIndex)
        },
        network_id: 5
      },

      ropsten_infura: {
        provider: function() {
          
           
              return new HDWalletProvider(process.env.MNEMONIC , "wss://ropsten.infura.io/ws/v3/00ecdcccffcf4d35ac63ca76335a265e", AccountIndex)
            },
            network_id: 3
          },
    
  
    
  },

  
  
  compilers: {
    solc:{
      version: "0.8.0"
    }
  }
};
