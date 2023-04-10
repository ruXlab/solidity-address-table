// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import { EmbeddedAddressTableX8 } from "../../contracts/EmbeddedAddressTableX8.sol";

contract EmbeddedAddressTableX8Test is EmbeddedAddressTableX8 {
    function addressBookItem(uint8 index) external view returns(address addr) {
        addr = _addressBookItem(index);
    }

    function addressBookSize() external view returns(uint256 size) {
        size = _addressBookSize();
    }

    function addressBookAdd(address addr) external {
        _addressBookAdd(addr);
    }

    function addressBookAddMany(address[] calldata addresses) external {
        _addressBookAddMany(addresses);
    }
}