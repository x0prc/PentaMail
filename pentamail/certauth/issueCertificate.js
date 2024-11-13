#!/bin/bash

# Variables
USER_KEY="user.key"
USER_CSR="user.csr"
USER_CERT="user.crt"
CA_KEY="ca.key"
CA_CERT="ca.crt"
DAYS_VALID=365

openssl genrsa -out $USER_KEY 2048

openssl req -new -key $USER_KEY -out $USER_CSR -subj "/C=US/ST=State/L=City/O=Organization/OU=Unit/CN=User"

# Sign the CSR with the CA's private key to create the user certificate
openssl x509 -req -in $USER_CSR -CA $CA_CERT -CAkey $CA_KEY -CAcreateserial -out $USER_CERT -days $DAYS_VALID -sha256

echo "User certificate issued:"
echo "Private Key: $USER_KEY"
echo "Certificate Signing Request: $USER_CSR"
echo "User Certificate: $USER_CERT"