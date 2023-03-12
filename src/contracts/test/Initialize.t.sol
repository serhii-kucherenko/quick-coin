// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "forge-std/Test.sol";
import "src/contracts/QuickCoin.sol";

contract InitializeTest is Test {
    function setUp() public {}

    function testInitializeData() public {
        emit log_bytes(abi.encodeCall(QuickCoin.initialize, ()));
    }
}
