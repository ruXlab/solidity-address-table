import { expect } from "chai";
import { ethers } from "hardhat";
import { EmbeddedAddressTableX16Test } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
require("@nomicfoundation/hardhat-chai-matchers")


describe("EmbeddedAddressTableX16", function () {
  let eoa: SignerWithAddress
  let aBook: EmbeddedAddressTableX16Test

  beforeEach(async function () {
    eoa = (await ethers.getSigners())[0];

    aBook = await ethers.getContractFactory("EmbeddedAddressTableX16Test", eoa).then(x => x.deploy())
    await aBook.deployed()
  })

  it('should start with an empty address book', async function () {
    expect(await aBook.addressBookSize()).to.equal(0);
  });

  it('should add an address to the address book', async function () {
    // given
    const testAddress = '0x0000000000000000000000000000000000000111';

    // when
    await aBook.addressBookAdd(testAddress);

    // then
    expect(await aBook.addressBookSize()).to.equal(1);
    expect(await aBook.addressBookItem(0)).to.equal(testAddress);

  });

  it('should add multiple addresses to the address book', async function () {
    // given
    const testAddresses = [
      '0x0000000000000000000000000000000000000111',
      '0x0000000000000000000000000000000000000222',
      '0x0000000000000000000000000000000000000333'
    ];

    // when
    await aBook.addressBookAddMany(testAddresses);

    // then
    const size = await aBook.addressBookSize();
    expect(size).to.equal(testAddresses.length);
  });

  it('should maintain the order of added addresses', async function () {
    // given
    const testAddresses = [
      '0x0000000000000000000000000000000000000111',
      '0x0000000000000000000000000000000000000222',
      '0x0000000000000000000000000000000000000333'
    ];

    // when
    for (const address of testAddresses) {
      await aBook.addressBookAdd(address);
    }

    // Verify that the addresses are in the expected order in the table
    for (let i = 0; i < testAddresses.length; i++) {
      expect(await aBook.addressBookItem(i)).to.equal(testAddresses[i]);
    }
  });

  it('should add single addresses and multiple addresses together', async function () {
    // given
    const testAddress1 = '0x0000000000000000000000000000000000000111';
    const testAddress2 = '0x0000000000000000000000000000000000000222';
    const testAddresses = [
      '0x0000000000000000000000000000000000000333',
      '0x0000000000000000000000000000000000000444'
    ];

    // when
    await aBook.addressBookAdd(testAddress1);
    await aBook.addressBookAdd(testAddress2);
    await aBook.addressBookAddMany(testAddresses);

    // then
    const size = await aBook.addressBookSize();
    expect(size).to.equal(4);

    // then verify that the addresses are in the expected order in the table
    const expectedOrder = [testAddress1, testAddress2, ...testAddresses];
    for (let i = 0; i < expectedOrder.length; i++) {
      const address = await aBook.addressBookItem(i);
      expect(address).to.equal(expectedOrder[i]);
    }
  });
});
