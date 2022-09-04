const { network } = require("hardhat");


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log("--------------------------------------------------------------");
    console.log("Deploying Box Contract....");
    const box = await deploy("Box", {
        from: deployer,
        log:true,
        args: [],
        waitConfirmations: 1,
        proxy: {
            proxyContract: "OpenZeppelinTransparentProxy",
            viaAdminContract: {
                name: "BoxProxyAdmin",
                artifact:"BoxProxyAdmin",
            }
        }
    })
    console.log("--------------------------------------------------------------");

}


module.exports.tags=["all","box"]