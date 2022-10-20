#!/bin/sh

echo "################################"

yarn build

# navigate into the build output directory
firebase serve
