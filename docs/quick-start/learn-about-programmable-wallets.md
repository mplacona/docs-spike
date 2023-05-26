---
sidebar_position: 1
---

# Circle Programmable Wallets

_Learn how Programmable Wallets make life easier for users and developers, especially those new to the Web3 ecosystem._

Circle Programmable Wallets provide a comprehensive developer solution to storing, sending, receiving, and spending Web3 digital currencies and NFTs. Asset custody can be managed by you or your users. Circle provides a one-stop-shop experience with all the tools and services to handle the complex parts, including security, transaction monitoring, account recovery flows, and more. 


## Background

### What is a wallet?

Within the crypto world, “wallet” refers to any solution that allows users to store, send, receive, and spend cryptocurrency, be it software (a program or a service) or hardware (a device or physical medium). A wallet doesn’t store actual cryptocurrency coins; rather it stores the _[private keys](https://en.wikipedia.org/wiki/Public-key_cryptography)_ to access those coins, which exist on public blockchain networks.

### Problems with wallets.

To date, the broad range of wallet solutions and lack of standardization has created confusion with users. User verification is often difficult, gas (transaction) fees are unappealing, and smart contracts prevent adoption. Wallets are also difficult to integrate for developers unfamiliar with Web3 development and infrastructure. Developers must maintain the security of a user’s private keys while sorting out multiple vendors and offerings, with no single end-to-end solution available to help them build in Web3. 

### Circle’s solution.

Circle Programmable Wallets are a Wallet-as-a-Service that simplifies creating and managing secure cryptocurrency wallets and their private keys. They extend wallet functionality with custom user flows, separate custody solutions for developers and end-users, and smart contract integration. Developers can interact with Programmable Wallets using RESTful APIs. For user custody wallets, Circle offers mobile-ready SDKs for Android and iOS that ensure users keep full control over their wallets.

**Note**: Circle Programmable Wallets can be used to send, receive, and store digital assets and non-fungible tokens (NFTs). They are not the same as Circle custody wallets used by Circle Accounts. 

## Understanding Circle Programmable Wallet Primitives

Learn about the primitives (component parts) that provide functionality for Circle’s Programmable Wallets:

* [Users](#heading=h.ej1rs952zoxd)
* [Wallets](#heading=h.dfur9a2ir5rh)
* [Wallet sets](#heading=h.shw2rqprg3z1)
* [Monitored Tokens Lists](#heading=h.ga6r5k6lt0iv)
* [Transactions](#heading=h.tvdculn4ulex)


### Users

A User represents the end-user associated with a Circle Programmable Wallet, where the value of `custodyType` is `user`. 


### Wallets

A cryptocurrency wallet is a tool for storing a user’s private keys, which provide access to their tokens and NFTs. A wallet combines an address and its metadata, which are stored together on a blockchain:

* A wallet has a unique identifier. Circle wallets use [v4 UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).
* A wallet has an address on a blockchain. Multiple wallets can share the same address on different EVM blockchains.
* A wallet has a custody type (`custodyType`) that defines developer or user having the control of invoking the private key of the wallet: 

    * A developer wallet must be created from a wallet set. Multiple wallets can be created from the same wallet set.

    * A user wallet can be created from API + SDK that’s paired with a wallet set. Additionally for the use case that an app supports an additional blockchain, new user wallets can be created from the existing wallet set of the user.

For more information about wallets, refer to the article on [Developer-Controlled Wallets vs. User-Controlled Wallets](https://docs.google.com/document/u/0/d/1zwjqkV4RjX2LuYNSApwPD1sVuCvKZsV_-8O0VfPSCII/edit).

### **Wallet Sets**

A Circle wallet set is a set of the wallets created and managed by a unique cryptographic private key. Wallet sets use the [HD wallet setting](https://www.investopedia.com/terms/h/hd-wallet-hierarchical-deterministic-wallet.asp) on supported blockchains:

* A wallet set can contain 1 or many wallets.
* A wallet set can have wallets with addresses on multiple blockchains. On EVM chains a wallet set can have wallets on different chains sharing the same address. 
* A wallet set has a custody type. You can use it to create wallets with either developer- or user-controlled custody, but not both.
* A Developer wallet must be created from a wallet set. This requirement prevents the case of unintentionally creating multiple wallet sets when only you need only one Developer wallet set.
* A User wallet can be created directly from the API + SDK without creating the wallet set first. The newly created user wallet will be paired with a unique wallet set.  
* At the entity level developers can configure Monitored Tokens List that monitors token balances and deposits into created wallets to trigger callback events. 
For more information, refer to the guide ‘Developer-Controlled vs. User-Controlled Wallets’[[Circle internal link](https://docs.google.com/document/d/1zwjqkV4RjX2LuYNSApwPD1sVuCvKZsV_-8O0VfPSCII/edit?usp=sharing)].


### **Monitored Tokens List**

A list of tokens Circle monitors for token balances and deposits in wallets. Monitored Token Lists create accurate views of your wallets that filter out unrecognizable or spam tokens, which can exist on public blockchains. 

You can read and update your Monitored Tokens List with either the Developer Console UI or the Programmable Wallets API. You can add, remove tokens from your Monitored Tokens List, or change the scope of it to monitor all tokens if it better fits your use case. The Monitored Tokens List will affect the GET /wallets/{id}/balances, GET /wallets/{id}/nfts, and GET /transactions API as it’ll only return tokens that are being monitored. You can also register for HTTP callbacks when your wallets receive deposit transactions of monitored tokens. The Monitored Tokens List supports tracking several types of tokens and standards:

* ERC-20 tokens
* ERC-721 and ERC-1155 NFTs

### **Transactions**

A transfer of tokens in a wallet on the blockchain, either inbound or outbound, and the executions or deployment of smart contracts. 

A transaction also includes metadata about the states prior to the transaction signing, addition to the mempool, and transaction hash (`txHash`) assignment. The transaction may change its associated `txHash` if acceleration and retries are applied. 


#### Transaction Operation Types

A Transaction contains an Operation field that defines the use case for the transfer. The following table describes the operations, and the relationship between the possible field value and corresponding destination address:

<table>
  <tr>
   <td><strong>Operation Type</strong>
   </td>
   <td><strong>Operation Field Value</strong>
   </td>
   <td><strong>Description for Destination Address Field Value</strong> 
   </td>
  </tr>
  <tr>
   <td>Transfer
   </td>
   <td>TRANSFER
   </td>
   <td>Externally owned account (EOA) that receives the transfer.
   </td>
  </tr>
  <tr>
   <td>Execute
   </td>
   <td>CONTRACT_EXECUTION
   </td>
   <td>Contract address.
   </td>
  </tr>
  <tr>
   <td>Deploy
   </td>
   <td>CONTRACT_DEPLOYMENT
   </td>
   <td>NULL
   </td>
  </tr>
</table>

#### Transaction States

The state diagram that follows shows the transaction life cycle:


These are the possible states for a transaction:

* **Initiated**: The successful request initiates the transaction process.
* **Queued: **The transaction is in the processing queue.
* **Sent **(Mempool): The EVM signs transactions from the queue, adds them to the mempool, and assigns them a transaction hash. The transaction may be accelerated in this stage.
* **Confirmed**: The EVM confirms the transaction for the first time, as seen on a mined block.
* Terminal States:
* **Canceled**: The transaction cancels by request either on-chain or off-chain. All non-terminal states can transition to this state. 
* **Failed**: The transaction fails. The failure includes an explanation. All non-terminal states can transition to this state. 
* **Completed**:  The transaction successfully mines and executes on the blockchain, including the last block required for transaction finality.

## **Interacting with Decentralized Ecosystems via Smart Contracts and Programmable Wallets**

Smart contracts enable user participation in blockchain-based ecosystems such as DAOs and decentralized exchanges like Uniswap. By leveraging programmable wallet operations, users can:

* Engage in democratic decision-making and decentralized finance.
* Benefit from transparent, equal frameworks.
* Collaborate with diverse individuals worldwide.
* Interact seamlessly with smart contracts, reshaping traditional structures and services.