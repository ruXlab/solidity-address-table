// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/**
 * EmbeddedAddressTableX8 can fit up to 2^8(256) addresses
 */
abstract contract EmbeddedAddressTableX8 {
    address[] public addressTable;

    function _addressBookSize() internal view returns(uint256) {
        return addressTable.length;
    }

    function _addressBookItem(uint8 index) internal view returns(address) {
        require(index < addressTable.length, "AddressBook: no such index");
        return addressTable[index];
    }

    function _addressBookAdd(address addr) internal {
        require(addressTable.length < 0xff + 1, "AddressBook index overflow");
        addressTable.push(addr);
    }

    function _addressBookAddMany(address[] calldata addresses) internal {
        require(addressTable.length + addresses.length < 0xff + 1, "AddressBook index overflow");

        for(uint256 i; i < addresses.length; ) {
            addressTable.push(addresses[i]);
            unchecked { i++; }
        }
    }
}
