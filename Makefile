#!/usr/bin/env bash
echo $1
if [ $1 == "install" ];
then
  sudo npm install @babel/core
  sudo npm install @babel/cli
  sudo npm install @babel/node
  sudo npm install @babel/preset-env
fi

if [ $1 == "start" ];
then 
  sudo npx babel-node src/bin/brain-games.js
fi
