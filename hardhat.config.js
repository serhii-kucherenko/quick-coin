/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  paths: {
    sources: './src/contracts',
  },
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
