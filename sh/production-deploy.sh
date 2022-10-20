#!/bin/sh

echo "################################"

# build
yarn build

# navigate into the build output directory
firebase deploy
