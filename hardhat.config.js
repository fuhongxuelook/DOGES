require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "bsctest",
  solidity: {
     version:  "0.8.13",
     settings: {
        optimizer: {
          enabled: true,
          runs: 200,
  }
     }
  },
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts: {
        mnemonic: "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      }
    },
    bsc: {
      url: process.env.BSC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    one: {
      url: process.env.ONE || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    polygon: {
      url: process.env.POLYGON || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    bsctest: {
      url: process.env.BSCTEST || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    eth: {
      url: process.env.ETH || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }

  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.POLYGON_API_KEY,
  },
};
