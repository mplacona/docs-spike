---
title: "MessageTransmitter"
slug: "cctp-messagetransmitter"
excerpt: "Learn about the different MessageTransmitter endpoints and the parameters associated with each."
hidden: false
createdAt: "2022-12-12T15:59:40.038Z"
updatedAt: "2023-06-05T18:32:01.597Z"
sidebar_position: 2
---
_Cross-Chain Transfer Protocol (CCTP) is a permissionless on-chain utility that can burn native USDC on a source chain and mint native USDC of the same amount on a destination chain. This is made possible by two primary CCTP contracts found on each chain, MessageTransmitter and TokenMessenger._

## receiveMessage

Messages with a given nonce can only be broadcast successfully once for a pair of domains. The message body of a valid message is passed to the specified recipient for further processing.

**Parameters**

| Field       | Type           | Description                    |
| :---------- | :------------- | :----------------------------- |
| message     | bytes calldata | Message bytes.                 |
| attestation | bytes calldata | signed attestation of message. |

## sendMessage

Sends a message to the destination domain and recipient. Emits a `MessageSent` event which will be attested by Circle’s attestation service.

**Parameters**

| Field             | Type           | Description                                              |
| :---------------- | :------------- | :------------------------------------------------------- |
| destinationDomain | uint32         | Destination domain identifier.                           |
| recipient         | bytes32        | Address to handle message body on destination domain.    |
| messageBody       | bytes calldata | Application-specific message to be handled by recipient. |

## sendMessageWithCaller

Same as `sendMessage`, but with an additional parameter, `destinationCaller`. This parameter specifies which address has permission to call `receiveMessage` on the destination domain for this message.

**Parameters**

| Field             | Type           | Description                                                    |
| :---------------- | :------------- | :------------------------------------------------------------- |
| destinationDomain | uint32         | Destination domain identifier.                                 |
| recipient         | bytes32        | Address of message recipient on destination domain as bytes32. |
| destinationCaller | bytes32        | Caller on the destination domain, as bytes32.                  |
| messageBody       | bytes calldata | Application-specific message to be handled by recipient.       |

## replaceMessage

Replace a message with a new message body and/or destination caller. The `originalAttestation` must be a valid attestation of `originalMessage`, produced by Circle’s attestation service.

**Parameters**

| Field                | Type           | Description                                                                                                                                                                                                   |
| :------------------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| originalMessage      | bytes calldata | Original message to replace.                                                                                                                                                                                  |
| originalAttestation  | bytes calldata | Attestation of originalMessage.                                                                                                                                                                               |
| newMessageBody       | bytes calldata | New message body of replaced message.                                                                                                                                                                         |
| newDestinationCaller | bytes32        | The new destination caller, which may be the same as the original destination caller, a new destination caller, or an empty destination caller (bytes32(0), indicating that any destination caller is valid.) |