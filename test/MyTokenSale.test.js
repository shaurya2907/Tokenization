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

    });

    it("all tokens should be in the TokenSale Smar COntract by default", async() =>{

        let instance = await Token.deployed();
        let balanceOfTokenSaleSmartContract = await instance.balanceOf(TokenSale.address);
        let totalSupply= await instance.totalSupply();
        expect(balanceOfTokenSaleSmartContract).to.be.a.bignumber.equal(totalSupply);

    });

    it("should be possile to buy tokens", async() =>{

let tokenInstance = await Token.deployed();
let tokenSaleinstance = await TokenSale.deployed();
let balanceBefore = tokenInstance.balanceOf(deployerAccount);

 await expect(tokenSaleinstance.sendTransaction({from:deployerAccount, value:web3.utils.toWei("1", "wei")})).to.be.fulfilled;
expect(tokenInstance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(balanceBefore+(new BN(1)));


    });

  



}); 