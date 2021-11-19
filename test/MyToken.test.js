const Token =artifacts.require("MyToken");

var chai =require("chai");

const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);

chai.use(chaiBN);

var chaiAsPromised = require("chai-as-promised");


chai.use(chaiAsPromised);

const expect =chai.expect;

contract("Token Test", async (accounts)=>{

    const [deployerAccount, recipient, anotherAccount]=accounts;

  it("all tokens should be in my account" , async()=>{

let instance = await Token.deployed();
let totalSupply = await instance.totalSupply();

 expect( await instance.balanceOf(deployerAccount)).to.be.a.bignumber.equal(totalSupply);

    });



it("is not possible to send more tokens than available in total", async()=>{

    let instance = await Token.deployed();
    let balanceDeployer = await instance.balanceOf(deployerAccount);

    expect(instance.transfer(recipient,new BN(balanceDeployer+1))).to.eventually.be.rejected;
    await expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(balanceDeployer);
 
});

it("is possible to send tokens between accounts", async()=>{

    const sendTokens=1;
    let instance= await Token.deployed();
    let totalSupply = await instance.totalSupply();
    expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply);
    expect(instance.transfer(recipient,sendTokens)).to.eventually.be.fulfilled;
expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply.sub(new BN(sendTokens)));
expect(instance.balanceOf(recipient)).to.eventually.be.a.bignumber.equal(new BN(sendTokens));
});

});





