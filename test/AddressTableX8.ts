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
    it("Should deploy", async function () {
      const { addressTableX8, owner, otherAccount } = await loadFixture(deployOneYearLockFixture);

      expect(await addressTableX8.length()).to.equal(0);
    });
  });
});
