#!/bin/sh
git pull -f origin main

cd 01 WERKBESTANDEN/

npm install

pm2 restart Portfolio-iris