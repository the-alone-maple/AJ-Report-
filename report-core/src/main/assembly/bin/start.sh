#!/bin/bash

#判断java是否存在
command -v java >/dev/null 2>&1 || { echo >&2 "require java but it's not installed. Aborting."; sleep 5;exit 1; }

cd `dirname $0`
BIN_DIR=`pwd` #安装目录
cd ../
DEPLOY_DIR=`pwd`
LIB_DIR=$DEPLOY_DIR/lib #jar目录
CONF_DIR=$DEPLOY_DIR/conf #conf目录
LOGS_DIR=$DEPLOY_DIR/logs #log目录

LIB_JARS=`ls $LIB_DIR|grep -v aj-report|awk '{print "'$LIB_DIR'/"$0}'|tr "\n" ":"`

PIDS=`ps -f | grep java | grep "aj-report" |awk '{print $2}'`
if [ -n "$PIDS" ]; then
    echo "ERROR: The AJ-Report already started!"
    echo "PID: $PIDS"
    exit 1
fi

JAVA_OPTS=" -server -Xmx2g -Xms2g -Xmn256m -XX:PermSize=128m -Xss256k "
nohup java $JAVA_OPTS -Xbootclasspath/a:$LIB_JARS -jar -Dspring.config.location=$CONF_DIR/bootstrap.yml $LIB_DIR/aj-report-*.jar >/dev/null 2>&1 &

echo "The AJ-Report started!"
