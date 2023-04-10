// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/**
 * EmbeddedAddressTableX16 can fit up to 2^16 (65,536) addresses
 */
abstract contract EmbeddedAddressTableX16 {
    address[] public addressTable;

    function _addressBookSize() internal view returns(uint256) {
        return addressTable.length;
    }

    function _addressBookItem(uint16 index) internal view returns(address) {
        require(index < addressTable.length, "AddressBook: no such index");
        return addressTable[index];
    }

    function _addressBookAdd(address addr) internal {
        require(addressTable.length < 65536, "AddressBook index overflow");
        addressTable.push(addr);
    }

    function _addressBookAddMany(address[] calldata addresses) internal {
        require(addressTable.length + addresses.length < 65536, "AddressBook index overflow");

        for (uint256 i; i < addresses.length; ) {
            addressTable.push(addresses[i]);
            unchecked { i++; }
        }
    }
}