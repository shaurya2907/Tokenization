const path = require("path");
const HDWalletProvider =rquire("@truffle/hdwallet-provide");
const Mnemonic = "yard cost edge divide tourist eyebrow tomorrow invite kite rail grace choice ";
const AccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    }
  },

  gnache_local: {
    provider: function(){
      return new HDWalletProvider(Mnemonic, "http://127.0.0.1:7545", AccountIndex)
    }
  
  },
  compilers: {
    solc:{
      version: "0.8.0"
    }
  }
};
