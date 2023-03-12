/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  paths: {
    root: './src/contracts',
    sources: './',
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
