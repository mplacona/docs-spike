---
title: "Protocol Contracts"
slug: "cctp-protocol-contract"
excerpt: "Learn about the two primary CCTP contracts on each chain and see the role played by each."
hidden: false
createdAt: "2022-12-09T20:36:21.822Z"
updatedAt: "2023-07-14T19:24:48.136Z"
sidebar_position: 1
---
_Cross-Chain Transfer Protocol (CCTP) is a permissionless on-chain utility that can burn native USDC on a source chain and mint native USDC of the same amount on a destination chain. This is made possible by two primary CCTP contracts found on each chain, MessageTransmitter and TokenMessenger._

## Contract responsibilities

- **[TokenMessenger](./cctp-tokenmessenger)**: Entrypoint for cross-chain USDC transfer. Routes messages to burn USDC on source chain, and mint USDC on destination chain.
- **[MessageTransmitter](./cctp-messagetransmitter)**: Generic message passing. Sends all messages on the source chain, and receives all messages on the destination chain.
- **TokenMinter**: Responsible for minting and burning USDC. Contains chain-specific settings used by minters and burners.

\*Full contract source code is available at [https://github.com/circlefin/evm-cctp-contracts](https://github.com/circlefin/evm-cctp-contracts)

## Mainnet contract addresses

### TokenMessenger: Mainnet

| Chain     | [Domain](./cctp-technical-reference#domain) | Address                                                                                                               |
| :-------- | :-------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| Ethereum  | 0                                             | [0xbd3fa81b58ba92a82136038b25adec7066af3155](https://etherscan.io/address/0xbd3fa81b58ba92a82136038b25adec7066af3155) |
| Avalanche | 1                                             | [0x6b25532e1060ce10cc3b0a99e5683b91bfde6982](https://snowtrace.io/address/0x6b25532e1060ce10cc3b0a99e5683b91bfde6982) |
| Arbitrum  | 3                                             | [0x19330d10D9Cc8751218eaf51E8885D058642E08A](https://arbiscan.io/address/0x19330d10D9Cc8751218eaf51E8885D058642E08A)  |

### MessageTransmitter: Mainnet

| Chain     | [Domain](./cctp-technical-reference#domain) | Address                                                                                                               |
| :-------- | :-------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| Ethereum  | 0                                             | [0x0a992d191deec32afe36203ad87d7d289a738f81](https://etherscan.io/address/0x0a992d191deec32afe36203ad87d7d289a738f81) |
| Avalanche | 1                                             | [0x8186359af5f57fbb40c6b14a588d2a59c0c29880](https://snowtrace.io/address/0x8186359af5f57fbb40c6b14a588d2a59c0c29880) |
| Arbitrum  | 3                                             | [0xC30362313FBBA5cf9163F0bb16a0e01f01A896ca](https://arbiscan.io/address/0xC30362313FBBA5cf9163F0bb16a0e01f01A896ca)  |

### TokenMinter: Mainnet

| Chain     | [Domain](./cctp-technical-reference#domain) | Address                                                                                                               |
| :-------- | :-------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| Ethereum  | 0                                             | [0xc4922d64a24675e16e1586e3e3aa56c06fabe907](https://etherscan.io/address/0xc4922d64a24675e16e1586e3e3aa56c06fabe907) |
| Avalanche | 1                                             | [0x420f5035fd5dc62a167e7e7f08b604335ae272b8](https://snowtrace.io/address/0x420f5035fd5dc62a167e7e7f08b604335ae272b8) |
| Arbitrum  | 3                                             | [0xE7Ed1fa7f45D05C508232aa32649D89b73b8bA48](https://arbiscan.io/address/0xE7Ed1fa7f45D05C508232aa32649D89b73b8bA48)  |

## Testnet contract addresses

### TokenMessenger: Testnet

| Chain     | [Domain](./cctp-technical-reference#domain) | Address                                                                                                                       |
| :-------- | :-------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Ethereum  | 0                                             | [0xd0c3da58f55358142b8d3e06c1c30c5c6114efe8](https://goerli.etherscan.io/address/0xd0c3da58f55358142b8d3e06c1c30c5c6114efe8)  |
| Avalanche | 1                                             | [0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0](https://testnet.snowtrace.io/address/0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0) |
| Arbitrum  | 3                                             | [0x12dcfd3fe2e9eac2859fd1ed86d2ab8c5a2f9352](https://goerli.arbiscan.io/address/0x12dcfd3fe2e9eac2859fd1ed86d2ab8c5a2f9352)   |

### MessageTransmitter: Testnet

| Chain     | [Domain](./cctp-technical-reference#domain) | Address                                                                                                                       |
| :-------- | :-------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Ethereum  | 0                                             | [0x26413e8157cd32011e726065a5462e97dd4d03d9](https://goerli.etherscan.io/address/0x26413e8157cd32011e726065a5462e97dd4d03d9)  |
| Avalanche | 1                                             | [0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79](https://testnet.snowtrace.io/address/0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79) |
| Arbitrum  | 3                                             | [0x109bc137cb64eab7c0b1dddd1edf341467dc2d35](https://goerli.arbiscan.io/address/0x109bc137cb64eab7c0b1dddd1edf341467dc2d35)   |

### TokenMinter: Testnet

| Chain     | [Domain](./cctp-technical-reference#domain) | Address                                                                                                                       |
| :-------- | :-------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Ethereum  | 0                                             | [0xca6b4c00831ffb77afe22e734a6101b268b7fcbe](https://goerli.etherscan.io/address/0xca6b4c00831ffb77afe22e734a6101b268b7fcbe)  |
| Avalanche | 1                                             | [0x4ed8867f9947a5fe140c9dc1c6f207f3489f501e](https://testnet.snowtrace.io/address/0x4ed8867f9947a5fe140c9dc1c6f207f3489f501e) |
| Arbitrum  | 3                                             | [0xe997d7d2f6e065a9a93fa2175e878fb9081f1f0a](https://goerli.arbiscan.io/address/0xe997d7d2f6e065a9a93fa2175e878fb9081f1f0a)   |

|    |
| :- |

The relationship between these contracts is outlined in the diagram below:

![](https://files.readme.io/fcb147b-Smart_Contract_Flow.png)