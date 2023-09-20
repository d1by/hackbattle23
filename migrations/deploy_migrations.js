var contractNFT = artifacts.require("./contractNFT.sol");

module.exports = function(deployer) {
  deployer.deploy(contractNFT);
};
