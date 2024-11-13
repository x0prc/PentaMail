#!/bin/bash

USER_CERT="user.crt"
USER_KEY="user.key"

if [ ! -f "$USER_CERT" ]; then
    echo "User certificate not found: $USER_CERT"
    exit 1
fi

# Revoke (delete) the user's certificate and key
rm "$USER_CERT" "$USER_KEY"

echo "User certificate revoked:"
echo "Deleted Certificate: $USER_CERT"
echo "Deleted Private Key: $USER_KEY"