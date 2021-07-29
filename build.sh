#!/bin/bash

#判断node.js mvn是否存在
command -v npm >/dev/null 2>&1 || { echo >&2 "I require node.js v14.16.0+ but it's not installed.  Aborting."; sleep 5; exit 1; }
command -v mvn >/dev/null 2>&1 || { echo >&2 "I require maven 3.5 + but it's not installed.  Aborting."; sleep 5; exit 1; }

cd `dirname $0`
BuildDir=`pwd` #工程根目录

echo "build web"
cd $BuildDir/report-ui
npm install >/dev/null 2>&1
npm run build:prod >/dev/null 2>&1

echo "publish web to springboot src/main/resources/static"
mv $BuildDir/report-ui/dist $BuildDir/report-core/src/main/resources/static


echo "build springboot"
cd $BuildDir/report-core
mvn clean >/dev/null 2>&1
mvn package -Dmaven.test.skip=true >/dev/null 2>&1

echo "zip finish in build dir"
if [ ! -d "$BuildDir/build" ]; then
    mkdir $BuildDir/build
fi
mv $BuildDir/report-core/target/aj-report-*.zip $BuildDir/build/

