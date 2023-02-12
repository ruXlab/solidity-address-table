import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("AddressTableX8", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const AddressTableX8 = await ethers.getContractFactory("AddressTableX8");
    const addressTableX8 = await AddressTableX8.deploy();

    return { addressTableX8, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Is empty at the start", async function () {
      const { addressTableX8, owner, otherAccount } = await loadFixture(deployOneYearLockFixture);
      
      expect(await addressTableX8.length()).to.equal(0);
    });

    it("Can add 1 element and retrieve it", async function () {
      const { addressTableX8, owner, otherAccount } = await loadFixture(deployOneYearLockFixture);

      await addressTableX8.add("0x00000000000000000000000000000000beefb33f")
      
      expect(await addressTableX8.length()).to.equal(1);
      expect(await addressTableX8.table(0)).to.hexEqual("0x00000000000000000000000000000000beefb33f");
    });

  });
});
