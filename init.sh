#!/bin/sh
set -ex

# First start with current persistent volume
[ -f $IPFS_PATH/version ] || {
    echo "No ipfs repo found in $IPFS_PATH. Initializing..."
    # Replaces the entrypoint script https://github.com/ipfs/go-ipfs/blob/master/bin/container_daemon
    ipfs init
    ipfs config Addresses.API /ip4/0.0.0.0/tcp/5001
    ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/8080
    ipfs config Datastore.StorageMax 10GB
    echo "Removing all bootstrap nodes..."
    echo "(see https://github.com/ipfs/go-ipfs/blob/master/docs/experimental-features.md#private-networks)"
    ipfs bootstrap rm --all
}


echo "Adding myself to the boostrap list"
if [ $(ipfs bootstrap | wc -l) == 0 ]; then
    PEERID=$(ipfs id -f="<id>")
    ipfs bootstrap add "/ip4/172.25.0.2/tcp/4001/ipfs/$PEERID"
fi

echo "Adding and pinning IPFS dashboard..."
ipfs add -r --pin /tmp/QmfQkD8pBSBCBxWEwFSu4XaDVSWK6bjnNuaWZjMyQbyDub

echo "Starting daemon..."
ipfs daemon --enable-gc --unrestricted-api --migrate=true --agent-version-suffix=docker
