 const TokenSale = artifacts.require("MyTokenSale");
const Token = artifacts.require("MyToken");

const chai = require("./setupchai.js");
const BN =web3.utils.BN;
const expect = chai.expect;

contract("Token test", async(accounts)=>{

    const[deployerAccount, recipient, anotheraccount]= accounts;

    it("should not have any tokens in my deployer account", async() =>{

        let instance = await Token.deployed();
expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(new BN(0));

    })




}); 