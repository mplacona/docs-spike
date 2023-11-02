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

### How does CCTP differ from lock-and-mint bridging? 

Prior to CCTP, companies have been forced to use a conventional “lock-and-mint” bridge, which locks native USDC on the source chain, incurring a potential security risk. The bridge then mints a synthetic/bridged version of USDC on the destination chain, resulting in fragmentation of liquidity and poor UX. 

CCTP improves on this process through smart contracts, which are designed to allow composability of additional functionality beyond just burning and minting native USDC.

### Who is CCTP designed for?

Primarily developers; companies and end users also benefit from the technology. CCTP serves as permissionless infrastructure for developers to build on top of, or integrate into, their existing apps, wallets, and bridges.

### Does CCTP require signing up with Circle?

No. CCTP is a permissionless on-chain utility for third-party developers.

### What are the fees associated with cross-chain transfers via CCTP?

Typically two gas fees would be charged, one on the source chain and one on the destination chain. An app integrating CCTP is responsible for determining how gas fees are handled and/or passed on to the end-user. There are no additional fees associated with CCTP, from Circle or anyone else.

### When will CCTP be available on additional chains?

CCTP is available now on mainnet for Ethereum, Avalanche, and Arbitrum, and will be expanding to other chains throughout 2023.

### Can’t I use a Circle Account or Core API to move USDC across chains? What about a centralized exchange?

Yes, Circle Account and Core API are capable of moving USDC natively across chains. However, those commercial products are only available to qualified businesses approved by Circle. 

In contrast, CCTP is permissionless, and accessible to any third-party developer to integrate into their app(s). It does not require signing up for an account. Users can move USDC through a CCTP-enabled app to any supported blockchain at any time. Developers can also compose new on-chain experiences on top of CCTP within their apps.

As far as centralized exchanges go, they typically hold various native forms of USDC liquidity on their platforms. Users with an account at a centralized exchange can deposit USDC (native to a given chain) into their exchange wallet, and then withdraw USDC (native to a different chain) to their external wallet.

### How is CCTP different from cross-chain liquidity pool solutions?

CCTP doesn’t require pooled USDC liquidity to perform cross-chain transfers. Because of this, it increases capital efficiency and avoids fees charged by liquidity providers.

### How does a given quantity of USDC burned on the source chain become successfully minted on the destination chain?

When USDC is burned on the source chain, the event is automatically observed by Circle’s attestation service. The app facilitating the burn of USDC fetches the signed attestation from Circle. This enables CCTP to mint USDC on the destination chain.

### Have the CCTP smart contracts undergone security audits?

Yes. Please see our third-party audit documentation conducted by ChainSecurity ([view PDF](https://6778953.fs1.hubspotusercontent-na1.net/hubfs/6778953/CCTP/ChainSecurity_Circle_Circle_EVM_Bridge_audit.pdf)) and Halborn ([view PDF](https://6778953.fs1.hubspotusercontent-na1.net/hubfs/6778953/CCTP/Circle_Internet_Financial_EVM_Bridge_Smart_Contract_Security_Audit_Report_Halborn_Final.pdf)) for more details.

### What happens if Circle’s attestation service is unresponsive?

Should this happen, the service’s unavailability would temporarily preclude new burn messages from being signed. That said, robust uptime and availability are priorities for our team, similar to how our existing minting services operate today.

### Besides public wallet addresses on-chain, does Circle have access to any personally identifiable information (PII) when a user sends or receives USDC via CCTP?

No, we do not have access to, collect, or store any such data.

### How does CCTP affect existing bridged versions of USDC?

CCTP has no direct impact upon existing bridged versions of USDC.

### How does CCTP affect Circle’s plans to launch USDC on more blockchains?

Circle’s plans to bring USDC natively to more blockchain networks remain the same and will continue to grow. We envision CCTP establishing USDC as a universal liquidity layer for the Internet that is accessible to all.
