---
title: "TokenMessenger"
slug: "cctp-tokenmessenger"
excerpt: "Learn about the different TokenMessenger endpoints and the parameters associated with each."
hidden: false
createdAt: "2022-12-12T15:59:59.354Z"
updatedAt: "2023-06-05T18:31:49.602Z"
---
_Cross-Chain Transfer Protocol (CCTP) is a permissionless on-chain utility that can burn native USDC on a source chain and mint native USDC of the same amount on a destination chain. This is made possible by two primary CCTP contracts found on each chain, MessageTransmitter and TokenMessenger._

## depositForBurn

Deposits and burns tokens from sender to be minted on destination domain. Minted tokens will be transferred to `mintRecipient`.

**Parameters**

| Field             | Type    | Description                                                    |
| :---------------- | :------ | :------------------------------------------------------------- |
| amount            | uint256 | Amount of tokens to deposit and burn.                          |
| destinationDomain | uint32  | Destination domain identifier.                                 |
| mintRecipient     | bytes32 | Address of mint recipient on destination domain.               |
| burnToken         | address | Address of contract to burn deposited tokens, on local domain. |

## depositForBurnWithCaller

Same as `depositForBurn`, but with an additional parameter, `destinationCaller`. This parameter specifies which address has permission to call `receiveMessage` on the destination domain for this message.

**Parameters**

| Field             | Type    | Description                                                    |
| :---------------- | :------ | :------------------------------------------------------------- |
| amount            | uint256 | Amount of tokens to deposit and burn.                          |
| destinationDomain | uint32  | Destination domain identifier.                                 |
| mintRecipient     | bytes32 | Address of mint recipient on destination domain.               |
| burnToken         | address | Address of contract to burn deposited tokens, on local domain. |
| destinationCaller | bytes32 | Caller on the destination domain, as bytes32.                  |

## replaceDepositForBurn

Replace a `BurnMessage` to change the mint recipient and/or destination caller. Allows the sender of a previous `BurnMessage` (created by `depositForBurn` or `depositForBurnWithCaller`) to send a new `BurnMessage` to replace the original. The new `BurnMessage` will reuse the amount and burn token of the original, without requiring a new deposit.

This is useful in cases where the user specified an incorrect address and has no way to safely mint the previously burned USDC.

> 📘 
> 
> The sender of the original depositForBurn has access to call replaceDepositForBurn, and the resulting mint will supersede the original mint, as long as the original mint has not confirmed yet on-chain. When using a third-party bridge that integrates with CCTP to burn and mint USDC, it is the choice of the bridge if and when to replace messages on behalf of users. When sending USDC to smart contracts, be aware of the functionality those contracts have and what their trust model is.

**Parameters**

| Field                | Type           | Description                                                                                                                                                                                      |
| :------------------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| originalMessage      | bytes calldata | Original message bytes (to replace).                                                                                                                                                             |
| originalAttestation  | bytes calldata | Original attestation bytes                                                                                                                                                                       |
| newDestinationCaller | bytes32        | The new destination caller, which may be the same as the original destination caller, a new destination caller, or an empty destination caller, indicating that any destination caller is valid. |
| newMintRecipient     | bytes32        | The new mint recipient, which may be the same as the original mint recipient, or different.                                                                                                      |