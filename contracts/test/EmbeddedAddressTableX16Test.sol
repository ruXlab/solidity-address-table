// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import { EmbeddedAddressTableX16 } from "../../contracts/EmbeddedAddressTableX16.sol";

contract EmbeddedAddressTableX16Test is EmbeddedAddressTableX16 {
    function addressBookItem(uint16 index) external view returns(address addr) {
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
