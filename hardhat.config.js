require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.9",
	defaultNetwork: "hardhat",
	namedAccounts: {
		deployer: {
			default: 0,
		},
		person1: {
			default: 1,
		},
		networks: {
			hardhat: {
				chainId: 1337,
				blockConfirmations: 1,
			},
			localhost: {
				chainId: 1337,
				blockConfirmations: 1,
			},
		},
	},
};
