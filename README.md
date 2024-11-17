
![A](https://github.com/user-attachments/assets/ab82cce7-fe34-4774-877f-c206e0900e76)

<br> A Mail Engine prepared with five key components (hence the name PentaMail) to explain the working of Public Key Infrastructure in Email Communication while making it encrypted along the way.

# The Flow of Public Key Infrastructure (PKI) Algorithm
![image](https://github.com/user-attachments/assets/20fc323a-4207-4b0c-ab14-a1bce81ce219)
![image](https://github.com/user-attachments/assets/f3b188dc-0057-4ea4-a9cb-88c058f6741c)


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
- React.js
- Axios
- MongoDB
- Node.js

# Installation
- Step 1: Clone the Repository <br>
`git clone https://github.com/x0prc/pentamail.git`

- Step 2: Install Dependencies <br>
`npm install`

- Step 3: Create a .env File: <br>
Create a .env file in the root of your backend directory and add the following environment variables: <br>
```
MONGODB_URI=mongodb://127.0.0.1:27017/pkiEmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
PORT=5001
CA_KEY_PATH=./ca.key
CA_CERT_PATH=./ca.crt
```

- Step 4: Start MongoDB Server <br>
`mongod`

- Step 5: Start the Node Server <br>
`npm start`



