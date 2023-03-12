// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "forge-std/Test.sol";
import "../QuickCoin.sol";

contract InitializeTest is Test {
    function setUp() public {}

    function testInitializeData() public {
        _setupPlatformFeeInfo(0x66353cc9331D1BA1aFCfC6F31cC2116FfE102cE2, 0);
        uint256 initialValue = 5; // Use a non-zero initial value of choice.

        emit log_bytes(
            abi.encodeCall(
                InitializeTest.initialize
            )
        );
    }
}
