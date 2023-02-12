// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

/**
 * @title AddressTableX8 can fit up to 2^8(256) addresses
 */
contract AddressTableX8 {
    address[] public table;
    address private _owner;

    modifier onlyOwner() {
        require(msg.sender == _owner);
        _;
    }

    constructor() {
        _owner = msg.sender;
    }

    function length() public view returns(uint256) {
        return table.length;
    }

    function add(address addr) external onlyOwner {
        require(table.length < 0xff, "AddressBook overflow");
        table.push(addr);
    }

    function addMany(address[] calldata addresses) external onlyOwner {
        require(table.length + addresses.length < 0xff, "AddressBook overflow");

        for(uint256 i; i < addresses.length; ) {
            table.push(addresses[i]);
            unchecked {
                i++;
            }
        }
    }


}
