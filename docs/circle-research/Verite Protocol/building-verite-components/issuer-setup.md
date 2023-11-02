---
title: "Issuer Setup"
slug: "issuer-setup"
hidden: false
createdAt: "2023-10-24T01:32:18.016Z"
updatedAt: "2023-10-25T23:59:19.371Z"
sidebar_position: 5
---
Before issuing credentials, you will need to following at minimum.

1. Deciding what types of credentials to issue, and their schemas
   - Verite includes a few representative schemas, such as proof of KYC and chain address ownership.
   - See [Recommendations for Credential Schema Design](doc:schemas).
2. Decide what type of issuing identifier method (e.g., DID method) you want to use.
   - In order for verifiers to verify credentials, they must be able to determine your authorized signing keys.
   - If you are using a DID method, you will need to ensure you are signing credentials with keys resolvable from the DID.
   - See [Identifier Methods](doc:identifier-methods) for factors in this decision.
3. Allow users and credential wallets to discover how to interact with you as an issuer
   - In the flows described here, this starts with a QR code or deep link that the user opens from their credential wallet
   - The flow should enable the wallet to discover metadata about how to request and receive the credential
   - Verite uses [DIF Credential Manifest](https://identity.foundation/credential-manifest/) for this purpose. It allows an issuer to describe what sort of credentials they issue, prerequisites for issuance, and output schemas