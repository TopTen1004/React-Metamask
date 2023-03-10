var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "concert load couple harbor equip island argue ramp clarify fence smart topic";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "5777" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"),
      network_id: 3 // official id of the ropsten network
    }
  }
};
