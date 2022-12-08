#!/bin/sh

# 1. Fetch the latest code from remote
git pull -f origin main

# 2. Install dependencies
npm install

# 3. Restart application
pm2 restart Portfolio-iris