const { network } = require("hardhat")


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    console.log("--------------------------------------------------------------");
    console.log("Deploying Box Contract....");
    const boxV2 = await deploy("BoxV2", {
        from: deployer,
        log: true,
        args: [],
        waitConfirmations:1,
    })
    console.log("--------------------------------------------------------------");

}

module.exports.tags = ["all", "box2"];