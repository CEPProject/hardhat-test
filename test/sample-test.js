const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function() {
  it("Should return the new greeting once it's changed", async function() {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    
    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

describe("Greeter test2", function() {
  it("Greeter Test2", async function() {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    
    await greeter.deployed();
    const [owner, addr1] = await ethers.getSigners();

    // 这里是测试一下用另一个账号来调用signers方法
    await greeter.connect(addr1).setGreeting("Hallo, Erde!");
    expect(await greeter.greet()).to.equal("Hallo, Erde!");
  });
});

