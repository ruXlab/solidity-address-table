# Solidity Address Table - L2 rollups gas saver ⛽ 

[![Build Status](https://github.com/ruXLab/solidity-address-table/actions/workflows/test.yml/badge.svg)](https://github.com/ruXLab/solidity-address-table/actions/workflows/test.yml)


This repository provides a Solidity contract module that can be used to efficiently store and manage a collection of Ethereum addresses, helping to save gas costs on L2 Rollup blockchains such as Arbitrum and Optimism.

L2 Rollup blockchains are becoming increasingly popular due to their ability to significantly reduce the cost of contract execution. However, these blockchains often save the calldata of calls into an underlying L1 blockchain, which can be quite expensive. The EmbeddedAddressTableX8 contract module allows you to store up to 255 Ethereum addresses in an internal array, making it easier and more cost-effective to manage your contracts on rollup chains.

By using EmbeddedAddressTableX8, you can take advantage of the relatively cheap cost of calling contracts on rollup chains while also reducing the cost of storing and managing the calldata associated with those calls. This can help you optimize your gas usage and reduce the cost of running your contracts on L2 Rollup blockchains.

Calling contracts on rollup chains is _(relativly)_ cheap, but their calldata can cost a lot.

## Solidity Address Book

One of the tricks to shorten the calldata is to pass addresses as indices. Indeed, instead of passing **20 bytes** of `address` such as `0xb38e8c17e38363af6ebdcb3dae12e0243582891d` (that's actually passed as a **32 bytes** word `000000000000000000000000b38e8c17e38363af6ebdcb3dae12e0243582891d`) we can simply use `0x44`(**ONE** byte, `uint8`) - index of the record in the address table.


## Implementations

There are a number of implementations that might be better suited for specific projects.

Highlights 
* Efficiently store Ethereum addresses in an internal array within contract.
* Add single or multiple addresses using `_addressBookAdd` and `_addressBookAddMany` functions.
* Retrieve the total number of addresses using the _addressBookSize function.

### EmbeddedAddressTableX8

[EmbeddedAddressTableX8](./contracts/EmbeddedAddressTableX8.sol) is a Solidity contract module designed to efficiently store and manage a collection of Ethereum addresses. It provides an internal array-based storage solution with a maximum capacity of 255 addresses. This module is well-suited for applications where a simple address registry with basic management functionality is needed.

### EmbeddedAddressTableX16

[EmbeddedAddressTableX16](./contracts/EmbeddedAddressTableX16.sol) is a similar contract module to `EmbeddedAddressTableX8`, with the difference being that it can store up to 65535 Ethereum addresses, providing a larger capacity for address storage.

Both contracts expose a set of internal functions to add, remove, and query addresses, making it easy to integrate with other contracts. They also include derived test contracts (EmbeddedAddressTableX8Test and EmbeddedAddressTableX16Test) which allow for convenient testing of the core functionality.


#### Usage

To integrate either `EmbeddedAddressTableX8` or `EmbeddedAddressTableX16` into your contract, inherit from the desired contract and utilize the provided internal functions for managing addresses. These modules are abstract and not intended for direct deployment. The derived test contracts [EmbeddedAddressTableX8Test](./contracts/test/EmbeddedAddressTableX8Test.sol) and [EmbeddedAddressTableX16Test](./contracts/test/EmbeddedAddressTableX16Test.sol) can be used for testing purposes, allowing you to verify the functionality and behavior of the core contracts.


# Disclaimer 

The authors of this GitHub project will not be held responsible for any loss or damage arising directly or indirectly from the use or reliance on the code. It is the responsibility of the user to thoroughly review and test the code before using it in any real-world applications.

The authors make no guarantees as to the performance or security of the code and users are advised to proceed at their own risk. The code is intended to be used as a reference or educational material, and is not intended to be used in any production environment without proper testing and modification.

By using this code, the user agrees to indemnify, defend and hold harmless the authors from any and all claims, damages, costs and expenses, including attorneys' fees, arising from or related to the use of this code.