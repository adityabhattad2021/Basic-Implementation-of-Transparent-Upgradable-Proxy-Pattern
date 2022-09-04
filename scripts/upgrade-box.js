const { ethers } = require("hardhat")


// To check the version only run this function on one blockchain at a time 
// Each time reset the chain with ctrl C and hh node.
async function main() {
	const boxProxyAdmin = await ethers.getContract("BoxProxyAdmin")
	const transparentProxy = await ethers.getContract("Box_Proxy")

	// This line means we are getting ABI of box and the functions will be called at transparent proxy address.
	const proxyBoxV1 = await ethers.getContractAt("Box", transparentProxy.address)
	const versionBoxV1 = (await proxyBoxV1.version()).toString()
	console.log(`The version that the proxy before contract upgrade is ${versionBoxV1}`);
	
	const boxV2 = await ethers.getContract("BoxV2")
	const upgrageBoxTransection = await boxProxyAdmin.upgrade(transparentProxy.address, boxV2.address)
	await upgrageBoxTransection.wait(1)

	const proxyBoxV2 = await ethers.getContractAt("BoxV2", transparentProxy.address)
	const versionBoxV2 = (await proxyBoxV2.version()).toString()
	console.log(`The version that the proxy before contract upgrade is ${versionBoxV2}`);


}

main()
	.then(() => {
		process.exit(0);
	})
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
