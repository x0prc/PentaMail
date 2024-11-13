#!/bin/bash

# Variables
CA_KEY="ca.key"
CA_CERT="ca.crt"
DAYS_VALID=365

openssl genrsa -out $CA_KEY 2048

openssl req -x509 -new -nodes -key $CA_KEY -sha256 -days $DAYS_VALID -out $CA_CERT -subj "/C=US/ST=State/L=City/O=Organization/OU=Unit/CN=My CA"

echo "Certificate Authority created:"
echo "Private Key: $CA_KEY"
echo "Self-Signed Certificate: $CA_CERT"