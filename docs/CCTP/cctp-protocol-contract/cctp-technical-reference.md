---
title: "Technical Reference"
slug: "cctp-technical-reference"
excerpt: "Integrate CCTP using these attestation confirmation times, message formats, transaction limits, and more."
hidden: false
createdAt: "2022-12-12T16:08:23.313Z"
updatedAt: "2023-07-14T19:26:25.826Z"
---
_Cross-Chain Transfer Protocol (CCTP) is a permissionless on-chain utility that can burn native USDC on a source chain and mint native USDC of the same amount on a destination chain. Developers can embed CCTP into their apps to provide users with the most capital-efficient way to transfer USDC across chains, unifying liquidity across the ecosystem and simplifying user experience._

# Domain

Circle-issued identifier for a network/chain where CCTP contracts are deployed. This is passed into the `destinationDomain` field.

## Domain List

| Name      | Value |
| :-------- | :---- |
| Ethereum  | 0     |
| Avalanche | 1     |
| Arbitrum  | 3     |

## Block Confirmations for Attestations

Before signing an attestation for a source chain event, Circle waits for a specified number of  on-chain block confirmations to pass to determine finality. We also check that the block is finalized on Ethereum and Arbitrum One mainnets. The average time below is the average time it takes for an attestation to become available, which includes the ~20 seconds it takes for the attestation service to observe and sign the source chain event. These values are subject to change.

### Mainnet

| Source Chain | Number of Blocks                                    | Average Time |
| :----------- | :-------------------------------------------------- | :----------- |
| Ethereum     | 65                                                  | ~13 minutes  |
| Avalanche    | 1                                                   | ~20 seconds  |
| Arbitrum     | 65 ETH blocks (waits for tx's L1 block to finalize) | ~13 minutes  |

### Testnet

| Source Chain | Number of Blocks | Average Time |
| :----------- | :--------------- | :----------- |
| Ethereum     | 5                | ~1 minute    |
| Avalanche    | 1                | ~20 seconds  |
| Arbitrum     | 5                | ~1 minute    |

# Nonce

This is a unique identifier for a message that can be used once, in any order, on the destination domain. When a message is received on the destination domain, its nonce is marked as used in the destination `MessageTransmitter` contract. 

> 📘 How nonces are stored
> 
> > On the source domain's MessageTransmitter contract, the next sequential nonce available for a source domain is stored as a public uint64, nextAvailableNonce. On the destination chain, MessageTransmitter contracts store used nonces in a mapping of (bytes32 -> uint256), where bytes32 is a hash of source domain and source domain nonce, and uint256 is 0 if unused, 1 if used.

# Message Format

## Message

This is the top-level message header format, which is standard for all messages passing through CCTP.

| Field             | Bytes   | Type    | Index | Description                                                                                                                 |
| :---------------- | :------ | :------ | :---- | :-------------------------------------------------------------------------------------------------------------------------- |
| version           | 4       | uint32  | 0     | Version identifier.                                                                                                         |
| sourceDomain      | 4       | uint32  | 4     | Source domain id.                                                                                                           |
| destinationDomain | 4       | uint32  | 8     | Destination domain id.                                                                                                      |
| nonce             | 8       | uint64  | 12    | Unique message nonce.                                                                                                       |
| sender            | 32      | bytes32 | 20    | Address of MessageTransmitter caller on source domain.                                                                      |
| recipient         | 32      | bytes32 | 52    | Address to handle message body on destination domain.                                                                       |
| destinationCaller | 32      | bytes32 | 84    | Address permitted to call MessageTransmitter on destination domain, or bytes32(0) if message can be received by any address |
| messageBody       | dynamic | bytes   | 116   | Application-specific message to be handled by recipient.                                                                    |

> 📘 Why we use `bytes32` type for addresses
> 
> CCTP is built to support EVM chains, which use 20 byte addresses, and non-EVM chains, many of which use 32 byte addresses. We provide a [Message.sol library](https://github.com/circlefin/evm-cctp-contracts/blob/40111601620071988e94e39274c8f48d6f406d6d/src/messages/Message.sol#L145-L157) as a reference implementation for converting between address and bytes32 in Solidity.

## BurnMessage

The message format includes a dynamically sized `messageBody` field, used for application-specific messages. For example, TokenMessenger defines a [BurnMessage](https://github.com/circlefin/evm-cctp-contracts/blob/master/src/messages/BurnMessage.sol) with data related to cross-chain transfers.

| Field         | Bytes | Type    | Index | Description                                                                        |
| :------------ | :---- | :------ | :---- | :--------------------------------------------------------------------------------- |
| version       | 4     | uint32  | 0     | Version identifier.                                                                |
| burnToken     | 32    | bytes32 | 4     | Address of burned token on source domain.                                          |
| mintRecipient | 32    | bytes32 | 36    | Address to receive minted tokens on destination domain                             |
| amount        | 32    | uint256 | 68    | Amount of burned tokens                                                            |
| messageSender | 32    | bytes32 | 100   | Address of caller of depositForBurn (or depositForBurnWithCaller) on source domain |

## Transaction Limits

**Minter Allowance**  
The USDC smart contract has a concept of minter allowance. This amount is decremented each time the minter mints, and eventually must be re-upped by the master minter. CCTP contracts responsible for minting USDC are periodically re-upped, so if a user tries to mint an amount exceeding the minter allowance, the transaction will fail, but may succeed on a subsequent retry. Minter allowance can be queried from the USDC contract using the public [minterAllowance](https://github.com/centrehq/centre-tokens/blob/0d3cab14ebd133a83fc834dbd48d0468bdf0b391/contracts/v1/FiatTokenV1.sol#L153) function.

**Per-Message Burn Limit**  
CCTP defines per-message burn limits. This value is configurable by the CCTP administrator (Circle). This limit prevents the case where a user burns an amount on one chain that could never be minted on a destination chain without increasing minter allowance thresholds. Burn limits can be queried on the CCTP TokenMinter contract, using the public [burnLimitsPerMessage](https://github.com/circlefin/evm-cctp-contracts/blob/master/src/roles/TokenController.sol#L69) mapping.