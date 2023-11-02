---
title: "Open-Source Repositories"
slug: "verite-protocol-repositories"
hidden: false
createdAt: "2023-10-25T23:59:16.105Z"
updatedAt: "2023-10-26T18:19:50.564Z"
sidebar_position: 3
---
## Verite Project (Github [Link](https://github.com/circlefin/verite))

The primary packages in this repository are:

- [verite](https://github.com/circlefin/verite/tree/main/packages/verite) - The core Javascript SDK for issuing, verifying, and revoking Verifiable Credentials.
- [contract](https://github.com/circlefin/verite/tree/main/packages/contract) - Two sample ERC20 contracts showcasing how to implement Verite into a smart contract.
- [solana](https://github.com/circlefin/verite/tree/main/packages/solana) - A sample Solana program demonstrating how to implement Verite into a program.
- [e2e-demo](https://github.com/circlefin/verite/tree/main/packages/e2e-demo) - A demo walkthrough of the entire Verite project, showcasing issuance, verification, and revocation, with additional demos for DeFi and custodial use cases.
- [wallet](https://github.com/circlefin/verite/tree/main/packages/wallet) - A demo wallet for storing and submitting credentials. Written in React Native using Expo.

In addition to the packages above, there are 3 single-purpose demo packages, largely extracted from the `e2e-demo` package to help clarify each major function of Verite credentials.

- [verite/demo-issuer](https://github.com/circlefin/verite/tree/main/packages/demo-issuer) - A simplified demo of issuing Verifiable Credentials using `verite`.
- [verite/demo-verifier](https://github.com/circlefin/verite/tree/main/packages/demo-verifier) - A simplified demo of verifying Verifiable Credentials using `verite`.
- [verite/demo-revocation](https://github.com/circlefin/verite/tree/main/packages/demo-revocation) - A simplified demo of revoking credentials using `verite`.

Each package contains a README file with specific details about how to use the package.

## Verite Credentials Faucet (Github [Link](https://github.com/circlefin/verite-credential-utils))

This is a service for issuing and verifying Verite credentials for testing purposes, useful for hackathons, local integrations, etc.