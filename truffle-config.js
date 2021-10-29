var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(data, "https://ropsten.infura.io/v3/46770654a6f6479489228ef81a5b797a")
      },
      network_id: 3
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(data, "https://goerli.infura.io/v3/53e706eaa088405491d1e311f6a6938b")
      },
      network_id: 5
    },
  }
};
