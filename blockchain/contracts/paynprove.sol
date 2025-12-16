// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract paynprove {
    address public owner;

    mapping(address => bool) public paid;
    address[] public payers;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function pay() public payable {
        require(msg.value > 0, "Must send ETH");
        require(paid[msg.sender] == false, "Already paid!");

        paid[msg.sender] = true;
        payers.push(msg.sender);
    }

    function withdraw() public onlyOwner {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success, "Withdraw failed!");
    }

    function getPayersCount() public view returns (uint256) {
        return payers.length;
    }
}