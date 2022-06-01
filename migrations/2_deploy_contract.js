var contract_container = artifacts.require("./FundingContainer.sol");

module.exports = function(deployer) {
  deployer.deploy(contract_container);
};
