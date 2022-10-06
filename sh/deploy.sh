#!/bin/sh

echo "################################"

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd docs

# if you are deploying to a custom domain

git add -A

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
    then msg="$1"
fi
git commit -m "$msg"

# if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push

cd -