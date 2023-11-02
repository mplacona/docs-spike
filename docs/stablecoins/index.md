---
title: "Overview"
slug: "overview"
excerpt: "Learn how CCTP helps unify liquidity across blockchains and simplify user experience."
hidden: false
createdAt: "2022-09-16T19:55:19.306Z"
updatedAt: "2023-06-27T03:27:10.998Z"
sidebar_position: 0
---
_Cross-Chain Transfer Protocol (CCTP) is a permissionless on-chain utility that can burn native USDC on a source chain and mint native USDC of the same amount on a destination chain. Developers can embed CCTP into their apps to provide users with the most capital-efficient way to transfer USDC across chains, setting the stage for a united and mainstream Web3._

# Background

CCTP eliminates the need to use a conventional [“lock-and-mint” bridge](https://ethereum.org/en/developers/docs/bridges/#how-do-bridges-work), which otherwise locks native USDC on the source chain (incurring a potential security risk) and then mints a synthetic/bridged version of USDC on the destination chain (resulting in fragmentation of liquidity and poor UX). Instead, CCTP is exposed through smart contracts, which are designed to allow composability of additional functionality beyond just burning and minting native USDC. 

• Example: a developer could build a flow where a user can transfer USDC across chains and deposit the newly-minted USDC into a DeFi protocol to begin generating yield. This flow could be designed to feel like one seamless transaction to the user.

# How does it work?

- **1. USDC is burned on the source chain**: Using an app, a user initiates a transfer of USDC from one blockchain to another, and specifies the recipient wallet address on the destination chain. The app facilitates a burn of the specified amount of USDC on the source chain.
- **2. A signed attestation is fetched from Circle**: Circle observes and attests to the burn event on the source chain. The app requests the attestation from Circle, which provides authorization to mint the specified amount of USDC on the destination chain.
- **3. USDC is minted on the destination chain**: The app uses the attestation to trigger the minting of USDC. The specified amount of USDC is minted on the destination chain and sent to the recipient wallet address.

# The possibilities of CCTP

Developers can tap the power of CCTP to build novel cross-chain apps that stack together the various functionalities of trading, lending, payments, NFTs, gaming and more, all while keeping things simple for users.

## Cross-chain swaps

Users can perform cross-chain swaps with digital assets that live on distinct chains (e.g. swapping ETH on Ethereum for AVAX on Avalanche). In a completely automated way, ETH can be swapped for USDC on Ethereum, routed by CCTP to Avalanche, and swapped for AVAX. Routing and execution are hidden from the user to deliver a seamless user experience.

## Cross-chain deposits

Users can utilize USDC on Ethereum to open a position on a decentralized exchange on Avalanche. Because CCTP can route USDC across chains behind the scenes, the user never needs to switch wallets or even think about which chain they’re holding USDC on.

## Cross-chain NFT purchases

With one click, a user with USDC on Avalanche can buy an Ethereum-based NFT on Uniswap and list it for sale on OpenSea. When the user initiates a transaction from their MetaMask wallet, CCTP routes their USDC from Avalanche to Ethereum to purchase the NFT from Uniswap, then opens the listing on OpenSea. Once again, complexity is abstracted away from the user for a fast and seamless experience.

# Supported Chains

CCTP is available on mainnet for Ethereum, Avalanche, and Arbitrum. It is also available on Goerli testnet for Ethereum, Fuji testnet for Avalanche, and Goerli testnet for Arbitrum.

Upcoming availability:

- Throughout 2023: Solana and additional chains

## Attestation Service API

This API provides signed attestations used to transmit cross-chain messages. For more information, see the [API reference](https://developers.circle.com/stablecoin/reference).

| Environment | URL                                   |
| :---------- | :------------------------------------ |
| Testnet     | `https://iris-api-sandbox.circle.com` |
| Mainnet     | `https://iris-api.circle.com`         |