
![A](https://github.com/user-attachments/assets/ab82cce7-fe34-4774-877f-c206e0900e76)

<br> A Mail Engine prepared with five key components (hence the name PentaMail) to explain the working of Public Key Infrastructure in Email Communication while making it encrypted along the way.

# The Flow of Public Key Infrastructure (PKI) Algorithm
- Start: The beginning of the process.
- User A wants to send a secret message to User B: The motivation behind using PKI.
- User A generates a pair of keys: User A creates their public and private keys.
    - Public Key: The key that can be shared with anyone.
    - Private Key: The secret key that must be kept safe.
- User A shares Public Key with User B: User A sends their public key to User B.
- User B receives Public Key: Confirmation that User B has received the public key.
- User B puts message in box and locks it with User A's Public Key: User B encrypts their message using User A's public key.
- Locked message is sent to User A: The encrypted message is sent over the network.
- User A receives the locked message: User A gets the encrypted message.
- User A uses Private Key to unlock the message: User A decrypts the message using their private key.
- User A reads the message: The final step where User A can read what was sent.
- End: The process concludes.

# Features
1. **Certificate Authority (CA)**
    - Issues and manages digital certificates for users.
    - Responsible for signing the public keys of users.
2. **Registration Authority (RA)**
    - Verifies user identities before issuing certificates.
    - Acts as a mediator between users and the CA.
3. **Email Client Integration**
    - Supports S/MIME for signing and encrypting emails.
    - Provides a user-friendly interface for managing certificates.
4. **Email Server**
    - Handles sending and receiving emails securely.
    - Uses TLS/SSL to secure email transport.
5. **Certificate Lifecycle Management**
    - Automates the processes of certificate issuance, renewal, and revocation.
    - Ensures compliance with security policies.

# Motivation
In an increasingly digital world, the need for secure communication has never been more critical. As we rely on email for both personal and professional interactions, the potential risks associated with data breaches, identity theft, and unauthorized access have escalated. This project aims to address these challenges by developing a robust PKI based secure email communication system that has a minimalist and user friendly UI to explain the working.

# Pre-requisites

# Installation

# Usage

# Contributing

# Usage

