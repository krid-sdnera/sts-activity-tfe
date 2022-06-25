#!/bin/bash

HOST=root@192.168.1.3

cd "$(dirname -- $(readlink -f "$0"))/.."

yarn

yarn build

echo Uploading nuxt output directory
rsync -avP .output/ ${HOST}:/root/sts-webapp/.output/

echo Uploading docker-compose.yml
rsync -a docker-compose.yml ${HOST}:/root/sts-webapp/

echo Starting container
ssh ${HOST} "cd /root/sts-webapp; docker-compose up -d"

