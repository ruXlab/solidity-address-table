# Solidity Address Table - L2 rollups gas saver ⛽ 
This repository provides an contract that can be used to save the gas

L2 Rollup blockchains(such as Arbitrum, Optimism, etc) can significantly reduce cost of the contract execution. As of now most of them are saving the call's calldata into underlying L1 blockchain(mostly Ethereum) and that can be **quite** expensive. 

Calling contracts on rollup chains is _(relativly)_ cheap, but their calldata can cost a lot.

## Solidity Address Book

One of the tricks to shorten the calldata is to pass addresses as indices. Indeed, instead of passing **20 bytes** of `address` such as `	0xb38e8c17e38363af6ebdcb3dae12e0243582891d` (that's actually passed as a **32 bytes** word `000000000000000000000000b38e8c17e38363af6ebdcb3dae12e0243582891d`) we can simply use `0x44`(**ONE** byte, `uint8`) - index of the record in the address table.

# Disclaimer 

The authors of this GitHub project will not be held responsible for any loss or damage arising directly or indirectly from the use or reliance on the code. It is the responsibility of the user to thoroughly review and test the code before using it in any real-world applications.

The authors make no guarantees as to the performance or security of the code and users are advised to proceed at their own risk. The code is intended to be used as a reference or educational material, and is not intended to be used in any production environment without proper testing and modification.

By using this code, the user agrees to indemnify, defend and hold harmless the authors from any and all claims, damages, costs and expenses, including attorneys' fees, arising from or related to the use of this code.