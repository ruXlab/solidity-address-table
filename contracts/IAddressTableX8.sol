// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

/**
 * @title AddressTableX8 can fit up to 2^8(256) addresses
 */
interface IAddressTableX8 {
    function length() external view returns(uint256) ;

    function add(address addr) external;
    function addMany(address[] calldata addresses) external ;

    function get(uint256 index) external returns (address);
}
