# Solidity Address Table - L2 rollups gas saver ⛽ 
This repository provides an contract that can be used to save the gas

L2 Rollup blockchains(such as Arbitrum, Optimism, etc) can significantly reduce cost of the contract execution. As of now most of them are saving the call's calldata into underlying L1 blockchain(mostly Ethereum) and that can be **quite** expensive. 

Calling contracts on rollup chains is _(relativly)_ cheap, but their calldata can cost a lot.

## Solidity Address Book

One of the tricks to shorten the calldata is to pass addresses as indices. Indeed, instead of passing **20 bytes** of `address` such as `	0xb38e8c17e38363af6ebdcb3dae12e0243582891d` (that's actually passed as a **32 bytes** word `000000000000000000000000b38e8c17e38363af6ebdcb3dae12e0243582891d`) we can simply use `0x44`(**ONE** byte, `uint8`) - index of the record in the address table.


## Implementations

There are number of implementations that might would be better suited for specific project

### EmbeddedAddressTableX8

[EmbeddedAddressTableX8](./contracts//EmbeddedAddressTableX8.sol) is a Solidity contract module designed to efficiently store and manage a collection of Ethereum addresses. It provides an internal array-based storage solution with a maximum capacity of 255 addresses. This module is well-suited for applications where a simple address registry with basic management functionality is needed.

The contract exposes a set of internal functions to add, remove, and query addresses, making it easy to integrate with other contracts. It also includes a derived test contract, EmbeddedAddressTableX8Test, which allows for convenient testing of the core functionality.

Highlights 
* Efficiently store up to 254 Ethereum addresses in an internal array.
* Add single or multiple addresses using _addressBookAdd and _addressBookAddMany functions.
* Retrieve the total number of addresses using the _addressBookSize function.
* Prevent the addition of duplicate and zero addresses.
* Ensure that the order of added addresses is maintained.

#### Usage

To integrate `EmbeddedAddressTableX8` into your contract, inherit from it and utilize the provided internal functions for managing addresses. This module is abstract and not intended for direct deployment. The derived [EmbeddedAddressTableX8Test](./contracts/test/EmbeddedAddressTableX8Test.sol) contract can be used for testing purposes, allowing you to verify the functionality and behavior of the core contract.



# Disclaimer 

The authors of this GitHub project will not be held responsible for any loss or damage arising directly or indirectly from the use or reliance on the code. It is the responsibility of the user to thoroughly review and test the code before using it in any real-world applications.

The authors make no guarantees as to the performance or security of the code and users are advised to proceed at their own risk. The code is intended to be used as a reference or educational material, and is not intended to be used in any production environment without proper testing and modification.

By using this code, the user agrees to indemnify, defend and hold harmless the authors from any and all claims, damages, costs and expenses, including attorneys' fees, arising from or related to the use of this code.