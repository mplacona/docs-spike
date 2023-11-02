---
title: "Quickstart: Cross-chain USDC Transfer"
slug: "cctp-usdc-transfer-quickstart"
excerpt: "Try out CCTP functionality with this script that transfers USDC between testnet addresses on two different chains."
hidden: false
createdAt: "2022-11-03T16:15:55.534Z"
updatedAt: "2023-04-24T21:20:29.837Z"
sidebar_position: 3
---
_Cross-Chain Transfer Protocol (CCTP) is a permissionless on-chain utility that can burn native USDC on a source chain and mint native USDC of the same amount on a destination chain. Developers can embed CCTP into their apps to provide users with the most capital-efficient way to transfer USDC across chains, unifying liquidity across the ecosystem and simplifying user experience._

To get started with CCTP, follow the example script provided [here](https://github.com/circlefin/evm-cctp-contracts/blob/d1c24577fb627b08483dc42e4d8a37a810b369f7/docs/index.js). The example uses [web3.js ](https://web3js.readthedocs.io/en/v1.8.1/getting-started.html)to transfer USDC from an address on ETH Goerli testnet to another address on AVAX Fuji testnet.

The script has 5 steps:

1. In this first step, you initiate a transfer of USDC from one blockchain to another, and specify the recipient wallet address on the destination chain. This step approves ETH **TokenMessenger** contract to withdraw USDC from the provided eth address.

```js
const approveTx = await usdcEthContract.methods.approve(ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS, amount).send({gas: approveTxGas})
```

2. In this second step, you facilitate a burn of the specified amount of USDC on the source chain. This step executes **depositForBurn** function on the ETH TokenMessenger contract deployed in [Goerli testnet](https://goerli.etherscan.io/address/0xd0c3da58f55358142b8d3e06c1c30c5c6114efe8).

```js
const burnTx = await ethTokenMessengerContract.methods.depositForBurn(amount, AVAX_DESTINATION_DOMAIN, destinationAddressInBytes32, USDC_ETH_CONTRACT_ADDRESS).send();
```

3. In this third step, you make sure you have the correct message and hash it. This step extracts **messageBytes** emitted by **MessageSent** event from **depositForBurn** transaction logs and hashes the retrieved **messageBytes** using the **keccak256** hashing algorithm.

```js
const transactionReceipt = await web3.eth.getTransactionReceipt(burnTx.transactionHash);
const eventTopic = web3.utils.keccak256('MessageSent(bytes)')
const log = transactionReceipt.logs.find((l) => l.topics[0] === eventTopic)
const messageBytes = web3.eth.abi.decodeParameters(['bytes'], log.data)[0]
const messageHash = web3.utils.keccak256(messageBytes);
```

4. In this fourth step, you request the attestation from Circle, which provides authorization to mint the specified amount of USDC on the destination chain. This step polls the attestation service to acquire the signature using the **messageHash** from the previous step.

```js
let attestationResponse = {status: 'pending'};
while(attestationResponse.status != 'complete') {
    const response = await fetch(`https://iris-api-sandbox.circle.com/attestations/${messageHash}`);
    attestationResponse = await response.json()
    await new Promise(r => setTimeout(r, 2000));
}
```

5. In this final step, you enable USDC to be minted on the destination chain. This step calls the **receiveMessage** function on AVAX **MessageTransmitter** contract to receive USDC at AVAX address.

Note: The attestation service is rate-limited. Please limit your requests to less than 10 per second.

```js
const receiveTx = await avaxMessageTransmitterContract.receiveMessage(receivingMessageBytes, signature);
```
