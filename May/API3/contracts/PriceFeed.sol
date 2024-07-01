// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

//contract address = 0xD43e8ceE8475D2d5a3c7a209e447B0961cE6E13B
//deployed on eth sepolia https://sepolia.etherscan.io/address/0xD43e8ceE8475D2d5a3c7a209e447B0961cE6E13B

import "@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PriceFeed is Ownable {
    address public ShowPriceFeed;


    constructor ()Ownable(msg.sender) {}

    function AnyFeed(address _priceFeed) external onlyOwner {
        ShowPriceFeed = _priceFeed;
    }
    function DataFeedUSDT() public view returns (int224 value, uint32 timestamp) {
    (value, timestamp) = IProxy(0x290B0fB170d075f466FeE83C4810f174D5C2610a).read();
    }
    function DataFeedETH() public view returns (int224 value, uint32 timestamp) {
    (value, timestamp) = IProxy(0x792989645d382193258694f904a270f65f682Cd0).read();
    }
    function DataFeedBTC() public view returns (int224 value, uint32 timestamp) {
    (value, timestamp) = IProxy(0xc0A7c10Cfd9bE12BC816325a04C174bdD9130ddc).read();
    }

}