---
title: "FAQ"
slug: "cctp-faq"
excerpt: "Learn why Circle created CCTP and how it differs from lock-and-mint bridging."
hidden: false
createdAt: "2022-11-03T16:16:32.968Z"
updatedAt: "2023-06-27T03:27:03.859Z"
sidebar_position: 4
---
_Cross-Chain Transfer Protocol (CCTP) is a permissionless on-chain utility that can burn native USDC on a source chain and mint native USDC of the same amount on a destination chain. Developers can embed CCTP into their apps to provide users with the most capital-efficient way to transfer USDC across chains, unifying liquidity across the ecosystem and simplifying user experience._

### What is Cross-Chain Transfer Protocol (CCTP)?

CCTP is a permissionless on-chain utility that enables the flow of USDC across chains through native burning and minting. With CCTP, USDC is effectively "teleported" from one blockchain to another.

### Who is CCTP designed for?

CCTP serves as permissionless infrastructure for developers to build on top of, or integrate into, their existing apps, wallets, and bridges.

### Does CCTP require signing up with Circle?

No. CCTP is a permissionless on-chain utility for third-party developers.

### What are the fees associated with cross-chain transfers via CCTP?

There would be a gas fee on the source chain and a gas fee on the destination chain. The app that integrates CCTP would be responsible for determining how gas fees are handled and/or passed on to the end-user. There are no additional fees from CCTP.

### When will CCTP be available on additional chains?

CCTP is available now on mainnet for Ethereum, Avalanche, and Arbitrum. Expansion to additional chains is expected throughout 2023.

### Can’t I use a Circle Account or Core API to move USDC across chains? What about a centralized exchange?

Yes, Circle Account and Core API are capable of moving USDC natively across chains. However, those commercial products are only available to qualified businesses approved by Circle.

Centralized exchanges typically hold various native forms of USDC liquidity on their platforms. Users with an account at a centralized exchange can deposit USDC (native to a given chain) into their exchange wallet, and then withdraw USDC (native to a different chain) to their external wallet.

In contrast, CCTP is permissionless. This means it is accessible to any third-party developer to integrate into their app(s), and does not require signing up for an account. Users can move USDC through a CCTP-enabled app to any supported blockchain at any time. Developers can also compose new on-chain experiences on top of CCTP within their apps.

### How is CCTP different from cross-chain liquidity pool solutions?

CCTP doesn’t require pooled USDC liquidity to perform cross-chain transfers, increasing capital efficiency and avoiding fees charged by liquidity providers.

### How does a given quantity of USDC burned on the source chain become successfully minted on the destination chain?

All burns of USDC emit an event on the source chain, which is automatically observed by Circle’s attestation service. The app facilitating the burn of USDC is responsible for fetching the signed attestation from Circle, which then enables CCTP to mint USDC on the destination chain.

### Have the CCTP smart contracts undergone security audits?

Yes. Please see our third-party audit documentation conducted by ChainSecurity ([view PDF](https://6778953.fs1.hubspotusercontent-na1.net/hubfs/6778953/CCTP/ChainSecurity_Circle_Circle_EVM_Bridge_audit.pdf)) and Halborn ([view PDF](https://6778953.fs1.hubspotusercontent-na1.net/hubfs/6778953/CCTP/Circle_Internet_Financial_EVM_Bridge_Smart_Contract_Security_Audit_Report_Halborn_Final.pdf)) for more details.

### What happens if Circle’s attestation service is unresponsive?

While its unavailability would temporarily preclude new burn messages from being signed, we anticipate robust uptime and availability similar to how our existing minting services operate today.

### Besides public wallet addresses on-chain, does Circle have access to any personally identifiable information (PII) when a user sends or receives USDC via CCTP?

No.

### How does CCTP affect existing bridged versions of USDC?

CCTP has no direct impact upon existing bridged versions of USDC.

### How does CCTP affect Circle’s plans to launch USDC on more blockchains?

Circle’s plans to bring USDC natively to more blockchain networks remain the same and will continue to grow. We envision CCTP establishing USDC as a universal liquidity layer for the internet that is accessible to all.